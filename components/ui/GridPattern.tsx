'use client';

import { useId, useMemo } from 'react';

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = '0',
  className = '',
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-gray-400/10 stroke-[#283831]/60 ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export function Meteors({ number = 16 }: { number?: number }) {
  const meteorStyles = useMemo(() => {
    return Array.from({ length: number }).map((_, i) => {
      // Deterministic hash based on index
      const seed1 = (i * 9301 + 49297) % 233280;
      const rand1 = seed1 / 233280;
      const seed2 = (i * 12345 + 67890) % 233280;
      const rand2 = seed2 / 233280;
      const seed3 = (i * 54321 + 98765) % 233280;
      const rand3 = seed3 / 233280;

      return {
        left: Math.floor(rand1 * 120 - 10) + '%',
        animationDelay: (rand2 * 3).toFixed(2) + 's',
        animationDuration: Math.floor(rand3 * 5 + 4) + 's',
      };
    });
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="animate-meteor absolute h-1 w-1 rounded-full bg-[#F2DC9D] shadow-[0_0_12px_#F2DC9D]"
          style={{
            top: '-20px',
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1.5px] w-[110px] -translate-y-1/2 bg-gradient-to-r from-[#F2DC9D] via-[#98D198]/60 to-transparent" />
        </span>
      ))}
    </div>
  );
}
