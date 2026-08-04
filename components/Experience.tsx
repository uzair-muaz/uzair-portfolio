'use client';

import { useEffect, useRef } from 'react';
import { EXPERIENCES, AWARDS } from '@/lib/portfolioData';
import { IconCalendar, IconMapPin, IconCircleCheck, IconAward } from '@tabler/icons-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (timelineRef.current) {
        const cards = timelineRef.current.querySelectorAll('.exp-card');
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden border-t border-[#283831] bg-[#0C100E] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      id="experience"
    >
      <div className="mx-auto w-full max-w-[1160px] space-y-10 sm:space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#283831] pb-5 sm:gap-6 sm:pb-6 md:flex-row md:items-end">
          <div className="min-w-0 space-y-2 sm:space-y-3">
            <div className="badge-section">
              <span>03 — EXPERIENCE</span>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#F5F7F2] sm:text-4xl md:text-5xl">
              Work History
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#A3B2A9] sm:text-sm">
            Outcomes and scope per role — traffic, migrations, and product delivery live in the
            entries below.
          </p>
        </div>

        {/* Experience cards */}
        <div ref={timelineRef} className="relative space-y-4 sm:space-y-6 md:space-y-8">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="exp-card card-technical min-w-0 space-y-4 overflow-hidden p-4 sm:space-y-5 sm:p-6 md:space-y-6 md:p-8"
            >
              {/* Header */}
              <div className="flex min-w-0 flex-col gap-3 border-b border-[#283831] pb-4 sm:gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge-tag">{exp.type}</span>
                    <span className="flex min-w-0 items-center gap-1 text-[11px] font-mono text-[#A3B2A9] sm:text-xs">
                      <IconMapPin
                        className="h-3.5 w-3.5 shrink-0 text-[#F2DC9D]"
                        stroke={1.5}
                      />
                      <span className="break-words">{exp.location}</span>
                    </span>
                  </div>

                  <h3 className="break-words pt-0.5 font-display text-lg font-bold leading-snug text-[#F5F7F2] sm:text-xl md:text-2xl">
                    {exp.role}
                  </h3>
                  <div className="break-words text-xs font-mono font-bold text-[#F2DC9D] sm:text-sm">
                    {exp.company}
                  </div>
                </div>

                <div className="inline-flex max-w-full items-start gap-2 rounded-full border border-[#283831] bg-[#1C2722] px-3 py-1.5 text-[11px] font-mono leading-snug text-[#A3B2A9] sm:text-xs md:max-w-[14rem] md:shrink-0">
                  <IconCalendar
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#98D198]"
                    stroke={1.5}
                  />
                  <span className="min-w-0 break-words">{exp.period}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="min-w-0 space-y-2.5 sm:space-y-3">
                <div className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#62736A] sm:text-[11px]">
                  Key Deliverables & System Impact
                </div>
                <ul className="space-y-2 sm:space-y-2.5">
                  {exp.achievements.map((item, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex min-w-0 items-start gap-2.5 text-xs leading-relaxed text-[#F5F7F2] sm:gap-3 sm:text-sm"
                    >
                      <IconCircleCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#98D198]"
                        stroke={1.5}
                      />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex min-w-0 flex-wrap gap-1.5 border-t border-[#283831] pt-3 sm:gap-2 sm:pt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="chip max-w-full break-words rounded-full border border-[#283831] bg-[#1C2722] px-2.5 py-0.5 text-[10px] font-mono text-[#F5F7F2] sm:px-3 sm:text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Awards */}
        <div className="space-y-6 border-t border-[#283831] pt-8 sm:space-y-8 sm:pt-12" id="awards">
          <div className="min-w-0 space-y-2">
            <div className="badge-section">
              <span>05 — RECOGNITION</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#F5F7F2] sm:text-2xl md:text-4xl">
              Awards & Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className="group card-technical min-w-0 cursor-default space-y-3 overflow-hidden p-4 sm:p-5 md:p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F2DC9D]/30 bg-[#F2DC9D]/15 text-[#F2DC9D] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12 group-hover:border-[#F2DC9D]/60 group-hover:bg-[#F2DC9D]/25">
                  <IconAward
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                    stroke={1.5}
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono font-bold text-[#F2DC9D]">{award.year}</span>
                  <h4 className="mt-0.5 break-words font-display text-sm font-bold text-[#F5F7F2] sm:text-base">
                    {award.title}
                  </h4>
                  <div className="break-words text-xs font-mono font-medium text-[#A3B2A9]">
                    {award.organization}
                  </div>
                </div>
                <p className="break-words text-xs leading-relaxed text-[#A3B2A9]">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
