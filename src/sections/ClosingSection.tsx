import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Sparkles, ArrowRight, Globe, TrendingUp, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type FeatureCategory = {
  title: string;
  subtitle?: string;
  items: string[];
};

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
          stagger: 0.06,
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
    if (!email) return;

    const subject = encodeURIComponent('Activate your AI - New lead');
    const body = encodeURIComponent(
      `Email: ${email}\nBusiness name: ${businessName || 'Not provided'}\nPhone: ${phone || 'Not provided'}`
    );

    window.location.href = `mailto:info@eagly.ai?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const featureCategories: FeatureCategory[] = [
    {
      title: 'Customer Interaction Layer',
      subtitle: '(How customers interact with the business)',
      items: [
        'AI receptionist',
        'Answer inbound calls automatically',
        'Handle SMS conversations',
        'Website chat assistant',
        'WhatsApp messaging',
        'Facebook Messenger integration',
        'Lead intake',
        'Ask customers questions automatically',
        'Capture service requirements',
        'Collect addresses',
        'Capture photos/videos of issues',
        'Qualify customer requests',
        'Smart responses',
        'Answer FAQs automatically',
        'Provide pricing ranges',
        'Provide availability instantly',
        'Explain services',
        'Missed call recovery',
        'Auto SMS after missed call',
        'Follow up with customer',
        'Capture job details',
        'Customer communication',
        'Send appointment confirmations',
        'Send reminders',
        'Send reschedule links',
        'Notify customers of delays',
      ],
    },
    {
      title: 'Scheduling & Operations',
      subtitle: '(Core service business workflows)',
      items: [
        'Booking engine',
        'Automatic appointment scheduling',
        'Calendar integration',
        'Availability management',
        'Job duration estimation',
        'Multi-location scheduling',
        'Dispatch',
        'Assign jobs to employees',
        'Route optimization for field staff',
        'Travel time calculations',
        'Job management',
        'Job status tracking',
        'Service checklists',
        'Job notes',
        'Attach photos and documentation',
        'Field operations',
        'Mobile job dashboard for workers',
        'On-site updates',
        'Work completion confirmation',
        'Rescheduling',
        'Easy rescheduling through SMS',
        'AI-managed cancellations',
      ],
    },
    {
      title: 'Payments & Invoicing',
      items: [
        'Invoices',
        'Automatic invoice generation',
        'Custom invoice templates',
        'Line-item services',
        'Payment collection',
        'Deposit requests',
        'Payment links',
        'Online payment processing',
        'Apple Pay / Google Pay',
        'Payment automation',
        'Automatic payment reminders',
        'Late payment follow-ups',
        'Subscriptions',
        'Recurring service billing',
        'Membership plans',
        'Financial tracking',
        'Revenue tracking',
        'Payment status updates',
        'Payment reconciliation',
      ],
    },
    {
      title: 'Marketing & Growth',
      items: [
        'Website generation',
        'AI-generated website',
        'Service pages',
        'SEO optimization',
        'Local search pages',
        'Lead capture',
        'Website booking forms',
        'AI chat lead capture',
        'Reviews',
        'Automatic review requests',
        'Google review links',
        'Reputation management',
        'Promotions',
        'Send promotions to past customers',
        'Seasonal campaigns',
        'Advertising',
        'Google Ads management',
        'Facebook / Instagram ads',
        'AI-generated ad creatives',
        'Local targeting',
        'Customer retention',
        'Rebooking reminders',
        'Loyalty programs',
      ],
    },
    {
      title: 'CRM & Customer Management',
      items: [
        'Customer profiles',
        'Contact details',
        'Service history',
        'Preferences',
        'Customer segmentation',
        'High-value customers',
        'Frequent customers',
        'Conversation history',
        'SMS history',
        'Call transcripts',
        'Customer insights',
        'Lifetime value',
        'Repeat booking rates',
      ],
    },
    {
      title: 'AI Automation Layer',
      subtitle: '(The real magic of the system)',
      items: [
        'AI workflows',
        'Lead follow-up automation',
        'Quote follow-up automation',
        'Payment reminder automation',
        'Post-job follow-up',
        'Intelligent decisions',
        'Recommend pricing adjustments',
        'Detect scheduling conflicts',
        'Suggest marketing campaigns',
        'Predictive operations',
        'Forecast busy periods',
        'Predict staffing needs',
        'AI-generated documents',
        'Quotes',
        'Estimates',
        'Proposals',
      ],
    },
    {
      title: 'Owner Command Interface',
      subtitle: '(The biggest product differentiator)',
      items: [
        'Owners can run the business using natural language or voice',
        '“Show tomorrow’s schedule.”',
        '“Send a promotion to past customers.”',
        '“Raise prices by 5%.”',
        '“Why are bookings down this week?”',
        '“Which customers haven’t paid?”',
        '“Book John for Friday.”',
        'Voice interaction',
        'Voice notes to control business',
        'AI transcription',
        'AI execution of commands',
        'Chat interface',
        'SMS commands',
        'Mobile messaging interface',
      ],
    },
    {
      title: 'Business Intelligence',
      subtitle: '(The dashboard replacement)',
      items: [
        'Revenue analytics',
        'Daily revenue',
        'Weekly revenue trends',
        'Lead analytics',
        'Lead sources',
        'Conversion rates',
        'Marketing analytics',
        'Ad ROI',
        'Campaign performance',
        'Operations insights',
        'Missed call rates',
        'Booking speed',
        'AI recommendations',
        'Improve response time',
        'Increase pricing',
        'Reduce cancellations',
      ],
    },
    {
      title: 'Knowledge & Business Memory',
      items: [
        'Business knowledge base',
        'Service descriptions',
        'Pricing rules',
        'Policies',
        'AI learning',
        'Learns customer patterns',
        'Learns pricing patterns',
        'Context memory',
        'Remembers past conversations',
        'Remembers customer preferences',
      ],
    },
    {
      title: 'Website & Online Presence',
      items: [
        'Website creation',
        'Automatic site generation',
        'Hosting included',
        'SEO',
        'Local SEO pages',
        'Google indexing',
        'Online booking',
        'Booking widget',
        'Live availability',
        'AI chat widget',
        'Customer interaction on website',
      ],
    },
    {
      title: 'Integrations',
      items: [
        'Payments',
        'Stripe',
        'Square',
        'Accounting',
        'QuickBooks',
        'Xero',
        'Calendar',
        'Google Calendar',
        'Outlook',
        'Marketing',
        'Google Ads',
        'Meta Ads',
        'Messaging',
        'SMS',
        'WhatsApp',
      ],
    },
    {
      title: 'Platform Infrastructure',
      items: [
        'Business provisioning',
        'Auto create CRM',
        'Auto create workflows',
        'Multi-user support',
        'Staff accounts',
        'Role permissions',
        'Data security',
        'Encrypted communication',
        'Audit logs',
        'Reliability',
        'Workflow retries',
        'Error recovery',
      ],
    },
    {
      title: 'Future Expansion Features',
      subtitle: '(Investors love seeing this roadmap)',
      items: [
        'Staffing & HR',
        'Employee scheduling',
        'Payroll integration',
        'Financing',
        'Small business loans',
        'Invoice factoring',
        'Procurement',
        'Order supplies automatically',
        'Insurance',
        'Business insurance offers',
      ],
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
    <section ref={sectionRef} className="relative bg-space-dark py-24">
      <div id="features" className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A complete AI operating system for service businesses.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featureCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-1">{category.title}</h3>
              {category.subtitle && (
                <p className="text-xs text-text-secondary mb-4">{category.subtitle}</p>
              )}
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
      </div>

      <div id="pricing" className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Simple pricing</h2>
          <p className="text-lg text-text-secondary">Start free. Scale as you grow.</p>
        </div>

        <div ref={pricingRef} className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 ${plan.highlighted ? 'border-indigo-500/50 shadow-glow relative' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display font-bold text-3xl text-text-primary">{plan.price}</span>
                <span className="text-text-secondary">{plan.period}</span>
              </div>
              <p className="text-sm text-text-secondary mb-6">{plan.description}</p>
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

      <div id="signup" className="max-w-xl mx-auto px-6 lg:px-12">
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
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-6 rounded-full text-base transition-all hover:shadow-glow group"
              >
                Activate your AI
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          <p className="text-xs text-text-secondary/70 text-center mt-6">
            By signing up, you agree to our <a href="/terms.html" className="underline hover:text-text-primary">Terms of Service</a> and{' '}
            <a href="/privacy.html" className="underline hover:text-text-primary">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto px-6 lg:px-12 mt-24 pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span className="font-display font-bold text-lg text-text-primary">Eagly</span>
          </div>
          <p className="text-sm text-text-secondary">© Eagly.ai — AI operator for small business.</p>
          <div className="flex items-center gap-6">
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
