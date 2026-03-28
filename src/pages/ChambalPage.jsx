// ─── PAGE: CHAMBAL SAFARI ─────────────────────────────────────────────────────
import React from 'react';
import '../chambal.css';

const HIGHLIGHTS = [
  { icon: '🐊', title: 'Gharial Sanctuary', desc: 'Spot the critically endangered gharial in their natural habitat along the river.' },
  { icon: '🐬', title: 'Gangetic Dolphins', desc: 'One of the few places to see the rare Gangetic river dolphin.' },
  { icon: '🦅', title: 'Bird Watching',     desc: 'Over 320 bird species including skimmers, storks, and rare migratory birds.' },
  { icon: '🚤', title: 'Boat Safaris',      desc: 'Glide through pristine ravines on guided boat safaris at sunrise.' },
];

export default function ChambalPage({ navigate }) {
  return (
    <div className="chambal">

      {/* Hero banner */}
      <div className="chambal__hero">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
          alt="Chambal River"
          className="chambal__hero-img"
        />
        <div className="chambal__hero-overlay" />
        <div className="chambal__hero-content">
          <p className="chambal__hero-eyebrow">Chambal River Safari</p>
          <h1 className="chambal__hero-title">
            The <em>Wild Heart</em> of Chambal
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="chambal__body">
        <p className="chambal__intro">
          The Chambal River sanctuary is one of India's best-kept wildlife secrets — a pristine
          ecosystem supporting critically endangered species in a dramatic ravine landscape.
        </p>

        {/* Highlight cards */}
        <div className="chambal__grid">
          {HIGHLIGHTS.map(({ icon, title, desc }) => (
            <div key={title} className="chambal__card">
              <span className="chambal__card-icon">{icon}</span>
              <h3 className="chambal__card-title">{title}</h3>
              <p className="chambal__card-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="chambal__cta">
          <button
            className="chambal__cta-btn"
            onClick={() => { navigate('booking'); window.scrollTo(0, 0); }}
          >
            Book Chambal Safari
          </button>
        </div>
      </div>
    </div>
  );
}
