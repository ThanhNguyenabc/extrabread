import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import CustomCircularProgress from '@/components/ui/CustomCircularProgress';
import { getSystemIcon } from '@/helpers';
import { IcChevronRight, IcLike } from '@/ui/img-resource/ExIcon';
import { DefaultImg } from '@/ui/img-resource/ImageResources';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import POSCardBusinessType from './POSCardBusinessType';
import { POSCardProps } from './POSCardTypes';

const POSCardMobile = ({ data, priority, classname, navigateTo = '' ,openRequestDemo}: POSCardProps) => {
  const overallRating = data.expert_opinion?.overall;
  const { id, name } = data;
  const { t } = useTranslation("pos_systems");


  return (
    <div
      className={twMerge(
        `w-full 
      bg-white shadow-md rounded-2xl overflow-hidden border-2 border-white hover:border-secondary`,
        classname,
      )}
    >
      <div className="flex flex-row border-b border-b-neutral-300">
        <Link
          className={`flex flex-col justify-center pr-4 .${name.toLowerCase()}`}
          href={navigateTo}
        >
          {priority === 'first' && (
            <div
              className="flex flex-row bg-primary text-white px-1 justify-center 
        items-center gap-2 rounded-br-lg rounded-tl-lg"
            >
              <IcLike className="text-sm" />
              <p className="text-[10px] font-semibold mt-1">MOST RECOMMENDED</p>
            </div>
          )}
          <div className="block w-[120px] pt-1">
            <Image
              src={data.logo || DefaultImg}
              alt="logo-pos"
              width={140}
              height={70}
              quality={80}
              sizes="20vw"
              className="aspect-[2/1] object-contain ml-3"
            />
          </div>

          <div className="flex flex-rơw gap-2 pl-3 items-center py-2">
            <CustomCircularProgress
              id="card-mobile-progress"
              className="w-[40px] h-fit"
              value={overallRating}
            >
              <p className="txt-sm-bold">{overallRating}</p>
            </CustomCircularProgress>
            <div className="flex flex-col">
              <p className="txt-sm text-neutral-600">
                {(priority && t('out_standing')) || t('good')}
              </p>
              <div className="inline-flex link-hover text-secondary text-xs items-center gap-1">
                {t('read_review')}
                <IcChevronRight className="text-[8px]" />
              </div>
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col gap-5 px-2 items-center justify-end py-3 border-l border-neutral-300">
          <div
            onClick={openRequestDemo}
            className="text-sm link-hover font-semibold leading-5 text-secondary cursor-pointer"
          >
            {t('free_pos').replace('#', name)}
          </div>
          <Button
            onClick={openRequestDemo}
            className="rounded-[30px] w-[160px] bg-success hover:bg-success/90 text-sm md:text-sm"
          >
            {t('request_a_demo')}
          </Button>
         
        </div>
      </div>

      <div className="flex-1 flex flex-row p-3">
        <div className="flex items-center gap-3 border-r border-neutral-300 pr-3">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-8 h-8 text-neutral-400" />;
          })}
        </div>
        <POSCardBusinessType productId={id} />
      </div>
    </div>
  );
};
export default POSCardMobile;
