import { getSpecification } from '@/apis/product';
import useLocale from '@/hooks/useLocale';
import { cn } from '@/lib/utils';
import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import useSWR from 'swr';

interface SpecificationProps {
  posId: string;
}
const SpecificationView = ({ posId }: SpecificationProps) => {
  const { t } = useTranslation('pos-detail');
  const trans = useMemo(() => t('specification', { returnObjects: true }), [t]);
  const { locale } = useLocale();
  const { data } = useSWR(`specification-${posId}`, () => getSpecification(`${posId}`));

  const items = [
    {
      title: trans['businessSize'],
      desc: data?.businessSize,
    },
    {
      title: trans['posType'],
      desc: data?.posType,
    },
    {
      title: trans['softwareType'],
      desc: data?.softwareType,
    },
    {
      title: trans['freeTrial'],
      desc: data?.freeTrial,
    },
    {
      title: trans['merchant'],
      desc: data?.merchantService,
    },
    {
      title: trans['pricingModel'],
      desc: data?.pricingModel,
    },
    {
      title: trans['pricingRange'],
      desc: data?.priceRange || '$$-$$$$',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <span className="col-span-1 txt-heading-xsmal md:txt-heading-small">{trans['title']}</span>
      <table className="table col-span-2 txt-md w-full">
        <tbody>
          {items.map((item, index) => {
            const desc = typeof item.desc == 'object' ? item.desc?.[locale] : item.desc;
            return (
              <tr
                key={`sp-${index}`}
                className={cn(
                  'border-neutral-100',
                  index < items.length - 1 && 'border-b-1',
                )}
              >
                <td className="font-semibold p-3">{item.title}</td>
                <td className="whitespace-pre-wrap">{desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationView;
