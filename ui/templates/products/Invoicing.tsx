import { Space, Typography } from 'antd';
import InvoicingBanner from 'public/images/banners/Invoicing.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import styles from './ProductsTemplate.module.scss';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';

import { useTranslation } from 'next-i18next';
import Improve247Img from 'public/images/products/Improve24-7.png';
import LevelingUpImg from 'public/images/products/Leveling Up.png';
import PersonalizeYourInvoicingImg from 'public/images/products/Personalize Your Invoicing.png';
import PreventFraudActivitiesImg from 'public/images/products/Prevent Fraud Activities.png';
import { useMemo } from 'react';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';

const { Text } = Typography;
const ICONS = [
  PersonalizeYourInvoicingImg,
  Improve247Img,
  LevelingUpImg,
  PreventFraudActivitiesImg,
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
        hasBackground
        type={['product', 'align-left']}
        content={<span>Invoicing</span>}
        button={<GetPricingButton />}
        src={InvoicingBanner.src}
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
