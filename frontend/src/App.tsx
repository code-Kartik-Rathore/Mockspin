import { useState, useEffect } from 'react';
import { Target, Info, RotateCw, X } from 'lucide-react';
import { questions } from './data/questions';
import type { Question } from './data/questions';
import { SubjectSelector } from './components/SubjectSelector';
import { QuestionCard } from './components/QuestionCard';
import { CameraRecorder } from './components/CameraRecorder';
import { RecordingReview } from './components/RecordingReview';
import type { Recording } from './components/RecordingReview';

function App() {
  const [subjectsEnabled, setSubjectsEnabled] = useState({
    OS: true,
    DBMS: true,
    OOPS: true,
    IIT_Ropar: true,
    Zebpay: true,
    Achievements: true,
    Skills: true,
    MedConnect: true,
    SupportDesk: true,
    Resume: true,
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [isHowToUseOpen, setIsHowToUseOpen] = useState(false);

  // Initialize with a random question from enabled subjects on mount
  useEffect(() => {
    const initialQuestion = getRandomQuestionOnMount();
    if (initialQuestion) {
      setCurrentQuestion(initialQuestion);
      setHistory([initialQuestion.id]);
    }
  }, []);

  const getRandomQuestionOnMount = (): Question | null => {
    const candidates = questions.filter(
      (q) => subjectsEnabled[q.subject as keyof typeof subjectsEnabled]
    );
    if (candidates.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * candidates.length);
    return candidates[randomIndex];
  };

  const toggleSubject = (subject: Question['subject']) => {
    setSubjectsEnabled((prev) => {
      const next = { ...prev, [subject]: !prev[subject] };
      // Prevent disabling all subjects
      const anyEnabled = Object.values(next).some((val) => val);
      if (!anyEnabled) {
        alert("Please keep at least one subject enabled!");
        return prev;
      }
      return next;
    });
  };

  const getNextQuestion = (): Question | null => {
    // Filter questions by enabled subjects
    const activeSubjects = Object.keys(subjectsEnabled).filter(
      (key) => subjectsEnabled[key as keyof typeof subjectsEnabled]
    ) as Question['subject'][];

    if (activeSubjects.length === 0) return null;

    const candidateQuestions = questions.filter((q) =>
      activeSubjects.includes(q.subject)
    );

    // Keep track of the last 5 questions shown to prevent duplicates
    const recentIds = history.slice(-5);
    let available = candidateQuestions.filter((q) => !recentIds.includes(q.id));

    // Fallback to excluding just the current question
    if (available.length === 0) {
      available = candidateQuestions.filter(
        (q) => !currentQuestion || q.id !== currentQuestion.id
      );
    }

    // Fallback to all candidates if there's only 1 question in selected subjects
    if (available.length === 0) {
      available = candidateQuestions;
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const selected = available[randomIndex];

    // Update history
    setHistory((prev) => [...prev, selected.id].slice(-10));
    return selected;
  };

  const handleSpin = () => {
    if (isSpinning) return;

    const nextQ = getNextQuestion();
    if (!nextQ) {
      alert("Please select at least one subject first!");
      return;
    }

    setIsSpinning(true);

    const activeSubjects = Object.keys(subjectsEnabled).filter(
      (key) => subjectsEnabled[key as keyof typeof subjectsEnabled]
    ) as Question['subject'][];
    const candidateQuestions = questions.filter((q) =>
      activeSubjects.includes(q.subject)
    );

    // Spinning effect: cycle random questions rapidly
    let cycleCount = 0;
    const maxCycles = 12;
    const interval = setInterval(() => {
      if (cycleCount < maxCycles) {
        const tempQ = candidateQuestions[Math.floor(Math.random() * candidateQuestions.length)];
        setCurrentQuestion(tempQ);
        cycleCount++;
      } else {
        clearInterval(interval);
        setCurrentQuestion(nextQ);
        setIsSpinning(false);
      }
    }, 60);
  };

  // Add new recorded video to local recordings state
  const handleNewRecording = (videoUrl: string) => {
    if (!currentQuestion) return;

    // Use formatting for the current local timestamp
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newRecording: Recording = {
      id: `rec-${Date.now()}`,
      url: videoUrl,
      questionText: currentQuestion.question,
      subject: currentQuestion.subject,
      timestamp: timeString,
    };

    setRecordings((prev) => [newRecording, ...prev]);
  };

  // Delete a recording and revoke its Object URL to free memory
  const handleDeleteRecording = (id: string) => {
    setRecordings((prev) => {
      const target = prev.find((r) => r.id === id);
      if (target) {
        URL.revokeObjectURL(target.url);
      }
      return prev.filter((r) => r.id !== id);
    });
  };

  // Clean all recordings and revoke their Object URLs
  const handleClearAllRecordings = () => {
    if (window.confirm("Are you sure you want to delete all recorded answers? This cannot be undone.")) {
      recordings.forEach((rec) => {
        URL.revokeObjectURL(rec.url);
      });
      setRecordings([]);
    }
  };

  // On unmount, make sure to clean up any remaining object URLs
  useEffect(() => {
    return () => {
      recordings.forEach((rec) => {
        URL.revokeObjectURL(rec.url);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-slate-100 font-sans flex flex-col antialiased">
      {/* Global decorative background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header bar */}
      <header className="relative z-10 flex items-center justify-between py-4 px-6 md:px-8 border-b border-slate-900/80 bg-darkBg/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/20 shadow-md">
            <Target className="w-5.5 h-5.5 text-red-500 animate-pulse" />
          </div>
          <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Interview Practice Spinner
          </h1>
        </div>
        <button
          onClick={() => setIsHowToUseOpen(true)}
          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 rounded-xl border border-slate-800 hover:border-slate-700/80 transition-all duration-200 shadow-md"
        >
          <Info className="w-4 h-4 text-indigo-400" />
          How to use
        </button>
      </header>

      {/* Main layout */}
      <main className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-[1600px] w-full mx-auto overflow-hidden">
        {/* Left: filters and instructions */}
        <section className="lg:col-span-3 flex flex-col h-full">
          <SubjectSelector
            subjectsEnabled={subjectsEnabled}
            toggleSubject={toggleSubject}
            clearAllRecordings={handleClearAllRecordings}
            hasRecordings={recordings.length > 0}
          />
        </section>

        {/* Center: question card and recording camera */}
        <section className="lg:col-span-6 flex flex-col gap-6">
          {/* Question Card display */}
          <QuestionCard question={currentQuestion} />

          {/* SPIN Controls */}
          <div className="flex items-center justify-center gap-6 py-2">
            {/* Left curved arrow */}
            <svg
              className="w-12 h-12 text-slate-700/80 hidden md:block"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M25,25 Q65,25 75,65" />
              <path d="M66,66 L75,65 L77,56" />
            </svg>

            <div className="flex flex-col items-center">
              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className={`relative group flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-500 hover:to-pink-400 text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed`}
              >
                <RotateCw
                  className={`w-7 h-7 text-white ${
                    isSpinning ? 'animate-spin' : 'group-hover:rotate-45 transition-transform duration-300'
                  }`}
                />
              </button>
              <span className="text-xs font-bold tracking-widest text-slate-200 mt-3 uppercase">SPIN</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Click to get a random question</span>
            </div>

            {/* Right curved arrow */}
            <svg
              className="w-12 h-12 text-slate-700/80 hidden md:block"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M75,25 Q35,25 25,65" />
              <path d="M34,56 L25,65 L34,66" />
            </svg>
          </div>

          {/* Recording panel */}
          <CameraRecorder
            onRecordingComplete={handleNewRecording}
          />
        </section>

        {/* Right: recordings panel */}
        <section className="lg:col-span-3 flex flex-col h-full">
          <RecordingReview
            recordings={recordings}
            onDeleteRecording={handleDeleteRecording}
          />
        </section>
      </main>

      {/* How to Use Modal */}
      {isHowToUseOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setIsHowToUseOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-red-500" />
              How to Practice
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-900/60 text-indigo-400 text-xs font-bold shrink-0 border border-indigo-500/20">
                  1
                </span>
                <p>
                  Use the **Subjects** panel on the left to filter the topics you want to practice (Theory, Internships, Projects, Resume, etc.).
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-900/60 text-indigo-400 text-xs font-bold shrink-0 border border-indigo-500/20">
                  2
                </span>
                <p>
                  Click the **SPIN** button in the center to select a random practice question.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-900/60 text-indigo-400 text-xs font-bold shrink-0 border border-indigo-500/20">
                  3
                </span>
                <p>
                  Click the big **RECORD** button to start filming your answer. Keep it concise!
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-900/60 text-indigo-400 text-xs font-bold shrink-0 border border-indigo-500/20">
                  4
                </span>
                <p>
                  Click the **STOP** button when finished. Your video will immediately show up in the **Your Recordings** list.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-900/60 text-indigo-400 text-xs font-bold shrink-0 border border-indigo-500/20">
                  5
                </span>
                <p>
                  Play the video to review your communication skills, body language, and correctness.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsHowToUseOpen(false)}
              className="w-full mt-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-indigo-950/30"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
