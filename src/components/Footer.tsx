import React from 'react';
import { ThemeMode } from '../types';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Check } from 'lucide-react';

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
            <h3 className={`font-heading text-3xl font-extrabold tracking-tight mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Media Sosial
            </h3>
            <p className="text-[10px] font-bold tracking-widest uppercase mb-6 text-slate-400">
              Digital Agency Studio
            </p>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
            </p>
            <div className={`flex items-center gap-4 ${isLight ? 'text-slate-800' : 'text-slate-400'}`}>
              <a href="#" className="hover:text-blue-600 transition-colors"><Facebook className="w-4 h-4 fill-current" /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Twitter className="w-4 h-4 fill-current" /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-4 h-4 fill-current" /></a>
            </div>
          </div>

          {/* Col 2: Information */}
          <div className="lg:px-10">
            <h4 className={`font-bold text-lg mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>Information</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Company</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Case Study</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Unlock System</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blueprint</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="lg:px-10">
            <h4 className={`font-bold text-lg mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>Contact Us</h4>
            <div className="space-y-5 text-sm">
              <p className="leading-relaxed">
                Valentin, Street Road 24, New York, USA - 67452
              </p>
              <p className={`font-bold text-base underline decoration-2 underline-offset-4 ${isLight ? 'text-slate-900 decoration-slate-900' : 'text-white decoration-white'}`}>
                +02) 574 - 328 - 301
              </p>
              <p>
                <a href="mailto:info@buildyexample.com" className="hover:text-blue-600 transition-colors">info@buildyexample.com</a>
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:pl-10">
            <h4 className={`font-bold text-lg mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>Newsletter</h4>
            <form className="mb-5 relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`w-full px-5 py-4 rounded-md outline-none text-sm font-medium transition-colors ${
                  isLight 
                    ? 'bg-slate-100/80 text-slate-900 placeholder-slate-400 focus:bg-slate-200' 
                    : 'bg-white/5 text-white placeholder-slate-500 focus:bg-white/10'
                }`}
              />
              <button className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className={`mt-0.5 flex-none w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                isLight 
                  ? 'border-slate-300 bg-white group-hover:border-slate-400' 
                  : 'border-slate-600 bg-transparent group-hover:border-slate-400'
              }`}>
                <Check className={`w-3 h-3 ${isLight ? 'text-slate-400' : 'text-slate-500'}`} strokeWidth={3} />
              </div>
              <span className="text-xs leading-relaxed">
                I'm okay with getting emails and having that activity and privacy policy.
              </span>
            </label>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`w-full border-t py-6 sm:py-8 ${isLight ? 'border-slate-200/80' : 'border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">
            © 2022 - 2025 | Allrights reserved<br/>
            by <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Wealcoder</span>
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
