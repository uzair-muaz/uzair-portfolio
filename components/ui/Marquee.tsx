'use client';

import React from 'react';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className = '',
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={`flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
        pauseOnHover ? 'marquee-track' : ''
      } ${vertical ? 'flex-col' : 'flex-row'} ${className}`}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={`flex shrink-0 justify-start [gap:var(--gap)] ${
            vertical
              ? 'animate-marquee-vertical flex-col'
              : 'animate-marquee flex-row'
          } ${reverse ? '[animation-direction:reverse]' : ''}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
