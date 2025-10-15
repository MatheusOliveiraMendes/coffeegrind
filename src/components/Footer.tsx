import React from 'react';

interface FooterSection {
  title: string;
  links: string[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Visit',
    links: ['Find a location', 'Reserve a table', 'Brew workshops']
  },
  {
    title: 'Services',
    links: ['Shop beans', 'Order ahead', 'Catering']
  },
  {
    title: 'About',
    links: ['Our story', 'Sourcing', 'Careers']
  },
  {
    title: 'Support',
    links: ['Plan & pricing', 'Sell your products', 'Contact']
  }
];

const socialLinks = [
  { label: 'Facebook', icon: '/facebook.svg' },
  { label: 'Instagram', icon: '/instagram.svg' },
  { label: 'Twitter', icon: '/twitter.svg' },
  { label: 'LinkedIn', icon: '/linkedin.svg' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[rgba(26,18,12,1)] text-white">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-[rgba(224,196,160,0.25)] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex w-full flex-col gap-16 px-6 py-24 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_repeat(4,minmax(0,1fr))] items-start">
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Coffee House</span>
              <span className="text-2xl font-semibold uppercase tracking-[0.35em]">CoffeeGrind</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/70">
              Specialty coffee, handcrafted desserts, and an open table for the creative community.
              We roast daily, brew slow, and always have a playlist ready.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              <span className="rounded-full border border-white/15 px-4 py-2">Mon–Thu 8h–20h</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Fri–Sun 8h–23h</span>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4 text-sm">
              <h3 className="text-base font-semibold uppercase tracking-[0.4em] text-white/70">
                {section.title}
              </h3>
              <div className="flex flex-col gap-3 text-white/80">
                {section.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.5em] text-white/60">
              Join the cupping list
            </h4>
            <p className="text-sm text-white/70">
              Be first to taste seasonal releases and snag seats for our weekend tastings.
            </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full max-w-md flex-wrap gap-3 sm:flex-nowrap"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-white/40 focus:bg-black/40"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-xs font-semibold uppercase tracking-[0.45em] text-[rgba(48,38,28,1)] transition hover:bg-white/80"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4 text-sm text-white/70">
            <span className="uppercase tracking-[0.5em] text-white/50">Social</span>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Visit our ${label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:border-white hover:bg-white/20"
                >
                  <img
                    src={icon}
                    alt={label}
                    className="h-5 w-5 object-contain invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.4em] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} CoffeeGrind. Crafted with care in São Paulo.</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="transition hover:text-white/70">Privacy</a>
            <a href="#" className="transition hover:text-white/70">Terms</a>
            <a href="#" className="transition hover:text-white/70">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
