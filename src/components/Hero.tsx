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
      className="relative flex min-h-[1000px] w-full flex-col self-stretch bg-cover bg-center bg-no-repeat px-6 pb-[232px] pt-[61px] text-white md:px-10 lg:px-16 max-md:pb-[100px]"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <Header className="text-white" />

      <div className="relative z-10 mt-[160px] max-w-[620px] max-md:mt-16">
        <div className="text-xl font-medium tracking-[4px] uppercase">
          Welcome
        </div>
        <h1 className="mt-10 text-7xl font-bold leading-[82px] max-md:text-[40px] max-md:leading-[50px]">
          We serve the richest coffee in the city!
        </h1>
        <p className="mt-12 text-lg font-normal leading-[26px] max-md:mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
        </p>
        <button
          onClick={handleOrderNow}
          className="mt-14 flex items-center justify-center gap-2.5 rounded-[100px] bg-white px-10 py-4 text-lg font-medium text-[rgba(48,38,28,1)] transition-colors hover:bg-gray-100 max-md:mt-8 max-md:px-5"
        >
          <span className="self-stretch my-auto">Order Now</span>
        </button>
      </div>
    </section>
  );
};
