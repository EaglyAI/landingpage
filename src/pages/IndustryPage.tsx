import { useEffect } from 'react';
import { industryRoutePrefix, howEaglyHelps, type IndustryPageData } from '../data/industryPages';

type IndustryPageProps = {
  data: IndustryPageData;
};

const setMetaDescription = (description: string) => {
  let metaDescription = document.querySelector('meta[name="description"]');

  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute('content', description);
};

function IndustryPage({ data }: IndustryPageProps) {
  useEffect(() => {
    document.title = data.seoTitle;
    setMetaDescription(data.seoDescription);
  }, [data.seoDescription, data.seoTitle]);

  return (
    <div className="relative min-h-screen bg-space-black text-foreground">
      <div className="noise-overlay" />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 md:gap-12 md:px-10">
        <section className="glass-panel rounded-3xl p-8 md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-muted-foreground">Industry solutions</p>
          <h1 className="text-balance text-4xl font-semibold md:text-6xl">AI that runs {data.heroIndustryLabel} businesses.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Built for {data.industryName.toLowerCase()} teams that need faster response times, cleaner operations, and more booked jobs.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Start your AI operator
          </a>
        </section>

        <section className="glass-card rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Problems These Businesses Face</h2>
          <ul className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            {data.problems.map((problem) => (
              <li key={problem} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass-card rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-semibold md:text-4xl">How Eagly Helps</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {howEaglyHelps.map((help) => (
              <article key={help.title} className="rounded-2xl border border-border bg-secondary/40 p-5">
                <h3 className="text-xl font-semibold">{help.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{help.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Example workflow sequence</h2>
          <ol className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            {data.workflowSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="glass-panel rounded-3xl p-8 text-center md:p-12">
          <h2 className="text-balance text-3xl font-semibold md:text-5xl">Start running your business with AI.</h2>
          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Activate Eagly
          </a>
        </section>

        <p className="text-center text-xs text-muted-foreground">
          Looking for another vertical? Duplicate this template by adding a new object in <code>src/data/industryPages.ts</code>{' '}
          and visiting
          <code>{` ${industryRoutePrefix}[slug]`}</code>.
        </p>
      </main>
    </div>
  );
}

export default IndustryPage;
