import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraOff, Square, RefreshCw, Mic, MicOff, Video, VideoOff, Image as ImageIcon, Monitor } from 'lucide-react';

interface CameraRecorderProps {
  onRecordingComplete: (videoUrl: string) => void;
}

type BackgroundOption = 'none' | 'office' | 'library' | 'gradient';
type BackgroundMode = 'chroma' | 'frame';

export const CameraRecorder: React.FC<CameraRecorderProps> = ({
  onRecordingComplete,
}) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'idle' | 'loading' | 'granted' | 'denied'>('idle');
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  // Mute & Camera toggles
  const [isMicEnabled, setIsMicEnabled] = useState(true);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);

  // Background settings
  const [selectedBackground, setSelectedBackground] = useState<BackgroundOption>('none');
  const [backgroundMode, setBackgroundMode] = useState<BackgroundMode>('frame');

  // DOM Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tempCanvasRef = useRef<HTMLCanvasElement>(null);

  // Media Capture Refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Preloaded background images
  const bgImagesRef = useRef<{ [key: string]: HTMLImageElement }>({});

  // Preload background images on mount
  useEffect(() => {
    const officeImg = new Image();
    officeImg.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=854&q=80';
    officeImg.crossOrigin = 'anonymous';

    const libraryImg = new Image();
    libraryImg.src = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=854&q=80';
    libraryImg.crossOrigin = 'anonymous';

    bgImagesRef.current = {
      office: officeImg,
      library: libraryImg,
    };
  }, []);

  // Request camera and microphone access
  const requestPermissions = async () => {
    setPermissionStatus('loading');
    setPermissionError(null);
    stopStreamTracks();

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user',
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        },
      });

      setStream(mediaStream);
      streamRef.current = mediaStream;
      setPermissionStatus('granted');

      // Initialize state for tracks
      mediaStream.getAudioTracks().forEach((track) => {
        track.enabled = isMicEnabled;
      });
      mediaStream.getVideoTracks().forEach((track) => {
        track.enabled = isCameraEnabled;
      });

      // Bind stream to hidden video element
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error: any) {
      console.error('Error accessing camera/microphone:', error);
      setPermissionStatus('denied');
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setPermissionError('Camera or microphone permission was denied. Please allow permissions in your browser address bar.');
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        setPermissionError('No camera or microphone device found. Please plug in a device.');
      } else {
        setPermissionError(`Failed to access media devices: ${error.message || error}`);
      }
    }
  };

  // Stop active stream tracks
  const stopStreamTracks = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setStream(null);
  };

  useEffect(() => {
    requestPermissions();
    return () => {
      stopStreamTracks();
      stopTimer();
    };
  }, []);

  // Sync stream to video element
  useEffect(() => {
    if (permissionStatus === 'granted' && stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [permissionStatus, stream]);

  // Live Canvas compositing rendering loop
  useEffect(() => {
    if (permissionStatus !== 'granted') return;

    let animationFrameId: number;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const tempCanvas = tempCanvasRef.current;

    if (!canvas || !video || !tempCanvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

    if (!ctx || !tempCtx) return;

    const renderLoop = () => {
      // 1. Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 2. Draw selected background (if not 'none')
      if (selectedBackground !== 'none') {
        if (selectedBackground === 'gradient') {
          const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          grad.addColorStop(0, '#1e1b4b');
          grad.addColorStop(0.5, '#2e1065');
          grad.addColorStop(1, '#090d16');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
          const bgImg = bgImagesRef.current[selectedBackground];
          if (bgImg && bgImg.complete) {
            ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
          } else {
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
        }
      }

      // 3. Draw video stream (if camera is enabled and sending frames)
      if (isCameraEnabled && video.readyState === video.HAVE_ENOUGH_DATA) {
        if (selectedBackground === 'none') {
          // Direct full-width webcam rendering
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        } else if (backgroundMode === 'frame') {
          // Rounded frame overlay layout (Works without green screen!)
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
          ctx.shadowBlur = 24;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 6;

          const cardW = canvas.width * 0.7;
          const cardH = canvas.height * 0.7;
          const cardX = (canvas.width - cardW) / 2;
          const cardY = (canvas.height - cardH) / 2 - 10;
          const radius = 16;

          // Draw rounded clipping mask
          ctx.beginPath();
          ctx.moveTo(cardX + radius, cardY);
          ctx.lineTo(cardX + cardW - radius, cardY);
          ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + radius);
          ctx.lineTo(cardX + cardW, cardY + cardH - radius);
          ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - radius, cardY + cardH);
          ctx.lineTo(cardX + radius, cardY + cardH);
          ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - radius);
          ctx.lineTo(cardX, cardY + radius);
          ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
          ctx.closePath();
          ctx.clip();

          // Draw video flipped horizontally for natural mirroring
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);
          ctx.drawImage(video, canvas.width - cardX - cardW, cardY, cardW, cardH);
          ctx.restore();

          // Render Label Badge
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
          ctx.lineWidth = 1.5;
          const tagW = 160;
          const tagH = 32;
          const tagX = (canvas.width - tagW) / 2;
          const tagY = cardY + cardH - 16;

          ctx.beginPath();
          ctx.roundRect ? ctx.roundRect(tagX, tagY, tagW, tagH, 8) : ctx.rect(tagX, tagY, tagW, tagH);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#f1f5f9';
          ctx.font = 'bold 12px Inter, system-ui, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Candidate Stream', canvas.width / 2, tagY + tagH / 2);
          ctx.restore();
        } else if (backgroundMode === 'chroma') {
          // Chroma Key green screen filtering
          tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
          // Mirror frame in offscreen
          tempCtx.translate(tempCanvas.width, 0);
          tempCtx.scale(-1, 1);
          tempCtx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
          tempCtx.setTransform(1, 0, 0, 1, 0, 0); // reset transform

          const frame = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
          const data = frame.data;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i + 0];
            const g = data[i + 1];
            const b = data[i + 2];
            // Filter green shades
            if (g > 70 && g > r * 1.35 && g > b * 1.15) {
              data[i + 3] = 0; // make pixel transparent
            }
          }

          tempCtx.putImageData(frame, 0, 0);
          ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
        }
      } else {
        // Camera disabled: draw a dark placeholder
        ctx.save();
        ctx.fillStyle = '#0a0f1d';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2 - 20, 50, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#6366f1';
        ctx.font = 'bold 36px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('CS', canvas.width / 2, canvas.height / 2 - 20);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px Inter, system-ui, sans-serif';
        ctx.fillText('Camera is turned off', canvas.width / 2, canvas.height / 2 + 55);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [permissionStatus, isCameraEnabled, selectedBackground, backgroundMode]);

  // Track toggles
  const toggleMic = () => {
    setIsMicEnabled((prev) => {
      const next = !prev;
      if (streamRef.current) {
        streamRef.current.getAudioTracks().forEach((track) => {
          track.enabled = next;
        });
      }
      return next;
    });
  };

  const toggleCamera = () => {
    setIsCameraEnabled((prev) => {
      const next = !prev;
      if (streamRef.current) {
        streamRef.current.getVideoTracks().forEach((track) => {
          track.enabled = next;
        });
      }
      return next;
    });
  };

  // Timer functions
  const startTimer = () => {
    setRecordingSeconds(0);
    timerIntervalRef.current = setInterval(() => {
      setRecordingSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getSupportedMimeType = () => {
    const types = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
      'video/mp4;codecs=h264,aac',
      'video/mp4',
    ];
    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    return '';
  };

  // Recording triggers
  const startRecording = () => {
    const canvas = canvasRef.current;
    if (!stream || !canvas) {
      requestPermissions();
      return;
    }

    chunksRef.current = [];
    const mimeType = getSupportedMimeType();

    try {
      const options = mimeType ? { mimeType } : undefined;

      // Capture composited canvas video stream at 30fps
      const canvasStream = canvas.captureStream(30);
      const canvasVideoTrack = canvasStream.getVideoTracks()[0];
      const micAudioTrack = streamRef.current?.getAudioTracks()[0];

      // Assemble tracks (must have video track; audio is added if enabled)
      const outputTracks = [];
      if (canvasVideoTrack) outputTracks.push(canvasVideoTrack);
      if (micAudioTrack) outputTracks.push(micAudioTrack);

      const compositeStream = new MediaStream(outputTracks);
      const mediaRecorder = new MediaRecorder(compositeStream, options);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const fileType = mimeType.includes('mp4') ? 'video/mp4' : 'video/webm';
        const blob = new Blob(chunksRef.current, { type: fileType });
        const videoUrl = URL.createObjectURL(blob);
        onRecordingComplete(videoUrl);
        chunksRef.current = [];
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start(1000); // chunk data every 1s
      setIsRecording(true);
      startTimer();
    } catch (err: any) {
      console.error('Failed to start MediaRecorder:', err);
      alert(`Recording error: ${err.message || err}`);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    stopTimer();
  };

  return (
    <div className="relative w-full rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md overflow-hidden min-h-[460px] flex flex-col justify-between shadow-2xl transition-all duration-300">
      {/* Header status bar */}
      <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-slate-500'}`} />
          <span className="text-xs font-semibold tracking-wide text-slate-200 shadow-sm drop-shadow-md">
            {isRecording ? `🔴 Recording ${formatTime(recordingSeconds)}` : '● Ready'}
          </span>
        </div>
      </div>

      {/* Main preview box */}
      <div className="relative flex-1 flex items-center justify-center bg-slate-950 min-h-[300px]">
        {/* Hidden source video element */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="hidden"
        />

        {/* Composited Canvas display */}
        {permissionStatus === 'granted' && (
          <canvas
            ref={canvasRef}
            width={854}
            height={480}
            className="w-full h-full object-cover aspect-video bg-slate-950"
          />
        )}

        {/* Offscreen canvas for green-screen pixel analysis */}
        <canvas
          ref={tempCanvasRef}
          width={854}
          height={480}
          className="hidden"
        />

        {permissionStatus === 'loading' && (
          <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
            <RefreshCw className="w-10 h-10 animate-spin mb-4 text-indigo-400" />
            <p className="text-sm font-medium">Accessing camera and microphone...</p>
          </div>
        )}

        {permissionStatus === 'denied' && (
          <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400 max-w-md">
            <CameraOff className="w-12 h-12 text-red-500/80 mb-4" />
            <p className="text-sm font-semibold text-slate-200 mb-2">Permission Required</p>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">{permissionError}</p>
            <button
              onClick={requestPermissions}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-900/20 transition-all duration-200"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Try Again
            </button>
          </div>
        )}

        {permissionStatus === 'idle' && (
          <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
            <Camera className="w-10 h-10 mb-4 text-slate-500" />
            <button
              onClick={requestPermissions}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-all duration-200"
            >
              Enable Camera & Mic
            </button>
          </div>
        )}
      </div>

      {/* Background Selector & Mode controls (Only when camera permission is active) */}
      {permissionStatus === 'granted' && (
        <div className="px-6 py-4 bg-slate-900/60 border-t border-slate-800/60 flex flex-col md:flex-row gap-4 items-center justify-between z-10">
          {/* Background choice */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 shrink-0">
              <ImageIcon className="w-3.5 h-3.5" />
              Background:
            </span>
            <div className="flex gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {(['none', 'office', 'library', 'gradient'] as BackgroundOption[]).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedBackground(opt)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize border transition-all duration-200 ${
                    selectedBackground === opt
                      ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-950/20'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700/60 hover:text-slate-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Background Mode toggle */}
          {selectedBackground !== 'none' && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5" />
                Mode:
              </span>
              <div className="flex bg-slate-950/60 p-0.5 rounded-lg border border-slate-800">
                <button
                  onClick={() => setBackgroundMode('frame')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                    backgroundMode === 'frame'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-500 hover:text-slate-400'
                  }`}
                >
                  Frame
                </button>
                <button
                  onClick={() => setBackgroundMode('chroma')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                    backgroundMode === 'chroma'
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-500 hover:text-slate-400'
                  }`}
                  title="Requires a physical green/blue screen backdrop"
                >
                  Chroma
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer controls overlay */}
      <div className="p-5 bg-slate-950 border-t border-slate-900/80 flex flex-col items-center justify-center gap-4 relative z-10">
        {permissionStatus === 'granted' && (
          <div className="w-full flex items-center justify-between max-w-[280px]">
            {/* Camera Mute/Unmute */}
            <button
              onClick={toggleCamera}
              className={`p-3 rounded-xl border transition-all duration-200 active:scale-95 ${
                isCameraEnabled
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                  : 'border-red-950/40 bg-red-950/20 text-red-500 hover:bg-red-950/30'
              }`}
              title={isCameraEnabled ? 'Turn Camera Off' : 'Turn Camera On'}
            >
              {isCameraEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>

            {/* Recording Button */}
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 active:scale-95 transition-all duration-300 shadow-xl shadow-red-950/40 border-4 border-slate-950 hover:border-slate-900"
                title="Start Recording"
              >
                <div className="w-6 h-6 rounded-full bg-white transition-all duration-300 group-hover:scale-110" />
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 hover:bg-white active:scale-95 transition-all duration-300 shadow-xl shadow-slate-950/20 border-4 border-slate-950"
                title="Stop Recording"
              >
                <Square className="w-5 h-5 text-slate-950 fill-slate-950 transition-all duration-300 group-hover:scale-90" />
              </button>
            )}

            {/* Mic Mute/Unmute */}
            <button
              onClick={toggleMic}
              className={`p-3 rounded-xl border transition-all duration-200 active:scale-95 ${
                isMicEnabled
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                  : 'border-red-950/40 bg-red-950/20 text-red-500 hover:bg-red-950/30'
              }`}
              title={isMicEnabled ? 'Mute Mic' : 'Unmute Mic'}
            >
              {isMicEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>
          </div>
        )}

        {permissionStatus === 'granted' && (
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest text-slate-200 uppercase">
              {isRecording ? 'RECORDING IN PROGRESS' : 'READY TO RECORD'}
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              {isRecording ? 'Click stop button to compile your answer' : 'Setup your mic, camera, and background, then record'}
            </p>
          </div>
        )}

        {permissionStatus !== 'granted' && (
          <div className="text-center py-2">
            <p className="text-sm font-semibold text-slate-500">Camera & Microphone Inactive</p>
            <p className="text-xs text-slate-600 mt-0.5">Please grant browser permission to continue</p>
          </div>
        )}
      </div>
    </div>
  );
};
