import React from 'react';
import { RotateCcw } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function SlideThankYou({ onRestart }) {
  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col items-center justify-center p-8 sm:p-16 text-center bg-white">
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="font-serif italic font-bold text-6xl sm:text-8xl md:text-9xl text-[#A62B2B] leading-none tracking-tight">
          thank you
        </h2>

        {/* Subtle Accent Divider */}
        <div className="w-12 h-[1.5px] bg-[#A62B2B]/40 my-1"></div>

        {/* Quiet appreciation line */}
        <p className="font-serif italic text-lg sm:text-xl text-[#6B564A] max-w-lg leading-relaxed">
          For taking the time to share space with my words and stories.
        </p>

        {/* Author Name */}
        <div className="pt-2">
          <p className="font-serif text-xl sm:text-2xl font-medium text-[#171515] tracking-wide">
            {personalInfo.name}
          </p>
        </div>

        {/* Minimal Restart Button */}
        <div className="pt-3">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#EDE4DA] text-[#171515] border border-[#E5DDD3] text-xs uppercase tracking-widest font-semibold transition-all hover:scale-105"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#A62B2B]" />
            <span>Restart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
