import React from 'react';

export const Hero: React.FC = () => {
  const handleOrderNow = () => {
    // Scroll to products section or handle order functionality
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex w-[557px] max-w-full flex-col items-stretch mt-[190px] max-md:mt-10">
      <div className="w-full text-white max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="text-xl font-medium tracking-[4px] uppercase max-md:max-w-full">
            Welcome
          </div>
          <h1 className="text-7xl font-bold leading-[82px] mt-10 max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
            We serve the richest coffee in the city!
          </h1>
        </div>
        <p className="text-lg font-normal leading-[26px] mt-14 max-md:max-w-full max-md:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
        </p>
      </div>
      <button 
        onClick={handleOrderNow}
        className="bg-white flex items-center gap-2.5 text-lg text-[rgba(48,38,28,1)] font-medium justify-center mt-14 px-10 py-4 rounded-[100px] hover:bg-gray-100 transition-colors max-md:mt-10 max-md:px-5"
      >
        <span className="self-stretch my-auto">Order Now</span>
      </button>
    </section>
  );
};
