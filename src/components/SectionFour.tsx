import React, { useEffect, useRef, useState } from 'react';
import { ThemeMode } from '../types';
import { ArrowRight } from 'lucide-react';

interface SectionFourProps {
  theme: ThemeMode;
}

export const SectionFour: React.FC<SectionFourProps> = ({ theme }) => {
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

  const projects = [
    {
      title: "Lionpro Agency",
      date: "02 May 2021",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      color: "bg-[#e5e5e5]"
    },
    {
      title: "Education Platform",
      date: "02 May 2021",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      color: "bg-[#8b5cf6]"
    }
  ];

  return (
    <section ref={sectionRef} className={`w-full py-24 lg:py-32 overflow-hidden ${isLight ? 'bg-transparent text-slate-900' : 'bg-transparent text-white'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Left Content */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start">
          <span className={`px-4 py-1.5 rounded-full border text-sm font-semibold mb-8 ${isLight ? 'border-slate-300 text-slate-700' : 'border-slate-700 text-slate-300'}`}>
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold leading-[1.1] mb-6">
            Our selected<br />projects
          </h2>
          <p className={`text-lg leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            View the full case study of our recent featured and awesome works that we created for our clients.
          </p>
        </div>

        {/* Right Content (Projects Grid) */}
        <div className="lg:col-span-8 flex flex-col sm:flex-row gap-8 lg:gap-10 lg:pl-10">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)] flex flex-col gap-5 group cursor-pointer transition-all duration-700 delay-[${idx * 200}ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              
              {/* Card Header */}
              <div className="flex justify-between items-start pr-2">
                <div>
                  <h3 className="font-bold text-xl md:text-2xl mb-1">{project.title}</h3>
                  <p className={`text-sm font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{project.date}</p>
                </div>
                <ArrowRight className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:-rotate-45 ${isLight ? 'text-slate-900' : 'text-white'}`} />
              </div>
              
              {/* Card Image Area */}
              <div className={`w-full aspect-[4/5] rounded-xl overflow-hidden relative ${project.color} ${isLight ? '' : 'ring-1 ring-white/10'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" 
                />
                
                {/* Hover Black Circle "View Project" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-black rounded-full flex items-center justify-center text-white text-center text-sm font-medium leading-snug shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 delay-75">
                    View<br/>Project
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
