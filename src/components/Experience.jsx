import React from 'react';
import { Briefcase, BookMarked, PenTool, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { experienceBrief } from '../data/portfolioData';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Experience({ onOpenProject }) {
  const experiences = [
    {
      id: "her-silence-collection",
      number: "01",
      badge: "Published Book (2025)",
      title: "Her Silence Book",
      role: "Co-author • 2025",
      type: "Print Anthology",
      summary: "A published poetry collection centred on a mother's unconditional love, affection, and silent sacrifices that hold families together.",
      excerpt: `"Its always a dream to cherish with her, To gaze at the sunrise with the one light my way Who nurtured me like the morning shine..."`,
      actionText: "Read Excerpt & Covers",
      image: "/images/her_silence_front.jpg"
    },
    {
      id: "the-chennai-shopping-mall",
      number: "02",
      badge: "Commercial Client (2026)",
      title: "The Chennai Shopping Mall",
      role: "Content Writer & Scriptwriter • 2026",
      type: "Commercial Video Script",
      summary: "Spearheading commercial content writing, festive ad campaigns, bridal silk collections, and viral promotional reel scripts.",
      reelUrl: "https://www.instagram.com/reel/DZH9uG_JMRy/?rpxt=NGMzZ3lyYmxyOXlm",
      actionText: "Watch Reel & Script",
      image: "/images/veda_portrait.png"
    },
    {
      id: "content-writing",
      number: "03",
      badge: "Recent Video Writing",
      title: "Content Writing — On Rejections",
      role: "Writer & Voice-over • 2026",
      type: "Spoken Video & Script",
      summary: "My recent personal writing and spoken piece on rejections—navigating creative vulnerability, perseverance, and trusting your authentic voice.",
      actionText: "Watch Video & Script",
      image: "/images/rejections_thumbnail.png",
      videoUrl: "/videos/rejections_writing.mp4"
    },
    {
      id: "fav-poems-collection",
      number: "04",
      badge: "Original Poetry",
      title: "Fav Poems of Mine",
      role: "Poet & Storyteller (~veda)",
      type: "Personal Reflections",
      summary: "Curated personal stanzas capturing vulnerability & growth: 'Woman' ('But the girl never truly dies'), 'Waiting in Silence', and 'Her Silence'.",
      actionText: "Read Favorite Poems",
      image: "/images/poem_woman.jpg"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#FAF7F2] paper-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A62B2B] font-semibold mb-2">
            <span className="w-4 h-[1px] bg-[#A62B2B]"></span>
            <span>Experience & Works</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17110E] tracking-tight">
            My Published Poetry & Commercial Content Writing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B564A] font-light">
            Published poetry anthologies and commercial brand campaigns in order of milestone.
          </p>
        </div>

        {/* 4 Focused Cards in Exact Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-[#FAF7F2] p-7 rounded-3xl border border-[#E5DDD3] book-edge editorial-shadow flex flex-col justify-between hover:border-[#A62B2B]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5DDD3]">
                  <span className="px-3 py-1 rounded-full bg-[#A62B2B]/10 text-[#A62B2B] text-xs font-semibold uppercase tracking-wider">
                    {exp.badge}
                  </span>
                  <span className="text-xs font-mono text-[#786457]">/{exp.number} • {exp.type}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#17110E] group-hover:text-[#A62B2B] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-[#57463C] font-serif italic mt-0.5 mb-3">
                  {exp.role}
                </p>

                <p className="text-xs sm:text-sm text-[#6B564A] leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {exp.excerpt && (
                  <div className="p-3.5 rounded-xl bg-[#F5EFEB] border border-[#E5DDD3] mb-6">
                    <p className="font-serif italic text-xs sm:text-sm text-[#231B17] leading-relaxed">
                      {exp.excerpt}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E5DDD3] flex items-center justify-between">
                {exp.reelUrl ? (
                  <a
                    href={exp.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A62B2B] font-semibold hover:underline"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Watch Reel</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-[#786457]">
                    Keshireddy Veda Sri
                  </span>
                )}
                <button
                  onClick={() => onOpenProject(exp.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#171515] group-hover:bg-[#A62B2B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>{exp.actionText}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
