import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onToggleDeckMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['cover', 'about', 'experience', 'categories', 'beyond-writing', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Categories', href: '#categories', id: 'categories' },
    { label: 'Beyond Writing', href: '#beyond-writing', id: 'beyond-writing' },
    { label: "Let's Work", href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5DDD3] py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Author Monogram & Name */}
        <a
          href="#cover"
          className="group flex items-center gap-3 text-left focus:outline-none"
          aria-label="Home - Keshireddy Veda Sri"
        >
          <div className="w-10 h-10 rounded-full bg-[#A62B2B] text-white flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#8F2323] transition-colors shadow-sm">
            VS
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#171515] group-hover:text-[#A62B2B] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#786457] font-medium">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                activeSection === item.id
                  ? 'text-[#A62B2B] font-semibold'
                  : 'text-[#4A3B32] hover:text-[#A62B2B]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A62B2B] rounded-full animate-fade-in" />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {onToggleDeckMode && (
            <button
              onClick={onToggleDeckMode}
              className="px-3.5 py-2 rounded-full border border-[#E5DDD3] hover:border-[#A62B2B] text-[#786457] hover:text-[#A62B2B] text-xs font-medium transition-all"
              title="Switch to slide-by-slide presentation deck"
            >
              Slide Deck
            </button>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#A62B2B] hover:bg-[#8F2323] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Let's Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#171515] hover:text-[#A62B2B] rounded-lg focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5DDD3] px-6 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            <div className="pb-2 border-b border-[#E5DDD3]">
              <p className="text-xs uppercase tracking-widest text-[#786457]">
                {personalInfo.name} • Portfolio
              </p>
            </div>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-serif py-1 transition-colors ${
                  activeSection === item.id ? 'text-[#A62B2B] font-bold' : 'text-[#171515]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E5DDD3] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[#A62B2B] text-white text-xs uppercase tracking-widest font-semibold shadow-sm"
              >
                Let's Work Together
              </a>
              {onToggleDeckMode && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onToggleDeckMode();
                  }}
                  className="w-full text-center py-2 text-xs text-[#786457] hover:text-[#A62B2B]"
                >
                  View as Slide Presentation Deck
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
