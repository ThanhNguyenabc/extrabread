import CustomCircularProgress from '@/components/ui/CustomCircularProgress';
import useLocale from '@/hooks/useLocale';
import { ExpertOpinion } from '@/models/bestpos/product.model';
import { Progress } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
interface ExpertOpinionProps {
  data: ExpertOpinion;
}

const RatingItem = ({ name, rating }: { name: string; rating: number }) => {
  return (
    <div
      id="export-opinion"
      key={`rate-item${name}`}
      className="flex flex-col gap-2"
      aria-label={name}
    >
      <div className="flex flex-row justify-between">
        <p className="txt-md"> {name}</p>
        <p className="txt-md-bold"> {`${rating}`}</p>
      </div>

      <Progress maxValue={10} value={rating} color="primary" size="md" aria-label={name} />
    </div>
  );
};

const ExpertOpinionCmp = ({ data }: ExpertOpinionProps) => {
  const { t } = useTranslation('pos-detail');
  const trans = t('expertOpinion', { returnObjects: true });
  const { locale } = useLocale();

  const rateItems = [
    {
      name: trans['easy_use'],
      rating: data.easy,
    },
    {
      name: trans['value'],
      rating: data.value,
    },
    {
      name: trans['support'],
      rating: data.support,
    },
    {
      name: trans['functionality'],
      rating: data.functionality,
    },
    {
      name: trans['feedback'],
      rating: data.feedback,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8">
      <p className="col-span-1 txt-heading-xsmal md:txt-heading-small">
        {t('expertOpinion.heading')}
      </p>
      <div className="col-span-2 flex flex-col gap-6 md:gap-8 w-full">
        <div className="flex flex-1 flex-row gap-8 md:gap-12 lg:gap-16">
          <CustomCircularProgress
            id="expert-progress"
            className="w-[120px] md:w-[160px] h-fit"
            strokeWidth={8}
            value={data.overall}
            maxValue={10}
          >
            <p className="txt-md-bold md:text-xl text-primary mt-2">{t('expertOpinion.average')}</p>
            <p className="text-4xl font-extrabold md:text-6xl mx-2.5 ">{data.overall}</p>
          </CustomCircularProgress>

          <div className="grid grid-cols-1 gap-4 md:gap-6 w-full lg:grid-cols-2">
            {rateItems.map((item, index) => (
              <RatingItem key={`key-${index}`} rating={item.rating} name={item.name} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 whitespace-pre-line">
          <p className=" txt-md text-neutral-700">{data.comment?.[locale]}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertOpinionCmp;
