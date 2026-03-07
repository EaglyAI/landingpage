import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CockpitSectionProps {
  className?: string;
}

export default function CockpitSection({ className = '' }: CockpitSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);
  const [taskCount, setTaskCount] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaskCount(prev => prev + Math.floor(Math.random() * 3));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%', // Reduced from +=140%
          pin: true,
          scrub: 0.4, // Reduced from 0.7
        },
      });

      // ENTRANCE (0-30%) - FASTER
      scrollTl
        .fromTo(
          dashboardRef.current,
          { y: '80vh', scale: 0.92, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, ease: 'power3.out' },
          0
        )
        .fromTo(
          navRef.current?.children || [],
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.015 },
          0.05
        )
        .fromTo(
          headlineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 },
          0.06
        )
        .fromTo(
          subheadlineRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          0.1
        )
        .fromTo(
          bottomLeftRef.current,
          { x: '-10vw', opacity: 0 },
          { x: 0, opacity: 1 },
          0.08
        )
        .fromTo(
          bottomRightRef.current,
          { x: '10vw', opacity: 0 },
          { x: 0, opacity: 1 },
          0.08
        );

      // EXIT (70-100%) - FASTER
      scrollTl
        .fromTo(
          dashboardRef.current,
          { y: 0, opacity: 1 },
          { y: '-25vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          bottomLeftRef.current,
          { x: 0, opacity: 1 },
          { x: '-8vw', opacity: 0.2, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          bottomRightRef.current,
          { x: 0, opacity: 1 },
          { x: '8vw', opacity: 0.2, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-pinned flex items-center justify-center ${className}`}
    >
      <div
        className="absolute inset-0 z-0 opacity-85"
        style={{
          backgroundImage: 'url(/starfield-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-space-black/40" />
      </div>

      <div
        ref={dashboardRef}
        className="relative z-10 w-[86vw] h-[78vh] glass-panel rounded-2xl flex flex-col"
      >
        <div
          ref={navRef}
          className="flex items-center justify-between px-8 py-6"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span className="font-display font-bold text-lg text-text-primary">
              Eagly
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-sm text-text-secondary hover:text-text-primary cursor-pointer transition-colors">
              Product
            </span>
            <span className="text-sm text-text-secondary hover:text-text-primary cursor-pointer transition-colors">
              Pricing
            </span>
            <span className="text-sm text-text-secondary hover:text-text-primary cursor-pointer transition-colors">
              Security
            </span>
          </div>

          <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-all hover:shadow-glow">
            Activate your AI
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div ref={headlineRef} className="text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
              The AI that runs your business.
            </h2>
          </div>
          <p
            ref={subheadlineRef}
            className="text-base md:text-lg text-text-secondary max-w-xl text-center mt-4"
          >
            Answer calls, book jobs, send invoices, collect payments, and follow up
            with customers — automatically.
          </p>
        </div>

        <div className="flex items-end justify-between px-8 pb-8">
          <div
            ref={bottomLeftRef}
            className="glass-card rounded-xl px-5 py-4 flex items-center gap-4"
          >
            <div>
              <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
                AI Status
              </p>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full status-pulse" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-50" />
                </div>
                <span className="text-sm font-medium text-text-primary">
                  Online
                </span>
                <span className="text-xs text-text-secondary ml-2">
                  99.99%
                </span>
              </div>
            </div>
          </div>

          <div
            ref={bottomRightRef}
            className="glass-card rounded-xl px-5 py-4"
          >
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
              Tasks completed
            </p>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-500" />
              <span className="text-xl font-display font-bold text-text-primary">
                {taskCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
