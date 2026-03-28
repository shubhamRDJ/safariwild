// ─── SHARED STYLE CONSTANTS ────────────────────────────────────────────────────
import { useState, useEffect } from 'react';

// Hook to get current breakpoint
export function useBreakpoint() {
  const getBreakpoint = () => {
    const w = window.innerWidth;
    if (w < 480) return 'xs';
    if (w < 768) return 'sm';
    if (w < 1024) return 'md';
    return 'lg';
  };
  const [bp, setBp] = useState(getBreakpoint);
  useEffect(() => {
    const handler = () => setBp(getBreakpoint());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return {
    bp,
    isMobile: bp === 'xs' || bp === 'sm',
    isTablet: bp === 'md',
    isDesktop: bp === 'lg',
  };
}

export const goldBtnStyle = {
  background: 'linear-gradient(135deg, #D4AF37, #a07d20)',
  border: 'none',
  color: '#0a0a08',
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: '0.9rem',
  letterSpacing: '0.06em',
  padding: '12px 28px',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
};

export const ghostBtnStyle = {
  background: 'transparent',
  border: '1px solid rgba(212,175,55,0.4)',
  color: '#D4AF37',
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 600,
  fontSize: '0.95rem',
  letterSpacing: '0.05em',
  padding: '11px 26px',
  borderRadius: '6px',
  cursor: 'pointer',
};

export const eyebrowStyle = {
  fontFamily: "'Cormorant Garamond', serif",
  color: '#D4AF37',
  letterSpacing: '0.25em',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  marginBottom: '0.8rem',
};

export const sectionTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
  color: '#f5efe0',
  fontWeight: 400,
  lineHeight: 1.2,
  marginBottom: '1.2rem',
};

export const pageTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(2rem, 5vw, 3.8rem)',
  color: '#f5efe0',
  fontWeight: 400,
  lineHeight: 1.15,
  margin: '0.5rem 0 0',
};

export const labelStyle = {
  display: 'block',
  fontFamily: "'Cormorant Garamond', serif",
  color: '#a89060',
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  marginBottom: '6px',
};

export const inputStyle = {
  width: '100%',
  background: 'rgba(212,175,55,0.05)',
  border: '1px solid rgba(212,175,55,0.2)',
  borderRadius: '6px',
  color: '#f5efe0',
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '1rem',
  padding: '10px 14px',
  outline: 'none',
  boxSizing: 'border-box',
};
