import React from 'react';

interface CategoryItem {
  id: string;
  image: string;
  title: string;
}

const categories: CategoryItem[] = [
  {
    id: 'hot-coffee',
    image: '/Hot-Coffee.svg',
    title: 'Hot Coffee'
  },
  {
    id: 'cold-coffee',
    image: '/Cold-Coffee.svg',
    title: 'Cold Coffee'
  },
  {
    id: 'cup-coffee',
    image: '/Cup-Coffee.svg',
    title: 'Cup Coffee'
  },
  {
    id: 'dessert',
    image: '/Dessert.svg',
    title: 'Dessert'
  }
];

const iconColor = 'rgba(84,74,62,1)';

export const CategorySection: React.FC = () => {
  return (
    <section className="bg-[rgba(226,217,200,1)] self-stretch flex w-full flex-col items-center justify-center px-[70px] py-[54px] max-md:max-w-full max-md:px-5">
      <div className="w-[845px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`w-3/12 ${index > 0 ? 'ml-5' : ''} max-md:w-full max-md:ml-0`}
            >
              <div className="text-lg text-[rgba(84,74,62,1)] font-medium max-md:mt-10">
                <span
                  aria-label={category.title}
                  role="img"
                  className="block w-[82px] h-[82px] max-md:ml-2 max-md:mr-[3px]"
                  style={{
                    backgroundColor: iconColor,
                    WebkitMaskImage: `url(${category.image})`,
                    maskImage: `url(${category.image})`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center'
                  }}
                />
                <div className="mt-[11px]">
                  {category.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
