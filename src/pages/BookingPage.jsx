// ─── PAGE: BOOKING ─────────────────────────────────────────────────────────────
import React, { useState } from 'react';
import { useBreakpoint } from '../utils/styles';
import '../booking.css';

// ── Main Booking Page ──────────────────────────────────────────────────────────
export default function BookingPage() {
  const { isMobile } = useBreakpoint();
  const [form, setForm] = useState({
    name: '', date: '', type: 'Jeep',
    zone: 'Zone 1', time: 'Morning', email: '', phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle standard form inputs and selects
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="booking">
      <div className="booking__inner">

        <p className="booking__eyebrow">Reserve Your Spot</p>
        <h1 className="booking__title">
          Book a <em>Safari</em>
        </h1>

        <form onSubmit={submit} className="booking__form">
          <div className={`booking__grid${isMobile ? ' booking__grid--mobile' : ''}`}>
            {/* Text and Date Inputs */}
            {[
              { label: 'Full Name',    name: 'name',  type: 'text',  placeholder: 'Your Name'       },
              { label: 'Safari Date',  name: 'date',  type: 'date'                                  },
              { label: 'Email',        name: 'email', type: 'email', placeholder: 'your@email.com'  },
              { label: 'Phone Number', name: 'phone', type: 'text',  placeholder: '+91 XXXXX XXXXX' },
            ].map(f => (
              <div key={f.name} className="booking__field">
                <label className="booking__label">{f.label}</label>
                <input
                  name={f.name} type={f.type} value={form[f.name]}
                  onChange={handle} placeholder={f.placeholder}
                  required={['name', 'date', 'email'].includes(f.name)}
                  className="booking__input"
                />
              </div>
            ))}

            {/* Select Dropdowns */}
            {[
              { label: 'Safari Type', name: 'type', opts: ['Gypsy', 'Canter'] },
              // Updated to include Zones 1 through 10
              { label: 'Safari Zone', name: 'zone', opts: [1,2,3,4,5,6,7,8,9,10].map(z => `Zone ${z}`) },
              { label: 'Safari Time', name: 'time', opts: ['Morning', 'Evening'] },
            ].map(s => (
              <div key={s.name} className="booking__field">
                <label className="booking__label">{s.label}</label>
                <select
                  name={s.name} value={form[s.name]} onChange={handle}
                  className="booking__select"
                >
                  {s.opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className={`booking__submit-btn${submitted ? ' booking__submit-btn--success' : ''}`}
          >
            {submitted ? '✓ Booking Request Sent!' : 'Submit Booking Request'}
          </button>

          {/* Google Map Section */}
          <div className="booking__location">
            <p className="booking__location-eyebrow">Find Us</p>
            <p className="booking__location-desc">
              Safari by Mirza — Ranthambore Safari Booking, Sawai Madhopur, Rajasthan
            </p>

            <div className="booking__map-embed">
              <div className="booking__map-embed-label">Sawai Madhopur · Rajasthan</div>

              <iframe
                title="Safari by Mirza Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123456789!2d76.3629!3d26.0173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971c9e9af9d9f4b%3A0x1234567890abcdef!2sSafari%20by%20mirza%20-%20Ranthambore%20Safari%20booking!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="booking__map-embed-footer">
                <div className="booking__map-place">
                  <span className="booking__map-place-icon">📍</span>
                  <div>
                    <div className="booking__map-place-name">Safari by Mirza</div>
                    <div className="booking__map-place-addr">Ranthambore Safari Booking, Sawai Madhopur</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📞</span>
                  <span className="booking__map-phone">+91 322021</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/ranthambore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking__map-open-link"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}