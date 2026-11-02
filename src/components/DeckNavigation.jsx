import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Sparkles } from 'lucide-react';

const slideLabels = [
  { id: 1, label: 'PortFolio' },
  { id: 2, label: 'about me' },
  { id: 3, label: 'my experience' },
  { id: 4, label: 'categories' },
  { id: 5, label: 'beyond writing' },
  { id: 6, label: "let's work" },
  { id: 7, label: 'thank you' },
];

export default function DeckNavigation({ 
  currentSlide, 
  totalSlides, 
  onSelectSlide, 
  onPrev, 
  onNext, 
  isFullscreen, 
  onToggleFullscreen 
}) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#171515] text-[#FAF7F2] border-t border-white/10 px-3 sm:px-6 py-2 shadow-2xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Quick controls & Slide thumbnails */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto py-1 scrollbar-none">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {slideLabels.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectSlide(s.id)}
                className={`group px-2.5 py-1 rounded-md text-[11px] font-medium transition-all flex items-center gap-1 flex-shrink-0 ${
                  currentSlide === s.id
                    ? 'bg-[#A62B2B] text-white font-bold ring-2 ring-[#A62B2B]/40 shadow-sm'
                    : 'bg-white/5 hover:bg-white/15 text-white/70'
                }`}
              >
                <span className="opacity-60 text-[10px]">{s.id}</span>
                <span className="truncate max-w-[80px]">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Next/Prev arrows and Page Counter */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1">
            <button
              onClick={onPrev}
              disabled={currentSlide === 1}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono px-2 text-white/90">
              Page <strong className="text-white">{currentSlide}</strong> / {totalSlides}
            </span>

            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Fullscreen toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors hidden sm:inline-flex"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </footer>
  );
}
