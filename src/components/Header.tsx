import React from 'react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { href: '#home', label: 'home' },
    { href: '#coffee', label: 'coffee' },
    { href: '#bakery', label: 'bakery' },
    { href: '#shop', label: 'shop' },
    { href: '#about', label: 'about' },
    { href: '#login', label: 'login' },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`relative flex w-full flex-col text-white ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/10 px-6 py-4 shadow-[0_25px_80px_rgba(11,7,2,0.4)] backdrop-blur-xl transition-all duration-300 lg:px-10">
        <div className="flex flex-col leading-tight text-left">
          <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/60">
            Coffee House
          </span>
          <span className="text-xl font-semibold uppercase tracking-[0.25em]">
            CoffeeGrind
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.4em] lg:flex">
          {menuItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative transition-colors duration-300 hover:text-[rgba(224,196,160,1)]"
            >
              {label}
              <span className="absolute left-0 -bottom-2 block h-[2px] w-0 rounded bg-[rgba(224,196,160,1)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#products"
            className="hidden items-center rounded-full border border-white/20 bg-white/15 px-7 py-2 text-[10px] font-semibold uppercase tracking-[0.6em] text-white transition duration-300 hover:bg-[rgba(224,196,160,1)] hover:text-[rgba(48,38,28,1)] lg:inline-flex"
          >
            Reserve a Table
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            className="inline-flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/10 transition duration-300 hover:bg-white hover:text-[rgba(48,38,28,1)] lg:hidden"
          >
            <span
              className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-current transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-current transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mt-4 w-full rounded-3xl border border-white/10 bg-black/70 px-6 py-6 text-xs font-semibold uppercase tracking-[0.45em] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur lg:hidden">
          <div className="flex flex-col gap-5 text-left">
            {menuItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="transition-colors duration-300 hover:text-[rgba(224,196,160,1)]"
              >
                {label}
              </a>
            ))}
            <a
              href="#products"
              onClick={closeMenu}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[10px] font-semibold tracking-[0.6em] transition duration-300 hover:bg-[rgba(224,196,160,1)] hover:text-[rgba(48,38,28,1)]"
            >
              Reserve a Table
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
