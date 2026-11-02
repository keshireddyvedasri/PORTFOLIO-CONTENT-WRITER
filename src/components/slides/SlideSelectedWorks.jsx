import React from 'react';
import { Eye, BookMarked, Briefcase } from 'lucide-react';
import { worksCollection } from '../../data/portfolioData';

export default function SlideSelectedWorks({ onOpenProject }) {
  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col justify-center p-6 sm:p-12 bg-white">
      <div className="max-w-6xl mx-auto w-full animate-fade-in space-y-6">
        <div className="text-center">
          <h2 className="font-serif italic font-bold text-5xl sm:text-7xl lg:text-8xl text-[#A62B2B] leading-none tracking-tight">
            selected works
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold mt-2">
            My Published Poetry & Commercial Content Writing
          </p>
        </div>

        {/* 4 Authentic Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {worksCollection.map((work) => (
            <div
              key={work.id}
              onClick={() => onOpenProject(work.id)}
              className="group bg-[#FAF7F2] rounded-3xl border border-[#E5DDD3] hover:border-[#A62B2B] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[3/4] overflow-hidden bg-[#EDE4DA] relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[#A62B2B] text-[10px] uppercase font-bold tracking-wider shadow-sm">
                      {work.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-[#171515] group-hover:text-[#A62B2B] transition-colors leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#786457] font-serif italic">
                    {work.subtitle}
                  </p>
                  <p className="text-xs text-[#57463C] font-light line-clamp-2 pt-1">
                    {work.previewExcerpt}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => onOpenProject(work.id)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-full bg-[#171515] group-hover:bg-[#A62B2B] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
