import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface BannerX {
  heading?: React.ReactElement | string;
  desc?: React.ReactElement | string;
  tag?: React.ReactElement | string;
  button?: React.ReactElement;
  image?: StaticImageData | string;
  className?: string;
  extraComponent?: React.ReactElement;
  onBtnClick?: () => void;
}

const BannerX = ({
  heading,
  className,
  desc,
  tag,
  button,
  image,
  extraComponent,
  onBtnClick,
}: BannerX) => {
  return (
    <Hero className="gap-4 md:gap-8 lg:flex-row">
      <div className="flex flex-col gap-4  md:gap-10 lg:gap-12">
        <div className="flex flex-col gap-4 md:gap-6 md:max-w-[480px]">
          {tag && <Badge>Partnership</Badge>}
          <h1 className="text-4xl font-extrabold md:text-6xl lg:text-[72px]"> {heading}</h1>
          {desc && <h3 className="text-base text-neutral-700 font-semibold md:text-lg"> {desc}</h3>}
        </div>
        <Button size={'lg'} onClick={onBtnClick}>
          Join ExtraBread Today
        </Button>
        {extraComponent && extraComponent}
      </div>
      <div className="block flex-1 w-full md:w-[682px] md:h-[524px] mx-auto justify-items-end">
        {image && (
          <Image
            src={image}
            width={682}
            height={524}
            alt="banner-image"
            className="self-end"
            quality={100}
          />
        )}
      </div>
    </Hero>
  );
};

export default BannerX;
