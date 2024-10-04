import { Space, Typography } from 'antd';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import styles from './ProductsTemplate.module.scss';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import { useTranslation } from 'next-i18next';

import { useMemo } from 'react';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';

const { Text } = Typography;
const ICONS = [
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728011715/bestpos/banner/mqr0roxadkli0yvdf0dt.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728011714/bestpos/banner/efzqxqawofphaoklgb53.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728011714/bestpos/banner/cxsaqxfz6htm1sd5uxou.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728011714/bestpos/banner/lz6l8yvvjquocgkikakh.png',
];
export const Invoicing = () => {
  const { t } = useTranslation('invoicing');
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
        content={<span> {common('product_types.invoicing.title')}</span>}
        button={<GetPricingButton />}
        src={
          'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728011668/bestpos/banner/phmz0xovfrjvze4znymc.webp'
        }
        descriptions={
          <Space direction="vertical">
            {Array.isArray(BANNER_CONTENT) &&
              BANNER_CONTENT.map((item, idx) => (
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
        <div className={styles['product_info']}>{t('desc')}</div>
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
