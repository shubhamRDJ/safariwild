// ─── PAGE SECTION: HOW TO REACH ───────────────────────────────────────────────
import React from 'react';
import { eyebrowStyle, sectionTitleStyle, ghostBtnStyle, useBreakpoint } from '../utils/styles';

const MODES = [
  { icon: '✈️', title: 'By Air',   detail: 'Sanganer Airport, Jaipur — well connected to all major Indian cities, approx 180 km away.' },
  { icon: '🚂', title: 'By Train', detail: 'Sawai Madhopur Railway Station is the closest railhead, directly linking Ranthambore to the rest of India.' },
  { icon: '🚗', title: 'By Road',  detail: 'Accessible via state and private buses. Self-driving is also convenient — excellent road connectivity.' },
];

export default function Reach({ navigate }) {
  const { isMobile, isTablet } = useBreakpoint();
  const isNarrow = isMobile || isTablet;

  return (
    <section style={{ background: '#0d0d0b', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr',
        gap: isNarrow ? '2.5rem' : '4rem',
        alignItems: 'center',
      }}>

        {/* Left */}
        <div>
          <p style={eyebrowStyle}>How to Reach</p>
          <h2 style={sectionTitleStyle}>
            Getting to <em style={{ color: '#D4AF37', fontStyle: 'italic' }}>Ranthambore</em>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#a89060', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '2rem' }}>
            Ranthambore is easily accessible via air, rail, and road. Nestled in Rajasthan,
            the reserve is well connected to all major Indian cities.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {MODES.map(({ icon, title, detail }) => (
              <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', marginTop: '2px' }}>{icon}</span>
                <div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#f5efe0', fontSize: '1rem', marginBottom: '4px' }}>{title}</h4>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#a89060', fontSize: '0.9rem', lineHeight: 1.7 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpVcaOaI8y9Lctg3_y9hvGdqTGiH0eXCPiw&s"
            alt="Ranthambore landscape"
            style={{ width: '100%', borderRadius: '14px', display: 'block' }}
          />
          <div style={{
            marginTop: '1.5rem', padding: '1.5rem',
            background: 'rgba(212,175,55,0.05)',
            border: '1px solid rgba(212,175,55,0.15)',
            borderRadius: '12px',
          }}>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#f5efe0', marginBottom: '0.5rem' }}>Handpicked Hotels</h4>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#a89060', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              We partner with top-rated hotels near Ranthambore — from luxury resorts to cozy forest lodges.
            </p>
            <button
              onClick={() => { navigate('hotels'); window.scrollTo(0, 0); }}
              style={{ ...ghostBtnStyle, padding: '7px 18px', fontSize: '0.85rem' }}
            >
              View Hotels →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
