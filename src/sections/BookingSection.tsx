import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, MapPin, Check, Calendar, StickyNote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BookingSection() {
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

  return (
    <section
      id="bookings"
      ref={sectionRef}
      className="relative py-24 scroll-mt-28"
    >
      {/* Background */}
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
            Bookings on autopilot
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Customers message. AI confirms. Job scheduled.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Chat Card */}
          <div
            ref={leftCardRef}
            className="w-full lg:w-[400px] glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  New Request
                </p>
                <p className="text-xs text-text-secondary">Just now</p>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-text-primary">JD</span>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-text-primary">
                    Can I book for next Tuesday?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-4 h-4 text-indigo-500" />
                </div>
                <div className="bg-indigo-500/20 border border-indigo-500/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-text-primary">
                    Yes. I've reserved 10:00 AM. Confirm to lock it in.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <button className="flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-xs font-medium px-4 py-2 rounded-full transition-colors">
                <Check className="w-3.5 h-3.5" />
                Confirm
              </button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-text-secondary text-xs font-medium px-4 py-2 rounded-full transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                Reschedule
              </button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-text-secondary text-xs font-medium px-4 py-2 rounded-full transition-colors">
                <StickyNote className="w-3.5 h-3.5" />
                Add note
              </button>
            </div>
          </div>

          {/* Right Map Card */}
          <div
            ref={rightCardRef}
            className="w-full lg:w-[500px] h-[350px] glass-panel rounded-2xl p-4 overflow-hidden"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src="/map-ui.jpg"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Service Location
                  </p>
                  <p className="text-xs text-text-secondary">
                    2.3 miles away • 12 min drive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
