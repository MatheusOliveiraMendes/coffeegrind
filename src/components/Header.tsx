import React from 'react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`flex w-full items-stretch gap-5 text-white whitespace-nowrap flex-wrap justify-between max-md:max-w-full ${className}`}>
      <div className="text-[32px] font-bold">
        Coffea
      </div>
      <nav className="flex items-stretch gap-10 text-lg font-medium uppercase flex-wrap mt-[11px]">
        <a href="#home" className="grow hover:text-gray-200 transition-colors">
          home
        </a>
        <a href="#coffee" className="hover:text-gray-200 transition-colors">
          coffee
        </a>
        <a href="#bakery" className="hover:text-gray-200 transition-colors">
          bakery
        </a>
        <a href="#shop" className="hover:text-gray-200 transition-colors">
          shop
        </a>
        <a href="#about" className="hover:text-gray-200 transition-colors">
          about
        </a>
        <a href="#login" className="font-semibold hover:text-gray-200 transition-colors">
          login
        </a>
      </nav>
    </header>
  );
};