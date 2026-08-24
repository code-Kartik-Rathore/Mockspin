import React from 'react';
import { Film, Trash2, Calendar } from 'lucide-react';
import type { Question } from '../data/questions';

export interface Recording {
  id: string;
  url: string;
  questionText: string;
  subject: Question['subject'];
  timestamp: string;
}

interface RecordingReviewProps {
  recordings: Recording[];
  onDeleteRecording: (id: string) => void;
}

export const RecordingReview: React.FC<RecordingReviewProps> = ({
  recordings,
  onDeleteRecording,
}) => {
  const getSubjectDisplay = (subject: Question['subject']) => {
    switch (subject) {
      case 'OS':
        return 'OS';
      case 'DBMS':
        return 'DBMS';
      case 'OOPS':
        return 'OOPS';
      case 'IIT_Ropar':
        return 'IIT Ropar';
      case 'Zebpay':
        return 'Zebpay';
      case 'Achievements':
        return 'Achievements';
      case 'Skills':
        return 'Skills';
      case 'MedConnect':
        return 'MedConnect';
      case 'SupportDesk':
        return 'SupportDesk';
      case 'Resume':
        return 'Resume';
      default:
        return subject;
    }
  };

  const getSubjectColor = (subject: Question['subject']) => {
    switch (subject) {
      case 'OS':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'OOPS':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'DBMS':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'IIT_Ropar':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'Zebpay':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Achievements':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Skills':
        return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
      case 'MedConnect':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'SupportDesk':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'Resume':
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="flex flex-col h-full bg-darkSidebar border border-slate-800/80 rounded-2xl p-6 text-slate-200 overflow-hidden">
      {/* Header with counter badge */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
          <Film className="w-5 h-5 text-indigo-400" />
          Your Recordings
        </h2>
        <span className="flex items-center justify-center min-w-[24px] h-6 px-2 text-xs font-bold bg-indigo-900/60 text-indigo-300 rounded-full border border-indigo-500/30">
          {recordings.length}
        </span>
      </div>

      {/* Recording list area */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-1 -mr-3 custom-scrollbar">
        {recordings.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[300px] text-center text-slate-500 p-4">
            <Film className="w-16 h-16 text-slate-700/80 mb-4 stroke-[1.2]" />
            <p className="text-sm font-semibold text-slate-400">No recordings yet</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-[200px]">
              Your recordings will appear here for review.
            </p>
          </div>
        ) : (
          recordings.map((rec) => (
            <div
              key={rec.id}
              className="group p-4 bg-slate-900/60 border border-slate-850 hover:border-slate-700/60 rounded-xl transition-all duration-300 shadow-md flex flex-col gap-3 relative overflow-hidden"
            >
              {/* Question Context */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getSubjectColor(rec.subject)}`}>
                    {getSubjectDisplay(rec.subject)}
                  </span>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {rec.timestamp}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-300 line-clamp-2 mt-1 italic">
                  "{rec.questionText}"
                </p>
              </div>

              {/* Video Player */}
              <div className="relative rounded-lg overflow-hidden bg-slate-950 aspect-video border border-slate-800/80">
                <video
                  src={rec.url}
                  controls
                  className="w-full h-full object-cover"
                  playsInline
                />
              </div>

              {/* Delete Button */}
              <button
                onClick={() => onDeleteRecording(rec.id)}
                className="absolute top-3 right-3 p-1.5 rounded-lg border border-red-950/20 bg-red-950/10 text-red-500 hover:bg-red-900/20 hover:text-red-400 active:scale-95 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
                title="Delete Recording"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
