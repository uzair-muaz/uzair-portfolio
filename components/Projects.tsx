'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/lib/portfolioData';
import { IconWorld, IconExternalLink } from '@tabler/icons-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll('.project-card');
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: (i % 2) * 0.15,
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

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section ref={sectionRef} className="relative bg-[#0C100E] py-28 px-5 sm:px-8 border-t border-[#283831]" id="projects">
      <div className="max-w-[1160px] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#283831]">
          <div className="space-y-3">
            <div className="badge-section">
              <span>02 — FEATURED WORK</span>
            </div>
            <h2 ref={headingRef} className="text-3xl sm:text-5xl font-display font-bold text-[#F5F7F2] tracking-tight">
              Live Projects
            </h2>
          </div>
          <p className="text-sm text-[#A3B2A9] max-w-md leading-relaxed">
            {PROJECTS.length} featured live builds — Next.js product UIs and Nest.js-backed platforms across travel, marketplaces, FinTech, and more.
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            const hasImgError = imageErrorMap[project.id];
            const screenshotUrl =
              project.imageUrl ||
              `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.liveUrl)}?w=800&h=500`;

            return (
              <div
                key={project.id}
                className="project-card card-technical overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#F2DC9D]/60 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="px-4 py-2.5 bg-[#1C2722] border-b border-[#283831] flex items-center justify-between group-hover:bg-[#23312B] transition-colors">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B84A58]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F2DC9D]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#98D198]" />
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0C100E] border border-[#283831] hover:border-[#F2DC9D] text-[11px] font-mono text-[#A3B2A9] hover:text-[#F2DC9D] max-w-[280px] truncate transition-all"
                    title={`Open ${project.liveUrl}`}
                  >
                    <IconWorld className="w-3 h-3 text-[#F2DC9D] shrink-0" stroke={1.5} />
                    <span className="truncate">{project.domain}</span>
                    <IconExternalLink className="w-2.5 h-2.5 shrink-0 opacity-70" stroke={1.5} />
                  </a>

                  <div className="text-[10px] font-mono text-[#62736A]">#{index + 1}</div>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-56 sm:h-64 bg-[#131B17] border-b border-[#283831] overflow-hidden group/img block cursor-pointer"
                  title={`Visit ${project.title} (${project.domain})`}
                >
                  {!hasImgError ? (
                    <Image
                      src={screenshotUrl}
                      alt={`${project.title} live preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={() => handleImageError(project.id)}
                      className="object-cover object-top opacity-90 group-hover/img:opacity-100 group-hover/img:scale-108 transition-all duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#1C2722] to-[#0C100E]">
                      <div className="space-y-2">
                        <div className="text-xl font-display font-bold text-[#F5F7F2]">{project.title}</div>
                        <p className="text-xs font-mono text-[#A3B2A9] line-clamp-2">{project.subtitle}</p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C100E] via-transparent to-black/20 opacity-60 group-hover/img:opacity-30 transition-opacity duration-500" />
                </a>

                <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-display font-bold text-[#F5F7F2] group-hover:text-[#F2DC9D] transition-colors">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-2"
                        >
                          <span>{project.title}</span>
                        </a>
                      </h3>
                      <span className="text-xs font-mono text-[#98D198] shrink-0 pt-1 font-semibold">{project.role}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A3B2A9] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.metrics.map((metric, mIdx) => (
                        <span key={mIdx} className="badge-amber text-[10px] py-0.5">
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="chip px-2.5 py-0.5 rounded-full bg-[#1C2722] border border-[#283831] text-[11px] font-mono text-[#F5F7F2]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#283831] flex items-center justify-end">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#F5F7F2] hover:text-[#F2DC9D] flex items-center gap-1 transition-colors"
                      >
                        <IconWorld className="w-3.5 h-3.5 text-[#F2DC9D]" stroke={1.5} />
                        <span className="underline">Visit Site</span>
                        <IconExternalLink className="w-3 h-3" stroke={1.5} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
