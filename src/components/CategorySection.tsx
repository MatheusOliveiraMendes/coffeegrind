import React from 'react';

interface CategoryItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

const categories: CategoryItem[] = [
  {
    id: 'hot-coffee',
    image: '/Hot-Coffee.svg',
    title: 'Hot Coffee',
    description: 'Velvety espresso-based drinks with rich crema and toasted sweetness.'
  },
  {
    id: 'cold-coffee',
    image: '/Cold-Coffee.svg',
    title: 'Cold Coffee',
    description: 'Slow-steeped cold brews layered with citrus zest and delicate florals.'
  },
  {
    id: 'cup-coffee',
    image: '/Cup-Coffee.svg',
    title: 'Pour Overs',
    description: 'Hand-filtered single origins highlighting each region’s unique terroir.'
  },
  {
    id: 'dessert',
    image: '/Dessert.svg',
    title: 'Dessert',
    description: 'House-made pastries, layered cakes, and cocoa-forward pairings.'
  }
];

export const CategorySection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(241,238,232,1)]">
      <div className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-[rgba(224,196,160,0.35)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[rgba(201,173,135,0.25)] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 py-24 text-center lg:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.6em] text-[rgba(143,105,73,0.8)]">
          Curation
        </span>
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[rgba(48,38,28,1)] sm:text-4xl">
            A coffee companion for every moment
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[rgba(84,74,62,0.75)]">
            Our tasting panel refines each profile to balance aroma, body, and finish.
            Choose your lane—or mix them up for the perfect pairing.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.id}
              className="group relative flex h-full flex-col items-center gap-5 rounded-3xl border border-[rgba(143,105,73,0.15)] bg-white/80 p-8 text-left shadow-[0_30px_60px_rgba(48,38,28,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[rgba(143,105,73,0.4)] hover:shadow-[0_40px_80px_rgba(48,38,28,0.12)]"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[rgba(224,196,160,0.2)] ring-1 ring-[rgba(143,105,73,0.2)] transition duration-300 group-hover:bg-[rgba(224,196,160,0.3)]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <div className="flex flex-col items-start gap-3 text-[rgba(48,38,28,1)]">
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-[rgba(84,74,62,0.8)]">
                  {category.description}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[rgba(143,105,73,0.7)] group-hover:text-[rgba(143,105,73,1)]">
                Discover
                <span aria-hidden="true">↗</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
