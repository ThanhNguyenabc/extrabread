import { Button, buttonVariants } from '@/components/ui/button';
import { RouteConfig } from '@/constants';
import { cn } from '@/lib/utils';
import { BreadCard } from '@/ui/atoms/bread-card/BreadCard';
import { IcCheckCircle } from '@/ui/img-resource/ImageResources';
import htmlParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

const ICONS = {
  small: {
    icon: '/images/1-stations.png',
    color: '#FEEE95',
  },
  medium: {
    icon: '/images/3-stations.png',
    color: '#FECDCA',
  },
  large: {
    icon: '/images/6-stations.png',
    color: '#E9D7FE',
  },
};

type MerchantItem = {
  id: string;
  heading: string;
  price: string;
  pos_number: string;
  items: string[];
  children: React.ReactElement;
};

const ListFeeItem = (item: MerchantItem) => {
  const { icon, color } = ICONS[item.id];
  return (
    <div
      className={cn(
        'flex flex-col bg-white p-6 gap-6 md:p-8 w-full h-full rounded-2xl shadow-md',
        `border-t-[10px]`,
      )}
      style={{ borderColor: color }}
    >
      <div className="flex flex-col gap-2 md:gap-4">
        <h3 className="text-lg-semibold md:heading-xs">{item.heading}</h3>
        <p className="text-neutral-600">{item.price}</p>
      </div>
      <div className="flex items-center justify-items-center">
        <span className="flex-1 text-md-semibold">{item.pos_number}</span>
        <div className="w-[120px] h-[90px]">
          <Image src={icon} alt="" width={120} height={90} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 pt-4 border-t border-neutral-900 md:pt-8">
        {item.items.map(str => {
          return (
            <div key={str} className="flex gap-2 items-center">
              <IcCheckCircle className="w-6 h-6 text-neutral-600" />
              <p className="text-xs md:text-sm flex-1 text-neutral-900"> {str}</p>
            </div>
          );
        })}
      </div>
      {item.children}
    </div>
  );
};

const MerchantFee = () => {
  const { t } = useTranslation('home');
  const { t: common } = useTranslation();

  const OPTIONS = useMemo(() => {
    return t('merchant_option', { returnObjects: true }) as Array<MerchantItem>;
  }, [t]);

  const onItemClick = () => {};

  return (
    <BreadCard
      className="bg-neutral-100"
      innerClassName="flex flex-col justify-items-center gap-6 md:gap-8"
    >
      <div className="flex flex-col gap-4 text-center items-center md:gap-6">
        <h3 className="heading-xs md:heading-lg"> {t('merchant_heading')}</h3>
        <p className="text-center md:max-w-[750px]">{htmlParser(t('merchant_desc'))}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 md:mt-4">
        {Array.isArray(OPTIONS) &&
          OPTIONS.map(item => (
            <ListFeeItem key={item.id} {...item}>
              <Link href={RouteConfig.GetPricing}>
                <Button
                  onClick={onItemClick}
                  className="bg-neutral-900 w-full md:w-full hover:bg-neutral-900"
                >
                  {common('get_started')}
                </Button>
              </Link>
            </ListFeeItem>
          ))}
      </div>
    </BreadCard>
  );
};

export default MerchantFee;
