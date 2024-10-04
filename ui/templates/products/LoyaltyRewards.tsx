import { Space, Typography } from 'antd';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const ICONS = [
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728013570/bestpos/banner/vnsoreamy77rkgeqg7lv.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728013933/bestpos/banner/hztpoa9l9sxujc3gmk0g.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728013932/bestpos/banner/rmn0ywoseo5jmvldic7n.png',
  'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728013932/bestpos/banner/epbwpcxaaxnsbkbj5vfm.png',
];
export const LoyaltyRewards = () => {
  const { t } = useTranslation('loyalty');
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
        className='bg-blue-300'
        type={['product', 'align-left']}
        content={<span>{common('product_types.loyalty.title')}</span>}
        button={<GetPricingButton />}
        src={
          'https://res.cloudinary.com/dgrym3yz3/image/upload/v1728013805/bestpos/banner/k16zp3p5tv7azhpvp2tm.webp'
        }
        descriptions={
          <Space direction="vertical">
            {Array.isArray(BANNER_CONTENT) &&
              BANNER_CONTENT?.map((item, idx) => (
                <Space
                  key={`${idx}`}
                  size={16}
                  align="baseline"
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
        <DiscoverBanner type="product" heading={t('footer_heading')} />
      </BreadCard>
    </div>
  );
};
