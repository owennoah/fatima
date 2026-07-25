import React, { useState } from 'react';
import { DoodleSparkle } from './Doodles';
import { SocialWidgetGraphic } from './SocialWidgetGraphic';
import { ImagePlaceholderContainer } from './ImagePlaceholderContainer';
import { HeroContent, RightSideMode, ThemeMode } from '../types';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  theme: ThemeMode;
  mode: RightSideMode;
  heroContent: HeroContent;
  onContentChange: (newContent: HeroContent) => void;
  customImageUrl: string | null;
  onImageChange: (url: string | null) => void;
  overlayWidgets: boolean;
  onToggleOverlayWidgets: (overlay: boolean) => void;
  showGridLines: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  mode,
  heroContent,
  onContentChange,
  customImageUrl,
  onImageChange,
  overlayWidgets,
  onToggleOverlayWidgets,
  showGridLines,
}) => {
  const [ctaClicked, setCtaClicked] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const isLight = theme === 'light';

  const handleCtaClick = () => {
    setCtaClicked(true);
    setTimeout(() => setCtaClicked(false), 2500);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Ambient Lighting Background Glows */}
      {isLight ? (
        <>
          {/* Light Theme Vibrant Soft Electric Blue & Slate Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-gradient-to-br from-blue-200/40 via-sky-100/40 to-transparent rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/4 -right-12 w-[550px] h-[550px] bg-gradient-to-tr from-sky-200/40 via-blue-200/30 to-indigo-200/25 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
        </>
      ) : (
        <>
          {/* Dark Theme Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-900/40 via-sky-900/25 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/4 -right-12 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-indigo-800/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        </>
      )}

      {/* Vertical Grid Guidelines */}
      {showGridLines && (
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none flex justify-between z-0 opacity-20">
          <div className={`w-[1px] h-full ${isLight ? 'bg-slate-300/80' : 'bg-white/20'}`} />
          <div className={`w-[1px] h-full hidden sm:block ${isLight ? 'bg-slate-300/80' : 'bg-white/20'}`} />
          <div className={`w-[1px] h-full ${isLight ? 'bg-slate-300/80' : 'bg-white/20'}`} />
          <div className={`w-[1px] h-full hidden md:block ${isLight ? 'bg-slate-300/80' : 'bg-white/20'}`} />
          <div className={`w-[1px] h-full ${isLight ? 'bg-slate-300/80' : 'bg-white/20'}`} />
        </div>
      )}

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Headlines, CTA & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-7 sm:space-y-9 text-left">
          
          {/* Eyebrow Discount Tag */}
          <div className="inline-flex items-center gap-2 animate-fade-in-up animation-delay-100">
            <span
              className={`text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase font-mono px-5 py-2 rounded-full transition-colors ${
                isLight
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
              }`}
            >
              {heroContent.discountTag}
            </span>
          </div>

          {/* Main Headline with Hand-drawn Doodle Star */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <h1
              className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.1] transition-colors ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              <span>A Meta Ads </span>
              <span className="block mt-1 sm:mt-2 relative inline-block">
                <span className={isLight ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent' : 'text-blue-400'}>
                  Expert
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg max-w-xl font-normal leading-relaxed transition-colors animate-fade-in-up animation-delay-300 ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            {heroContent.subtitle}
          </p>

          {/* Contact Us Pill CTA Link */}
          <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="contactButton inline-flex"
              style={{ fontSize: '1.25rem', height: '3.6em', paddingRight: '3.8em' }}
            >
              Book A Call
              <div className="iconButton" style={{ height: '2.8em', width: '2.8em' }}>
                <svg
                  height="28"
                  width="28"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </a>
          </div>


          {/* Stats Row at Bottom */}
          <div
            className={`pt-6 sm:pt-9 border-t grid grid-cols-3 gap-4 sm:gap-8 transition-colors animate-fade-in-up animation-delay-500 ${
              isLight ? 'border-slate-200/90' : 'border-white/10'
            }`}
          >
            {heroContent.stats.map((stat) => (
              <div key={stat.id} className="flex flex-col space-y-1">
                <span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {stat.value}
                </span>
                <span
                  className={`text-xs sm:text-sm font-medium leading-snug ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Graphic or Image Placeholder */}
        <div className="lg:col-span-6 flex items-center justify-center relative animate-fade-in-scale animation-delay-600">
          {mode === 'design-graphic' ? (
            <SocialWidgetGraphic
              theme={theme}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
          ) : (
            <ImagePlaceholderContainer
              theme={theme}
              customImageUrl={customImageUrl}
              onImageChange={onImageChange}
              overlayWidgets={overlayWidgets}
              onToggleOverlayWidgets={onToggleOverlayWidgets}
            />
          )}
        </div>

      </div>
    </section>
  );
};

