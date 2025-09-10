import React from 'react';

export const PromotionSection: React.FC = () => {
  const handleExploreProducts = () => {
    // Navigate to products page or scroll to products
    window.open('#products', '_self');
  };

  return (
    <section className="bg-[rgba(226,217,200,1)] self-stretch flex w-full items-stretch gap-[40px_100px] flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
      <div className="grow shrink basis-auto max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[58%] max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/81adba475ca2a394a990aa3fe4a88db8f277f145?placeholderIfAbsent=true"
              alt="Coffee beans showcase"
              className="aspect-[1.55] object-contain w-full grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="w-[42%] m-15 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:mt-10">
              <h2 className="text-black text-[40px] font-semibold leading-[50px]">
                Check Out Our Best Coffee Beans
              </h2>
              <button 
                onClick={handleExploreProducts}
                className="bg-[rgba(48,38,28,1)] flex min-h-[51px] items-center gap-1 text-base text-[rgba(241,240,238,1)] font-medium justify-center mt-6 px-9 py-4 rounded-[100px] hover:bg-[rgba(48,38,28,0.8)] transition-colors max-md:px-5"
              >
                <span className="self-stretch my-auto">Explore Out Products</span>
                <img
                  src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/102ec3a968753a9fb2491349c7e4693342186893?placeholderIfAbsent=true"
                  alt="Arrow icon"
                  className="aspect-[1.4] object-contain w-7 self-stretch shrink-0 gap-[-12px] my-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/e4f783b18083835b0cd1ed4b39fa123192f7781c?placeholderIfAbsent=true"
        alt="Coffee preparation"
        className="aspect-[1.5] object-contain w-full max-md:max-w-full"
      />
    </section>
  );
};
