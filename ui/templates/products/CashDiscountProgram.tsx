import { Collapse, Space, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import CashDiscountProgramBanner from 'public/images/banners/Cash Discount Program.png';
import TheUltimateSolutionImg from 'public/images/products/The Ultimate Solution.png';
import { useMemo } from 'react';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Flex } from '~/ui/atoms/flex/Flex';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { Banner } from '~/ui/organisms/banner/Banner';
import styles from './ProductsTemplate.module.scss';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';

const { Panel } = Collapse;
const { Text } = Typography;

export const CashDiscountProgram = () => {
  const { t } = useTranslation('cash_discount');
  const { t: faqs } = useTranslation('cash_discount_faqs');

  const { t: common } = useTranslation();

  const BANNER_CONTENT = useMemo(() => {
    return t('banner', { returnObjects: true }) as string[];
  }, [t]);

  const PROGRAM = useMemo(() => {
    return t('program_items', { returnObjects: true }) as string[];
  }, [t]);

  const FAQ = useMemo(() => {
    return faqs('cash_discount_faqs', { returnObjects: true }) as Array<any>;
  }, [faqs]);

  return (
    <div className={styles['cash-discount-program']}>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>{common('product_types.cash_discount.title')}</span>}
        button={<GetPricingButton />}
        src={CashDiscountProgramBanner.src}
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
        <SectionHeading
          noMargin
          centered
          className={styles['section-heading']}
          heading={t('heading')}
          subHeading={t('desc')}
        />
      </BreadCard>

      <BreadCard>
        <div className={styles['cash-discount-program_main-section']}>
          <Image
            quality={100}
            width={580}
            src={TheUltimateSolutionImg}
            alt="The Ultimate Solution for Your Business Needs"
          />

          <SectionHeading noMargin heading={t('program_heading')} subHeading={t('program_desc')} />
          <div>
            <Text className={styles['cash-discount-program_main_sub-header']}>
              {t('provide_business')}
            </Text>

            <Flex direction="column" gap={32} gapTb={16}>
              {Array.isArray(PROGRAM) &&
                PROGRAM?.map((item, index) => {
                  return (
                    <Space key={`program-item-${index}`} size={12} align="baseline">
                      <Icon
                        name="check-circle-solid"
                        color="green"
                        className={styles['checked-icon']}
                      />
                      <Text strong className="font-18-16-16 text-grey">
                        {item}
                      </Text>
                    </Space>
                  );
                })}
            </Flex>
          </div>
        </div>
      </BreadCard>

      <BreadCard>
        <SectionHeading
          centered
          noMargin
          className={styles['section-heading']}
          heading={t('faq_heading')}
          subHeading={t('faq_sub_heading')}
        />
        <Collapse
          ghost
          expandIconPosition="end"
          className={styles['cash-discount-program_collapse']}
          expandIcon={props => {
            return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="black" />;
          }}
        >
          {Array.isArray(FAQ) &&
            FAQ.map(({ header, content }, index) => (
              <Panel key={index} header={header}>
                {content}
              </Panel>
            ))}
        </Collapse>
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