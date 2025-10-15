import React from 'react';

const dessertProducts = [
  {
    id: 'dessert-1',
    image: '/Drink1.jpg',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200',
  },
  {
    id: 'dessert-2',
    image: '/Drink2.jpg',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200',
  },
  {
    id: 'dessert-3',
    image: '/Drink3.jpg',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200',
  },
  {
    id: 'dessert-4',
    image: '/Drink4.jpg',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200',
  },
];

export const DessertProductsSection: React.FC = () => {
  return (
    <>
      <div className="text-[rgba(48,38,28,1)] text-[32px] font-semibold tracking-[1.28px] uppercase ml-2.5 mt-20 text-center max-md:mt-10">
        our special dessert
      </div>

      <div className="flex w-full max-w-[1760px] items-center gap-[40px_69px] flex-wrap mt-16 mx-auto max-md:max-w-full max-md:mt-10">
        <div className="self-stretch grow shrink basis-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {dessertProducts.map((product, index) => (
              <div
                key={product.id}
                className={`w-3/12 ${index > 0 ? 'ml-5' : ''} max-md:w-full max-md:ml-0`}
              >
                <div className="bg-[rgba(226,217,200,0.2)] grow w-full p-4 rounded-[18px] border-[rgba(226,217,200,1)] border-solid border-2 max-md:mt-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[260px] object-cover rounded-lg"
                  />
                  <div className="w-full mt-4">
                    <div className="w-full">
                      <h3 className="text-[rgba(48,38,28,1)] text-[38px] font-semibold">
                        {product.title}
                      </h3>
                      <p className="text-[rgba(42,0,0,1)] text-xl font-normal leading-7 mt-2.5">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex w-full items-center gap-[40px_135px] mt-3">
                      <div className="text-[rgba(42,0,0,1)] text-xl font-semibold self-stretch my-auto">
                        {product.price}
                      </div>
                      <button className="bg-[rgba(42,0,0,1)] self-stretch flex items-center gap-2.5 text-sm text-white font-medium justify-center my-auto px-[26px] py-2.5 rounded-lg hover:bg-[rgba(42,0,0,0.8)] transition-colors max-md:px-5">
                        <span className="self-stretch my-auto">Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
