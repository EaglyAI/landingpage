import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OwnerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftCardRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        rightCardRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/starfield-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-space-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div
            ref={leftCardRef}
            className="w-full lg:w-[500px] h-[400px] glass-panel rounded-2xl p-4 overflow-hidden"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src="/owner-portrait.jpg"
                alt="Business Owner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl px-4 py-3">
                <p className="text-sm font-medium text-text-primary">
                  Sarah Mitchell
                </p>
                <p className="text-xs text-text-secondary">
                  Owner, Mitchell Home Services
                </p>
              </div>
            </div>
          </div>

          <div
            ref={rightCardRef}
            className="w-full lg:w-[450px] glass-panel rounded-2xl p-8"
          >
            <Quote className="w-10 h-10 text-indigo-500/50 mb-6" />

            <blockquote className="font-display text-2xl md:text-3xl text-text-primary leading-tight mb-8">
              "I don't check dashboards. I just wake up to booked jobs and paid
              invoices."
            </blockquote>

            <p className="text-sm text-text-secondary mb-8">
              — Owner, Home Services Business
            </p>

            <Button
              size="lg"
              onClick={scrollToSignup}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-6 rounded-full text-base transition-all hover:shadow-glow group"
            >
              Activate your AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
