import React from 'react';
import { Quote } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function SlidePhilosophy() {
  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col justify-center p-6 sm:p-12 bg-white text-center">
      <div className="max-w-4xl mx-auto w-full animate-fade-in space-y-8">
        <div>
          <h2 className="font-serif italic font-bold text-5xl sm:text-7xl lg:text-8xl text-[#A62B2B] leading-none tracking-tight">
            writing philosophy
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold mt-2">
            The Soul Behind The Words
          </p>
        </div>

        <Quote className="w-12 h-12 mx-auto text-[#A62B2B] opacity-70" />

        {/* Statement 1 */}
        <div className="max-w-3xl mx-auto">
          <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#171515] leading-tight">
            “Sometimes, people don't need perfect words.{' '}
            <span className="font-normal text-[#A62B2B] italic">
              They just need words that understand them.
            </span>”
          </blockquote>
        </div>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#A62B2B] mx-auto"></div>

        {/* Statement 2 */}
        <blockquote className="font-serif text-lg sm:text-2xl text-[#57463C] font-light italic max-w-2xl mx-auto leading-relaxed">
          “I want people to pause, feel something, remember someone, or find a little piece of themselves in what I write.”
        </blockquote>

        <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold pt-2">
          — {personalInfo.name}
        </p>
      </div>
    </div>
  );
}
