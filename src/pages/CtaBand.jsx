// ─── PAGE SECTION: CTA BAND ───────────────────────────────────────────────────
import React from 'react';
import { eyebrowStyle, goldBtnStyle, ghostBtnStyle } from '../utils/styles';

export default function CtaBand({ navigate }) {
  return (
    <section style={{ position: 'relative', padding: 'clamp(4rem, 10vw, 6rem) clamp(1rem, 4vw, 2rem)', textAlign: 'center', overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1400&q=80"
        alt="Forest"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,8,0.78)' }} />

      <div style={{ position: 'relative', maxWidth: '650px', margin: '0 auto' }}>
        <p style={{ ...eyebrowStyle, color: '#D4AF37' }}>Plan Your Visit</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          color: '#f5efe0', fontWeight: 400, marginBottom: '1.2rem',
        }}>
          Book Your Safari{' '}
          <em style={{ color: '#D4AF37', fontStyle: 'italic' }}>Online</em>{' '}
          with Us
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c8b89a', lineHeight: 1.8, marginBottom: '2rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
          Easily book your safari online for a seamless, hassle-free adventure in Ranthambore.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => { navigate('booking'); window.scrollTo(0, 0); }} style={goldBtnStyle}>
            Book Safari Now
          </button>
          <button onClick={() => { navigate('chambal'); window.scrollTo(0, 0); }} style={ghostBtnStyle}>
            Chambal Safari →
          </button>
        </div>
      </div>
    </section>
  );
}
