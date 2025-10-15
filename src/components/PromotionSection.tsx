import React from 'react';

export const PromotionSection: React.FC = () => {
  const handleExploreProducts = () => {
    // Navigate to products page or scroll to products
    window.open('#products', '_self');
  };

  return (
    <section className="relative w-full overflow-hidden bg-[rgba(26,18,12,1)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(48,38,28,0.5)] via-transparent to-[rgba(143,105,73,0.4)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 left-16 h-64 w-64 rounded-full bg-[rgba(224,196,160,0.25)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-20 right-24 h-72 w-72 rounded-full bg-[rgba(143,105,73,0.35)] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,1fr)] lg:px-12">
        <div className="flex flex-col justify-between gap-12 rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_40px_100px_rgba(8,4,1,0.45)] backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/70">
              Roastery spotlight
            </span>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Check out our small-batch beans before they sell out.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/75">
              Every month we invite a partner farm to showcase their harvest. Expect vibrant fruit notes,
              layered aromatics, and traceable sourcing down to each plot.
            </p>
          </div>

          <ul className="grid gap-5 text-sm font-medium uppercase tracking-[0.35em] text-white/70 sm:grid-cols-2">
            <li className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">96-hour fermentation</li>
            <li className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">Shade-grown canopies</li>
            <li className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">Direct trade partners</li>
            <li className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">Limited roast profiles</li>
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleExploreProducts}
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[rgba(48,38,28,1)] transition hover:bg-white/80"
            >
              Explore our products
              <span aria-hidden="true">→</span>
            </button>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-white transition hover:border-white hover:bg-white/10"
            >
              View roasting calendar
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-[0_45px_120px_rgba(8,4,1,0.55)]">
              <img
                src="/Picture2.png"
                alt="Coffee beans showcase"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 w-2/3 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-3 shadow-[0_35px_90px_rgba(8,4,1,0.45)] backdrop-blur-xl max-sm:-right-6 max-sm:w-3/4">
              <img
                src="/Picture1.png"
                alt="Coffee preparation"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
