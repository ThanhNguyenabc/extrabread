import { Space, Typography } from 'antd';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import DigitalCardsImg from 'public/images/products/Digital cards.png';
import PhysicalCrdsImg from 'public/images/products/Physical cards.png';

import { cn } from '@/lib/utils';
import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useMemo } from 'react';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;

const ICONS = [
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727950939/bestpos/qix1r0ad1hvwo9waht1p.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727950987/bestpos/kyhaxmd0lmuvvbwv5peb.png',
];

const PROGRAM_CONFIGS = [
  {
    style: 'gift-card_text',
  },
  {
    style: 'gift-card_card-red',
    icon: PhysicalCrdsImg,
  },
  {
    style: 'gift-card_card-blue',
    icon: DigitalCardsImg,
  },
];

export const GiftCardProgram = () => {
  const { t } = useTranslation('giftcard');
  const { t: common } = useTranslation();

  const BANNER_CONTENT = useMemo(() => {
    return t('banner', { returnObjects: true }) as string[];
  }, [t]);

  const FEATURES = useMemo(() => {
    return t('features', { returnObjects: true }) as Array<any>;
  }, [t]);

  const PROGRAMS = useMemo(() => {
    return t('programs', { returnObjects: true }) as Array<any>;
  }, [t]);

  return (
    <div className={styles['gift-card']}>
      <Banner
        className="bg-blue-300"
        type={['product', 'align-left']}
        content={<span>{common('product_types.gift.title')}</span>}
        button={<GetPricingButton />}
        src={
          'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727949732/bestpos/banner/yvwcajstgtcsb7zrnyja.webp'
        }
        descriptions={
          <Space direction="vertical">
            {Array.isArray(BANNER_CONTENT) &&
              BANNER_CONTENT?.map((item, idx) => (
                <Space
                  size={16}
                  align="baseline"
                  key={`${idx}`}
                  className={styles['product_icon-check']}
                >
                  <Icon name="check" />
                  <Text strong>{item}</Text>
                </Space>
              ))}
          </Space>
        }
      />

      <BreadCard>
        <div className={cn(styles['product_info'], ' lg:max-w-[900px]')}>
          <Text>{HTMLReactParser(t('desc'))}</Text>
        </div>
      </BreadCard>

      <BreadCard>
        <div className={styles['gift-card_card-row']}>
          {Array.isArray(PROGRAMS) &&
            PROGRAMS.map((item, index) => {
              return (
                <div className={styles[PROGRAM_CONFIGS[index].style]} key={item.heading}>
                  <div>
                    <Heading level={4} className={styles['gift-card-heading']}>
                      {item.heading}
                    </Heading>
                    <Text className="font-18 text-grey">{item.desc}</Text>
                  </div>
                  {PROGRAM_CONFIGS[index].icon && (
                    <Image
                      width={376}
                      src={PROGRAM_CONFIGS[index].icon!}
                      alt={item.heading}
                      quality={100}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </BreadCard>

      <BreadCard className={styles['product-items']} noPadding>
        {Array.isArray(FEATURES) &&
          FEATURES.map((item, index) => {
            return (
              <ProductFeature
                reversed={index % 2 == 0}
                key={item.title}
                src={ICONS[index]}
                alt={item.title}
                content={item}
              />
            );
          })}
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={t('all_business_heading')}
          subHeading={common('learn_more_business')}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner type="product" heading={t('footer_heading')} />
      </BreadCard>
    </div>
  );
};
