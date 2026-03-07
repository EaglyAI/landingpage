
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomePage from '@/pages/HomePage';

import { useIndustryMetadata } from './hooks/useIndustryMetadata';

gsap.registerPlugin(ScrollTrigger);


function App() {
  useIndustryMetadata();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  return <HomePage />;
}

export default App;
