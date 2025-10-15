import React from 'react';
import { Header } from './Header';

export const Hero: React.FC = () => {
  const handleOrderNow = () => {
    // Scroll to products section or handle order functionality
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative isolate flex w-full flex-col overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/20" aria-hidden="true" />
      <div className="absolute -top-32 -right-40 h-[460px] w-[460px] rounded-full bg-[rgba(224,196,160,0.3)] blur-3xl max-lg:hidden" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-20 h-[360px] w-[360px] rounded-full bg-[rgba(224,196,160,0.2)] blur-3xl max-lg:hidden" aria-hidden="true" />

      <Header className="w-full px-6 pt-10 lg:px-12" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 pb-24 pt-16 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="grid gap-16 items-center lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-2xl justify-self-center text-center lg:justify-self-start lg:text-left">
            <div className="text-sm font-semibold uppercase tracking-[0.5em] text-[rgba(224,196,160,1)]">
              Welcome to CoffeeGrind
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Bold beans, slow mornings, and conversations that linger.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              From first roast to final pour, every cup is balanced to highlight caramel sweetness,
              chocolate depth, and the smooth finish you crave. Settle in—we saved your favorite seat.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start">
              <button
                onClick={handleOrderNow}
                className="inline-flex items-center justify-center rounded-full bg-[rgba(224,196,160,1)] px-8 py-3 text-base font-semibold text-[rgba(48,38,28,1)] transition hover:bg-[rgba(224,196,160,0.85)]"
              >
                Explore the Menu
              </button>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Visit the Roastery
              </a>
            </div>

            <dl className="mt-14 grid gap-6 text-sm uppercase tracking-[0.3em] text-white/70 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur lg:text-left">
                <dt className="text-xs text-white/50">Origin Stories</dt>
                <dd className="mt-2 text-lg font-semibold text-white">Single Estate Beans</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur lg:text-left">
                <dt className="text-xs text-white/50">Brew Bar</dt>
                <dd className="mt-2 text-lg font-semibold text-white">Manual & Nitro</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur lg:text-left">
                <dt className="text-xs text-white/50">Sweet Pairings</dt>
                <dd className="mt-2 text-lg font-semibold text-white">House-made Treats</dd>
              </div>
            </dl>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative z-10 flex h-full flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                Freshly roasted
              </span>
              <p className="text-2xl font-semibold leading-snug">
                Crafted daily in small batches with beans sourced from our partner farms across Brazil, Colombia, and Ethiopia.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-5">
                  <div className="text-xs uppercase tracking-[0.4em] text-white/50">House Blend</div>
                  <div className="mt-3 text-lg font-semibold text-white">Cocoa • Hazelnut</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-5">
                  <div className="text-xs uppercase tracking-[0.4em] text-white/50">Seasonal</div>
                  <div className="mt-3 text-lg font-semibold text-white">Citrus • Honey</div>
                </div>
              </div>
              <p className="text-sm leading-6 text-white/70">
                “The best coffee house to reset your day. Try the Lungo, stay for the ambience.”
              </p>
              <div className="flex items-center gap-3 pt-2 text-sm text-white/60">
                <span className="h-10 w-10 rounded-full bg-white/20 backdrop-blur" />
                <div>
                  <div className="font-semibold text-white">Chef Mariana</div>
                  <div>Head Roaster, CoffeeGrind</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
