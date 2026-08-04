'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSend, IconMenu2, IconX, IconDownload } from '@tabler/icons-react';
import { UZAIR_INFO } from '@/lib/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (isClickScrolling.current) return;

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== NAV_ITEMS[i].id) {
            setActiveSection(NAV_ITEMS[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    onChange(mq);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    isClickScrolling.current = true;

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    } else {
      isClickScrolling.current = false;
    }
  };

  const goHome = () => {
    setMobileMenuOpen(false);
    isClickScrolling.current = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('about');
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:px-6 sm:pt-4 md:px-8">
      <div className="relative w-full max-w-[1160px]">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex w-full items-center justify-between gap-2 rounded-2xl border px-2.5 py-2 transition-all duration-300 sm:gap-3 sm:px-3.5 sm:py-2.5 ${
            scrolled
              ? 'border-[#2A3B33] bg-[#131B17]/95 shadow-[0_16px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl'
              : 'border-[#24342C]/80 bg-[#131B17]/85 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md'
          }`}
        >
          <button
            onClick={goHome}
            className="group flex min-w-0 items-center gap-2 rounded-full py-1 pl-0.5 pr-1.5 transition-colors hover:bg-[#1C2722]/80 cursor-pointer sm:gap-2.5 sm:pr-2"
            id="nav-brand-pill"
          >
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2A3B33] bg-gradient-to-br from-[#1C2822] to-[#0C100E] shadow-sm transition-colors group-hover:border-[#F2DC9D]">
              <span className="font-mono text-xs font-bold text-[#F2DC9D]">UM</span>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#131B17] bg-[#98D198]" />
            </div>

            <div className="min-w-0 text-left leading-tight">
              <span className="block truncate font-display text-sm font-bold tracking-tight text-[#F5F7F2] transition-colors group-hover:text-[#F2DC9D]">
                Uzair Muaz
              </span>
              <span className="block truncate text-[10px] font-mono font-semibold text-[#98D198]">
                Full Stack Eng
              </span>
            </div>
          </button>

          <nav className="hidden items-center rounded-full border border-[#24342C]/90 bg-[#0C100E]/80 p-1 shadow-inner lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative z-10 flex cursor-pointer select-none items-center justify-center rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-colors duration-200 xl:px-4 ${
                    isActive ? 'text-[#F5F7F2]' : 'text-[#A3B2A9] hover:text-[#F5F7F2]'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-full border border-[#F2DC9D]/40 bg-gradient-to-r from-[#1C2822] to-[#24342C] shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 35,
                        mass: 0.8,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={UZAIR_INFO.cvUrl}
              download="Uzair-Muaz-CV.pdf"
              className="group flex items-center gap-1.5 rounded-full border border-[#2A3B33] bg-[#1C2722] px-3.5 py-1.5 font-mono text-xs text-[#F5F7F2] shadow-sm transition-all hover:border-[#F2DC9D]/60 hover:bg-[#23312B] hover:text-[#F2DC9D]"
              id="nav-cv-download"
              title="Download CV (PDF)"
            >
              <IconDownload
                className="h-3.5 w-3.5 text-[#F2DC9D] transition-transform group-hover:scale-110"
                stroke={1.5}
              />
              <span>CV</span>
            </a>

            <button
              onClick={onOpenContact}
              className="group relative flex cursor-pointer items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-[#F2DC9D] to-[#E5C980] px-4 py-1.5 font-mono text-xs font-bold text-[#0C100E] shadow-md transition-all hover:from-[#F7E4B2] hover:to-[#F2DC9D] hover:shadow-lg"
              id="nav-contact-btn"
            >
              <IconSend
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                stroke={1.5}
              />
              <span>GET IN TOUCH</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#2A3B33] bg-[#1C2722] text-[#F5F7F2] sm:h-10 sm:w-10 lg:hidden"
            id="nav-mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <IconX className="h-4 w-4 text-[#F2DC9D] sm:h-5 sm:w-5" stroke={1.5} />
            ) : (
              <IconMenu2 className="h-4 w-4 text-[#F5F7F2] sm:h-5 sm:w-5" stroke={1.5} />
            )}
          </button>
        </motion.div>
      </div>

      {/* Right sidebar drawer — sized for phone vs tablet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto fixed inset-0 z-[60] bg-[#0C100E]/60 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 36 }}
              className="pointer-events-auto fixed inset-y-0 right-0 z-[70] flex w-[min(17.5rem,82vw)] flex-col border-l border-[#2A3B33] bg-[#131B17] shadow-[-16px_0_40px_rgba(0,0,0,0.45)] sm:w-[min(20rem,70vw)] md:w-[22rem] lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-[#283831] px-4 py-3.5">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold text-[#F5F7F2]">Menu</p>
                  <p className="truncate text-[10px] font-mono text-[#A3B2A9]">Uzair Muaz</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A3B33] bg-[#1C2722] text-[#F2DC9D]"
                  aria-label="Close menu"
                >
                  <IconX className="h-4 w-4" stroke={1.5} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3 font-mono text-sm">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex min-h-11 items-center rounded-xl px-4 text-left transition-colors ${
                        isActive
                          ? 'border border-[#F2DC9D]/30 bg-[#1C2722] font-bold text-[#F2DC9D]'
                          : 'text-[#A3B2A9] hover:bg-[#1C2722]/60 hover:text-[#F5F7F2]'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-2 border-t border-[#283831] p-3 font-mono">
                <a
                  href={UZAIR_INFO.cvUrl}
                  download="Uzair-Muaz-CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#2A3B33] bg-[#1C2722] text-sm text-[#F2DC9D]"
                >
                  <IconDownload className="h-4 w-4" stroke={1.5} />
                  <span>Download CV</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#F2DC9D] text-sm font-bold text-[#0C100E] shadow-md"
                >
                  <IconSend className="h-4 w-4" stroke={1.5} />
                  <span>Get In Touch</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
