'use client';

import { motion } from 'framer-motion';

interface HandWrittenBrandProps {
  text: string;
  textStyle?: React.CSSProperties;
  /** Stroke color for the hand-drawn oval */
  strokeColor?: string;
  /** Width of the drawn stroke in SVG units */
  strokeWidth?: number;
  style?: React.CSSProperties;
  /** Use whileInView (true) or animate-on-mount (false) */
  inView?: boolean;
}

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2.2,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
      opacity: { duration: 0.3 },
    },
  },
};

/**
 * Renders `text` with an animated hand-drawn oval that draws itself
 * around the brand name on mount (or when scrolled into view).
 */
export function HandWrittenBrand({
  text,
  textStyle,
  strokeColor = 'currentColor',
  strokeWidth = 3.5,
  style,
  inView = false,
}: HandWrittenBrandProps) {
  const animProps = inView
    ? { whileInView: 'visible' as const, viewport: { once: true } }
    : { animate: 'visible' as const };

  return (
    <span style={{ position: 'relative', display: 'inline-block', ...style }}>
      {/*
       * The SVG is absolutely positioned and slightly larger than the text.
       * It uses a fixed viewBox matching the expected rendered size of
       * "KARAKURI" in var(--f-mono) at the given font size, so the oval
       * sits snugly around the text without distortion.
       */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: '-10px',
          bottom: '-10px',
          left: '-16px',
          right: '-16px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 130 44"
          preserveAspectRatio="none"
          initial="hidden"
          {...animProps}
        >
          {/* Hand-drawn oval path: starts top-right, loops clockwise */}
          <motion.path
            d="M 112 6
               C 126 12, 132 28, 100 36
               C 70 42, 28 42, 10 34
               C -4 28, -2 14, 14 8
               C 28 2, 56 0, 80 1
               C 100 2, 112 6, 112 6"
            fill="none"
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
        </motion.svg>
      </span>

      {/* Brand text — fades in after the oval has started drawing */}
      <motion.span
        initial={{ opacity: 0 }}
        {...(inView
          ? { whileInView: { opacity: 1 }, viewport: { once: true } }
          : { animate: { opacity: 1 } })}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{ position: 'relative', zIndex: 1, ...textStyle }}
      >
        {text}
      </motion.span>
    </span>
  );
}
