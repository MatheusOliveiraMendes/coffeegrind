import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onOrder?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  onOrder
}) => {
  const handleOrderClick = () => {
    if (onOrder) {
      onOrder();
    } else {
      // Default order handling
      alert(`Ordering ${title} for ${price}`);
    }
  };

  return (
    <article className="bg-[rgba(226,217,200,0.2)] grow w-full p-4 rounded-[18px] border-[rgba(226,217,200,1)] border-solid border-2 max-md:mt-1">
      <img
        src={image}
        alt={title}
        className="aspect-[0.92] object-contain w-[334px] max-w-full rounded-[0px_0px_0px_0px]"
      />
      <div className="w-full mt-4">
        <div className="w-full">
          <h3 className="text-[rgba(48,38,28,1)] text-[38px] font-semibold">
            {title}
          </h3>
          <p className="text-[rgba(42,0,0,1)] text-xl font-normal leading-7 mt-2.5">
            {description}
          </p>
        </div>
        <div className="flex w-full items-center gap-[40px_135px] mt-3">
          <div className="text-[rgba(42,0,0,1)] text-xl font-semibold self-stretch my-auto">
            {price}
          </div>
          <button 
            onClick={handleOrderClick}
            className="bg-[rgba(42,0,0,1)] self-stretch flex items-center gap-2.5 text-sm text-white font-medium justify-center my-auto px-[26px] py-2.5 rounded-lg hover:bg-[rgba(42,0,0,0.8)] transition-colors max-md:px-5"
          >
            <span className="self-stretch my-auto">Order</span>
          </button>
        </div>
      </div>
    </article>
  );
};