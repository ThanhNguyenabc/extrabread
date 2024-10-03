import { Space, Typography } from 'antd';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { ProductFeature } from './components/features/ProductFeature';

import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import styles from './ProductsTemplate.module.scss';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';

const { Text } = Typography;
const ICONS = [
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727951928/bestpos/banner/n7gmfluwxtc0fqersa5o.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727952199/bestpos/banner/kz3xp0pgutugxmpur8tb.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727952036/bestpos/banner/ydytqi2lwq7t3xqu6syz.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727952033/bestpos/banner/umdcxfbozz4smuaxneax.png',
];

export const OnlineReporting = () => {
  const { t } = useTranslation('online_analytics');
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
        content={<span>{common('product_types.online_analytics.title')}</span>}
        button={<GetPricingButton />}
        src={
          'https://res.cloudinary.com/dgrym3yz3/image/upload/v1727951355/bestpos/banner/ehsdbmewelngrtgcebyn.webp'
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
        <div className={styles['product_info']}>
          <Text>{HTMLReactParser(t('desc'))}</Text>
        </div>
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
          subHeading={common('learn_more_business')}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner type="product" heading={t('footer_heading')} />
      </BreadCard>
    </div>
  );
};
