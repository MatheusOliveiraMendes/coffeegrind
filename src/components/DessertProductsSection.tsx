import React from 'react';

const dessertProducts = [
  {
    id: 'dessert-1',
    image: '/Drink1.jpg',
    title: 'Velvet Lungo',
    description: 'Dark chocolate body balanced with burnt caramel and a whisper of ginger.',
    price: 'R$ 18',
    notes: ['Signature roast', 'Balanced sweetness', 'Double shot'],
  },
  {
    id: 'dessert-2',
    image: '/Drink2.jpg',
    title: 'Cocoa Cold Brew',
    description: 'Nitro-infused with orange oil and vanilla bean foam for a silky finish.',
    price: 'R$ 22',
    notes: ['12h steep', 'Citrus zest', 'Nitro pour'],
  },
  {
    id: 'dessert-3',
    image: '/Drink3.jpg',
    title: 'Honeycomb Latte',
    description: 'Local honey, steamed oat milk, and espresso kissed with smoked salt.',
    price: 'R$ 21',
    notes: ['Oat milk', 'House honey', 'Smoked salt'],
  },
  {
    id: 'dessert-4',
    image: '/Drink4.jpg',
    title: 'Midnight Mocha',
    description: 'Single-origin cocoa, cardamom, and a cloud of cold cream.',
    price: 'R$ 24',
    notes: ['Single origin', 'Cardamom', 'Velvet cream'],
  },
];

export const DessertProductsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[rgba(226,217,200,0.3)] blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto flex w-full flex-col gap-16 px-6 text-center lg:px-12">
        <div className="flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(48,38,28,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[rgba(48,38,28,0.7)]">
            Chef’s picks
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[rgba(48,38,28,1)] sm:text-4xl">
            Signatures brewed & baked each morning
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-[rgba(84,74,62,0.8)]">
            Pair a slow-extracted espresso with our patisserie-inspired desserts.
            Every recipe is finished with locally sourced dairy and botanicals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {dessertProducts.map((product) => (
            <article
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(48,38,28,0.08)] bg-[rgba(248,245,240,0.85)] shadow-[0_20px_60px_rgba(48,38,28,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(48,38,28,0.12)]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-[rgba(48,38,28,0.7)] backdrop-blur">
                  Best Seller
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-5 px-6 py-8 text-left">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[rgba(48,38,28,1)]">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-6 text-[rgba(84,74,62,0.85)]">
                    {product.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <li
                      key={note}
                      className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-[rgba(48,38,28,0.6)]"
                    >
                      {note}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-lg font-semibold text-[rgba(42,0,0,0.9)]">
                    {product.price}
                  </span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[rgba(48,38,28,1)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-[rgba(48,38,28,0.85)]">
                    Order
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
