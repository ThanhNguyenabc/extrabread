import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { HTMLAttributes } from 'react';
import { Badge } from './badge';
import { Button } from './button';
import Hero from './hero';

export type ImageDirection = 'left' | 'right';

interface InfoSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
  extraComponent?: React.ReactElement;
  ctaConfig?: {
    title: string;
    onClick: () => void;
  };
  tagConfig?: {
    text: string;
    bgColor: string;
  };
  imageLink: StaticImageData;
  imageDirection: 'left' | 'right';
}

const InfoSection = ({
  tagConfig,
  title,
  desc,
  imageLink,
  imageDirection = 'left',
  extraComponent,
  ctaConfig,
  className,
}: InfoSectionProps) => {
  return (
    <Hero
      className={cn(
        'flex flex-col-reverse md:flex-row gap-4 md:gap-6 lg:max-h-[920px]',
        className,
        imageDirection === 'left' && 'md:flex-row-reverse',
      )}
    >
      <div className="flex flex-1 flex-col mx-auto lg:max-w-[560px] justify-between ">
        {tagConfig && <Badge className={`${tagConfig.bgColor}`}>{tagConfig.text}</Badge>}
        <h3 className="heading-xs my-3 md:my-4 md:heading-md lg:heading-lg">{title}</h3>
        <p className="text-sm text-neutral-700 md:text-base lg:text-lg">{desc}</p>
        {extraComponent && extraComponent}
        {ctaConfig && (
          <Button onClick={ctaConfig.onClick} className="w-fit">
            {ctaConfig.title}
          </Button>
        )}
      </div>
      <div className="block w-full md:self-center md:w-[40%] lg:w-[42%] xl:self-start">
        <Image
          src={imageLink}
          alt="info-image"
          width={700}
          height={780}
          quality={100}
          className=" object-cover "
        />
      </div>
    </Hero>
  );
};

export default InfoSection;
