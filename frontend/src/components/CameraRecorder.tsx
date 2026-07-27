import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraOff, Square, RefreshCw } from 'lucide-react';

interface CameraRecorderProps {
  onRecordingComplete: (videoUrl: string) => void;
}

export const CameraRecorder: React.FC<CameraRecorderProps> = ({
  onRecordingComplete,
}) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'idle' | 'loading' | 'granted' | 'denied'>('idle');
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<any | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Request camera and microphone access
  const requestPermissions = async () => {
    setPermissionStatus('loading');
    setPermissionError(null);

    // Stop any existing tracks before requesting new ones
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

      // Bind stream to video element
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error: any) {
      console.error('Error accessing camera/microphone:', error);
      setPermissionStatus('denied');
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setPermissionError('Camera or microphone permission was denied. Please allow permission in your browser address bar.');
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        setPermissionError('No camera or microphone device found. Please plug in a device.');
      } else {
        setPermissionError(`Failed to access media devices: ${error.message || error}`);
      }
    }
  };

  // Helper to stop all active stream tracks
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

  // Automatically request camera on load
  useEffect(() => {
    requestPermissions();

    // Clean up tracks when component unmounts
    return () => {
      stopStreamTracks();
      stopTimer();
    };
  }, []);

  // Sync stream to video element when permission becomes granted
  useEffect(() => {
    if (permissionStatus === 'granted' && stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [permissionStatus, stream]);

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

  // Format time (00:00)
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Get browser-supported video MIME type
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
    if (!stream) {
      requestPermissions();
      return;
    }

    chunksRef.current = [];
    const mimeType = getSupportedMimeType();
    
    try {
      const options = mimeType ? { mimeType } : undefined;
      const mediaRecorder = new MediaRecorder(stream, options);

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
      mediaRecorder.start(1000); // collect 1s chunks
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
    <div className="relative w-full rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md overflow-hidden min-h-[360px] flex flex-col justify-between shadow-2xl transition-all duration-300">
      {/* Header status bar */}
      <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-10 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-slate-500'}`} />
          <span className="text-xs font-semibold tracking-wide text-slate-200">
            {isRecording ? `🔴 Recording ${formatTime(recordingSeconds)}` : '● Not Recording'}
          </span>
        </div>
      </div>

      {/* Video display or state placeholders */}
      <div className="relative flex-1 flex items-center justify-center bg-slate-950">
        {permissionStatus === 'granted' && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover aspect-video"
          />
        )}

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

      {/* Footer controls overlay */}
      <div className="p-6 bg-slate-900/90 border-t border-slate-800/80 flex flex-col items-center justify-center gap-3">
        {permissionStatus === 'granted' && (
          <>
            <div className="flex items-center justify-center">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 active:scale-95 transition-all duration-300 shadow-xl shadow-red-950/40 border-4 border-slate-900 hover:border-slate-800"
                  title="Start Recording"
                >
                  <div className="w-6 h-6 rounded-full bg-white transition-all duration-300 group-hover:scale-110" />
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 hover:bg-white active:scale-95 transition-all duration-300 shadow-xl shadow-slate-950/20 border-4 border-slate-900"
                  title="Stop Recording"
                >
                  <Square className="w-6 h-6 text-slate-950 fill-slate-950 transition-all duration-300 group-hover:scale-90" />
                </button>
              )}
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-slate-200">
                {isRecording ? 'RECORDING IN PROGRESS' : 'RECORD'}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {isRecording ? 'Click the stop button to finish your answer' : 'Click to start recording your answer'}
              </p>
            </div>
          </>
        )}
        {permissionStatus !== 'granted' && (
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-500">Camera Inactive</p>
            <p className="text-xs text-slate-600 mt-0.5">Please grant device permission to record</p>
          </div>
        )}
      </div>
    </div>
  );
};
