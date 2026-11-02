import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] paper-grain border-t border-[#E5DDD3]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A62B2B]/10 text-[#A62B2B] text-xs font-semibold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open To Work</span>
          </div>
          <h2 className="font-serif italic font-bold text-4xl sm:text-6xl text-[#A62B2B] leading-none tracking-tight">
            let's work
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#786457] font-semibold">
            Turning Raw Emotions & Brand Visions Into Words That Speak
          </p>
        </div>

        {/* Open To Work Context */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DDD3] shadow-sm space-y-5">
          <div className="space-y-2.5 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#171515] leading-snug">
              Have a story, a brand campaign, or a script waiting for its voice?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed font-light">
              I don’t just write words—I build bridges between unexpressed hearts and real human connection. Whether you're an agency looking for high-retention reel scripts that feel authentic, a brand seeking a commercial campaign with cultural warmth, or a creator needing tender voice-overs that linger long after the video ends, I am actively open for new projects and collaborations.
            </p>
          </div>

          {/* Disciplines */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3]/80">
              <span className="text-[10px] font-mono font-bold text-[#A62B2B] uppercase tracking-wider block mb-1">
                01 / Commercial
              </span>
              <p className="font-serif text-sm font-semibold text-[#171515]">
                Brand & Reel Scripts
              </p>
              <p className="text-[11px] text-[#786457] mt-1 leading-normal">
                High-hook festive campaigns, dialogues & short-form video scripts (like The Chennai Shopping Mall).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3]/80">
              <span className="text-[10px] font-mono font-bold text-[#A62B2B] uppercase tracking-wider block mb-1">
                02 / Voice & Audio
              </span>
              <p className="font-serif text-sm font-semibold text-[#171515]">
                Voice-Over Narratives
              </p>
              <p className="text-[11px] text-[#786457] mt-1 leading-normal">
                Reflective spoken-word cadences, video voice-overs on vulnerability, and podcast scripts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD3]/80">
              <span className="text-[10px] font-mono font-bold text-[#A62B2B] uppercase tracking-wider block mb-1">
                03 / Literature
              </span>
              <p className="font-serif text-sm font-semibold text-[#171515]">
                Poetry & Co-Authorship
              </p>
              <p className="text-[11px] text-[#786457] mt-1 leading-normal">
                Book anthologies (co-author of 'Her Silence'), commissioned stanzas, and personal reflections.
              </p>
            </div>
          </div>
        </div>

        {/* Central Dedicated Email Card — Only My Mail */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1F1D1D] to-[#2B2522] text-[#FAF7F2] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 border border-white/10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#A62B2B] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#E5DDD3]/80">
                Direct Email • Open for Inquiries & Briefs
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-serif text-lg sm:text-2xl font-bold text-white hover:text-[#E8998D] transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-[11px] text-white/60 mt-0.5">
                Drop your idea, script requirement, or project brief—let's create words that resonate.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-center">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-2.5 rounded-full bg-[#A62B2B] hover:bg-[#8F2323] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md inline-flex items-center gap-1.5"
            >
              <span>Send Mail</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
