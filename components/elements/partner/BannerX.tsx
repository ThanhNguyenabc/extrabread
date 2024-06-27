import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface BannerX {
  heading?: React.ReactElement | string;
  desc?: React.ReactElement | string;
  tag?: React.ReactElement | string;
  button?: {
    title: string;
    onBtnClick?: () => void;
    className?: string
  };
  headingClassName?: string;
  image?: StaticImageData | string;
  className?: string;
  extraComponent?: React.ReactElement;
  leftCmpClassName?: string;
}

const BannerX = ({
  heading,
  headingClassName,
  leftCmpClassName,
  desc,
  tag,
  button,
  image,
  extraComponent,
  className
}: BannerX) => {
  return (
    <Hero className={cn("gap-4 md:gap-8 lg:flex-row" , className)}>
      <div
        className={cn(
          `flex flex-col h-fit self-center gap-4 md:gap-10 lg:gap-12`,
          leftCmpClassName,
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-4 max-w-[300px] md:gap-6 md:max-w-[480px]',
            headingClassName,
          )}
        >
          {tag && <Badge>{tag}</Badge>}
          <h1 className="heading-md md:heading-xl"> {heading}</h1>
          {desc && <h3 className="text-base text-neutral-700 font-semibold md:text-lg"> {desc}</h3>}
        </div>
        {extraComponent && extraComponent}
        {button && (
          <Button size={'responsive'} onClick={button.onBtnClick} className={cn("md:w-[250px]" , button.className)}>
            {button.title}
          </Button>
        )}
      </div>
      {image && (
        <div className="block flex-1 w-full mx-auto justify-items-end">
          <Image
            src={image}
            width={682}
            height={682}
            alt="banner-image"
            className="lg:mt-4"
            quality={100}
            priority
          />
        </div>
      )}
    </Hero>
  );
};

export default BannerX;
