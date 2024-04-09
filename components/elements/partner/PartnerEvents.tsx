import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import { usePartnerContext } from '@/pages/partner';
import { PartnerISOProgram, PartnerTeamMate } from '@/ui/img-resource/ImageResources';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const PartnerItem = ({
  title,
  desc,
  imageDirection,
  image,
}: {
  imageDirection: string;
  title: string;
  desc: string;
  image: StaticImageData;
}) => {
  const { navigatePartnerForm } = usePartnerContext();
  const { t: common } = useTranslation('common');

  return (
    <div
      className={clsx(
        'flex flex-col bg-neutral-200 items-center rounded-2xl gap-8 p-4 md:p-8 sm:flex-row',
        imageDirection == 'right' ? ' flex-col-reverse sm:flex-row-reverse' : '',
      )}
    >
      <div className="flex-1 sm:max-h-[300px] md:max-h-[400px] overflow- rounded-lg">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          quality={100}
          className=" w-full object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="heading-xs md:heading-md">{title}</h3>
        <p className="md:text-lg">{desc}</p>
        <Button onClick={navigatePartnerForm} size={'responsive'}>
          {common('join_extrbread')}
        </Button>
      </div>
    </div>
  );
};

const ListItems = [
  {
    image: PartnerTeamMate,
    imageDirection: 'left',
  },
  {
    image: PartnerISOProgram,
    imageDirection: 'right',
  },
];

const PartnerEvents = () => {
  const { t } = useTranslation('partner');

  const program = t('partner_program_items', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }> | null;

  return (
    <Hero className="flex flex-col gap-6 md:gap-8 sm:items-center">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="heading-xs text-center md:max-w-[475px] md:heading-lg">
          {t('partner_program_heading')}
        </h3>
        <p className="md:text-lg text-neutral-700 text-center whitespace-pre-line sm:max-w-2xl">
          {t('partner_program_desc')}
        </p>
      </div>

      {program?.map((item, index) => (
        <PartnerItem
          key={item.title}
          title={item.title}
          desc={item.desc}
          image={ListItems[index].image}
          imageDirection={ListItems[index].imageDirection}
        />
      ))}
    </Hero>
  );
};

export default PartnerEvents;
