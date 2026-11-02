import React, { useState } from 'react';
import { Presentation, Globe, Share2, Check, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function DeckHeader({ viewMode, setViewMode, onJumpToContact }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#1F1D1D] text-[#FAF7F2] border-b border-white/10 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-md">
      {/* Left: Presentation Document Title */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#A62B2B] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm">
          VS
        </div>
        <div>
          <h1 className="text-xs sm:text-sm font-medium tracking-wide text-white flex items-center gap-2">
            <span>{personalInfo.name}</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/60 text-xs hidden sm:inline">Portfolio Presentation</span>
          </h1>
        </div>
      </div>

      {/* Center: View Mode Switcher */}
      <div className="flex items-center bg-black/30 p-1 rounded-full border border-white/10 text-xs">
        <button
          onClick={() => setViewMode('website')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
            viewMode === 'website'
              ? 'bg-[#A62B2B] text-white font-semibold shadow-sm'
              : 'text-white/70 hover:text-white'
          }`}
          title="View as Full Website"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Website</span>
        </button>
        <button
          onClick={() => setViewMode('deck')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
            viewMode === 'deck'
              ? 'bg-[#A62B2B] text-white font-semibold shadow-sm'
              : 'text-white/70 hover:text-white'
          }`}
          title="Slide-by-Slide Deck Mode"
        >
          <Presentation className="w-3.5 h-3.5" />
          <span>Slide Deck</span>
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={handleShare}
          className="p-1.5 sm:px-3 sm:py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs flex items-center gap-1.5 transition-colors"
          title="Share portfolio link"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
          <span className="hidden md:inline">{copied ? 'Copied' : 'Share'}</span>
        </button>

        <button
          onClick={onJumpToContact}
          className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#A62B2B] hover:bg-[#8F2323] text-white text-xs font-semibold uppercase tracking-wider transition-all"
        >
          <span>Let's Work</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </header>
  );
}
