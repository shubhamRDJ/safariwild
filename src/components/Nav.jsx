import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home',           page: 'home'    },
  { label: 'Safari Booking', page: 'booking' },
  { label: 'Chambal Safari', page: 'chambal' },
  { label: 'Hotels',         page: 'hotels'  },
  { label: 'Blog',           page: 'blog'    },
  { label: 'Contact',        page: 'contact' },
];

export default function Nav({ navigate, currentPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < 900);
    
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Close mobile menu if screen is resized to desktop width
  useEffect(() => { 
    if (!isMobile) setOpen(false); 
  }, [isMobile]);

  const go = (pg) => { 
    navigate(pg); 
    setOpen(false); 
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <header style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 300,
        // FIX: Changed from 'transparent' to solid dark background
        background: '#0a0a08', 
        backdropFilter: 'blur(12px)',
        // Optional: Show a subtle border only when scrolled for depth
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 clamp(1rem, 4vw, 2rem)', 
        height: '68px',
      }}>

        {/* Logo Section */}
        <div onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <span style={{ fontSize: '1.6rem' }}>🐯</span>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: '1rem', 
              color: '#D4AF37', 
              letterSpacing: '0.1em' 
            }}>
              WILDLIFE
            </div>
            <div style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: '0.7rem', 
              color: '#a89060', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase' 
            }}>
              Safari India
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {NAV_LINKS.map(l => (
              <button 
                key={l.page} 
                onClick={() => go(l.page)} 
                style={{
                  background: currentPage === l.page ? 'rgba(212,175,55,0.12)' : 'transparent',
                  border: currentPage === l.page ? '1px solid rgba(212,175,55,0.3)' : '1px solid transparent',
                  color: currentPage === l.page ? '#D4AF37' : '#c8b89a',
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: '0.85rem',
                  letterSpacing: '0.05em', 
                  padding: '6px 14px', 
                  borderRadius: '20px',
                  cursor: 'pointer', 
                  transition: 'all 0.2s',
                }}
              >
                {l.label}
              </button>
            ))}
            <button 
              onClick={() => go('booking')} 
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #a07d20)',
                border: 'none', 
                color: '#0a0a08', 
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700, 
                fontSize: '0.85rem', 
                letterSpacing: '0.08em',
                padding: '8px 20px', 
                borderRadius: '20px', 
                cursor: 'pointer', 
                marginLeft: '8px',
              }}
            >
              Book Now
            </button>
          </nav>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button 
            onClick={() => setOpen(!open)} 
            style={{
              background: 'none', 
              border: '1px solid rgba(212,175,55,0.3)',
              color: '#D4AF37', 
              fontSize: '1.2rem', 
              cursor: 'pointer',
              padding: '6px 12px', 
              borderRadius: '6px',
              zIndex: 400, // Ensure it stays above the drawer
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        )}
      </header>

      {/* Mobile Menu Drawer */}
      {open && isMobile && (
        <div style={{
          position: 'fixed', 
          inset: 0, 
          zIndex: 200,
          background: '#0a0a08', // Solid black background
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '1.2rem',
          paddingTop: '68px',
        }}>
          {NAV_LINKS.map(l => (
            <button 
              key={l.page} 
              onClick={() => go(l.page)} 
              style={{
                background: 'none', 
                border: 'none',
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 5vw, 1.8rem)',
                color: currentPage === l.page ? '#D4AF37' : '#c8b89a',
                cursor: 'pointer', 
                letterSpacing: '0.05em',
                padding: '0.3rem 1rem',
              }}
            >
              {l.label}
            </button>
          ))}
          <button 
            onClick={() => go('booking')} 
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #a07d20)',
              border: 'none', 
              color: '#0a0a08',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700, 
              fontSize: '1rem',
              padding: '13px 36px', 
              borderRadius: '24px', 
              cursor: 'pointer', 
              marginTop: '0.5rem',
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
}