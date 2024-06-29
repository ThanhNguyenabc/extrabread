import { CashBonusIcon, NegociationIcon, PuzzleIcon, WritingIcon } from '@/ui/img-resource/ExIcon';
import { Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { PHONE } from '~/constants/index';
import { useDevice } from '~/hooks/useDetectMobile';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import styles from '../Home.module.scss';
import { CollapseHowItWorks } from './collapse-how-it-works/CollapseHowItWorks';
const { Text } = Typography;

const Icons = {
  WritingIcon: WritingIcon,
  PuzzleIcon: PuzzleIcon,
  NegociationIcon: NegociationIcon,
  CashBonusIcon: CashBonusIcon,
};

export const HowItWorks = () => {
  const { t } = useTranslation('how_it_work');
  const { isMobile } = useDevice();
  const items = t('working_process', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  return (
    <BreadCard className={styles['home-template_how-it-works']}>
      <SectionHeading
        centered
        centerSp
        heading={t('how_it_work_title')}
        subHeading={t('how_it_work_desc')}
      />

      {!isMobile && (
        <ul className={styles['home-template_how-it-works_features']}>
          {items.map((item, idx) => {
            const Icon = Icons[item.icon];
            return (
              <li key={idx}>
                <Icon width={48} height={48} />
                <Text strong className="font-16-14">
                  {item.title}
                </Text>
                <Text className="font-14-12">{item.description}</Text>
              </li>
            );
          })}
        </ul>
      )}
      {isMobile && <CollapseHowItWorks data={items} />}

      <div className={styles['home-template_how-it-works_footer']}>
        <Text strong className="font-16-16-12">
          {t('available_time')}
        </Text>
        <Text className="font-14-12">
          {t('available_support_message')} - <br className="only-sp" />{' '}
          <a href={`tel:${PHONE}`} style={{ fontWeight: 500 }}>
            {PHONE}
          </a>
        </Text>
      </div>
    </BreadCard>
  );
};
