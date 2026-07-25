import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SectionTwo } from './components/SectionTwo';
import { SectionThree } from './components/SectionThree';
import { SectionFour } from './components/SectionFour';
import { SectionFive } from './components/SectionFive';
import { Footer } from './components/Footer';
import { StyleCustomizerPanel } from './components/StyleCustomizerPanel';
import { HeroContent, RightSideMode, ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mode, setMode] = useState<RightSideMode>('design-graphic');
  const [activeNav, setActiveNav] = useState('Home');
  const [showGridLines, setShowGridLines] = useState(true);
  const [overlayWidgets, setOverlayWidgets] = useState(false);
  const [customImageUrl, setCustomImageUrl] = useState<string | null>(null);

  const [heroContent, setHeroContent] = useState<HeroContent>({
    discountTag: "I'm Zarqa",
    headlinePrefix: "Let's be a",
    headlineMain: 'Partner in growing your',
    headlineSuffix: 'business',
    subtitle: "Creative Strategist, and Performance Marketer with 4+ years of experience running result-driven advertising campaigns for D2C, Ecommerce, and Shopify brands. I scale brands' sales and revenue through high-ROAS campaigns, funnel strategy, creative testing, AI marketing, and data-driven growth.",
    ctaText: 'Contact Us Now',
    stats: [
      { id: '1', value: '100%', label: 'Increase Followers' },
      { id: '2', value: '10+', label: 'Satisfied Clients' },
      { id: '3', value: '20+', label: 'Marketing Experts' },
    ],
  });


  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 selection:bg-blue-500 selection:text-white relative ${
        theme === 'light'
          ? 'bg-[#ffffff] text-slate-800 bg-noise-light'
          : 'bg-[#0b0c10] text-slate-100 bg-noise'
      }`}
    >
      {/* Top Navigation Bar */}
      <Navbar
        theme={theme}
        onThemeChange={(newTheme) => setTheme(newTheme)}
        currentMode={mode}
        onModeChange={(newMode) => setMode(newMode)}
        activeNav={activeNav}
        setActiveNav={(nav) => setActiveNav(nav)}
      />

      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col justify-center">
        <div id="home">
          <HeroSection
            theme={theme}
            mode={mode}
            heroContent={heroContent}
            onContentChange={(newContent) => setHeroContent(newContent)}
            customImageUrl={customImageUrl}
            onImageChange={(url) => setCustomImageUrl(url)}
            overlayWidgets={overlayWidgets}
            onToggleOverlayWidgets={(overlay) => setOverlayWidgets(overlay)}
            showGridLines={showGridLines}
          />
        </div>
        <div id="about-us" className={`border-t ${theme === 'light' ? 'border-slate-200/60' : 'border-white/5'}`}>
          <SectionTwo theme={theme} />
        </div>
        <div id="services">
          <SectionThree />
        </div>
        <div id="portfolio" className={`border-t ${theme === 'light' ? 'border-slate-200/60' : 'border-white/5'}`}>
          <SectionFour theme={theme} />
        </div>
        <SectionFive theme={theme} />
      </main>

      {/* Floating Design Customizer & Code Exporter */}
      <StyleCustomizerPanel
        theme={theme}
        onThemeChange={(newTheme) => setTheme(newTheme)}
        mode={mode}
        onModeChange={(newMode) => setMode(newMode)}
        heroContent={heroContent}
        onContentChange={(newContent) => setHeroContent(newContent)}
        showGridLines={showGridLines}
        onToggleGridLines={(show) => setShowGridLines(show)}
        overlayWidgets={overlayWidgets}
        onToggleOverlayWidgets={(overlay) => setOverlayWidgets(overlay)}
      />

      {/* Footer Branding Bar */}
      <Footer theme={theme} />
    </div>
  );
}

