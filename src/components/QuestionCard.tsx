import React from 'react';
import type { Question } from '../data/questions';
import { HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question | null;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const getSubjectDisplay = (subject: 'OS' | 'DBMS' | 'OOPS') => {
    switch (subject) {
      case 'OS':
        return 'Operating Systems';
      case 'OOPS':
        return 'OOPS (C++)';
      case 'DBMS':
        return 'DBMS';
      default:
        return subject;
    }
  };

  const getSubjectColor = (subject: 'OS' | 'DBMS' | 'OOPS') => {
    switch (subject) {
      case 'OS':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'OOPS':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'DBMS':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getDifficultyColor = (difficulty?: 'Easy' | 'Medium' | 'Hard') => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Hard':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-8 md:p-10 flex flex-col items-center justify-center min-h-[220px] text-center shadow-2xl transition-all duration-300">
      {/* Background soft glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {question ? (
        <div className="w-full flex flex-col items-center animate-fade-in">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-6">
            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${getSubjectColor(question.subject)}`}>
              {getSubjectDisplay(question.subject)}
            </span>
            {question.difficulty && (
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty}
              </span>
            )}
          </div>

          {/* Question Text */}
          <h2 className="text-xl md:text-2xl font-semibold text-slate-100 leading-relaxed max-w-2xl px-4">
            "{question.question}"
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-slate-500">
          <HelpCircle className="w-12 h-12 text-slate-600 mb-4 animate-pulse" />
          <p className="text-base font-medium text-slate-400">Ready to start?</p>
          <p className="text-xs text-slate-500 mt-1">Select subjects on the left and click SPIN to get a question.</p>
        </div>
      )}
    </div>
  );
};
