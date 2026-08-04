'use client';

import dynamic from 'next/dynamic';
import { Component, type ReactNode, useEffect, useRef, useState } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const SCENE_URL =
  'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

interface SplineHeroSceneProps {
  className?: string;
  /** When false, rendering + mouse events are stopped to free CPU. */
  active?: boolean;
}

class SplineErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default function SplineHeroScene({
  className = '',
  active = true,
}: SplineHeroSceneProps) {
  const [failed, setFailed] = useState(false);
  const appRef = useRef<Application | null>(null);

  function handleLoad(app: Application) {
    appRef.current = app;
    app.setBackgroundColor('transparent');

    for (const name of ['Rectangle 6', 'BG', 'Background', 'Floor']) {
      const obj = app.findObjectByName(name);
      if (obj) obj.visible = false;
    }

    if (!active) {
      app.stop();
    }
  }

  useEffect(() => {
    const app = appRef.current;
    if (!app) return;

    if (active) {
      if (app.isStopped) app.play();
    } else {
      app.stop();
    }
  }, [active]);

  useEffect(() => {
    return () => {
      appRef.current?.stop();
      appRef.current = null;
    };
  }, []);

  if (failed) return null;

  return (
    <div
      className={`spline-hero-canvas relative h-full w-full bg-transparent ${
        active ? '' : 'pointer-events-none'
      } ${className}`}
      aria-hidden={!active}
    >
      <SplineErrorBoundary onError={() => setFailed(true)}>
        <Spline
          scene={SCENE_URL}
          onLoad={handleLoad}
          renderOnDemand={false}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        />
      </SplineErrorBoundary>
    </div>
  );
}
