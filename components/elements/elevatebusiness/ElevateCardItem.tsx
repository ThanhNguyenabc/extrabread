import { Button } from '@/components/ui/button';
import { Product } from '@/models/product.model';
import { IcCheck } from '@/ui/img-resource/ExIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ElevateCardItem = ({ desc, logo, pros, route = '' }: Product) => {
  return (
    <div className="flex flex-col rounded-lg p-4 gap-2 bg-white lg:p-6 lg:gap-4">
      {logo && (
        <Image
          src={logo}
          alt="pos-logo"
          width={200}
          height={100}
          quality={90}
          className="self-center aspect-[2/1] w-[120px] md:w-[160px] lg:w-[200px] object-contain"
        />
      )}
      <p className="text-sm-semibold"> {desc}</p>
      <div className="flex-1 flex flex-col gap-1">
        {pros?.map(item => (
          <div key={`${item}`} className="flex gap-1 items-end">
            <IcCheck className="text-green-500 w-6 h-6" />
            <p className="flex-1 text-sm text-neutral-600">{item}</p>
          </div>
        ))}
      </div>
      <Link href={route}>
        <Button className="w-full bg-neutral-900 hover:bg-slate-800 md:w-full">Learn more</Button>
      </Link>
    </div>
  );
};

export default ElevateCardItem;
