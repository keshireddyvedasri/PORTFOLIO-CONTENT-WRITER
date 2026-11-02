import React from 'react';
import { Feather, Heart, Sparkles, BookOpen } from 'lucide-react';
import { storyBrief } from '../data/portfolioData';

export default function AboutStory() {
  return (
    <section id="story" className="py-20 bg-[#F5EFEB] border-y border-[#E5DDD3] paper-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24B35] font-semibold mb-2">
            <span className="w-4 h-[1px] bg-[#C2634B]"></span>
            <span>About Me</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17110E] tracking-tight">
            My Story — Writing to Give Emotion a Voice
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B564A] font-light">
            From late-night poems shared on Instagram stories to published books and commercial brand writing.
          </p>
        </div>

        {/* 4 Crisp Story Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {storyBrief.map((item, idx) => (
            <div
              key={item.period}
              className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E5DDD3] book-edge flex flex-col justify-between hover:border-[#C2634B]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5DDD3]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EDE4DA] text-[#A24B35] text-[11px] font-bold uppercase tracking-wider">
                    {item.period}
                  </span>
                  <span className="font-serif text-xs text-[#786457] italic">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#17110E] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57463C] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#E5DDD3]/60 flex items-center gap-1.5 text-[11px] text-[#A24B35] font-serif italic">
                <Heart className="w-3 h-3 fill-[#C2634B] text-[#C2634B]" />
                <span>Authentic connection</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Pull Quote */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3] book-edge text-center max-w-3xl mx-auto">
          <p className="font-serif text-lg sm:text-xl text-[#231B17] italic">
            "What started as a small passion slowly became an inseparable part of my identity. Today, I write to connect, communicate, create, and give emotions a voice."
          </p>
          <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold mt-2">
            — Keshireddy Veda Sri
          </p>
        </div>
      </div>
    </section>
  );
}
