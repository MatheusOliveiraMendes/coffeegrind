import React from 'react';

interface FooterSection {
  title: string;
  links: string[];
}

const footerSections: FooterSection[] = [
  {
    title: 'PRIVACY',
    links: ['Terms of use', 'Privacy policy', 'Cookies']
  },
  {
    title: 'SERVICES',
    links: ['Shop', 'Order ahead', 'Menu']
  },
  {
    title: 'ABOUT US',
    links: ['Find a location', 'About us', 'Out story']
  },
  {
    title: 'INFOTNATION',
    links: ['Plons & pricing', 'Sell your prodcts', 'Jobs']
  }
];

const socialLinks = [
  { label: 'Facebook', icon: '/facebook.svg' },
  { label: 'Instagram', icon: '/instagram.svg' },
  { label: 'Twitter', icon: '/twitter.svg' },
  { label: 'LinkedIn', icon: '/linkedin.svg' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(48,38,28,1)] self-stretch z-10 flex w-full flex-col items-center justify-center px-[70px] py-[88px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1445px] gap-[40px_100px] flex-wrap max-md:max-w-full">
        <div className="text-white text-[32px] font-bold uppercase grow">
          <span style={{fontFamily: 'Playfair Display, -apple-system, Roboto, Helvetica, sans-serif', fontSize: '36px'}}>
            C
          </span>
          <span style={{fontFamily: 'Playfair Display, -apple-system, Roboto, Helvetica, sans-serif', fontSize: '28px'}}>
            offeeGrind
          </span>
        </div>
        
        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col items-stretch text-lg text-white font-normal mt-4">
            <h3 className="text-2xl font-medium uppercase">
              {section.title}
            </h3>
            {section.links.map((link, linkIndex) => (
              <a 
                key={linkIndex}
                href="#"
                className={`${linkIndex === 0 ? 'mt-6' : 'mt-[15px]'} hover:text-gray-300 transition-colors`}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
        
        <div className="flex flex-col items-stretch mt-[18px]">
          <h3 className="text-white text-2xl font-bold uppercase">
            SOCIAL MEDIA
          </h3>
          <div className="self-center flex w-[180px] max-w-full items-stretch gap-3 mt-[35px]">
            {socialLinks.map(({ label, icon }, index) => (
              <a 
                key={index}
                href="#"
                aria-label={`Visit our ${label}`}
                className="hover:opacity-80 transition-opacity"
              >
                <span className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={icon}
                    alt={label}
                    className="w-6 h-6 object-contain filter invert"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
