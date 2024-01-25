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
  const { t: common } = useTranslation();

  const BANNER_CONTENT = useMemo(() => {
    return t('banner', { returnObjects: true }) as string[];
  }, [t]);

  const PROGRAM = useMemo(() => {
    return t('program_items', { returnObjects: true }) as string[];
  }, [t]);

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
          heading="Frequently Asked Questions"
          subHeading="With Extrabread’s Cash Discount Program, your business will pay 0% for your processing rates while offering your customers a discount they’ll be happy to cash in."
        />
        <Collapse
          ghost
          expandIconPosition="end"
          className={styles['cash-discount-program_collapse']}
          expandIcon={props => {
            return <Icon name={props.isActive ? 'chevron-up' : 'chevron-down'} color="black" />;
          }}
        >
          <Panel header="How does it work?" key="1">
            Extrabread’s Cash Discount Program passes the cost of accepting credit card payments to
            your customer. Customers who pay with cash receive a discounted price compared to
            customers that pay with a credit card. Cash Discount pricing lets business owners enjoy
            the same profit margins on cash payments and non-cash payments by including processing
            fees into the price of sales made by customers paying by credit card.
          </Panel>
          <Panel header="Is it legal to pass credit card fees to customers?" key="2"></Panel>
          <Panel header="How does it affect my customers?" key="3"></Panel>
          <Panel
            header="Why should I consider the Cash Discount Program for my business?"
            key="4"
          ></Panel>
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
        <DiscoverBanner
          type="product"
          heading="Ready to implement a Cash Discount Program for your business?"
        />
      </BreadCard>
    </div>
  );
};
