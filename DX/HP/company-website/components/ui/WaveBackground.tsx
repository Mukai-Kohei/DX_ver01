'use client';

interface WaveBackgroundProps {
  /** Wave fill colour. Layers vary only in opacity. */
  color?: string;
  /** Multiplies every layer's opacity — lower it on busier backgrounds. */
  intensity?: number;
  /** Multiplies every layer's duration — higher is slower. */
  speed?: number;
  style?: React.CSSProperties;
}

/*
 * Each path spans two full periods across a 2880-wide viewBox, so shifting a
 * layer by exactly -50% lands on an identical crest and the loop is seamless.
 * One period = 1440 units, built from two mirrored cubics (up-hump, down-hump).
 */
const WAVE_BACK =
  'M0,120 C180,30 540,30 720,120 C900,210 1260,210 1440,120 ' +
  'C1620,30 1980,30 2160,120 C2340,210 2700,210 2880,120 L2880,320 L0,320 Z';

const WAVE_MID =
  'M0,160 C180,90 540,90 720,160 C900,230 1260,230 1440,160 ' +
  'C1620,90 1980,90 2160,160 C2340,230 2700,230 2880,160 L2880,320 L0,320 Z';

const WAVE_FRONT =
  'M0,200 C180,150 540,150 720,200 C900,250 1260,250 1440,200 ' +
  'C1620,150 1980,150 2160,200 C2340,250 2700,250 2880,200 L2880,320 L0,320 Z';

export function WaveBackground({
  color = '#FFFFFF',
  intensity = 1,
  speed = 1,
  style,
}: WaveBackgroundProps) {
  const layers = [
    { d: WAVE_BACK,  opacity: 0.34 * intensity, duration: 44 * speed, reverse: false, top: '8%',  height: '74%' },
    { d: WAVE_MID,   opacity: 0.50 * intensity, duration: 34 * speed, reverse: true,  bottom: '0', height: '60%' },
    { d: WAVE_FRONT, opacity: 0.62 * intensity, duration: 26 * speed, reverse: false, bottom: '0', height: '42%' },
  ];

  return (
    <div
      aria-hidden
      className="wave-bg"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
    >
      {layers.map((l, i) => (
        <svg
          key={i}
          className={`wave-layer ${l.reverse ? 'is-rev' : ''}`}
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            left: 0,
            top: l.top,
            bottom: l.bottom,
            width: '200%',
            height: l.height,
            opacity: l.opacity,
            animationDuration: `${l.duration}s`,
          }}
        >
          <path d={l.d} fill={color} />
        </svg>
      ))}

      <style>{`
        .wave-bg .wave-layer {
          will-change: transform;
          animation-name: waveDrift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .wave-bg .wave-layer.is-rev {
          animation-name: waveDriftRev;
        }
        @keyframes waveDrift {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes waveDriftRev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wave-bg .wave-layer { animation: none; }
        }
      `}</style>
    </div>
  );
}
