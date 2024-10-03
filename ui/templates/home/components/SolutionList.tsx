import { RouteConfig } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { Typography } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Heading } from '~/ui/atoms/heading/Heading';
import {
  CreditCardBanner,
  MobileCardReaderBanner,
  OnlineProcessingBanner,
} from '~/ui/img-resource/ImageResources';
import styles from '../Home.module.scss';
const { Text } = Typography;

export type Solution = {
  title: string;
  desc: string;
  path: string;
};

const Images: { [key: string]: string } = {
  'credit-card': CreditCardBanner,
  'mobile-card': MobileCardReaderBanner,
  'online-processing': OnlineProcessingBanner,
};

export const SolutionList = () => {
  const { t } = useTranslation();
  const items = t('solutions', { returnObjects: true });

  return (
    <div className={cn(styles['home-template_solution-list'])}>
      <BreadCard>
        <Heading level={3} centered wrapper="pc">
          {t('find_right_solution')}
        </Heading>
        <div className={styles['home-template_solution-list_grid']}>
          {items &&
            Object.values(items)?.map((item, index) => {
              return (
                <Link
                  key={item.title}
                  href={`${RouteConfig.Solution}/${item.path}`}
                  className={cn(
                    styles['home-template_solution-list_grid-item'],
                    index == 0 && 'bg-gradient-to-b from-[#FF5A22] via-[#742CE8]  to-[#0B70FE]',
                  )}
                >
                  <div className={styles['home-template_solution-list_text']}>
                    <Text
                      className={cn(
                        styles['home-template_solution-list_item-title'],
                        index == 0 && 'text-white',
                      )}
                    >
                      {t(item.title)}
                    </Text>
                    <Text type="secondary" className={cn(index == 0 && 'text-white')}>
                      {t(item.desc)}
                    </Text>
                  </div>
                  <Image
                    alt={item.path}
                    width={376}
                    height={376}
                    quality={100}
                    src={Images[item.path]}
                  />
                </Link>
              );
            })}
        </div>
      </BreadCard>
    </div>
  );
};
