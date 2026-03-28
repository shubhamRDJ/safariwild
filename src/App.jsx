// ─── APP.JSX — Root entry, wires router + layout ─────────────────────────────
import React, { useEffect } from 'react';

// Utils
import { useRouter } from './utils/useRouter';

// Shared layout components
import Nav    from './components/Nav';
import Footer from './components/Footer';

// Pages
import HomePage    from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ChambalPage from './pages/ChambalPage';
import HotelsPage  from './pages/HotelsPage';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';

// Page registry — add new pages here
const PAGES = {
  home:    (nav) => <HomePage    navigate={nav} />,
  booking: ()    => <BookingPage />,
  chambal: (nav) => <ChambalPage navigate={nav} />,
  hotels:  (nav) => <HotelsPage  navigate={nav} />,
  contact: ()    => <ContactPage />,
  blog :(nav) => <Blog/>
};

export default function App() {
  const { page, navigate } = useRouter();

  // Load Google Fonts & reset body styles once
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap';
    link.rel  = 'stylesheet';
    document.head.appendChild(link);

    document.body.style.margin     = '0';
    document.body.style.background = '#0a0a08';
    document.body.style.color      = '#f5efe0';
  }, []);

  const renderPage = PAGES[page] ?? PAGES['home'];

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a08' }}>
      <Nav navigate={navigate} currentPage={page} />

      <main>
        {renderPage(navigate)}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
