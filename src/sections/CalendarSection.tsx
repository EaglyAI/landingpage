import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Headphones, CalendarCheck, CreditCard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CalendarSection() {
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
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Schedule stays full
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Calendar, reminders, and follow-ups stay in sync automatically.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div
            ref={leftCardRef}
            className="w-full lg:w-[500px] h-[400px] glass-panel rounded-2xl p-4 overflow-hidden"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src="/calendar-ui.jpg"
                alt="Calendar"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 glass-card rounded-xl px-4 py-2">
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  This Week
                </p>
                <p className="text-lg font-display font-bold text-text-primary">
                  12 bookings
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse shadow-glow" />
              </div>
            </div>
          </div>

          <div
            ref={rightCardRef}
            className="w-full lg:w-[450px] glass-panel rounded-2xl p-8"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
              It runs itself.
            </h2>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
              Eagly answers, books, reminds, and collects payment—so you don't
              have to.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-sm text-text-primary">
                  24/7 AI receptionist
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CalendarCheck className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-sm text-text-primary">
                  Auto-booking + reminders
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-sm text-text-primary">
                  Built-in payments
                </span>
              </li>
            </ul>

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
