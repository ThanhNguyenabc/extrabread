import { getSystemIcon } from '@/helpers';
import Image from 'next/image';
import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { twMerge } from 'tailwind-merge';

import { COLORS } from '@/constants/colors';
import useTrans from '@/hooks/useTrans';
import { DefaultImg } from '@/ui/img-resource/ImageResources';
import { POSCardProps } from '../pos_card/POSCardTypes';
import { BreadMeBtn } from '@/components/ui/BreadmeBtn';
import PricingBtn from '@/components/ui/PricingBtn';

const RecommendPOSCardMobile = ({ data, classname = '' }: POSCardProps) => {
  const overallRating = data.expert_opinion?.overall;
  const { locale } = useTrans();
  return (
    <div
      className={twMerge(
        `bg-white card gap-4 inline-flex flex-col rounded-2xl p-4 shadow-poscard cursor-pointer`,
        classname,
      )}
    >
      <div className="gap-2 flex flex-col items-start">
        <div className=" w-full flex flex-row h-10 items-center justify-between">
          <Image
            src={data.logo || DefaultImg}
            alt="logo-pos"
            width={80}
            height={40}
            className="object-contain"
          />
          <div className="flex items-center gap-4">
            {data.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
            })}

            <div className=" h-10 w-10">
              <CircularProgressbarWithChildren
                strokeWidth={10}
                maxValue={10}
                value={overallRating}
                styles={{
                  path: {
                    stroke: COLORS.orange[500],
                    transition: 'stroke-dashoffset 0.5s ease 0s',

                    transform: 'rotate(1turn)',
                    transformOrigin: 'center center',
                  },
                  trail: {
                    stroke: COLORS.neutral[100],
                    strokeLinecap: 'butt',
                    transform: 'rotate(1turn)',
                    transformOrigin: 'center center',
                  },
                }}
              >
                <p className="txt-sm-bold">{overallRating}</p>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
        <p className="w-full text-sm text-left text-neutral-700">{data.overview?.[locale]}</p>
      </div>
      <div className="flex gap-2 w-full">
        <BreadMeBtn />
        <PricingBtn logo={data.logo || ''} color={COLORS.blue[500]} onClick={() => {}}>
          {`${data.monthly_price}/month`}
        </PricingBtn>
      </div>
    </div>
  );
};

export default RecommendPOSCardMobile;
