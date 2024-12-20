import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/helpers';
import { IcChevronRight } from '@/ui/img-resource/ExIcon';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';

const PricingPerType = ({
  plan,
  money,
  desc,
  className,
}: {
  plan: string;
  money: number;
  desc: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-1 flex-col gap-2
      items-center justify-center text-center ${className}`}
    >
      <p className="txt-sm-bold md:text-base">{plan}</p>
      <p className="txt-heading-small md:txt-heading-large text-neutral-900">
        {formatCurrency(money)}
      </p>
      <p className="txt-sm text-neutral-700 md:text-base">{desc}</p>
    </div>
  );
};

export interface PricingProps {
  desc: Array<string>;
  monthlyPrice: number;
  oneTimePurchase: number;
  productName?: string;
  onRequestDemo?: () => void;
}

const Pricing = ({
  desc,
  monthlyPrice,
  oneTimePurchase,
  productName,
  onRequestDemo,
}: PricingProps) => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('pos-detail');
  const pricingTrans = useMemo(() => t('pricing', { returnObjects: true }), [t]);
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
      <p className="txt-heading-xsmal col-span-1 md:txt-heading-small">{pricingTrans['title']}</p>
      <div className=" col-span-2 flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col">
          {desc.map((item, index) => (
            <p key={`${index}-desc`} className="txt-md text-neutral-700">
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
          <div className="flex-1 flex flex-col p-6 gap-2 items-center text-center border border-neutral-300 rounded-2xl w-full">
            <h3 className="txt-large-bold mb-2 md:text-2xl">
              Get the full price from {productName}
            </h3>

            <PricingPerType
              plan={pricingTrans['monthly_plan']}
              money={monthlyPrice}
              desc={pricingTrans['per_month']}
              className="text-primary"
            />
            <div className="w-full h-[1px] bg-neutral-300" />
            <PricingPerType
              plan={pricingTrans['one_time_purchase']}
              money={oneTimePurchase}
              desc={pricingTrans['per_station']}
              className="text-secondary"
            />
          </div>
          <span className="txt-large-bold self-center">Or</span>
          <div className="flex-1 flex relative items-center flex-col gap-4 p-6 justify-between bg-neutral-dark rounded-2xl text-white text-center md:p-8">
            <Badge className="absolute -top-3  border-none bg-accent text-neutral-900 md:py-1">
              BestPOS Offer
            </Badge>
            <div>
              <h3 className="txt-large-bold md:text-2xl">Save Big on POS Costs</h3>
              <p className="txt-sm md:text-base">
                Start using {productName} for your business today, with pricing options starting at
              </p>
            </div>
            <span className="txt-md-bold my-4 md:text-xl">
              Up to <br />
              <span className="txt-heading-medium md:txt-heading-xlarge">100% off</span>
            </span>
            <Button className="w-full" onClick={onRequestDemo} size={'responsive'}>
              {common('request_a_demo')}
              <IcChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
