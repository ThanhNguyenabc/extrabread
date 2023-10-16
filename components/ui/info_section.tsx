import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { HTMLAttributes } from 'react';
import { Badge } from './badge';
import { Button, ButtonProps } from './button';
import Hero from './hero';

export type ImageDirection = 'left' | 'right';

interface InfoSectionProps extends HTMLAttributes<HTMLDivElement> {
  imageDirection: 'left' | 'right';
  image?: React.ReactElement;
  dataConfig: {
    infoClassName?: string;
    title: string;
    desc: string;
    extraComponent?: React.ReactElement;
    ctaConfig?: {
      title: string;
      ctaClassName?: string;
      buttonProps?: ButtonProps;
      onClick: () => void;
    };
    tagConfig?: {
      text: string;
      tagClassName?: string;
    };
  };
}

const InfoSection = ({
  imageDirection = 'left',
  className,
  image,
  dataConfig,
}: InfoSectionProps) => {
  const { ctaConfig, title, desc, infoClassName, extraComponent, tagConfig } = dataConfig;
  return (
    <Hero
      className={cn(
        'flex flex-col-reverse md:flex-row gap-4 md:gap-6 lg:max-h-[920px]',
        className,
        imageDirection === 'left' && 'md:flex-row-reverse',
      )}
    >
      <div
        className={cn(
          `flex flex-1 flex-col gap-4 mx-auto lg:max-w-[560px] justify-between`,
          infoClassName,
        )}
      >
        {tagConfig && (
          <Badge className={cn('bg-neutral-300', tagConfig.tagClassName)}>{tagConfig.text}</Badge>
        )}
        <h3 className="heading-xs md:heading-md lg:heading-lg">{title}</h3>
        <p className="text-sm text-neutral-700 md:text-base lg:text-lg">{desc}</p>
        {extraComponent && extraComponent}
        {ctaConfig && (
          <Button
            onClick={ctaConfig.onClick}
            size={'responsive'}
            className={cn(ctaConfig.ctaClassName)}
            {...ctaConfig.buttonProps}
          >
            {ctaConfig.title}
          </Button>
        )}
      </div>
      {image && image}
    </Hero>
  );
};

export default InfoSection;
