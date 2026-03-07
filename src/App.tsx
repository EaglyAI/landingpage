
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import BookingSection from './sections/BookingSection';
import PaymentSection from './sections/PaymentSection';
import CalendarSection from './sections/CalendarSection';
import OwnerSection from './sections/OwnerSection';
import ClosingSection from './sections/ClosingSection';
import HomePage from '@/pages/HomePage';
import IndustriesPage from '@/pages/IndustriesPage';

import { useIndustryMetadata } from './hooks/useIndustryMetadata';

gsap.registerPlugin(ScrollTrigger);


function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  useIndustryMetadata();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  if (pathname === '/industries') {
    return <IndustriesPage />;
  }

  return <HomePage />;
}

export default App;
