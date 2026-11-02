import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ArrowRight, Play } from 'lucide-react';

export default function ProjectReaderModal({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeCover, setActiveCover] = useState('front'); // for Her Silence: 'front' or 'back'
  const [activePoemTab, setActivePoemTab] = useState('woman'); // 'woman', 'waiting', 'her-silence', 'all'

  useEffect(() => {
    setActiveCover('front');
    setActivePoemTab('woman');
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleCopyText = () => {
    navigator.clipboard.writeText(project.fullPoem || project.previewExcerpt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let displayImage = project.image;
  if (project.hasFrontAndBack) {
    displayImage = activeCover === 'front' ? project.image : project.backImage;
  } else if (project.isPoemCollection || project.id === 'fav-poems-collection') {
    if (activePoemTab === 'waiting') displayImage = '/images/poem_waiting_in_silence.jpg';
    else if (activePoemTab === 'her-silence') displayImage = '/images/her_silence_front.jpg';
    else displayImage = '/images/poem_woman.jpg';
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#17110E]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${(project.videoUrl || project.isPoemCollection || project.id === 'fav-poems-collection') ? 'max-w-lg sm:max-w-xl' : 'max-w-4xl'} max-h-[92vh] bg-[#FAF7F2] rounded-3xl border border-[#E5DDD3] shadow-2xl flex flex-col overflow-hidden book-edge transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DDD3] bg-[#F5EFEB]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A62B2B]"></span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#786457] font-semibold">
                {project.category}
              </p>
              <h3 className="font-serif text-lg font-bold text-[#17110E]">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {(!project.videoUrl && !project.isPoemCollection && project.id !== 'fav-poems-collection') && (
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EDE4DA] hover:bg-[#E3D9CC] text-[#231B17] text-xs font-medium transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#786457]" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#E5DDD3] text-[#231B17] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {project.videoUrl ? (
          /* Centered Video View: No Side Context, Video Centered */
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col items-center justify-center space-y-4 paper-grain">
            <div className="text-center space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#A62B2B]/10 text-[#A62B2B] text-[10px] uppercase font-bold tracking-wider">
                {project.badge}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17110E]">
                {project.title}
              </h2>
              <p className="text-xs text-[#786457] font-serif italic">
                {project.subtitle}
              </p>
            </div>

            {/* Centered Video Player */}
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border-2 border-[#A62B2B]/20 shadow-2xl bg-black flex flex-col items-center">
              <video
                src={project.videoUrl}
                controls
                playsInline
                preload="metadata"
                poster={project.videoThumbnail || displayImage}
                className="w-full aspect-[9/16] max-h-[62vh] object-contain bg-black"
              />
            </div>

            <p className="text-[11px] text-center text-[#786457] font-serif italic">
              Spoken Video Narrative • Written & Voiced by Keshireddy Veda Sri
            </p>
          </div>
        ) : (project.isPoemCollection || project.id === 'fav-poems-collection') ? (
          /* Centered Poem Posters View: Only the uploaded poem images, No Side Context */
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col items-center justify-center space-y-4 paper-grain">
            <div className="text-center space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#A62B2B]/10 text-[#A62B2B] text-[10px] uppercase font-bold tracking-wider">
                {project.badge}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17110E]">
                {activePoemTab === 'waiting' ? 'Waiting in Silence' : 'Woman'}
              </h2>
              <p className="text-xs text-[#786457] font-serif italic">
                {activePoemTab === 'waiting' 
                  ? 'Original Poem & Visual Poster by ~veda' 
                  : 'Original Poem & Visual Poster by ~veda'}
              </p>
            </div>

            {/* Poem Switcher Tabs */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setActivePoemTab('woman')}
                className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${
                  activePoemTab === 'woman'
                    ? 'bg-[#A62B2B] text-white shadow-md'
                    : 'bg-white text-[#786457] border border-[#E5DDD3] hover:border-[#A62B2B]'
                }`}
              >
                Woman
              </button>
              <button
                onClick={() => setActivePoemTab('waiting')}
                className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${
                  activePoemTab === 'waiting'
                    ? 'bg-[#A62B2B] text-white shadow-md'
                    : 'bg-white text-[#786457] border border-[#E5DDD3] hover:border-[#A62B2B]'
                }`}
              >
                Waiting in Silence
              </button>
            </div>

            {/* Centered Poem Image Poster */}
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border border-[#E5DDD3] shadow-2xl bg-[#EDE4DA] flex flex-col items-center book-edge">
              <img
                src={activePoemTab === 'waiting' ? '/images/poem_waiting_in_silence.jpg' : '/images/poem_woman.jpg'}
                alt={activePoemTab === 'waiting' ? 'Waiting in Silence Poem by ~veda' : 'Woman Poem by ~veda'}
                className="w-full h-auto object-contain max-h-[66vh] rounded-2xl"
              />
            </div>

            <p className="text-[11px] text-center text-[#786457] font-serif italic">
              Original Visual Poem Poster • Written by ~veda
            </p>
          </div>
        ) : (
          /* Standard 2-Column View for Books & Commercial Scripts */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 paper-grain">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Artwork Column (5 cols) */}
              <div className="md:col-span-5 space-y-3">
                {/* Cover toggle for Her Silence */}
                {project.hasFrontAndBack && (
                  <div className="flex items-center justify-center gap-2 pb-1">
                    <button
                      onClick={() => setActiveCover('front')}
                      className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                        activeCover === 'front'
                          ? 'bg-[#A62B2B] text-white shadow-sm'
                          : 'bg-white text-[#786457] border border-[#E5DDD3]'
                      }`}
                    >
                      Front Cover
                    </button>
                    <button
                      onClick={() => setActiveCover('back')}
                      className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                        activeCover === 'back'
                          ? 'bg-[#A62B2B] text-white shadow-sm'
                          : 'bg-white text-[#786457] border border-[#E5DDD3]'
                      }`}
                    >
                      Back Cover (Authors Profile)
                    </button>
                  </div>
                )}

                <div className="rounded-2xl overflow-hidden border border-[#E5DDD3] book-edge shadow-sm bg-[#EDE4DA]">
                  <img
                    src={displayImage}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <p className="text-[11px] text-center text-[#786457] font-serif italic">
                  {project.hasFrontAndBack 
                    ? activeCover === 'front' ? 'Her Silence • Book Front Cover' : 'Her Silence • Back Cover with Author Photos & ISBN' 
                    : 'Artwork & Publication Archive'}
                </p>
              </div>

              {/* Poem / Script Column (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#A62B2B]/10 text-[#A62B2B] text-[10px] uppercase font-bold tracking-wider mb-1">
                    {project.badge}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#17110E]">
                    {project.title}
                  </h2>
                  <p className="text-xs text-[#786457] font-serif italic">
                    {project.subtitle}
                  </p>
                </div>

                {/* Reel Link Banner if available */}
                {project.reelUrl && (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF5F5] to-[#FAF7F2] border border-[#A62B2B]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#A62B2B] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-[#A62B2B] tracking-wider">
                          Official Campaign Reel Script
                        </p>
                        <p className="text-xs text-[#57463C]">
                          Original script written by Keshireddy Veda Sri
                        </p>
                      </div>
                    </div>
                    <a
                      href={project.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#A62B2B] hover:bg-[#8F2323] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex-shrink-0"
                    >
                      <span>Watch Reel</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Formatted Text Box */}
                <div className="p-5 rounded-2xl bg-[#F5EFEB] border border-[#E5DDD3]">
                  <pre className="font-serif text-sm sm:text-base text-[#231B17] whitespace-pre-wrap leading-relaxed italic">
                    {project.fullPoem}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#E5DDD3] bg-[#F5EFEB] flex items-center justify-between text-xs text-[#786457]">
          <span>~veda • {project.badge}</span>
          <a
            href="#contact"
            onClick={onClose}
            className="text-[#231B17] hover:text-[#A62B2B] font-semibold inline-flex items-center gap-1"
          >
            <span>Let's Create Words</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
