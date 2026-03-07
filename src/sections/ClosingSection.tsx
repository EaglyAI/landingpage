import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Headphones, CalendarCheck, CreditCard, Check, Sparkles, ArrowRight, Globe, TrendingUp, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const signupRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        featuresRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          scrollTrigger: {
            trigger: featuresRef.current,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const features = [
    {
      icon: Headphones,
      title: 'AI Receptionist',
      description: 'Answers calls and messages instantly—day or night.',
    },
    {
      icon: CalendarCheck,
      title: 'Auto-Booking',
      description: 'Qualifies leads, finds time, and confirms without back-and-forth.',
    },
    {
      icon: CreditCard,
      title: 'Built-In Payments',
      description: 'Send links, collect deposits, and reconcile without extra tools.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/mo',
      description: 'Perfect for solo operators getting started',
      features: [
        'AI receptionist',
        'Unlimited bookings',
        'Business website',
        'Digital presence setup',
        'Basic payments',
        'Email support',
      ],
      cta: 'Start free',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$149',
      period: '/mo',
      description: 'For businesses ready to scale',
      features: [
        'Everything in Starter',
        'Advanced scheduling',
        'Customer follow-ups',
        'Review requests',
        'Basic analytics',
        'Priority support',
      ],
      cta: 'Start free',
      highlighted: true,
    },
    {
      name: 'Autopilot',
      price: '$349',
      period: '/mo',
      description: 'Full AI automation for growing teams',
      features: [
        'Everything in Growth',
        'Multi-user access',
        'Advanced analytics',
        'Marketing automation',
        'Custom integrations',
        'Dedicated account manager',
      ],
      cta: 'Start free',
      highlighted: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-space-dark py-24"
    >
      {/* Features Grid */}
      <div id="features" className="max-w-6xl mx-auto px-6 lg:px-12 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            One AI operator. Zero complexity.
          </p>
        </div>

        <div
          ref={featuresRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Simple pricing
          </h2>
          <p className="text-lg text-text-secondary">
            Start free. Scale as you grow.
          </p>
        </div>

        <div
          ref={pricingRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 ${
                plan.highlighted
                  ? 'border-indigo-500/50 shadow-glow relative'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display font-bold text-3xl text-text-primary">
                  {plan.price}
                </span>
                <span className="text-text-secondary">{plan.period}</span>
              </div>
              <p className="text-sm text-text-secondary mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'default' : 'outline'}
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full rounded-full py-5 font-medium ${
                  plan.highlighted
                    ? 'bg-indigo-500 hover:bg-indigo-600 text-white hover:shadow-glow'
                    : 'border-white/20 text-text-primary hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Signup Form */}
      <div id="signup" className="max-w-xl mx-auto px-6 lg:px-12">
        <div
          ref={signupRef}
          className="glass-panel rounded-2xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-indigo-500" />
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-2">
              Activate your AI
            </h2>
            <p className="text-sm text-text-secondary">
              Setup takes 2 minutes. No credit card required.
            </p>
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
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 rounded-xl py-5 px-4 focus:border-indigo-500 focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 rounded-xl py-5 px-4 focus:border-indigo-500 focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/5 border-white/10 text-text-primary placeholder:text-text-secondary/50 rounded-xl py-5 px-4 focus:border-indigo-500 focus:ring-indigo-500/20"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-6 rounded-full text-base transition-all hover:shadow-glow group"
              >
                Activate your AI
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          <p className="text-xs text-text-secondary/70 text-center mt-6">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 lg:px-12 mt-24 pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span className="font-display font-bold text-lg text-text-primary">
              Eagly
            </span>
          </div>
          <p className="text-sm text-text-secondary">
            © Eagly.ai — AI operator for small business.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
