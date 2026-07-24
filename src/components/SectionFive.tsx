import React, { useEffect, useRef, useState } from 'react';
import { ThemeMode } from '../types';
import { ArrowRight } from 'lucide-react';
import ctaImage from '../assets/cta-image.jpg';
import sectionBg from '../assets/section-3-bg.png';

interface SectionFiveProps {
  theme: ThemeMode;
}

export const SectionFive: React.FC<SectionFiveProps> = ({ theme }) => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative flex flex-col pt-16 sm:pt-24 pb-24 sm:pb-32 overflow-hidden bg-black transition-colors duration-500">
      
      {/* Background Image matching Section Three */}
      <div 
        className="absolute inset-0 z-0 opacity-100 scale-110"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Image Area */}
      <div className={`w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className={`w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ${isLight ? 'ring-4 ring-white/50' : 'ring-1 ring-white/10'}`}>
          <img src={ctaImage} alt="Marketing Expert Work" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Light Card */}
      <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 sm:-mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className={`w-full pt-24 sm:pt-32 pb-16 sm:pb-24 rounded-[2.5rem] sm:rounded-[4rem] flex flex-col items-center justify-center text-center px-4 sm:px-8 shadow-2xl ${isLight ? 'bg-white' : 'bg-[#0f1423]'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold leading-[1.1] mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Want talk to a<br />
              <span className={`${isLight ? 'text-blue-600' : 'text-blue-500'}`}>marketing expert?</span>
            </h2>
            <p className={`text-sm sm:text-base mb-10 max-w-lg mx-auto ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              We make marketing secure and hassle-free, so you can focus on growing your business. Explore our professional marketing services now!
            </p>
            
            <button className={`group inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base transition-all duration-500 hover:scale-105 active:scale-95 border-2 ${
              isLight ? 'border-blue-600 text-blue-600 hover:bg-blue-50' : 'border-white text-white hover:bg-white/10'
            }`}>
              Get Started
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
