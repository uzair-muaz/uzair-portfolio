'use client';

import React from 'react';
import type { TechIcon } from './TechIcons';

/** Official brand colors for hover state */
const BRAND_COLORS: Record<string, string> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  React: '#61DAFB',
  'Next.js': '#FFFFFF',
  'Material UI': '#007FFF',
  'Ant Design': '#1677FF',
  Shadcn: '#FFFFFF',
  'Tailwind CSS': '#06B6D4',
  'Framer Motion': '#0055FF',
  'Node.js': '#5FA04E',
  'Nest.js': '#E0234E',
  PostgreSQL: '#4169E1',
  MongoDB: '#47A248',
  MySQL: '#4479A1',
  Redis: '#FF4438',
  AWS: '#FF9900',
  Docker: '#2496ED',
  Git: '#F05032',
  'GitHub Actions': '#2088FF',
};

interface TechLottieLogoProps {
  tech: TechIcon;
  size?: number;
}

/** Static tech mark + label for the hero marquee. */
export default function TechLottieLogo({ tech, size = 64 }: TechLottieLogoProps) {
  const brand = BRAND_COLORS[tech.name] ?? '#F2DC9D';

  return (
    <div
      className="group flex shrink-0 flex-col items-center gap-2.5"
      style={{ ['--brand' as string]: brand }}
    >
      <div
        className="flex items-center justify-center text-[#62736A] transition-colors duration-300 group-hover:text-[var(--brand)]"
        style={{ width: size, height: size }}
      >
        {tech.svg({ className: 'h-full w-full' })}
      </div>
      <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-[#62736A] transition-colors duration-300 group-hover:text-[var(--brand)]">
        {tech.name}
      </span>
    </div>
  );
}
