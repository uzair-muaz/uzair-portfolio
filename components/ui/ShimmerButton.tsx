'use client';

import React from 'react';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = '#F2DC9D',
  shimmerSize = '0.1em',
  shimmerDuration = '3s',
  borderRadius = '9999px',
  background = 'rgba(242, 220, 157, 1)',
  className = '',
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          '--shimmer-color': shimmerColor,
          '--radius': borderRadius,
          '--speed': shimmerDuration,
          '--cut': shimmerSize,
          '--bg': background,
        } as React.CSSProperties
      }
      className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden font-mono font-bold text-xs text-[#0C100E] px-5 py-2.5 shadow-md active:scale-95 transition-transform ${className}`}
      {...props}
    >
      {/* spark container */}
      <div className="-z-30 absolute inset-0 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-spin [aspect-ratio:1] [inset:0_auto_auto_0] [mask:none]">
          <div className="absolute inset-[-100%] a-full w-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,var(--shimmer-color)_10%,transparent_20%)]" />
        </div>
      </div>

      {/* backdrop / content */}
      <div className="absolute inset-[1px] -z-20 rounded-[inherit] bg-[#F2DC9D] transition-colors group-hover:bg-[#F7E4B2]" />

      <div className="relative z-10 flex items-center gap-2">{children}</div>
    </button>
  );
}
