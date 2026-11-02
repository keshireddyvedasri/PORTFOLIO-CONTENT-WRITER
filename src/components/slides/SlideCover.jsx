import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function SlideCover({ onNext }) {
  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col items-center justify-center p-8 sm:p-16 text-center bg-white">
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-in flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="font-serif italic font-bold text-6xl sm:text-8xl md:text-9xl text-[#A62B2B] leading-none tracking-tight">
          portfolio
        </h1>

        {/* Name */}
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#171515] tracking-wide pt-1">
          {personalInfo.name}
        </h2>

        {/* Subtle Accent Divider */}
        <div className="w-12 h-[1.5px] bg-[#A62B2B]/40 my-1"></div>

        {/* Hook Line & Role Descriptor */}
        <div className="space-y-2 max-w-xl">
          <p className="font-serif italic text-lg sm:text-2xl text-[#6B564A] leading-relaxed">
            "{personalInfo.mainTagline}"
          </p>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#786457] font-semibold">
            {personalInfo.subTagline}
          </p>
        </div>

        {/* Minimal Explore Button */}
        <div className="pt-3">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A62B2B] hover:bg-[#8F2323] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm hover:scale-105"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
