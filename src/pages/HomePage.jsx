// ─── PAGE: HOME ────────────────────────────────────────────────────────────────
// Composes Hero + WhyUs + Attractions + Reach + CtaBand sub-sections
import React from 'react';
import Hero       from './Hero';
import WhyUs      from './WhyUs';
import Attractions from './Attractions';
import Reach      from './Reach';
import CtaBand    from './CtaBand';
import Formpage from  './BookingPage';

export default function HomePage({ navigate }) {
  return (
    <div>
      <Hero        navigate={navigate} />
       <Formpage/>
      <WhyUs       navigate={navigate} />
     
      <Attractions />
      <Reach       navigate={navigate} />
      <CtaBand     navigate={navigate} />
    </div>
  );
}
