import React, { useEffect, useRef, useState } from 'react';
import { ThemeMode } from '../types';
import { ArrowRight } from 'lucide-react';
import section2Img from '../assets/section2-image.png';

interface SectionTwoProps {
  theme: ThemeMode;
}

const HEADING_TEXT = "Blending data-driven strategies with compelling creative to launch high-converting campaigns that engage audiences and scale revenue.";
const WORDS = HEADING_TEXT.split(" ");

export const SectionTwo: React.FC<SectionTwoProps> = ({ theme }) => {
  const isLight = theme === 'light';
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Intersection Observer for general fade-ins (image, body text, button)
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

  // Scroll event listener for premium scroll-scrubbing text reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start revealing when the heading enters the bottom 75% of the viewport
      const start = windowHeight * 0.75;
      // Finish revealing when the heading reaches 30% from the top
      const end = windowHeight * 0.30;
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN - Image */}
        <div 
          className={`w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl transition-all duration-1000 ease-out flex items-center justify-center relative overflow-hidden shadow-2xl ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          } ${isLight ? 'bg-slate-100 border border-slate-200' : 'bg-white/5 border border-white/10'}`}
        >
          <img 
            src={section2Img} 
            alt="Performance Graphic" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* RIGHT COLUMN - Content */}
        <div className="flex flex-col space-y-8">
          
          {/* Scroll-Linked Premium Text Reveal Heading */}
          <h2 
            ref={headingRef}
            className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight flex flex-wrap"
          >
            {WORDS.map((word, i, arr) => {
              // Calculate opacity for this specific word based on overall scrollProgress
              const wordStart = i / arr.length;
              const wordEnd = (i + 1) / arr.length;
              const opacity = Math.max(0.15, Math.min(1, 0.15 + 0.85 * ((scrollProgress - wordStart) / (wordEnd - wordStart))));

              return (
                <span key={i} className="mr-[0.25em] mb-1">
                  <span 
                    className={`${isLight ? 'text-slate-900' : 'text-white'}`} 
                    style={{ opacity }}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </h2>

          {/* Body Text */}
          <div 
            className={`flex flex-col space-y-6 text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isLight ? 'text-slate-600' : 'text-slate-300'}`}
          >
            <p>
              I'm an analytical and strategic marketer — with a strong background in paid 
              social and funnel optimization, I have a talent for crafting targeted ad strategies 
              that acquire high-quality leads and drive sales.
            </p>
          </div>

          {/* Action Button */}
          <div 
            className={`pt-4 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#portfolio"
              className="contactButton w-max"
              style={{ fontSize: '1.1rem', height: '3.2em', paddingRight: '3.5em' }}
            >
              Projects
              <div className="iconButton" style={{ height: '2.5em', width: '2.5em' }}>
                <svg
                  height="24"
                  width="24"
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
    </section>
  );
};
