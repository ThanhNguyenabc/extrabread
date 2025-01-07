import useLocale from '@/hooks/useLocale';
import { ProductDetail } from '@/models/bestpos/product-detail.model';
import { DefaultImg } from '@/ui/img-resource/ImageResources';
import Image from 'next/image';
import React from 'react';

const Introduction = ({ productData }: { productData: ProductDetail }) => {
  const { locale } = useLocale();

  return (
    <div className="flex flex-col gap-4 md:gap-8  lg:flex-row">
      <div className="col-span-1 items-center flex flex-col gap-4">
        <div className="block w-[120px] aspect-[2] md:w-[240px]">
          <Image src={productData.logo || DefaultImg} alt="pos-logo" width={240} height={120} />
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-4 md:gap-8 flex-1">
        <p className="txt-md md:text-xl text-neutral-700 whitespace-pre-line">
          {productData.intro?.[locale]}
        </p>
      </div>
    </div>
  );
};

export default Introduction;
