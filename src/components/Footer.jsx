import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17110E] text-[#FAF7F2] py-16 paper-grain-dark border-t border-[#332721]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#A62B2B] flex items-center justify-center font-serif text-lg font-bold text-white shadow-sm">
                VS
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                {personalInfo.name}
              </span>
            </div>
            <p className="font-serif italic text-lg text-[#E8998D] max-w-md">
              "{personalInfo.mainTagline}"
            </p>
            <p className="text-xs text-[#AB978A] max-w-sm font-light leading-relaxed">
              Content Writer • Poet • Creative Script Writer • Voice-Over Script Writer • Storyteller • Co-Author of 'Her Silence'.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#E8998D] font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-[#D8CCC0]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  My Experience
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Writing Categories
                </a>
              </li>
              <li>
                <a href="#beyond-writing" className="hover:text-white transition-colors">
                  Beyond Writing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Let's Work
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#E8998D] font-semibold">
              Direct Contact
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs text-[#FAF7F2] hover:text-[#E8998D] transition-colors block break-all font-medium"
            >
              {personalInfo.email}
            </a>
            <p className="text-xs text-[#AB978A]">
              Open for creative scripts, brand campaigns & poetry commissions.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-[#FAF7F2] transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AB978A]">
          <p>
            © {personalInfo.folioYear} {personalInfo.name}. All literary and commercial rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-serif italic text-white/70">
            <span>Crafted with heart for authentic human connection.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
