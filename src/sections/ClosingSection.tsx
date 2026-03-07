import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Sparkles, ArrowRight, Globe, TrendingUp, Zap, ExternalLink, Users, Layers, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type FeatureCategory = {
  title: string;
  description: string;
  items: string[];
};

type Industry = {
  name: string;
  description: string;
};

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  target: string[];
  includes: string[];
  limits: string[];
  cta: string;
  highlighted: boolean;
};

export default function ClosingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const signupRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        featuresRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        industriesRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: industriesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        pricingRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        signupRef.current,
        { scale: 0.98, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: signupRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const response = await fetch('https://formsubmit.co/ajax/info@eagly.ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Activate your AI - New lead',
          email,
          businessName: businessName || 'Not provided',
          phone: phone || 'Not provided',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again in a minute.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const featureCategories: FeatureCategory[] = [
    {
      title: '24/7 AI Front Desk',
      description: 'Never miss a lead or inbound question.',
      items: ['Answers calls and texts', 'Captures lead details', 'Handles FAQs automatically'],
    },
    {
      title: 'Smart Booking',
      description: 'Turn conversations into confirmed jobs.',
      items: ['Live availability checks', 'Automatic appointment scheduling', 'Instant confirmations'],
    },
    {
      title: 'Payments & Invoices',
      description: 'Get paid faster with less admin work.',
      items: ['Send payment links', 'Auto-generate invoices', 'Track paid and unpaid jobs'],
    },
    {
      title: 'Follow-ups on Autopilot',
      description: 'Keep jobs moving without manual chasing.',
      items: ['Appointment reminders', 'Missed-call recovery SMS', 'Post-job follow-up messages'],
    },
    {
      title: 'Owner Command Center',
      description: 'Run operations by asking, not clicking.',
      items: ['“Show today’s schedule”', '“Who still owes payment?”', '“Rebook last month customers”'],
    },
    {
      title: 'Growth Essentials',
      description: 'Bring in more business automatically.',
      items: ['Review request campaigns', 'Simple website with booking', 'Lead source tracking'],
    },
  ];

  const industries: Industry[] = [
    { name: 'Cleaning Services', description: 'Handle inbound calls, dispatch faster, and automate follow-ups.' },
    { name: 'Landscaping & Lawn Care', description: 'Capture every seasonal lead and keep recurring routes full.' },
    { name: 'Plumbing', description: 'Book urgent jobs instantly and keep technicians moving.' },
    { name: 'Electrical', description: 'Respond faster to service requests and reduce admin overhead.' },
    { name: 'HVAC', description: 'Manage high-volume calls and quote requests during peak seasons.' },
    { name: 'Pest Control', description: 'Automate reminders and repeat service scheduling for retention.' },
  ];

  const plans: Plan[] = [
    {
      name: 'Starter',
      price: '$99',
      period: '/mo',
      description: 'Built for solo operators and early-stage businesses.',
      target: ['solo owner-operators', 'new service businesses'],
      includes: [
        'AI receptionist',
        'missed call recovery',
        'booking & scheduling',
        'CRM',
        'invoices & payment links',
        'review requests',
        'AI website',
      ],
      limits: ['1 user', '1 phone number', '~1,000 conversations'],
      cta: 'Start Starter',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$249',
      period: '/mo',
      description: 'Most customers land here for deeper automation and team support.',
      target: ['growing home service teams', 'businesses moving beyond manual admin'],
      includes: [
        'Everything in Starter',
        'AI voice answering',
        'automations',
        'marketing campaigns',
        'multi-user',
        'employee scheduling',
        'analytics',
        'integrations',
        'automated follow-up campaigns',
      ],
      limits: ['5 users', '5,000 conversations'],
      cta: 'Start Growth',
      highlighted: true,
    },
    {
      name: 'Pro',
      price: '$499',
      period: '/mo',
      description: 'For established service businesses running multiple teams and locations.',
      target: ['multi-team operations', 'multi-location service businesses'],
      includes: [
        'Everything in Growth',
        'dispatch & route optimization',
        'multi-location support',
        'advanced marketing automation',
        'advanced analytics',
        'priority support',
        'custom workflows',
        'white-glove onboarding',
        'dedicated success manager',
      ],
      limits: ['20 users', '20,000 conversations'],
      cta: 'Start Pro',
      highlighted: false,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/starfield-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-space-black/70" />
      </div>

      <div id="features" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mb-24 scroll-mt-28">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The most important tools to run and grow your service business with AI.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {featureCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">{category.title}</h3>
              <p className="text-sm text-text-secondary mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-text-secondary leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/features.html"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-text-primary hover:bg-white/5 transition-colors"
          >
            See all features
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div id="industries" className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 mb-24 scroll-mt-28">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Industries</h2>
          <p className="text-lg text-text-secondary">Built for service teams in every local market.</p>
        </div>

        <div ref={industriesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {industries.map((industry) => (
            <div key={industry.name} className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">{industry.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-text-secondary/85">
          + many more industries supported
        </p>
      </div>

      <div id="pricing" className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 mb-24 scroll-mt-28">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Simple pricing</h2>
          <p className="text-lg text-text-secondary">Choose the plan that matches your stage.</p>
        </div>

        <div ref={pricingRef} className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 flex flex-col h-full ${plan.highlighted ? 'border-indigo-500/50 shadow-glow relative' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Most Popular ⭐
                  </div>
                </div>
              )}
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display font-bold text-3xl text-text-primary">{plan.price}</span>
                <span className="text-text-secondary">{plan.period}</span>
              </div>
              <p className="text-sm text-text-secondary mb-5">{plan.description}</p>

              <div className="mb-5 min-h-[76px]">
                <p className="text-xs uppercase tracking-wide text-text-secondary/80 mb-2">Target</p>
                <ul className="space-y-1.5">
                  {plan.target.map((item, tIndex) => (
                    <li key={tIndex} className="text-sm text-text-primary flex items-start gap-2">
                      <Users className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5 flex-1 min-h-[260px]">
                <p className="text-xs uppercase tracking-wide text-text-secondary/80 mb-2">Includes</p>
                <ul className="space-y-2">
                  {plan.includes.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-primary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs uppercase tracking-wide text-text-secondary/80 mb-2">Limits</p>
                <ul className="space-y-1.5">
                  {plan.limits.map((limit, lIndex) => (
                    <li key={lIndex} className="text-sm text-text-secondary flex items-start gap-2">
                      <Layers className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      {limit}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="default"
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full rounded-full py-5 font-medium mt-auto bg-indigo-500 hover:bg-indigo-600 text-white hover:shadow-glow"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div id="signup" className="relative z-10 max-w-xl mx-auto px-6 lg:px-12">
        <div ref={signupRef} className="glass-panel rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-indigo-500" />
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-2">Activate your AI</h2>
            <p className="text-sm text-text-secondary">Setup takes 2 minutes. No credit card required.</p>
          </div>

          {isSubmitted ? (
            <div className="py-8 flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-text-primary font-medium text-lg">You are on the list!</p>
              <p className="text-text-secondary text-sm">We will reach out soon with early access.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 rounded-xl py-5 px-4 focus:border-indigo-500 focus:ring-indigo-500/20"
              />
              <Input
                type="text"
                placeholder="Business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 rounded-xl py-5 px-4 focus:border-indigo-500 focus:ring-indigo-500/20"
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 rounded-xl py-5 px-4 focus:border-indigo-500 focus:ring-indigo-500/20"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-6 rounded-full text-base transition-all hover:shadow-glow group"
              >
                {isSubmitting ? 'Sending...' : 'Activate your AI'}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </Button>
              {submitError && <p className="text-sm text-red-300 text-center">{submitError}</p>}
            </form>
          )}

          <p className="text-xs text-text-secondary/70 text-center mt-6">
            By signing up, you agree to our <a href="/terms.html" className="underline hover:text-text-primary">Terms of Service</a> and{' '}
            <a href="/privacy.html" className="underline hover:text-text-primary">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 mt-24 pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span className="font-display font-bold text-lg text-text-primary">Eagly</span>
          </div>
          <p className="text-sm text-text-secondary">© Eagly.ai — AI operator for small business.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Industries
            </button>
            <a href="/privacy.html" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Privacy
            </a>
            <a href="/terms.html" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
