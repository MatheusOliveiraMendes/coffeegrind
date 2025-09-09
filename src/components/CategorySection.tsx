import React from 'react';

interface CategoryItem {
  id: string;
  image: string;
  title: string;
}

const categories: CategoryItem[] = [
  {
    id: 'hot-coffee',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/3c8dae86ab7d40295396e68b41d503b1a30085ec?placeholderIfAbsent=true',
    title: 'Hot Coffee'
  },
  {
    id: 'cold-coffee',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/7fb9c53770f1992b3aef0858562e9f4438e70b9b?placeholderIfAbsent=true',
    title: 'Cold Coffee'
  },
  {
    id: 'cup-coffee',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/56d1d413cee48fbe8eefdd75b73e12348cf0c641?placeholderIfAbsent=true',
    title: 'Cup Coffee'
  },
  {
    id: 'dessert',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/acc245a0cffde28d198c82a0d1200b78fc0cf69b?placeholderIfAbsent=true',
    title: 'Dessert'
  }
];

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
                <img
                  src={category.image}
                  alt={category.title}
                  className="aspect-[1] object-contain w-[82px] max-md:ml-2 max-md:mr-[3px]"
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