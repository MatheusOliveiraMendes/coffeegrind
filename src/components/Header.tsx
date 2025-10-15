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
    <header
      className={`flex w-full flex-col items-center gap-4 text-white ${className}`}
    >
      <div className="flex w-full items-center justify-between rounded-full bg-[rgba(0,0,0,0.45)] px-6 py-4 backdrop-blur-lg shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 md:px-10 lg:px-16">
        <div className="text-[28px] font-semibold uppercase tracking-[6px]">
          CoffeeGrind
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-[3px]">
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
            className="hidden lg:inline-flex items-center rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.08)] px-6 py-2 text-xs font-semibold uppercase tracking-[3px] transition duration-300 hover:bg-white hover:text-[rgba(42,0,0,1)]"
          >
            Order Now
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            className="inline-flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.08)] transition duration-300 hover:bg-white hover:text-[rgba(42,0,0,1)] lg:hidden"
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
        <nav className="w-full rounded-3xl bg-[rgba(0,0,0,0.75)] px-6 py-6 text-center text-sm font-medium uppercase tracking-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:hidden md:px-10 lg:px-16">
          <div className="flex flex-col gap-4">
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
              className="rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.08)] px-6 py-2 text-xs font-semibold tracking-[3px] transition duration-300 hover:bg-white hover:text-[rgba(42,0,0,1)]"
            >
              Order Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
