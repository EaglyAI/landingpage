import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, Send, Workflow, CheckCircle2 } from 'lucide-react';

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
            className="w-full lg:w-[520px] glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <p className="text-sm font-medium text-text-primary">Owner command</p>
                <p className="text-xs text-text-secondary">Voice or message to AI operator</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Send className="w-4 h-4 text-text-secondary" />
                </div>
              </div>
            </div>

            <div className="space-y-4 py-5">
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%]">
                <p className="text-xs uppercase tracking-wide text-indigo-300 mb-1">Owner message</p>
                <p className="text-sm text-text-primary">
                  "Move the Wilson install to Friday 2 PM, send the new ETA, and collect a 30% deposit."
                </p>
              </div>

              <div className="bg-indigo-500/20 border border-indigo-500/30 rounded-2xl rounded-tr-sm px-4 py-3 ml-auto max-w-[92%]">
                <p className="text-xs uppercase tracking-wide text-indigo-300 mb-2">AI operator command</p>
                <div className="flex items-start gap-2">
                  <Workflow className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-text-primary">
                    Reschedule job #W-293 → Fri 2:00 PM → notify customer by SMS → request deposit link ($180).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-2.5">
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Job moved
              </div>
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ETA sent
              </div>
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Deposit requested
              </div>
            </div>
          </div>

          <div
            ref={rightCardRef}
            className="w-full lg:w-[430px] glass-panel rounded-2xl p-8"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary leading-tight mb-5">
              You instruct. Eagly executes.
            </h2>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
              Send a quick voice note or text and your AI operator turns it into a workflow command, updates the customer, and closes the loop.
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
