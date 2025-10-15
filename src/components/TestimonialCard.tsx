import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
  featured?: boolean;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  testimonial,
  featured = false,
  className = ''
}) => {
  const containerClasses = featured
    ? 'border-[rgba(143,105,73,0.35)] bg-white text-[rgba(48,38,28,1)] shadow-[0_30px_70px_rgba(48,38,28,0.14)] ring-1 ring-[rgba(143,105,73,0.25)]'
    : 'border-[rgba(48,38,28,0.08)] bg-white/85 text-[rgba(48,38,28,1)] shadow-[0_20px_60px_rgba(48,38,28,0.08)] hover:border-[rgba(48,38,28,0.2)] hover:shadow-[0_25px_80px_rgba(48,38,28,0.12)]';

  const quoteColor = featured ? 'text-[rgba(143,105,73,0.35)]' : 'text-[rgba(143,105,73,0.4)]';
  const bodyColor = 'text-[rgba(84,74,62,0.85)]';
  const roleColor = 'text-[rgba(84,74,62,0.65)]';

  return (
    <article
      className={`group relative flex h-full flex-col justify-between gap-6 rounded-3xl border px-8 py-10 transition duration-300 ${containerClasses} ${className}`}
    >
      <span className={`text-4xl font-serif leading-none ${quoteColor}`} aria-hidden="true">
        “
      </span>

      <p className={`text-base leading-7 transition duration-300 ${bodyColor}`}>
        {testimonial}
      </p>

      <div className="mt-auto flex items-center gap-4">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-[rgba(143,105,73,0.1)]"
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold tracking-tight">{name}</div>
          <div className={`text-sm uppercase tracking-[0.3em] ${roleColor}`}>{role}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.45em]">
        <span className="text-[rgba(143,105,73,0.9)]">
          ★★★★★
        </span>
        <span className="text-[rgba(143,105,73,0.7)]">
          Verified Guest
        </span>
      </div>
    </article>
  );
};
