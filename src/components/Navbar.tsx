import React, { useState } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { DoodleUnderline } from './Doodles';
import { RightSideMode, ThemeMode } from '../types';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  currentMode: RightSideMode;
  onModeChange: (mode: RightSideMode) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  activeNav,
  setActiveNav
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'Portfolio', 'About Us'];

  const isLight = theme === 'light';

  return (
    <header className={`relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 ${isLight ? 'bg-[#ffffff]' : ''} animate-fade-in-up`}>
      <nav className="flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center group cursor-pointer" onClick={() => setActiveNav('Home')}>
          <img
            src={logoImg}
            alt="Logo"
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </div>


        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => {
                  setActiveNav(item);
                  const targetId = item.toLowerCase().replace(' ', '-');
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`transition-all duration-200 relative py-1 ${
                  isActive
                    ? isLight ? 'text-slate-900 font-bold' : 'text-white font-semibold'
                    : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Phone Icon Only Button */}
          <a
            href="tel:#"
            title="Call Us"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border ${
              isLight
                ? 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 shadow-sm'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-700 shadow-lg'
            }`}
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Start Project Button (Eye-catching) */}
          <a
            href="#contact"
            className="contactButton inline-flex"
            style={{ fontSize: '0.9rem', height: '3em', paddingRight: '3.5em' }}
          >
            Start Project
            <div className="iconButton" style={{ height: '2.4em', width: '2.4em' }}>
              <svg
                height="20"
                width="20"
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

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border focus:outline-none transition-colors ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden mt-4 p-5 rounded-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl ${
            isLight
              ? 'glass-panel-light text-slate-800'
              : 'glass-panel text-slate-100'
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveNav(item);
                  setMobileMenuOpen(false);
                  const targetId = item.toLowerCase().replace(' ', '-');
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeNav === item
                    ? isLight ? 'bg-slate-200/70 text-slate-900 font-bold' : 'bg-white/10 text-white font-semibold'
                    : isLight ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className={`pt-4 border-t flex flex-col gap-3 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
            <div className="grid grid-cols-[auto_1fr] gap-3">
              <a
                href="tel:#"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-700'
                    : 'bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="contactButton flex w-full"
                style={{ fontSize: '1rem', height: '3.5em', paddingRight: '3.5em' }}
              >
                Start Project
                <div className="iconButton" style={{ height: '2.8em', width: '2.8em' }}>
                  <svg
                    height="20"
                    width="20"
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
          </div>
        </div>
      )}



    </header>
  );
};

