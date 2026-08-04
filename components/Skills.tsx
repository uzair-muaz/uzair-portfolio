'use client';

import { useEffect, useRef } from 'react';
import { SKILL_CATEGORIES, UZAIR_INFO } from '@/lib/portfolioData';
import {
  IconCode,
  IconStack2,
  IconServer,
  IconDatabase,
  IconCpu,
  IconRobot,
  IconSchool,
  type Icon,
} from '@tabler/icons-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILL_ICONS: Record<string, Icon> = {
  IconCode,
  IconStack2,
  IconServer,
  IconDatabase,
  IconCpu,
  IconRobot,
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.skill-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C100E] py-28 px-5 sm:px-8 border-t border-[#283831]"
      id="skills"
    >
      <div className="max-w-[1160px] mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#283831]">
          <div className="space-y-3">
            <div className="badge-section">
              <span>04 — SKILL MATRIX & TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#F5F7F2] tracking-tight">
              Technologies & Infrastructure
            </h2>
          </div>
          <p className="text-sm text-[#A3B2A9] max-w-md leading-relaxed">
            Day-to-day stack: Next.js on the product side, Nest.js for APIs and services.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => {
            const CatIcon = SKILL_ICONS[cat.icon] ?? IconStack2;

            return (
              <div
                key={index}
                className="skill-card group card-technical p-6 space-y-5 flex flex-col justify-between hover:border-[#F2DC9D]/60 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1C2722] border border-[#283831] flex items-center justify-center text-[#F2DC9D] shrink-0 transition-all duration-300 group-hover:border-[#F2DC9D]/50 group-hover:bg-[#F2DC9D]/10 group-hover:scale-110 group-hover:rotate-6">
                      <CatIcon
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        stroke={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold text-[#F5F7F2]">
                        {cat.name}
                      </h3>
                      <div className="text-[10px] font-mono text-[#A3B2A9] font-medium">
                        {cat.skills.length} core technologies
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="chip px-3 py-1 rounded-full bg-[#1C2722] border border-[#283831] text-xs font-mono text-[#F5F7F2] hover:border-[#F2DC9D] hover:text-[#F2DC9D] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card-technical p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#F2DC9D]/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F2DC9D]/15 border border-[#F2DC9D]/30 flex items-center justify-center text-[#F2DC9D] shrink-0">
              <IconSchool className="w-5 h-5" stroke={1.5} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#A3B2A9] uppercase font-semibold">
                ACADEMIC BACKGROUND
              </span>
              <h4 className="text-lg font-display font-bold text-[#F5F7F2]">
                {UZAIR_INFO.education.degree}
              </h4>
              <p className="text-xs font-mono text-[#A3B2A9] mt-0.5">
                {UZAIR_INFO.education.institution}
              </p>
            </div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-[#1C2722] border border-[#283831] text-xs font-mono text-[#F2DC9D] font-bold shrink-0">
            Graduated {UZAIR_INFO.education.graduated}
          </div>
        </div>
      </div>
    </section>
  );
}
