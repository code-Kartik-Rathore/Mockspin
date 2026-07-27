import React from 'react';
import { BookOpen, HelpCircle, Trash2 } from 'lucide-react';

interface SubjectSelectorProps {
  subjectsEnabled: {
    OS: boolean;
    DBMS: boolean;
    OOPS: boolean;
  };
  toggleSubject: (subject: 'OS' | 'DBMS' | 'OOPS') => void;
  clearAllRecordings: () => void;
  hasRecordings: boolean;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  subjectsEnabled,
  toggleSubject,
  clearAllRecordings,
  hasRecordings,
}) => {
  return (
    <div className="flex flex-col h-full bg-darkSidebar border border-slate-800/80 rounded-2xl p-6 text-slate-200">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 text-slate-100 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-indigo-400" />
        Subjects
      </h2>

      {/* Checkbox Group */}
      <div className="space-y-4 mb-8">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={subjectsEnabled.OS}
            onChange={() => toggleSubject('OS')}
            className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer accent-indigo-500"
          />
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            Operating Systems
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={subjectsEnabled.OOPS}
            onChange={() => toggleSubject('OOPS')}
            className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer accent-indigo-500"
          />
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            OOPS (C++)
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={subjectsEnabled.DBMS}
            onChange={() => toggleSubject('DBMS')}
            className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer accent-indigo-500"
          />
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            DBMS
          </span>
        </label>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800/80 my-4"></div>

      {/* Tips */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-slate-400 mb-3 flex items-center gap-2">
          <HelpCircle className="w-4 h-4" />
          Tips
        </h3>
        <ul className="space-y-3 text-xs text-slate-400 list-disc pl-4 leading-relaxed">
          <li>Click on Spin to get a random question.</li>
          <li>Record your answer using your camera and microphone.</li>
          <li>Review your recording on the right side list.</li>
        </ul>
      </div>

      {/* Clear Recording Button */}
      <div className="mt-auto pt-4">
        <button
          onClick={clearAllRecordings}
          disabled={!hasRecordings}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
            hasRecordings
              ? 'border-red-900/50 bg-red-950/20 text-red-400 hover:bg-red-950/40 hover:border-red-700/60 shadow-lg shadow-red-950/10'
              : 'border-slate-800 bg-slate-900/40 text-slate-600 cursor-not-allowed'
          }`}
        >
          <Trash2 className="w-4 h-4" />
          Clear Recordings
        </button>
      </div>
    </div>
  );
};
