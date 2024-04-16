import Hero from '@/components/ui/hero';
import { BreadCard } from '@/ui/atoms/bread-card/BreadCard';
import { SectionHeading } from '@/ui/atoms/heading/Heading';
import { useTranslation } from 'next-i18next';
import React from 'react';

const CompetitiveAdvantage = () => {
  const { t } = useTranslation('home');

  const Items = t('competitive_advantage.items', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }> | null;

  return (
    <BreadCard innerClassName="flex flex-col justify-items-center gap-6 md:gap-8">
      <div className="flex flex-col gap-4 text-center items-center md:gap-6">
        <h3 className="heading-xs md:heading-lg"> {t('competitive_advantage.heading')}</h3>
        <p className="text-center text-neutral-700 md:text-lg md:max-w-[750px]">
          {t('competitive_advantage.sub_heading')}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 md:mt-4">
        {Items?.map(item => (
          <div key={item.title} className="flex flex-col p-4 bg-green-100 rounded-2xl gap-4 md:p-6">
            <h3 className="text-lg-semibold md:heading-xs">{item.title}</h3>
            <p className="text-sm text-neutral-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </BreadCard>
  );
};

export default CompetitiveAdvantage;
