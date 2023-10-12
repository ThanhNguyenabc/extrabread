import Hero from '@/components/ui/hero';
import { cn } from '@/lib/utils';
import React from 'react';

const DiscoverItem = [
  {
    text: 'Referral',
    color: 'bg-yellow-200',
  },
  {
    text: 'In-House',
    color: 'bg-red-200',
  },
  {
    text: 'Iso Agent',
    color: 'bg-green-100',
  },
];

const DiscoverPartner = () => {
  return (
    <Hero className="md:max-w-[784px]">
      <span className="text-sm-semibold text-green-500">HOW IT WORKS</span>
      <h3 className="mt-2 mb-8 heading-xs md:heading-lg">
        Discover the Ultimate Side Hustle with ExtraBread
      </h3>
      <p className="mt-6 text-base text-neutral-700  md:text-lg md:mt-12">
        At ExtraBread, we offer the ultimate side hustle for individuals seeking flexible
        opportunities during their free time. With our three programs:
      </p>
      <div className="grid grid-cols-3 gap-4 py-4 md:py-6">
        {DiscoverItem.map(({ text, color }) => (
          <p
            key={`${text}`}
            className={cn(
              `block text-lg-semibold p-3 text-center rounded-lg md:p-8 md:heading-sm`,
              color,
            )}
          >
            {text}
          </p>
        ))}
      </div>
      <p className="text-base text-neutral-700 md:text-lg">
        You can generate extra income and expand your skill set while maintaining your current
        commitments. Partnered with numerous established point-of-sale systems, you will have the
        chance to learn all about the ins and outs of the business.
      </p>
    </Hero>
  );
};

export default DiscoverPartner;
