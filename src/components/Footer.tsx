import React from 'react';
import { ThemeMode } from '../types';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Dribbble, ArrowRight, Check } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <footer className={`w-full pt-16 sm:pt-24 transition-colors duration-500 border-t ${
      isLight ? 'bg-[#fafafa] border-slate-200 text-slate-500' : 'bg-[#050505] border-white/5 text-slate-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid with Vertical Dividers */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x ${isLight ? 'lg:divide-slate-200' : 'lg:divide-white/10'} mb-16 lg:mb-24 gap-y-12`}>
          
          {/* Col 1: Brand & Social */}
          <div className="lg:pr-10">
            <div className="mb-6">
              <img
                src={logoImg}
                alt="Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Data-driven Meta Ads strategies to build your audience, maximize conversions, and scale your revenue.
            </p>
          </div>

          {/* Col 2: Information */}
          <div className="lg:px-10">
            <h4 className={`font-bold text-lg mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>Information</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
              <li><a href="#about-us" className="hover:text-blue-600 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="lg:px-10">
            <h4 className={`font-bold text-lg mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>Contact Us</h4>
            <div className="space-y-5 text-sm">
              <p className={`font-bold text-base underline decoration-2 underline-offset-4 ${isLight ? 'text-slate-900 decoration-slate-900' : 'text-white decoration-white'}`}>
                +92 305 2735681
              </p>
              <p>
                <a href="mailto:adsboostpro@outlook.com" className="hover:text-blue-600 transition-colors">adsboostpro@outlook.com</a>
              </p>
            </div>
          </div>

          {/* Col 4: Connect With Me */}
          <div className="lg:pl-10">
            <h4 className={`font-bold text-lg mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>Connect with me</h4>
            <div className={`flex flex-wrap items-center gap-5 ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              <a href="#" className="hover:text-blue-600 transition-transform hover:scale-110"><Facebook className="w-6 h-6 fill-current" /></a>
              <a href="#" className="hover:text-blue-600 transition-transform hover:scale-110"><Twitter className="w-6 h-6 fill-current" /></a>
              <a href="#" className="hover:text-blue-600 transition-transform hover:scale-110"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-600 transition-transform hover:scale-110"><Linkedin className="w-6 h-6 fill-current" /></a>
              <a href="#" className="hover:text-blue-600 transition-transform hover:scale-110"><Youtube className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-600 transition-transform hover:scale-110"><Github className="w-6 h-6 fill-current" /></a>
              <a href="#" className="hover:text-blue-600 transition-transform hover:scale-110"><Dribbble className="w-6 h-6" /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`w-full border-t py-6 sm:py-8 ${isLight ? 'border-slate-200/80' : 'border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">
            © 2026 by <a href="https://omerjoya.com" target="_blank" rel="noopener noreferrer" className={`font-bold hover:text-blue-600 transition-colors ${isLight ? 'text-slate-900' : 'text-white'}`}>Dr Webs</a>
          </p>
          <div className={`flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Career</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
