import { Space, Typography } from 'antd';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import { useTranslation } from 'next-i18next';

import HTMLReactParser from 'html-react-parser';
import { useMemo } from 'react';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const ICONS = [
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728012099/bestpos/banner/xdoz3gxklik1xo6tbjov.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728012099/bestpos/banner/ojjvfmdaj3h814doyk5k.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728012099/bestpos/banner/m3znxmm8wjkv2bj1krhf.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728012099/bestpos/banner/ycek2kk96soqzlvrmfs6.png',
];

export const CashAdvance = () => {
  const { t } = useTranslation('cash_advance');
  const { t: common } = useTranslation();

  const BANNER_CONTENT = useMemo(() => {
    return t('banner', { returnObjects: true }) as string[];
  }, [t]);

  const FEATURES = useMemo(() => {
    return t('features', { returnObjects: true }) as Array<any>;
  }, [t]);

  return (
    <div>
      <Banner
        className="bg-blue-300"
        type={['product', 'align-left']}
        content={<span>{common('product_types.cash_advance.title')}</span>}
        button={<GetPricingButton />}
        src={
          'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728012099/bestpos/banner/oc8m3nnuv7peh03krqzf.webp'
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
        <div className={styles['product_info']}>{HTMLReactParser(t('desc'))}</div>
      </BreadCard>

      <BreadCard>
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
          subHeading={t('all_business_desc')}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner type="product" heading={t('footer_heading')} />
      </BreadCard>
    </div>
  );
};
