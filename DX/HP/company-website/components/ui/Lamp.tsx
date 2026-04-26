'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Lamp color (cyan accent by default) */
  accent?: string;
  /** Section background (slate-950 by default) */
  bg?: string;
}

export function LampContainer({
  children,
  className = '',
  style,
  accent = '#22d3ee',
  bg = '#020617',
}: LampContainerProps) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: bg,
        width: '100%',
        zIndex: 0,
        isolation: 'isolate',
        ...style,
      }}
    >
      {/* Lamp light cones */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'scaleY(1.25)',
          isolation: 'isolate',
          zIndex: 0,
        }}
      >
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            right: '50%',
            height: '14rem',
            backgroundImage: `conic-gradient(from 70deg at center top, ${accent} 0deg, transparent 60deg, transparent 360deg)`,
            color: '#fff',
            overflow: 'visible',
          }}
        >
          {/* Bottom fade */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '10rem',
              background: bg,
              zIndex: 20,
              maskImage: 'linear-gradient(to top, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            }}
          />
          {/* Right side fade */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '10rem',
              height: '100%',
              background: bg,
              zIndex: 20,
              maskImage: 'linear-gradient(to right, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, white, transparent)',
            }}
          />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: '50%',
            height: '14rem',
            backgroundImage: `conic-gradient(from 290deg at center top, transparent 0deg, transparent 300deg, ${accent} 360deg)`,
            color: '#fff',
            overflow: 'visible',
          }}
        >
          {/* Left side fade */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '10rem',
              height: '100%',
              background: bg,
              zIndex: 20,
              maskImage: 'linear-gradient(to left, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to left, white, transparent)',
            }}
          />
          {/* Bottom fade */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              height: '10rem',
              background: bg,
              zIndex: 20,
              maskImage: 'linear-gradient(to top, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            }}
          />
        </motion.div>

        {/* Bottom blur band */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            height: '12rem',
            width: '100%',
            transform: 'translateY(3rem) scaleX(1.5)',
            background: bg,
            filter: 'blur(40px)',
          }}
        />

        {/* Glass sheen */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            zIndex: 50,
            height: '12rem',
            width: '100%',
            background: 'transparent',
            opacity: 0.1,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />

        {/* Big glow */}
        <div
          style={{
            position: 'absolute',
            zIndex: 50,
            height: '9rem',
            width: '28rem',
            transform: 'translateY(-50%)',
            borderRadius: '9999px',
            background: accent,
            opacity: 0.5,
            filter: 'blur(80px)',
          }}
        />

        {/* Soft inner glow */}
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            zIndex: 30,
            height: '9rem',
            transform: 'translateY(-6rem)',
            borderRadius: '9999px',
            background: accent,
            filter: 'blur(48px)',
            opacity: 0.85,
          }}
        />

        {/* Sharp light bar */}
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            zIndex: 50,
            height: '2px',
            transform: 'translateY(-7rem)',
            background: accent,
            boxShadow: `0 0 12px ${accent}`,
          }}
        />

        {/* Top mask to hide cone overflow */}
        <div
          style={{
            position: 'absolute',
            zIndex: 40,
            height: '11rem',
            width: '100%',
            transform: 'translateY(-12.5rem)',
            background: bg,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 50,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
