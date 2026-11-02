import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DeckHeader from './components/DeckHeader';
import DeckNavigation from './components/DeckNavigation';
import SlideCover from './components/slides/SlideCover';
import SlideAboutMe from './components/slides/SlideAboutMe';
import SlideExperience from './components/slides/SlideExperience';
import SlideCategories from './components/slides/SlideCategories';
import SlideBeyondWriting from './components/slides/SlideBeyondWriting';
import SlideContact from './components/slides/SlideContact';
import SlideThankYou from './components/slides/SlideThankYou';
import ProjectReaderModal from './components/ProjectReaderModal';
import { worksCollection } from './data/portfolioData';

export default function App() {
  const [viewMode, setViewMode] = useState('website'); // 'website' or 'deck'
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = 7;

  // Keyboard navigation for deck mode
  useEffect(() => {
    if (viewMode !== 'deck') return;

    const handleKeyDown = (e) => {
      if (selectedProjectId) return; // Don't slide if modal is open

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectId, totalSlides, viewMode]);

  const handlePrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));

  const handleSelectSlide = (slideId) => {
    setCurrentSlide(slideId);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const handleOpenProject = (id) => setSelectedProjectId(id);
  const handleCloseModal = () => setSelectedProjectId(null);

  const currentProject = worksCollection.find((w) => w.id === selectedProjectId);

  // Render a specific slide for presentation deck mode
  const renderSlide = (slideIndex) => {
    switch (slideIndex) {
      case 1:
        return <SlideCover onNext={handleNext} />;
      case 2:
        return <SlideAboutMe />;
      case 3:
        return <SlideExperience onOpenProject={handleOpenProject} />;
      case 4:
        return <SlideCategories />;
      case 5:
        return <SlideBeyondWriting />;
      case 6:
        return <SlideContact />;
      case 7:
        return <SlideThankYou onRestart={() => setCurrentSlide(1)} />;
      default:
        return <SlideCover onNext={handleNext} />;
    }
  };

  // 1. FULL WEBSITE MODE (Primary)
  if (viewMode === 'website') {
    return (
      <div className="min-h-screen bg-[#FAF7F2] text-[#171515] flex flex-col font-sans selection:bg-[#A62B2B]/20 selection:text-[#A62B2B] scroll-smooth">
        {/* Sticky Website Navigation */}
        <Navbar onToggleDeckMode={() => setViewMode('deck')} />

        {/* Website Content Sections */}
        <main className="flex-1 w-full pt-16">
          {/* Cover / Hero */}
          <section id="cover" className="min-h-[85vh] flex items-center justify-center bg-white border-b border-[#E5DDD3]">
            <SlideCover onNext={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />
          </section>

          {/* About Me */}
          <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E5DDD3]">
            <SlideAboutMe />
          </section>

          {/* My Experience (4 Core Works) */}
          <section id="experience" className="py-20 lg:py-28 bg-white border-b border-[#E5DDD3]">
            <SlideExperience onOpenProject={handleOpenProject} />
          </section>

          {/* Writing Categories */}
          <section id="categories" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E5DDD3]">
            <SlideCategories />
          </section>

          {/* Beyond Writing */}
          <section id="beyond-writing" className="py-20 lg:py-28 bg-white border-b border-[#E5DDD3]">
            <SlideBeyondWriting />
          </section>

          {/* Let's Work (Open to Work & Email) */}
          <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E5DDD3]">
            <SlideContact />
          </section>

          {/* Thank You Section */}
          <section id="thank-you" className="py-20 lg:py-24 bg-white border-b border-[#E5DDD3]">
            <SlideThankYou onRestart={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </section>
        </main>

        {/* Website Footer */}
        <Footer />

        {/* Interactive Lightbox / Modal for Videos & Poems */}
        <ProjectReaderModal
          project={currentProject}
          isOpen={!!selectedProjectId}
          onClose={handleCloseModal}
        />
      </div>
    );
  }

  // 2. SLIDE DECK MODE (Canva Presentation Frame)
  return (
    <div className="min-h-screen bg-[#1F1D1D] text-[#171515] flex flex-col font-sans select-none selection:bg-[#A62B2B]/20 selection:text-[#A62B2B]">
      {/* Presentation Top Bar */}
      <DeckHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
        onJumpToContact={() => handleSelectSlide(6)}
      />

      {/* Main Canvas Area */}
      <main className="flex-1 pt-12 pb-16 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        <div className="w-full max-w-6xl aspect-[16/9.5] min-h-[70vh] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-black/10 transition-all flex flex-col">
          {renderSlide(currentSlide)}
        </div>
      </main>

      {/* Bottom Thumbnail Bar & Controls */}
      <DeckNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSelectSlide={handleSelectSlide}
        onPrev={handlePrev}
        onNext={handleNext}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Interactive Project / Poem Reader Lightbox */}
      <ProjectReaderModal
        project={currentProject}
        isOpen={!!selectedProjectId}
        onClose={handleCloseModal}
      />
    </div>
  );
}
