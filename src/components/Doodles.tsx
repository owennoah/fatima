import React from 'react';
import { ThemeMode } from '../types';


export const DoodleSparkle: React.FC<{ className?: string }> = ({ className = "w-12 h-12 text-white/80" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Hand drawn star burst beside 'social media' */}
    <path d="M 50 15 Q 48 35 30 45 Q 48 55 50 85 Q 52 55 70 45 Q 52 35 50 15 Z" />
    <path d="M 18 20 Q 32 30 25 15" />
    <path d="M 80 25 Q 68 35 78 18" />
    <path d="M 15 75 Q 30 65 20 80" />
    <path d="M 82 78 Q 70 65 85 82" />
  </svg>
);

export const DoodleNewArrow: React.FC<{ className?: string; theme?: ThemeMode }> = ({
  className = "text-white/80",
  theme = 'light'
}) => (
  <div className={`flex flex-col items-center pointer-events-none select-none ${className}`}>
    <span
      className={`font-handwriting text-2xl sm:text-3xl font-bold -rotate-12 tracking-wide leading-none transition-colors ${
        theme === 'light' ? 'text-blue-600 drop-shadow-xs' : 'text-slate-100'
      }`}
    >
      NEW!
    </span>
    <svg
      viewBox="0 0 60 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-10 h-8 -mt-1 ml-2 transition-colors ${
        theme === 'light' ? 'text-blue-500' : 'text-white/70'
      }`}
    >
      {/* Hand drawn arrow pointing down-right */}
      <path d="M 15 5 Q 35 12 40 28" />
      <path d="M 28 24 L 40 28 L 38 18" />
    </svg>
  </div>
);


export const DoodleWave: React.FC<{ className?: string }> = ({ className = "w-16 h-8 text-white/80" }) => (
  <svg
    viewBox="0 0 100 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Hand drawn squiggly double loop doodle at bottom right */}
    <path d="M 10 25 C 20 10 35 10 40 25 C 45 38 60 38 65 25 C 70 12 85 15 90 22" />
  </svg>
);

export const DoodleUnderline: React.FC<{ className?: string }> = ({ className = "w-28 h-3 text-white/70" }) => (
  <svg
    viewBox="0 0 120 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Hand drawn underline for Compare Plans */}
    <path d="M 5 8 Q 60 2 115 10" />
    <path d="M 25 12 Q 70 7 105 13" />
  </svg>
);
