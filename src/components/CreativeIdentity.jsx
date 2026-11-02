import React from 'react';
import { 
  BookMarked, 
  Feather, 
  Zap, 
  Mic2, 
  Radio, 
  Languages, 
  MessageSquareHeart, 
  Sparkles 
} from 'lucide-react';
import { creativeIdentityBrief } from '../data/portfolioData';

const icons = [BookMarked, Feather, Zap, Mic2, Radio, Languages, MessageSquareHeart];

export default function CreativeIdentity() {
  return (
    <section id="creative-identity" className="py-20 bg-[#F5EFEB] border-y border-[#E5DDD3] paper-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24B35] font-semibold mb-2">
            <span className="w-4 h-[1px] bg-[#C2634B]"></span>
            <span>Beyond Writing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17110E] tracking-tight">
            My Creative Identity
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B564A] font-light">
            Storytelling across poetry, audio podcasts, stages, and bilingual dialogues.
          </p>
        </div>

        {/* 7 Sleek Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {creativeIdentityBrief.map((item, idx) => {
            const IconComp = icons[idx] || Sparkles;
            return (
              <div
                key={item.title}
                className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E5DDD3] book-edge hover:border-[#C2634B] transition-colors flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-[#EDE4DA] text-[#C2634B] flex items-center justify-center flex-shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A24B35] block">
                    {item.badge}
                  </span>
                  <p className="font-serif text-sm font-bold text-[#17110E] leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
