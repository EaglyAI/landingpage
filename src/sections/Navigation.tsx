import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

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
          <button
            onClick={() => scrollToSection('industries')}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Industries
          </button>
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
