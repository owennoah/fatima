import React from 'react';
import { FaMeta } from 'react-icons/fa6';
import { DoodleNewArrow, DoodleWave } from './Doodles';
import { ThemeMode } from '../types';

export const SocialWidgetGraphic: React.FC<{
  theme?: ThemeMode;
  onSelectPlatform?: (platform: string) => void;
}> = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <div className="relative w-full aspect-square max-w-[540px] sm:max-w-[600px] lg:max-w-[640px] mx-auto flex items-center justify-center select-none py-2 -mt-10 sm:-mt-16 lg:-mt-24">
      {/* Hand-drawn Annotation Bottom Right: Squiggly Wave */}
      <div className="absolute bottom-0 sm:bottom-2 right-6 sm:right-12 z-20">
        <DoodleWave
          className={`w-16 sm:w-22 h-10 transition-colors ${
            isLight ? 'text-slate-400' : 'text-white/70'
          }`}
        />
      </div>

      {/* Central Organic 3D Textured Floral Blob */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[430px] lg:h-[430px] flex items-center justify-center">
        {/* Soft background glow */}
        <div
          className={`absolute inset-0 rounded-full blur-3xl animate-pulse-glow transition-colors ${
            isLight
              ? 'bg-gradient-to-tr from-blue-400/25 via-sky-300/30 to-indigo-400/25'
              : 'bg-gradient-to-tr from-blue-600/30 via-sky-500/30 to-indigo-600/30'
          }`}
        />

        {/* 4-petal / 6-petal organic flower shape with textured noise gradient */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main Organic Central Textured Mesh Shape */}
          <div
            className={`absolute w-[84%] h-[84%] rounded-[42%_58%_70%_30%/_45%_45%_55%_55%] bg-gradient-to-br from-blue-700 via-blue-500 to-slate-800 opacity-90 animate-float-slow transform hover:scale-105 transition-all duration-700 overflow-hidden ${
              isLight
                ? 'shadow-[0_20px_50px_rgba(37,99,235,0.3)] border border-white/50'
                : 'shadow-[0_0_60px_rgba(37,99,235,0.4)]'
            }`}
          >
            {/* Inner noise overlay */}
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-sky-300/40 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-slate-950/70 rounded-full blur-2xl" />
          </div>

          {/* Secondary overlapping petal layer to replicate 3D depth */}
          <div className="absolute w-[80%] h-[80%] rounded-[60%_40%_30%_70%/_50%_60%_40%_50%] bg-gradient-to-tr from-sky-400 via-blue-600 to-indigo-900 opacity-80 blur-[1px] animate-float-reverse" />
        </div>

        {/* 2x2 Glassmorphic Social Media Badge Grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-5 lg:p-6 z-10">
          
          {/* 1. TOP LEFT: Facebook */}
          <div className="flex items-center justify-center group relative">
            <div
              className={`relative w-28 h-28 sm:w-32 sm:h-32 lg:w-34 lg:h-34 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                isLight
                  ? 'bg-white/85 border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.08)] group-hover:border-blue-300 group-hover:bg-white'
                  : 'bg-white/10 border border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.4)] group-hover:border-white/40 group-hover:bg-white/15'
              }`}
            >
              {/* Inner Facebook Circle Icon */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(24,119,242,0.6)] transition-shadow">
                <svg className="w-10 h-10 sm:w-11 sm:h-11 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 2. TOP RIGHT: Instagram */}
          <div className="flex items-center justify-center group relative">
            <div
              className={`relative w-28 h-28 sm:w-32 sm:h-32 lg:w-34 lg:h-34 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                isLight
                  ? 'bg-white/85 border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.08)] group-hover:border-blue-300 group-hover:bg-white'
                  : 'bg-white/10 border border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.4)] group-hover:border-white/40 group-hover:bg-white/15'
              }`}
            >
              {/* Inner Instagram Circle Icon */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(220,39,67,0.6)] transition-shadow">
                <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-none stroke-current stroke-[2.2]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM LEFT: Meta */}
          <div className="flex items-center justify-center group relative">
            <div
              className={`relative w-28 h-28 sm:w-32 sm:h-32 lg:w-34 lg:h-34 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                isLight
                  ? 'bg-white/85 border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.08)] group-hover:border-blue-300 group-hover:bg-white'
                  : 'bg-white/10 border border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.4)] group-hover:border-white/40 group-hover:bg-white/15'
              }`}
            >
              {/* Inner Meta Circle Icon */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full bg-[#0668E1] flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(6,104,225,0.6)] transition-shadow">
                <FaMeta className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
            </div>
          </div>

          {/* 4. BOTTOM RIGHT: TikTok */}
          <div className="flex items-center justify-center group relative">
            <div
              className={`relative w-28 h-28 sm:w-32 sm:h-32 lg:w-34 lg:h-34 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                isLight
                  ? 'bg-white/85 border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.08)] group-hover:border-blue-300 group-hover:bg-white'
                  : 'bg-white/10 border border-white/25 shadow-[0_15px_35px_rgba(0,0,0,0.4)] group-hover:border-white/40 group-hover:bg-white/15'
              }`}
            >
              {/* Inner TikTok Circle Icon */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(255,0,80,0.5)] transition-shadow relative overflow-hidden">
                <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-current text-white drop-shadow-[2px_2px_0px_rgba(254,44,85,0.9)]" viewBox="0 0 24 24">
                  <path d="M12.525 0h3.08c.012 1.67.7 3.127 1.826 4.12 1.135 1 2.614 1.58 4.219 1.58V8.81c-2.028 0-3.876-.665-5.365-1.78v7.24c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5c.52 0 1.025.053 1.512.155V10.1c-.482-.095-.985-.145-1.512-.145-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5V0z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};




