import { COLORS } from '@/constants/colors';
import { BreadMeImg } from '@/ui/img-resource/ImageResources';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import PricingBtn from './PricingBtn';

export const BreadMeBtn = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <PricingBtn
      className={className}
      logo={BreadMeImg}
      color={COLORS.success}
      title={t('get_pos')}
      onClick={() => router.push('')}
    >
      <span className="text-success">{t('free')}</span>
    </PricingBtn>
  );
};
