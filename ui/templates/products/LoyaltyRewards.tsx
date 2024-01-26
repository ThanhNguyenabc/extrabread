import { Space, Typography } from 'antd';
import LoyaltyRewardsBanner from 'public/images/banners/Loyalty Rewards.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import BoostSalesImg from 'public/images/products/Boost Sales.png';
import DriveSalesImg from 'public/images/products/Drive Sales.png';
import NeverMissImg from 'public/images/products/Never Miss A Sale.png';
import PersonalizeYourProgramsImg from 'public/images/products/Personalize Your Programs.png';

import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const ICONS = [NeverMissImg, BoostSalesImg, PersonalizeYourProgramsImg, DriveSalesImg];
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
        hasBackground
        type={['product', 'align-left']}
        content={<span>{common('product_types.loyalty.title')}</span>}
        button={<GetPricingButton />}
        src={LoyaltyRewardsBanner.src}
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
        <div className={styles['product_info']}>
          <Text>{t('desc')}</Text>
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
        <DiscoverBanner type="product" heading={t('footer_heading')} />
      </BreadCard>
    </div>
  );
};
