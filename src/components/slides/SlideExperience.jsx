import React from 'react';
import { BookMarked, Briefcase, PenTool, Sparkles, ArrowRight, Play, ExternalLink } from 'lucide-react';

const InstagramIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function SlideExperience({ onOpenProject }) {
  const experiences = [
    {
      id: "her-silence-collection",
      number: "01",
      icon: BookMarked,
      title: "Her Silence Book",
      role: "Co-author • Published 2025",
      desc: "Published poetry collection celebrating a mother's unconditional love, affection, and silent sacrifices. (ISBN: 978-93-48104-28-1). Featuring my favorite poem and published by Authors Tree Publishing.",
      badge: "Published Book",
      image: "/images/her_silence_front.jpg",
      actionText: "Read Book & Covers"
    },
    {
      id: "the-chennai-shopping-mall",
      number: "02",
      icon: Briefcase,
      title: "The Chennai Shopping Mall",
      role: "Content Writer • 2026",
      desc: "Commercial retail writing, festive campaigns, and official campaign reel scripted by Keshireddy Veda Sri. Bridal silk storytelling and high-retention hooks.",
      badge: "Commercial Client",
      image: "/images/veda_portrait.png",
      reelUrl: "https://www.instagram.com/reel/DZH9uG_JMRy/?rpxt=NGMzZ3lyYmxyOXlm",
      actionText: "Watch Reel & Script"
    },
    {
      id: "content-writing",
      number: "03",
      icon: PenTool,
      title: "Content Writing",
      role: "Recent Writing: On Rejections • 2026",
      desc: "Recent personal writing & voice-over piece on navigating rejections, resilience, and quiet strength. Watch the full spoken video narrative.",
      badge: "Recent Video Writing",
      image: "/images/rejections_thumbnail.png",
      videoUrl: "/videos/rejections_writing.mp4",
      actionText: "Watch Video & Script"
    },
    {
      id: "fav-poems-collection",
      number: "04",
      icon: Sparkles,
      title: "Fav Poems of Mine",
      role: "Poet & Storyteller (~veda)",
      desc: "Personal reflections capturing raw vulnerability & healing: 'Woman' ('But the girl never truly dies'), 'Waiting in Silence', and my poem from 'Her Silence'.",
      badge: "Original Poetry",
      image: "/images/poem_woman.jpg",
      actionText: "Read Favorite Poems"
    }
  ];

  return (
    <div className="w-full h-full min-h-[75vh] flex flex-col justify-center p-5 sm:p-10 lg:p-12 bg-white">
      <div className="max-w-6xl mx-auto w-full animate-fade-in space-y-6">
        {/* Title Header */}
        <div className="text-center">
          <h2 className="font-serif italic font-bold text-5xl sm:text-7xl lg:text-8xl text-[#A62B2B] leading-none tracking-tight">
            my experience
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold mt-2">
            My Published Poetry, Commercial Campaigns & Creative Writings
          </p>
        </div>

        {/* 4 Authentic Works Grid: Exact User Requested Order */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                onClick={() => onOpenProject(exp.id)}
                className="group bg-[#FAF7F2] rounded-3xl border border-[#E5DDD3] hover:border-[#A62B2B] hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Visual Image Banner with Thumbnail */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EDE4DA] relative">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[#A62B2B] text-[10px] uppercase font-bold tracking-wider shadow-sm">
                        {exp.badge}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        /{exp.number}
                      </span>
                    </div>

                    {/* Quick Instagram badge on card 2 */}
                    {exp.reelUrl && (
                      <div className="absolute bottom-2.5 right-2.5">
                        <a
                          href={exp.reelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2 py-1 rounded-full bg-[#A62B2B] hover:bg-[#8F2323] text-white text-[10px] font-bold tracking-wider flex items-center gap-1 shadow-md transition-colors"
                          title="Watch on Instagram"
                        >
                          <InstagramIcon className="w-3 h-3" />
                          <span>Reel</span>
                        </a>
                      </div>
                    )}

                    {/* Quick Video badge on card 3 */}
                    {exp.videoUrl && (
                      <div className="absolute bottom-2.5 right-2.5">
                        <div className="px-2.5 py-1 rounded-full bg-[#171515]/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider flex items-center gap-1 shadow-md">
                          <Play className="w-2.5 h-2.5 fill-white text-white" />
                          <span>Video</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="p-4 space-y-1.5 text-left">
                    <div className="flex items-center gap-1.5 text-[#A62B2B]">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <h3 className="font-serif text-lg font-bold text-[#171515] group-hover:text-[#A62B2B] transition-colors leading-snug truncate">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#786457] font-serif italic">
                      {exp.role}
                    </p>

                    <p className="text-xs text-[#57463C] font-light leading-relaxed line-clamp-3 pt-1">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-[#E5DDD3] flex items-center justify-between text-xs text-[#A62B2B] font-semibold group-hover:text-[#8F2323]">
                    <span>{exp.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

