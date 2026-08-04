'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowDown, IconSend, IconMapPin, IconDownload, IconBrandWhatsapp } from '@tabler/icons-react';
import { UZAIR_INFO } from '@/lib/portfolioData';
import NetworkCanvas from './NetworkCanvas';
import SplineHeroScene from './SplineHeroScene';
import { NumberTicker } from './ui/NumberTicker';
import { GridPattern, Meteors } from './ui/GridPattern';
import { Marquee } from './ui/Marquee';
import { TECH_LOGOS } from './TechIcons';
import TechLottieLogo from './TechLottieLogo';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [heroActive, setHeroActive] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsLargeScreen(mql.matches);
    sync();
    mql.addEventListener('change', sync);
    return () => mql.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroActive(entry.isIntersecting && entry.intersectionRatio > 0.12);
      },
      { threshold: [0, 0.12, 0.25, 0.5] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Headline Text Character/Word Reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 35, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }

      // 2. Parallax Effect on Hero Content & Stats as user scrolls down
      if (statsRef.current) {
        gsap.to(statsRef.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 px-5 sm:px-8 flex flex-col justify-center items-center overflow-hidden bg-[#0C100E]"
      id="about"
    >
      {/* Background Grid Pattern & Meteors */}
      <GridPattern className="opacity-40 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
      {heroActive && <Meteors number={10} />}

      {/* Signature 2D Node Network Background Canvas */}
      <NetworkCanvas active={heroActive} />

      {/* Robot — large screens only (avoids covering copy on smaller viewports) */}
      {isLargeScreen && (
        <div
          className={`absolute right-0 top-1/2 z-[5] h-[480px] w-[58%] -translate-y-1/2 xl:w-[52%] [mask-image:linear-gradient(to_right,transparent_0%,black_28%,black_100%)] ${
            heroActive ? '' : 'pointer-events-none'
          }`}
        >
          <SplineHeroScene active={heroActive} />
        </div>
      )}

      {/* Hero Content — pointer-events-none so empty space doesn't block the robot */}
      <div className="relative z-10 max-w-[1160px] mx-auto w-full space-y-10 pointer-events-none">
        {/* Sequential Tag & Status Badge */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#283831]">
          <div className="badge-section">
            <span>01 — ABOUT & SUMMARY</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A3B2A9]">
            <span className="flex items-center gap-1.5 text-[#F2DC9D] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#98D198] animate-pulse" />
              {UZAIR_INFO.availability}
            </span>
            <span className="text-[#62736A]">•</span>
            <span className="flex items-center gap-1 text-[#F5F7F2]">
              <IconMapPin className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
              {UZAIR_INFO.location}
            </span>
          </div>
        </div>

        {/* Hero copy — robot lives in the background on the right */}
        <div className="pointer-events-auto max-w-xl lg:max-w-2xl space-y-6">
          <div className="space-y-3">
            <div className="text-sm font-mono text-[#98D198] font-semibold flex items-center gap-2">
              <span>👋 Hi, I&apos;m</span>
            </div>
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F5F7F2] tracking-tight leading-[1.08]"
            >
              Uzair Muaz <br />
              <span className="text-[#98D198] font-medium text-2xl sm:text-4xl">
                {UZAIR_INFO.title}
              </span>
              <span className="mt-1 block text-base sm:text-lg font-mono font-medium text-[#A3B2A9]">
                {UZAIR_INFO.stackFocus}
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#A3B2A9] leading-relaxed max-w-2xl"
          >
            {UZAIR_INFO.summary}
          </motion.p>

          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-3 pt-2 max-w-lg"
          >
            <div className="p-3.5 rounded-xl bg-[#131B17]/85 backdrop-blur-sm border border-[#283831] space-y-1 hover:border-[#98D198]/60 transition-colors">
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#98D198]">
                <NumberTicker value={4} suffix="+" />
              </div>
              <div className="text-[10px] font-mono text-[#A3B2A9] uppercase tracking-wider">Years Exp.</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131B17]/85 backdrop-blur-sm border border-[#283831] space-y-1 hover:border-[#F2DC9D]/60 transition-colors">
              <div className="text-sm sm:text-base font-mono font-bold text-[#F2DC9D] leading-snug pt-1">
                Full Stack
              </div>
              <div className="text-[10px] font-mono text-[#A3B2A9] uppercase tracking-wider">Next.js · Nest.js</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131B17]/85 backdrop-blur-sm border border-[#283831] space-y-1 hover:border-[#F2DC9D]/60 transition-colors">
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#F2DC9D]">
                <NumberTicker value={UZAIR_INFO.teamSize} />
              </div>
              <div className="text-[10px] font-mono text-[#A3B2A9] uppercase tracking-wider">Eng Team Lead</div>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full bg-[#F2DC9D] hover:bg-[#F7E4B2] text-[#0C100E] font-mono font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-[0_4px_20px_rgba(242,220,157,0.25)]"
              id="hero-explore-work-btn"
            >
              <span>VIEW MY WORK</span>
              <IconArrowDown className="w-3.5 h-3.5" stroke={1.5} />
            </button>

            <a
              href={UZAIR_INFO.cvUrl}
              download="Uzair-Muaz-CV.pdf"
              className="px-4 py-2.5 rounded-full bg-[#131B17] border border-[#283831] hover:border-[#F2DC9D] text-[#F5F7F2] hover:text-[#F2DC9D] font-mono text-xs flex items-center gap-2 transition-all"
              id="hero-cv-download"
            >
              <IconDownload className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
              <span>DOWNLOAD CV</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-4 py-2.5 rounded-full bg-[#1C2722] border border-[#283831] hover:border-[#A3B2A9] text-[#A3B2A9] hover:text-[#F5F7F2] font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
              id="hero-contact-btn"
            >
              <IconSend className="w-3.5 h-3.5 text-[#98D198]" stroke={1.5} />
              <span>CONTACT ME</span>
            </button>

            <a
              href={UZAIR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 text-[#25D366] font-mono text-xs flex items-center gap-2 transition-all"
              id="hero-whatsapp-btn"
              title={`WhatsApp ${UZAIR_INFO.phone}`}
            >
              <IconBrandWhatsapp className="w-3.5 h-3.5" stroke={1.5} />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>

      {/* Full-bleed tech logo ticker */}
      <div className="pointer-events-auto relative z-10 mt-10 w-screen left-1/2 -translate-x-1/2">
        <div className="relative overflow-hidden py-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0C100E] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0C100E] to-transparent sm:w-24" />
          <Marquee pauseOnHover repeat={4} className="[--duration:70s] [--gap:6.5rem] p-0">
            {TECH_LOGOS.map((tech) => (
              <TechLottieLogo key={tech.name} tech={tech} size={64} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
