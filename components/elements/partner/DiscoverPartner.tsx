import Hero from '@/components/ui/hero';
import { subject } from '@/helpers';
import { cn } from '@/lib/utils';
import React from 'react';

const DiscoverItem = [
  {
    id: 'referral',
    text: 'Referral',
    bgColor: 'bg-yellow-200',
    hoverColor: 'bg-yellow-500',
  },
  {
    id: 'in-house',
    text: 'In-House',
    bgColor: 'bg-red-200',
    hoverColor: 'bg-red-400',
  },
  {
    id: 'iso-agent',
    text: 'ISO Agent',
    bgColor: 'bg-green-100',
    hoverColor: 'bg-green-400',
  },
];

const DiscoverPartner = () => {
  const onItemClick = id => () => {
    subject.next({ id });
  };

  return (
    <Hero className="md:max-w-[784px]">
      <span className="text-sm-semibold text-green-500">HOW IT WORKS</span>
      <h3 className="mt-2 mb-8 heading-xs md:heading-lg">
        Discover the Ultimate Side Hustle with ExtraBread
      </h3>
      <p className="mt-6 text-base text-neutral-700  md:text-lg md:mt-12">
        At ExtraBread, we offer the ultimate side hustle for individuals seeking flexible
        opportunities during their free time.We&apos;re dedicated to keeping you at the forefront of
        the ever-changing payments landscape through innovative products and program offerings.
        Construct your sales office with a partner deeply invested in ensuring your success! With
        our three programs:
      </p>
      <div className="grid grid-cols-3 gap-4 py-4 md:py-6">
        {DiscoverItem.map(({ bgColor, text, id }) => (
          <button onClick={onItemClick(id)} key={`${text}`}>
            <p
              className={cn(
                `block text-lg-semibold p-3 text-center rounded-lg cursor-pointer md:p-8 md:heading-sm transition`,
                bgColor,
                `hover:bg-green-500 hover:text-white`,
              )}
            >
              {text}
            </p>
          </button>
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
