import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { PromotionSection } from '../components/PromotionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';


const dessertProducts = [
  {
    id: 'dessert-1',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/c2f2a78204dab29fbeea3f57810e015e5697d2a8?placeholderIfAbsent=true',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200'
  },
  {
    id: 'dessert-2',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/d5c039c6262bebc96120de9db73cea1f42e170d4?placeholderIfAbsent=true',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200'
  },
  {
    id: 'dessert-3',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/404aa3cc03907cd1409a7250b3725d84737ec34d?placeholderIfAbsent=true',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200'
  },
  {
    id: 'dessert-4',
    image: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/259d4863c65722b14eb1faaadffc5fe19e0c2963?placeholderIfAbsent=true',
    title: 'Lungo coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    price: 'Rs. 200'
  }
];

const Index = () => {
  return (
    <div className="bg-[rgba(241,240,238,1)] flex flex-col overflow-hidden items-center">
      {/* Hero Section with Background */}
      <div className="flex flex-col self-stretch relative min-h-[1000px] w-full pt-[61px] pb-[232px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/982559be93467ff5c055ea8643890dd368c00a48?placeholderIfAbsent=true"
          alt="Coffee shop background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative mb-[-46px] w-[998px] max-w-full max-md:mb-2.5">
          <Header />
          <Hero />
        </div>
      </div>

      {/* Categories Section */}
      <CategorySection />

      {/* Coffee Products Section */}
      <main id="products">
     

        {/* Dessert Products Section */}
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
                      className="aspect-[0.92] object-contain w-[334px] max-w-full rounded-[0px_0px_0px_0px]"
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
      </main>

      {/* Promotion Section */}
      <PromotionSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Decorative Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/f62bbd36316fdce2966388643f7537554416b8aa?placeholderIfAbsent=true"
        alt="Coffee decoration"
        className="aspect-[5.99] object-contain w-full self-stretch mt-[100px] max-md:max-w-full max-md:mt-10"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;