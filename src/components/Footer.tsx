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

const socialIcons = [
  'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/b8ab22db1991534c0de6afa5fb2a392440adb60b?placeholderIfAbsent=true',
  'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/5ca1898a34719967788429128618904f9213195e?placeholderIfAbsent=true',
  'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/1798d3315dce15fee28a4ef03411c36e00c82b51?placeholderIfAbsent=true',
  'https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/c5ffb0b140aa903d2b77b655b7d1f0c6a7ad4807?placeholderIfAbsent=true'
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
        
        {footerSections.map((section, index) => (
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
          <div className="self-center flex w-[132px] max-w-full items-stretch gap-3 mt-[35px]">
            {socialIcons.map((icon, index) => (
              <a 
                key={index}
                href="#"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={icon}
                  alt={`Social media ${index + 1}`}
                  className="aspect-[1] object-contain w-6 shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
