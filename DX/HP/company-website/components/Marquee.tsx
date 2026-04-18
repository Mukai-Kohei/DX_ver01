'use client';

const tokens = ['DX SOLUTION', 'Digital Marketing', 'DX × MARKETING', 'Partnership', 'Since 2024'];

export default function Marquee() {
  const sequence = Array.from({ length: 4 }).flatMap(() => tokens);
  return (
    <div
      style={{
        background: 'var(--ink)',
        overflow: 'hidden',
        padding: '20px 0',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '56px',
          width: 'max-content',
          animation: 'marqueeScroll 34s linear infinite',
          paddingLeft: '56px',
        }}
      >
        {[...sequence, ...sequence].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '56px' }}>
            <span
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.85)',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}
            >
              {item}
            </span>
            <span
              aria-hidden
              style={{ color: 'rgba(255,255,255,0.25)', fontSize: '8px' }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
