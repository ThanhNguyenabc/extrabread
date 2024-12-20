import { getListPOS } from '@/apis/product';
import Box from '@/components/ui/bestpos/Box';
import { Button } from '@/components/ui/button';
import { RouteConfig } from '@/constants/routes';
import { IcChevronRight } from '@/ui/img-resource/ExIcon';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import useSWRImmutable from 'swr/immutable';
import POSCard from '../pos_card/POSCard';

const SimilarPOS = () => {
  const { t } = useTranslation('pos-detail');

  const { data: products } = useSWRImmutable('similar-pos', () => getListPOS({ limit: 3 }));
  return (
    <Box className="flex flex-col py-4 items-center gap-4 bg-neutral-100 md:py-10 md:gap-6">
      <p className="txt-md-bold md:txt-heading-medium">Similar POS systems you may like</p>

      {products?.map((item, index) => {
        return <POSCard key={`card-item-${index}`} data={item} />;
      })}

      <Link href={RouteConfig.POSSystems}>
        <Button className="w-full md:w-[220px] mx-auto" variant={'outline'}>
          {t('explore_all')} <IcChevronRight />
        </Button>
      </Link>
    </Box>
  );
};

export default React.memo(SimilarPOS);
