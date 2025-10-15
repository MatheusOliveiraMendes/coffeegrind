import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { DessertProductsSection } from '../components/DessertProductsSection';
import { PromotionSection } from '../components/PromotionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-[rgba(241,240,238,1)] flex flex-col overflow-hidden items-center">
      <Hero />

      {/* Categories Section */}
      <CategorySection />

      {/* Coffee Products Section */}
      <main id="products">
        <DessertProductsSection />
      </main>

      {/* Promotion Section */}
      <PromotionSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
