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
import IndustryPage from './pages/IndustryPage';
import { getIndustryByPath, industryRoutePrefix } from './data/industryPages';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
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

function IndustryNotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-space-black px-6 text-foreground">
      <div className="noise-overlay" />
      <div className="glass-panel relative max-w-xl rounded-3xl p-10 text-center">
        <h1 className="text-4xl font-semibold">Industry page not found</h1>
        <p className="mt-4 text-muted-foreground">
          This route is reserved for industry pages under <code>{industryRoutePrefix}</code>. Add a matching slug in the shared
          industry data object.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
}

function App() {
  const industryData = getIndustryByPath(window.location.pathname);

  if (window.location.pathname.startsWith(industryRoutePrefix)) {
    if (!industryData) {
      return <IndustryNotFoundPage />;
    }

    return <IndustryPage data={industryData} />;
  }

  return <HomePage />;
}

export default App;
