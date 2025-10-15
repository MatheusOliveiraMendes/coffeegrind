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
    avatar: '/Avatar1.jpg',
    testimonial: '“The slow pours here taste like a story—layered, warm, and impossible to rush. I plan client meetings around their honey latte.”'
  },
  {
    id: '2',
    name: 'Camila Duarte',
    role: 'Coffee Curator',
    avatar: '/Avatar2.jpg',
    testimonial: '“CoffeeGrind shares their farm partners, tasting notes, and brewing tips with so much care. It feels more like a coffee atelier than a café.”',
    featured: true
  },
  {
    id: '3',
    name: 'Rafael Lima',
    role: 'Food Photographer',
    avatar: '/Avatar3.jpg',
    testimonial: '“Their desserts change with the seasons, yet the balance is always spot on. The midnight mocha is a ritual before every shoot.”'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(250,246,240,1)] py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[rgba(224,196,160,0.25)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[rgba(224,196,160,0.2)] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex w-full flex-col gap-16 px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.6em] text-[rgba(143,105,73,0.7)]">
            Word on the street
          </span>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[rgba(48,38,28,1)] sm:text-4xl">
            Our guests stay for the ambience, linger for the playlists, and return for the coffee.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[rgba(84,74,62,0.75)]">
            Real voices from our community of roasters, creatives, and curious first-timers.
            Every cup is brewed to spark conversation.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
              featured={testimonial.featured}
              className="h-full w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
