import Hero from '@/components/ui/hero';
import { subject } from '@/helpers';
import { cn } from '@/lib/utils';
import { useTranslation } from 'next-i18next';
import React from 'react';

const DiscoverItem = [
  {
    id: 'referral',
    bgColor: 'bg-yellow-200',
    hoverColor: 'bg-yellow-500',
  },
  {
    id: 'in-house',
    bgColor: 'bg-red-200',
    hoverColor: 'bg-red-400',
  },
  {
    id: 'iso-agent',
    bgColor: 'bg-green-100',
    hoverColor: 'bg-green-400',
  },
];

const DiscoverPartner = () => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('partner');

  const onItemClick = id => () => {
    subject.next({ id });
  };

  return (
    <Hero className="md:max-w-[784px]">
      <span className="text-sm-semibold text-green-500">{common('how_it_works')}</span>
      <h3 className="mt-2 mb-8 heading-xs md:heading-lg">{t('discover_side_hustle')}</h3>
      <p className="mt-6 text-base text-neutral-700  md:text-lg md:mt-12">{t('discover_desc')}</p>
      <div className="grid grid-cols-3 gap-4 py-4 md:py-6">
        {DiscoverItem.map(({ bgColor, id }) => (
          <button onClick={onItemClick(id)} key={`${id}`}>
            <p
              className={cn(
                `block text-lg-semibold p-3 text-center rounded-lg cursor-pointer md:p-8 md:heading-sm transition`,
                bgColor,
                `hover:bg-green-500 hover:text-white`,
              )}
            >
              {t(id)}
            </p>
          </button>
        ))}
      </div>
      <p className="text-base text-neutral-700 md:text-lg">{t('discover_desc1')}</p>
    </Hero>
  );
};

export default DiscoverPartner;
