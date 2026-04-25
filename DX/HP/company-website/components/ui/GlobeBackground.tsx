'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeBackgroundProps {
  size?: number;
  opacity?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function GlobeBackground({
  size = 700,
  opacity = 0.13,
  speed = 0.003,
  className = '',
  style,
}: GlobeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId: number;
    let phi = 0;

    function init() {
      const width = canvas!.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas!, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.25,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 8,
        baseColor: [0.96, 0.97, 1],
        markerColor: [0.18, 0.43, 1],
        glowColor: [0.9, 0.93, 1],
        markers: [
          { location: [37.78, -122.44], size: 0.022 },
          { location: [52.52, 13.41],   size: 0.018 },
          { location: [35.68, 139.65],  size: 0.026 },
          { location: [-23.55, -46.63], size: 0.016 },
          { location: [1.35, 103.82],   size: 0.018 },
        ],
      });

      function animate() {
        phi += speed;
        globe!.update({ phi, theta: 0.25 });
        animationId = requestAnimationFrame(animate);
      }
      animate();

      setTimeout(() => {
        if (canvas) canvas.style.opacity = '1';
      }, 50);
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: size,
        height: size,
        opacity: 0,
        transition: 'opacity 1.4s ease',
        borderRadius: '50%',
        display: 'block',
        ...style,
      }}
    />
  );
}
