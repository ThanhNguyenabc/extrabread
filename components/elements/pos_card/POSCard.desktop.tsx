import RecommendTag from '@/components/ui/RecommendTag';
import { getSystemIcon } from '@/helpers';
import useTrans from '@/hooks/useTrans';
import { DefaultImg } from '@/ui/img-resource/ImageResources';

import { Button } from '@/components/ui/button';
import CustomCircularProgress from '@/components/ui/CustomCircularProgress';
import { IcCheck, IcChevronRight } from '@/ui/img-resource/ExIcon';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import POSCardBusinessType from './POSCardBusinessType';
import { POSCardProps } from './POSCardTypes';

const POSCardDesktop = ({
  data,
  classname = '',
  priority,
  recommendTagProps,
  openRequestDemo,
  navigateTo = '',
}: POSCardProps) => {
  const { t } = useTranslation('pos_systems');
  const { locale } = useTrans();
  const overallRating = data.expert_opinion?.overall;
  const { id, name } = data;

  return (
    <div
      className={twMerge(
        ' relative w-[1000px] bg-white shadow-poscard rounded-2xl border-2 border-white  hover:border-secondary',
        classname,
      )}
    >
      <div className="absolute -top-4 ">
        {priority && recommendTagProps && <RecommendTag {...recommendTagProps} />}
      </div>
      <div className="flex flex-row border-b border-b-neutral-300">
        <div className="flex-1 flex flex-col items-start">
          <Link className={`block w-[160px] ml-4 my-auto .${name.toLowerCase()}`} href={navigateTo}>
            <Image
              src={data.logo || DefaultImg}
              alt="logo-pos"
              width={160}
              height={80}
              quality={95}
              className="aspect-[2/1] object-contain"
            />
          </Link>
        </div>

        <div className=" flex-1 flex flex-col p-4 ml-2">
          <p className="txt-md-bold line-clamp-5  w-[380px]">{data.overview?.[locale]}</p>
          <ul className="flex flex-col flex-1 text-left ">
            {data.pros?.[locale]?.map((item, index) => {
              if (index > 3) return;
              return (
                <li className="flex flex-row items-center gap-2 mt-2" key={`${index}-item-pros`}>
                  <IcCheck className="text-secondary text-sm" />
                  <p className="txt-sm flex-1 text-left text-neutral-700">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          className=" flex-1 flex flex-col border-l border-neutral-300 border-r gap-1 py-8 px-4 items-center justify-center"
          href={navigateTo}
        >
          <CustomCircularProgress
            id="card-desktop-progress"
            className="w-[64px] h-fit"
            value={overallRating}
          >
            <p className="txt-large-bold">{overallRating}</p>
          </CustomCircularProgress>
          <p className="text-sm text-neutral-600">{(priority && t('out_standing')) || t('good')}</p>
          <div className="inline-flex link-hover text-secondary txt-sm-bold items-center gap-1">
            {t('read_review')}
            <IcChevronRight className="text-[9px]" />
          </div>
        </Link>
        <div className="flex-1 flex flex-col gap-8 py-8 px-4 items-center self-center">
          <div
            onClick={openRequestDemo}
            className="text-base link-hover font-semibold text-secondary cursor-pointer px-3 text-center max-w-[230px]"
          >
            {t('free_pos').replace('#', name)}
          </div>
          <Button
            onClick={openRequestDemo}
            className="rounded-[30px] w-[210px] bg-success hover:bg-success/90 md:text-base lg:text-base"
          >
            {t('request_a_demo')}
          </Button>
        </div>
      </div>

      <div className="flex flex-row p-4">
        <div className="flex items-center gap-3 border-r border-neutral-300 pr-6">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-6 h-6 text-neutral-400" />;
          })}
        </div>
        <POSCardBusinessType productId={id} />
      </div>
    </div>
  );
};

export default POSCardDesktop;
