import React, { useEffect, useRef, useState } from 'react';
import { ThemeMode } from '../types';
import { FaApple, FaGoogle, FaAmazon, FaSpotify, FaMicrosoft, FaFigma } from 'react-icons/fa6';

interface SectionTwoProps {
  theme: ThemeMode;
}

export const SectionTwo: React.FC<SectionTwoProps> = ({ theme }) => {
  const isLight = theme === 'light';
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
      
      {/* Top Text Row */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div>
          <h2 className={`font-heading text-4xl sm:text-5xl font-extrabold leading-tight ${isLight ? 'text-[#1e2336]' : 'text-white'}`}>
            Our work has been<br />
            proven over the years
          </h2>
        </div>
        <div className="pt-2">
          <p className={`text-base leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            We are dedicated to helping individuals like you discover
            their true potential, overcome obstacles, and create a life
            they love. Our personalized one-on-one coaching sessions
            provide you with dedicated time
          </p>
        </div>
      </div>

      {/* Bottom Row - Clients */}
      <div className={`mt-10 pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-10 transition-all duration-1000 delay-300 ${isLight ? 'border-slate-200' : 'border-white/10'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className={`font-semibold uppercase tracking-widest text-sm flex-none ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          Our Clients
        </p>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-10 md:gap-16 w-full">
          <FaApple className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 ${isLight ? 'text-slate-900' : 'text-white'}`} />
          <FaGoogle className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-[#4285F4] ${isLight ? 'text-slate-800' : 'text-slate-200'}`} />
          <FaAmazon className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-[#FF9900] ${isLight ? 'text-slate-800' : 'text-slate-200'}`} />
          <FaSpotify className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-[#1DB954] ${isLight ? 'text-slate-800' : 'text-slate-200'}`} />
          <FaMicrosoft className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-[#00A4EF] ${isLight ? 'text-slate-800' : 'text-slate-200'}`} />
          <FaFigma className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-[#F24E1E] ${isLight ? 'text-slate-800' : 'text-slate-200'}`} />
        </div>
      </div>
      
    </section>
  );
};
