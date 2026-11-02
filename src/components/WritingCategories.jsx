import React from 'react';
import { ArrowRight, Feather } from 'lucide-react';
import { writingCategories } from '../data/portfolioData';

export default function WritingCategories({ onSelectCategory }) {
  return (
    <section id="categories" className="py-20 bg-[#F5EFEB] border-y border-[#E5DDD3] paper-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24B35] font-semibold mb-2">
              <span className="w-4 h-[1px] bg-[#C2634B]"></span>
              <span>Writing Categories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17110E] tracking-tight">
              My Writing Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#786457] font-serif italic">
            8 Specialized creative & commercial formats
          </p>
        </div>

        {/* 8 Compact Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {writingCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DDD3] hover:border-[#C2634B] hover:-translate-y-1 transition-all duration-300 book-edge cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-[#A24B35] block mb-2">
                  /{cat.number}
                </span>
                <h3 className="font-serif text-base font-bold text-[#17110E] group-hover:text-[#C2634B] transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#786457] mt-1 font-light">
                  {cat.tag}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5DDD3]/60 flex items-center justify-between text-[11px] text-[#A24B35] font-medium">
                <span>View Works</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
