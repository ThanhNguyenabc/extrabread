import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import { CheckCircleIcon, ReceiveCashIcon, WritingIcon } from '@/ui/img-resource/ExIcon';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Icons = [WritingIcon, CheckCircleIcon, ReceiveCashIcon];

const QuickEasy = ({ btnClick }: { btnClick?: () => void }) => {
  const { t: common } = useTranslation();
  const sectionItems = common('funding_form.quickItems', { returnObjects: true }) as Array<any> | null;

  return (
    <div className="bg-green-100">
      <Hero className="gap-6 md:gap-8 lg:gap-12 items-center">
        <h3 className="heading-sm text-center md:heading-lg">{`Quick and easy`}</h3>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          {sectionItems?.map((item, index) => {
            const Icon = Icons[index];
            return (
              <div
                key={`quick-section-${index}`}
                className="flex flex-1 flex-row border border-neutral-300 gap-4 py-4 px-6 bg-white rounded-2xl md:p-6 md:flex-col"
              >
                <div className=" w-[34px] md:w-[48px] aspect-square">
                  <Icon />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <span className="text-lg-semibold md:heading-xs">{item['title']}</span>
                  <p className="text-neutral-700">{item['desc']}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Button size={'responsive'} onClick={btnClick} className="lg:hidden">
          {common('get_start_today')}
        </Button>
      </Hero>
    </div>
  );
};

export default QuickEasy;
