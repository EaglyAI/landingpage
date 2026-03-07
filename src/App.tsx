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
import { useIndustryMetadata } from './hooks/useIndustryMetadata';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useIndustryMetadata();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-space-black">
      <div className="noise-overlay" />
      
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        <BookingSection />
        <PaymentSection />
        <CalendarSection />
        <OwnerSection />
        <ClosingSection />
      </main>
    </div>
  );
}

export default App;
