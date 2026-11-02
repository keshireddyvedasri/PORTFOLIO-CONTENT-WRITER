import React, { useState } from 'react';
import { Eye, BookMarked, ArrowRight } from 'lucide-react';
import { worksCollection } from '../../data/portfolioData';

export default function SlidePoemsCollection({ onOpenProject }) {
  const [herSilenceCover, setHerSilenceCover] = useState('front'); // 'front' or 'back'

  const herSilence = worksCollection.find((w) => w.id === 'her-silence-collection');
  const otherPoems = worksCollection.filter(
    (w) => w.id === 'poem-woman' || w.id === 'poem-waiting-in-silence'
  );

  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col justify-center p-6 sm:p-10 bg-white">
      <div className="max-w-6xl mx-auto w-full animate-fade-in space-y-6">
        <div className="text-center">
          <h2 className="font-serif italic font-bold text-5xl sm:text-7xl lg:text-8xl text-[#A62B2B] leading-none tracking-tight">
            poems collection
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold mt-2">
            Published Poetry Book & Original Stanzas by ~veda
          </p>
        </div>

        {/* 3-Column / Grid Layout for all 3 Authentic Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Card 1: HER SILENCE (Published Anthology with Front & Back toggle!) */}
          <div className="group bg-[#FAF7F2] rounded-3xl border-2 border-[#A62B2B]/20 hover:border-[#A62B2B] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-md flex flex-col justify-between">
            <div>
              {/* Image with Front / Back switch */}
              <div 
                onClick={() => onOpenProject('her-silence-collection')}
                className="aspect-[3/4] overflow-hidden bg-[#EDE4DA] cursor-pointer relative"
              >
                <img
                  src={herSilenceCover === 'front' ? '/images/her_silence_front.jpg' : '/images/her_silence_back.jpg'}
                  alt="Her Silence Book Cover"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#A62B2B] text-white text-[10px] uppercase font-bold tracking-wider shadow-sm">
                    Published Book (2025)
                  </span>
                </div>
              </div>

              {/* Front / Back Toggle Buttons */}
              <div className="flex items-center justify-center gap-1.5 p-2 bg-[#F5EFEB] border-b border-[#E5DDD3]">
                <button
                  onClick={() => setHerSilenceCover('front')}
                  className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full transition-all ${
                    herSilenceCover === 'front'
                      ? 'bg-[#A62B2B] text-white shadow-sm'
                      : 'bg-white text-[#786457] hover:bg-gray-100'
                  }`}
                >
                  Front Cover
                </button>
                <button
                  onClick={() => setHerSilenceCover('back')}
                  className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full transition-all ${
                    herSilenceCover === 'back'
                      ? 'bg-[#A62B2B] text-white shadow-sm'
                      : 'bg-white text-[#786457] hover:bg-gray-100'
                  }`}
                >
                  Back Cover (Author Profile)
                </button>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-serif text-lg font-bold text-[#171515] group-hover:text-[#A62B2B] transition-colors">
                  Her Silence
                </h3>
                <p className="text-[11px] text-[#786457] font-serif italic mt-0.5 mb-2">
                  Co-Author: Keshireddy Vedasri
                </p>
                <div className="p-2.5 rounded-xl bg-white border border-[#E5DDD3] text-left text-xs font-serif italic text-[#332A27] line-clamp-3">
                  "Its always a dream to cherish with her, To gaze at the sunrise with the one light my way..."
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => onOpenProject('her-silence-collection')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#A62B2B] hover:bg-[#8F2323] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>Read Favorite Poem & Covers</span>
              </button>
            </div>
          </div>

          {/* Card 2: WOMAN */}
          <div className="group bg-[#FAF7F2] rounded-3xl border border-[#E5DDD3] hover:border-[#A62B2B] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              <div 
                onClick={() => onOpenProject('poem-woman')}
                className="aspect-[3/4] overflow-hidden bg-[#EDE4DA] cursor-pointer relative"
              >
                <img
                  src="/images/poem_woman.jpg"
                  alt="Woman Poem Artwork"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#A62B2B] text-[10px] uppercase font-bold tracking-wider shadow-sm">
                    Original Artwork & Poem
                  </span>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-serif text-lg font-bold text-[#171515] group-hover:text-[#A62B2B] transition-colors">
                  Woman
                </h3>
                <p className="text-[11px] text-[#786457] font-serif italic mt-0.5 mb-2">
                  "But the girl never truly dies"
                </p>
                <div className="p-2.5 rounded-xl bg-white border border-[#E5DDD3] text-left text-xs font-serif italic text-[#332A27] line-clamp-3">
                  "Years pass, yet she feels the same excitement when she sees a flying balloon, a painted sky in orange..."
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => onOpenProject('poem-woman')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#171515] hover:bg-[#A62B2B] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Read Full Poem</span>
              </button>
            </div>
          </div>

          {/* Card 3: WAITING IN SILENCE */}
          <div className="group bg-[#FAF7F2] rounded-3xl border border-[#E5DDD3] hover:border-[#A62B2B] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              <div 
                onClick={() => onOpenProject('poem-waiting-in-silence')}
                className="aspect-[3/4] overflow-hidden bg-[#EDE4DA] cursor-pointer relative"
              >
                <img
                  src="/images/poem_waiting_in_silence.jpg"
                  alt="Waiting in Silence Poem Artwork"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#A62B2B] text-[10px] uppercase font-bold tracking-wider shadow-sm">
                    Original Artwork & Poem
                  </span>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-serif text-lg font-bold text-[#171515] group-hover:text-[#A62B2B] transition-colors">
                  Waiting in Silence
                </h3>
                <p className="text-[11px] text-[#786457] font-serif italic mt-0.5 mb-2">
                  "What were we—waiting in silence?"
                </p>
                <div className="p-2.5 rounded-xl bg-white border border-[#E5DDD3] text-left text-xs font-serif italic text-[#332A27] line-clamp-3">
                  "Waiting to be loved, we forgot to live, forgot who we were before the world spoke..."
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => onOpenProject('poem-waiting-in-silence')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#171515] hover:bg-[#A62B2B] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Read Full Poem</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
