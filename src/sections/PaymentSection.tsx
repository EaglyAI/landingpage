import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, CreditCard, Link2, Banknote, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PaymentSection() {
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
      ref={sectionRef}
      className="relative py-24"
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
            Payments made simple
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Send links. Get paid. No chasing.
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
                  Payment Request
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
                    Can I pay online?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-4 h-4 text-indigo-500" />
                </div>
                <div className="bg-indigo-500/20 border border-indigo-500/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-text-primary">
                    Yes. Here's your secure link.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <button className="flex items-center gap-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 text-xs font-medium px-4 py-2 rounded-full transition-colors">
                <Link2 className="w-3.5 h-3.5" />
                Send link
              </button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-text-secondary text-xs font-medium px-4 py-2 rounded-full transition-colors">
                <Banknote className="w-3.5 h-3.5" />
                Cash
              </button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-text-secondary text-xs font-medium px-4 py-2 rounded-full transition-colors">
                <FileText className="w-3.5 h-3.5" />
                Invoice later
              </button>
            </div>
          </div>

          {/* Right Payment Card */}
          <div
            ref={rightCardRef}
            className="w-full lg:w-[500px] h-[350px] glass-panel rounded-2xl p-4 overflow-hidden flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-sm">
              <img
                src="/payment-card.jpg"
                alt="Secure Payment"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Secure Payment
                  </p>
                  <p className="text-xs text-text-secondary">
                    Encrypted • PCI compliant
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-display font-bold text-text-primary">
                  $245.00
                </p>
                <p className="text-xs text-emerald-400">Ready to process</p>
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
