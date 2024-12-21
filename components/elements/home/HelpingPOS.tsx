import Hero from '@/components/ui/hero';
import { IcBusiness, IcDecision, IcPricing, IcSchedule } from '@/ui/img-resource/ExIcon';
import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Factors = [
  {
    icon: IcBusiness,
    title: 'schedule_a_demo',
    content: 'schedule_a_demo_desc',
  },
  {
    icon: IcSchedule,
    title: 'business_review',
    content: 'business_review_desc',
  },

  {
    icon: IcPricing,
    title: 'obtain_pricing',
    content: 'obtain_pricing_desc',
  },
  {
    icon: IcDecision,
    title: 'final_decision',
    content: 'final_decision_desc',
  },
];

const HelpingPOS = () => {
  const { t } = useTranslation('home');
  const trans = t('helpingsection', {
    returnObjects: true,
  });

  return (
    <Hero className="gap-10 lg:flex-row lg:gap-[100px]">
      <div className=" flex flex-col gap-6 flex-1 lg:max-w-[480px]">
        <h3 className="txt-heading-medium md:txt-heading-medium whitespace-pre-line">
          {HTMLReactParser(trans['helping_section_title'])}
        </h3>
        <p className="txt-md mdleading-7 md:text-xl text-neutral-700">
          {HTMLReactParser(trans['helping_section_desc'])}
        </p>
      </div>
      <ul className="flex flex-col flex-1 gap-10 lg:gap-16">
        {Factors.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={`helping-${index}`} className="flex flex-row gap-6">
              <span>
                <Icon className="w-16 md:w-[80px] flex-1" />
              </span>
              <div className="flex flex-col lg:max-w-md gap-2">
                <p className="txt-md-bold md:text-xl">{trans[item.title]}</p>
                <p className="txt-sm md:text-base text-neutral-700">{trans[item.content]}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Hero>
  );
};

export default HelpingPOS;
