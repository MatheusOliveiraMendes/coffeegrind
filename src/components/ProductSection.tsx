import React from 'react';
import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  leftArrow: string;
  rightArrow: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  leftArrow,
  rightArrow
}) => {
  return (
    <section className="w-full">
      <div className="flex w-[689px] max-w-full flex-col text-[32px] text-[rgba(48,38,28,1)] font-semibold uppercase tracking-[1.28px] mt-[37px] mx-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/f2933144ab5f1aa1295364552782f70bd24bcb40?placeholderIfAbsent=true"
          alt="Decorative element"
          className="aspect-[1] object-contain w-6"
        />
        <h2 className="mt-[19px]">{title}</h2>
      </div>
      
      <div className="flex w-full max-w-[1760px] items-center gap-[40px_69px] flex-wrap mt-16 mx-auto max-md:max-w-full max-md:mt-10">
        <button className="aspect-[1] object-contain w-[71px] self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity">
          <img
            src={leftArrow}
            alt="Previous products"
            className="w-full h-full"
          />
        </button>
        
        <div className="self-stretch grow shrink basis-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`w-3/12 ${index > 0 ? 'ml-5' : ''} max-md:w-full max-md:ml-0`}
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button className="aspect-[1] object-contain w-[71px] self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity">
          <img
            src={rightArrow}
            alt="Next products"
            className="w-full h-full"
          />
        </button>
      </div>
    </section>
  );
};
