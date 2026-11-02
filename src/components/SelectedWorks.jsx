import React, { useState } from 'react';
import { Eye, ArrowRight, Bookmark, Sparkles, Feather } from 'lucide-react';
import { worksCollection } from '../data/portfolioData';

const filterTabs = [
  { label: 'All Works', key: 'all' },
  { label: 'Poems Collection', key: 'poetry' },
  { label: 'Brand & Retail', key: 'brand' },
  { label: 'Voice-over & Scripts', key: 'voiceover' },
  { label: 'Social Awareness', key: 'social' },
];

export default function SelectedWorks({ onOpenProject, activeFilter, onFilterChange }) {
  const [internalFilter, setInternalFilter] = useState('all');

  const currentFilter = activeFilter || internalFilter;
  const setFilter = (key) => {
    if (onFilterChange) onFilterChange(key);
    else setInternalFilter(key);
  };

  const filteredWorks = worksCollection.filter((item) => {
    if (currentFilter === 'all') return true;
    return item.categoryKey === currentFilter;
  });

  return (
    <section id="works" className="py-20 bg-[#FAF7F2] paper-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24B35] font-semibold mb-2">
              <span className="w-4 h-[1px] bg-[#C2634B]"></span>
              <span>Selected Works</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17110E] tracking-tight">
              My Selected Works & Poems Collection
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#786457] font-serif italic">
            Click any work to view poem artwork and full script
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#E5DDD3]">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                currentFilter === tab.key
                  ? 'bg-[#231B17] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F5EFEB] text-[#4A3A32] hover:bg-[#EDE4DA]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Works Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {filteredWorks.map((work) => (
            <article
              key={work.id}
              className="group bg-[#FAF7F2] rounded-2xl border border-[#E5DDD3] hover:border-[#C2634B] hover:-translate-y-1 transition-all duration-300 book-edge flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Preview */}
                <div 
                  onClick={() => onOpenProject(work.id)}
                  className="relative aspect-[3/4] overflow-hidden bg-[#EDE4DA] cursor-pointer"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17110E]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm text-[#231B17] text-[10px] uppercase tracking-wider font-bold shadow-sm">
                      {work.badge}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#17110E] group-hover:text-[#C2634B] transition-colors leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#786457] font-serif italic">
                    {work.subtitle}
                  </p>
                  <p className="text-xs text-[#57463C] font-light line-clamp-2">
                    {work.previewExcerpt}
                  </p>
                </div>
              </div>

              {/* View Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => onOpenProject(work.id)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#F5EFEB] group-hover:bg-[#231B17] text-[#231B17] group-hover:text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Poem / Script</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
