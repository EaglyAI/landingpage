import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-space-black">
      <div className="noise-overlay" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-[-20%] h-64 w-64 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-16 right-[-15%] h-64 w-64 rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-28 lg:px-12">
        <section className="glass-panel w-full rounded-[2rem] p-8 text-left md:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-text-secondary">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            Industries
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[0.95] text-text-primary sm:text-5xl lg:text-6xl">
            AI that runs service businesses.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-text-secondary sm:text-lg">
            Handle calls, bookings, invoices, payments, and follow-ups with one intelligent operator that never misses a customer moment.
          </p>

          <p className="mt-4 max-w-2xl text-sm text-text-secondary/90 sm:text-base">
            Built for businesses that rely on every incoming call, tightly coordinated scheduling, and repeat customers to grow predictable revenue.
          </p>

          <Button className="mt-10 rounded-full bg-indigo-500 px-7 py-6 text-sm font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-glow sm:text-base">
            Start your AI operator
          </Button>
        </section>
      </main>
    </div>
  );
}
