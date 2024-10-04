import { getSpecification } from '@/apis/product';
import useTrans from '@/hooks/useTrans';
import { Locale } from '@/models/bestpos/app_configs';
import { IcBarClub, IcQuickService, IcRestaurant, IcRetail } from '@/ui/img-resource/ExIcon';
import React from 'react';
import useSWRImmutable from 'swr/immutable';

const Icons = {
  Retail: IcRetail,
  'Bars and Night Clubs': IcBarClub,
  Restaurants: IcRestaurant,
};

const POSCardBusinessType = ({ productId }: { productId: string }) => {
  const { data } = useSWRImmutable(productId, getSpecification);
  const { locale = Locale.en } = useTrans();

  return (
    <div className="flex whitespace-nowrap overflow-x-scroll scroll scrollbar-hide">
      {data &&
        data.bestFor?.[locale]?.split(',').map((item, index) => {
          const Icon = Icons[item as keyof typeof Icons] || IcQuickService;
          return (
            <div
              key={`type-${productId}-${index}`}
              className="flex ml-3 gap-1 sm:ml-6 items-center"
            >
              <Icon />
              <p className="text-xs text-neutral-600 sm:text-sm">{item}</p>
            </div>
          );
        })}
    </div>
  );
};

export default POSCardBusinessType;
