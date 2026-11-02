import React from 'react';
import { Quote, Feather } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 bg-[#1C1512] text-[#FAF7F2] paper-grain-dark text-center flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#D4A373]">
          <Feather className="w-3.5 h-3.5 text-[#C2634B]" />
          <span>My Writing Philosophy</span>
        </div>

        {/* Primary Statement */}
        <div className="space-y-4">
          <Quote className="w-10 h-10 mx-auto text-[#C2634B] opacity-80" />
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF7F2] leading-tight">
            “Sometimes, people don't need perfect words.{' '}
            <span className="font-normal text-[#D4A373] italic">
              They just need words that understand them.
            </span>”
          </h2>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-[#57463C] mx-auto"></div>

        {/* Secondary Statement */}
        <blockquote className="font-serif text-lg sm:text-2xl text-[#EDE4DA] font-light italic max-w-2xl mx-auto leading-relaxed">
          “I want people to pause, feel something, remember someone, or find a little piece of themselves in what I write.”
        </blockquote>

        <p className="text-xs uppercase tracking-widest text-[#AB978A] font-semibold pt-2">
          — {personalInfo.name}
        </p>
      </div>
    </section>
  );
}
