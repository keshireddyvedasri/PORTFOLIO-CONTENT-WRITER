import React from 'react';
import { creativeIdentityBrief } from '../../data/portfolioData';

export default function SlideBeyondWriting() {
  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col justify-center p-6 sm:p-14 bg-white">
      <div className="max-w-4xl mx-auto w-full animate-fade-in space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="font-serif italic font-bold text-5xl sm:text-7xl lg:text-8xl text-[#A62B2B] leading-none tracking-tight">
            beyond writing
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold">
            Creative Identity & Multidisciplinary Pursuits
          </p>
        </div>

        {/* Clean Ordered Identity List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
          {creativeIdentityBrief.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3] hover:border-[#A62B2B]/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm sm:text-base font-bold text-[#A62B2B] w-8 flex-shrink-0">
                  {item.number}
                </span>
                <div className="h-6 w-[1px] bg-[#E5DDD3]"></div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#171515] tracking-tight">
                  {item.title}
                </h3>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#786457] tracking-wider px-2 py-0.5 rounded-md bg-[#EDE4DA]">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
