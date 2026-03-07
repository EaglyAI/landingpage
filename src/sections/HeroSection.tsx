import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/starfield-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/30 via-transparent to-space-black/60" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-text-primary mb-6">
          The AI that runs your business
        </h1>

        <p className="font-sans text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-4 leading-relaxed">
          Answer calls, book jobs, send invoices, collect payments, and run
          marketing — automatically.
        </p>

        <p className="font-sans text-lg md:text-xl text-text-secondary/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Built for cleaning companies, landscapers, plumbers, HVAC services,
          and other service businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection('signup')}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-6 rounded-full text-base transition-all hover:shadow-glow group"
          >
            Activate your AI
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('bookings')}
            className="border-white/20 text-text-primary hover:bg-white/5 font-medium px-8 py-6 rounded-full text-base backdrop-blur-sm"
          >
            <Play className="mr-2 w-5 h-5" />
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
}
