import { Space, Typography } from 'antd';
import CheckServicesBanner from 'public/images/banners/Check Services.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import FasterFundsImg from 'public/images/products/Faster Funds.png';
import MitigateRiskImg from 'public/images/products/Mitigate Risk.png';
import NeverMissImg from 'public/images/products/Never Miss A Sale.png';

import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import styles from './ProductsTemplate.module.scss';

const { Text } = Typography;
const ICONS = [FasterFundsImg, MitigateRiskImg, NeverMissImg];
export const CheckServices = () => {
  const { t } = useTranslation('check_services');
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
        content={<span>{common('product_types.check_service.title')}</span>}
        button={<GetPricingButton />}
        src={CheckServicesBanner.src}
        descriptions={
          <Space direction="vertical">
            {BANNER_CONTENT.map((item, idx) => (
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
                alt="Faster Funds"
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
