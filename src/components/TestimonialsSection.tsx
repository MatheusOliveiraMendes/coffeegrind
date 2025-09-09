import React from 'react';
import { TestimonialCard } from './TestimonialCard';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Smith',
    role: 'Entrepreneur',
    avatar: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4bb1f9d3c9a9139607a75c65e18d69c68506ef92?placeholderIfAbsent=true',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit,Lorem ipsum amet, consectetur adipisicing elit,Lorem ipsum dolor sit adipisicing elit,Lorem ipsum dolor sit dolor sit amet, consectetur adipisicing elit,'
  },
  {
    id: '2',
    name: 'James Smith',
    role: 'Entrepreneur',
    avatar: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4bb1f9d3c9a9139607a75c65e18d69c68506ef92?placeholderIfAbsent=true',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit,Lorem ipsum amet, consectetur adipisicing elit,Lorem ipsum dolor sit adipisicing elit,Lorem ipsum dolor sit dolor sit amet, consectetur adipisicing elit,',
    featured: true
  },
  {
    id: '3',
    name: 'James Smith',
    role: 'Entrepreneur',
    avatar: 'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4bb1f9d3c9a9139607a75c65e18d69c68506ef92?placeholderIfAbsent=true',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet, consectetur adipisicing elit,Lorem ipsum amet, consectetur adipisicing elit,Lorem ipsum dolor sit adipisicing elit,Lorem ipsum dolor sit dolor sit amet, consectetur adipisicing elit,'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="text-[rgba(48,38,28,1)] text-[32px] font-normal text-center mt-16 max-md:mt-10">
        Come and Join
      </div>
      <h2 className="text-[rgba(48,38,28,1)] text-[32px] font-semibold tracking-[1.28px] uppercase mt-3 text-center">
        our happy customers
      </h2>
      
      <div className="w-full max-w-[1444px] mt-8 mx-auto max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`w-[33%] ${index > 0 ? 'ml-5' : ''} max-md:w-full max-md:ml-0`}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                testimonial={testimonial.testimonial}
                featured={testimonial.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
