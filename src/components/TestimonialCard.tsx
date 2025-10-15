import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
  featured?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  testimonial,
  featured = false
}) => {
  return (
    <article className={`bg-[rgba(226,217,200,0.4)] flex w-full flex-col self-stretch items-stretch m-auto pt-7 ${featured ? 'pb-[45px] px-7 border-[rgba(48,38,28,0.1)] border-solid border-2' : 'pb-[17px] px-6'} rounded-[18px] max-md:mt-10 ${featured ? 'max-md:px-5' : 'max-md:pl-5'}`}>
      <div className="flex items-center gap-3 font-semibold">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-14 h-14 object-cover rounded-full shrink-0 my-auto"
        />
        <div className="self-stretch w-[121px] my-auto">
          <div className="text-[rgba(48,38,28,1)] text-lg">
            {name}
          </div>
          <div className="text-[#30261c] text-sm">
            {role}
          </div>
        </div>
      </div>
      <p className="text-[rgba(48,38,28,1)] text-xs font-medium leading-5 mt-[18px]">
        {testimonial}
      </p>
    </article>
  );
};
