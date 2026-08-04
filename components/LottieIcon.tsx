'use client';

import React, { useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'framer-motion';

// Lightweight vector Lottie JSON animation definitions
const LOTTIE_ANIMATIONS = {
  // 1. Code / Tech Lottie
  code: {
    v: '5.7.4',
    fr: 30,
    ip: 0,
    op: 60,
    w: 100,
    h: 100,
    nm: 'Code',
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: 'Bracket Left',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [35, 50, 0] },
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 30, s: [30, 50, 0] },
              { t: 60, s: [35, 50, 0] },
            ],
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                ty: 'sh',
                ks: {
                  a: 0,
                  k: {
                    c: false,
                    i: [[0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0]],
                    v: [[5, -15], [-10, 0], [5, 15]],
                  },
                },
              },
              {
                ty: 'st',
                c: { a: 0, k: [0.95, 0.86, 0.61, 1] },
                w: { a: 0, k: 6 },
                lc: 2,
                lj: 2,
              },
              { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: 'Bracket Right',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [65, 50, 0] },
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 30, s: [70, 50, 0] },
              { t: 60, s: [65, 50, 0] },
            ],
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                ty: 'sh',
                ks: {
                  a: 0,
                  k: {
                    c: false,
                    i: [[0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0]],
                    v: [[-5, -15], [10, 0], [-5, 15]],
                  },
                },
              },
              {
                ty: 'st',
                c: { a: 0, k: [0.6, 0.82, 0.6, 1] },
                w: { a: 0, k: 6 },
                lc: 2,
                lj: 2,
              },
              { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
      },
    ],
  },
  // 2. Server / Cloud Lottie
  server: {
    v: '5.7.4',
    fr: 30,
    ip: 0,
    op: 60,
    w: 100,
    h: 100,
    nm: 'Server',
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: 'Server Box 1',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [50, 32, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                ty: 'rect',
                p: { a: 0, k: [0, 0] },
                s: { a: 0, k: [60, 20] },
                r: { a: 0, k: 4 },
              },
              {
                ty: 'st',
                c: { a: 0, k: [0.95, 0.86, 0.61, 1] },
                w: { a: 0, k: 4 },
              },
              { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: 'Server Box 2',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [50, 68, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                ty: 'rect',
                p: { a: 0, k: [0, 0] },
                s: { a: 0, k: [60, 20] },
                r: { a: 0, k: 4 },
              },
              {
                ty: 'st',
                c: { a: 0, k: [0.6, 0.82, 0.6, 1] },
                w: { a: 0, k: 4 },
              },
              { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: 'Blinking LED',
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [100] },
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 15, s: [20] },
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 30, s: [100] },
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 45, s: [20] },
              { t: 60, s: [100] },
            ],
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [68, 32, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'gr',
            it: [
              { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [6, 6] } },
              { ty: 'fl', c: { a: 0, k: [0.6, 0.82, 0.6, 1] } },
              { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
      },
    ],
  },
  // 3. AI / Sparkle Lottie
  sparkle: {
    v: '5.7.4',
    fr: 30,
    ip: 0,
    op: 60,
    w: 100,
    h: 100,
    nm: 'Sparkle',
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: 'Star Sparkle',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [0] },
              { t: 60, s: [360] },
            ],
          },
          p: { a: 0, k: [50, 50, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [80, 80, 100] },
              { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 30, s: [120, 120, 100] },
              { t: 60, s: [80, 80, 100] },
            ],
          },
        },
        shapes: [
          {
            ty: 'gr',
            it: [
              {
                ty: 'sh',
                ks: {
                  a: 0,
                  k: {
                    c: true,
                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [[0, -25], [6, -6], [25, 0], [6, 6], [0, 25], [-6, 6], [-25, 0], [-6, -6]],
                  },
                },
              },
              { ty: 'fl', c: { a: 0, k: [0.95, 0.86, 0.61, 1] } },
              { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
            ],
          },
        ],
      },
    ],
  },
};

export type LottieType = keyof typeof LOTTIE_ANIMATIONS;

interface LottieIconProps {
  type?: LottieType;
  className?: string;
  size?: number;
}

export default function LottieIcon({ type = 'code', className = '', size = 32 }: LottieIconProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  function handleMouseEnter() {
    lottieRef.current?.goToAndPlay(0, true);
  }

  const animationData = LOTTIE_ANIMATIONS[type] || LOTTIE_ANIMATIONS.code;

  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleMouseEnter}
      className={`inline-flex items-center justify-center cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
}
