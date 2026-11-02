import React from 'react';
import { Feather, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden paper-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Folio Tag */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E5DDD3] text-xs uppercase tracking-widest text-[#786457]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C2634B]"></span>
            <span className="font-semibold text-[#231B17]">Editorial Portfolio</span>
            <span>• {personalInfo.folioYear}</span>
          </div>
          <span className="text-[#A24B35] font-medium hidden sm:inline">
            {personalInfo.location} • Available for Commissions
          </span>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C2634B]/10 text-[#A24B35] text-xs font-semibold uppercase tracking-wider">
              <Feather className="w-3.5 h-3.5" />
              <span>Poet • Scriptwriter • Storyteller</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#17110E] leading-tight">
              {personalInfo.name}
            </h1>

            {/* Roles list */}
            <p className="text-sm sm:text-base text-[#57463C] font-serif italic">
              Content Writer • Poet • Creative Script Writer • Voice-Over Script Writer • Co-Author
            </p>

            {/* Taglines */}
            <div className="space-y-3 pt-1 border-l-2 border-[#C2634B] pl-4">
              <p className="font-serif text-2xl sm:text-3xl text-[#231B17] leading-snug font-medium">
                “{personalInfo.mainTagline}”
              </p>
              <p className="text-sm sm:text-base text-[#6B564A] font-light">
                {personalInfo.secondaryTagline}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#231B17] hover:bg-[#C2634B] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>View Poems & Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF7F2] hover:bg-[#EDE4DA] text-[#231B17] border border-[#D8CCC0] text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <span>My Story</span>
                <BookOpen className="w-3.5 h-3.5 text-[#786457]" />
              </a>
            </div>
          </div>

          {/* Right Visual (5 cols) - Showcase of her real poem art */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-[#EDE4DA] rounded-2xl transform rotate-2 translate-x-2 translate-y-2 -z-10 border border-[#D8CCC0]"></div>
              
              <div className="relative bg-[#FAF7F2] p-3 rounded-2xl book-edge editorial-shadow overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-[#EDE4DA] relative">
                  <img
                    src="/images/poem_woman.jpg"
                    alt="Woman - Original Poem by Veda Sri"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-serif font-bold text-sm text-[#231B17]">"Woman — But the girl never truly dies"</p>
                  <p className="text-[11px] text-[#A24B35] font-serif italic mt-0.5">Original Poetry & Artwork by ~veda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
