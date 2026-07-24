import React, { useEffect, useRef, useState } from 'react';
import section3Bg from '../assets/section-3-bg.png';

export const SectionThree: React.FC = () => {
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

  const bgStyle = {
    backgroundColor: 'hsla(0,0%,0%,1)',
    backgroundImage: `url(${section3Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const services = [
    "Meta Ads Strategy & Campaign Management",
    "Instagram Marketing",
    "Performance-Driven Audience Targeting",
    "AI Marketing",
    "Creative Strategy & Concept Development",
    "Funnel Building (TOF/MOF/BOF)",
    "Retargeting & Remarketing Campaigns",
    "A/B Testing & Creative Optimization",
    "Ad Account Audit & Scaling Strategy",
    "Conversion Rate Optimization (CRO)",
    "Performance Reporting & Analytics",
    "Facebook ads management"
  ];

  return (
    <section ref={sectionRef} style={bgStyle} className="w-full py-32 md:py-48 lg:py-56 text-white relative overflow-hidden flex flex-col justify-center min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Header Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">SERVICES</p>
          <h2 className="text-4xl md:text-[44px] font-heading font-medium mb-6 text-white tracking-tight">Our Branding Services</h2>
          <p className="text-lg text-slate-400/90 max-w-2xl mx-auto mb-16">
            Comprehensive solutions to create, enhance, and maintain your brand's identity.
          </p>
        </div>

        {/* Tags / Pills Layout */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-sm font-medium text-slate-300 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 backdrop-blur-md cursor-pointer hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${isVisible ? index * 100 + 300 : 0}ms` }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
