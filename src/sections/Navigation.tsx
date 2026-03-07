import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';

const industryGroups = [
  {
    label: 'Home Services',
    items: [
      { label: 'Cleaning Services', href: '/industries#cleaning-services' },
      { label: 'Landscaping & Lawn Care', href: '/industries#landscaping-lawn-care' },
      { label: 'Plumbing', href: '/industries#plumbing' },
      { label: 'Electrical', href: '/industries#electrical' },
      { label: 'HVAC', href: '/industries#hvac' },
    ],
  },
  {
    label: 'Property Services',
    items: [
      { label: 'Pest Control', href: '/industries#pest-control' },
      { label: 'Pool Maintenance', href: '/industries#pool-maintenance' },
      { label: 'Pressure Washing', href: '/industries#pressure-washing' },
      { label: 'Window Cleaning', href: '/industries#window-cleaning' },
    ],
  },
  {
    label: 'Local Service Businesses',
    items: [
      { label: 'Handyman', href: '/industries#handyman' },
      { label: 'Home Repair', href: '/industries#home-repair' },
      { label: 'Appliance Repair', href: '/industries#appliance-repair' },
      { label: 'Garage Door Repair', href: '/industries#garage-door-repair' },
    ],
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 110;
      const top = element.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-space-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-500" />
          <span className="font-display font-bold text-xl text-text-primary">
            Eagly
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Product
          </button>
          <div className="relative group">
            <a
              href="/industries"
              className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Industries
              <ChevronDown className="w-4 h-4 text-text-secondary/70 transition-transform duration-300 group-hover:rotate-180" />
            </a>

            <div className="pointer-events-none absolute top-full left-1/2 w-[46rem] -translate-x-1/2 pt-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
              <div className="rounded-2xl border border-white/10 bg-space-black/95 backdrop-blur-xl p-6 shadow-2xl shadow-black/40">
                <div className="grid grid-cols-3 gap-6">
                  {industryGroups.map((group) => (
                    <div key={group.label} className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary/75">
                        {group.label}
                      </p>
                      <div className="space-y-1.5">
                        {group.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block rounded-lg px-2 py-1.5 text-sm text-text-secondary transition-all duration-200 hover:bg-white/5 hover:text-text-primary"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <a
                    href="/industries"
                    className="inline-flex items-center text-sm font-medium text-indigo-300 transition-colors duration-200 hover:text-indigo-200"
                  >
                    View all industries →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Pricing
          </button>
        </div>

        {/* CTA */}
        <Button
          onClick={() => scrollToSection('signup')}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-5 py-2 rounded-full text-sm transition-all hover:shadow-glow"
        >
          Activate your AI
        </Button>
      </div>
    </nav>
  );
}
