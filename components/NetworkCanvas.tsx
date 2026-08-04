'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface NetworkCanvasProps {
  /** Pause animation + mouse tracking when hero is off-screen. */
  active?: boolean;
}

export default function NetworkCanvas({ active = true }: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeRef = useRef(active);
  const rafRef = useRef(0);
  const startLoopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    activeRef.current = active;

    if (!active) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      return;
    }

    startLoopRef.current?.();
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const isMobile = window.innerWidth <= 640;
    const count = isMobile ? 24 : 48;
    const connectionRadius = isMobile ? 120 : 170;

    const points: Point[] = [];
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.2,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!activeRef.current) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      if (!activeRef.current) {
        rafRef.current = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionRadius) {
            const alpha = (1 - dist / connectionRadius) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(232, 213, 168, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        const mdx = p1.x - mouse.x;
        const mdy = p1.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180) {
          const mAlpha = (1 - mdist / 180) * 0.4;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(232, 213, 168, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? '#8FA88F' : '#E8D5A8';
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!rafRef.current && activeRef.current) {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    startLoopRef.current = startLoop;
    startLoop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      startLoopRef.current = null;
      window.removeEventListener('resize', handleResize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}
