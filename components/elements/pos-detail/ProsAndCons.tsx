import { COLORS } from '@/constants/colors';
import useLocale from '@/hooks/useLocale';
import { IcCheck, IcClose } from '@/ui/img-resource/ExIcon';

import Attribute from 'models/bestpos/attribute';
import { useTranslation } from 'next-i18next';
import React, { ReactElement } from 'react';

interface ProsAndConsProps {
  pros: Attribute<Array<string>>;
  cons: Attribute<Array<string>>;
}

const CardList = ({
  color,
  title,
  icon,
  items,
}: {
  color: string;
  title: string;
  icon: ReactElement;
  items: Array<string>;
}) => {
  return (
    <div
      className="flex flex-col bg-neutral-100 rounded px-3 py-2 border-l-4"
      style={{
        borderColor: color,
      }}
    >
      <h3 className="txt-md-bold" style={{ color: color }}>
        {title}
      </h3>
      {items.map((item, index) => (
        <div
          className="flex flex-row items-center gap-3 mt-2 md:mt-4 md:gap-4"
          key={`${index}-item-pros`}
        >
          {icon}
          <p className=" flex-1">{item}</p>
        </div>
      ))}
    </div>
  );
};
const ProsAndCons = ({ pros, cons }: ProsAndConsProps) => {
  const { t } = useTranslation();

  const { locale } = useLocale();
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
      <CardList
        items={pros[locale] || []}
        title={t('pros').toUpperCase()}
        color={COLORS.success}
        icon={<IcCheck className="w-4 md:w-5 text-success" />}
      />
      <CardList
        items={cons[locale] || []}
        title={t('cons').toUpperCase()}
        color={COLORS.red[500]}
        icon={<IcClose className="w-4 md:w-5 text-error" />}
      />
    </div>
  );
};

export default ProsAndCons;
