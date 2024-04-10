import { Collapse, Space, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import {
  IcCheckCircle,
  InterfaceIcon,
  PaymentTerminalIcon,
  ReceiveCashIcon,
} from '@/ui/img-resource/ImageResources';
import CashDiscountProgramBanner from 'public/images/banners/Cash Discount Program.png';
import InvoiceImg from 'public/images/products/invoice.png';
import PayZeroImg from 'public/images/products/pay_zero_fee.png';
import { useMemo } from 'react';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { Banner } from '~/ui/organisms/banner/Banner';
import styles from './ProductsTemplate.module.scss';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';

const { Panel } = Collapse;
const { Text } = Typography;

const AdditionalIcons = [ReceiveCashIcon, InterfaceIcon, PaymentTerminalIcon];

export const CashDiscountProgram = () => {
  const { t } = useTranslation('cash_discount');
  const { t: faqs } = useTranslation('cash_discount_faqs');

  const { t: common } = useTranslation();

  const BANNER_CONTENT = useMemo(() => {
    return t('banner', { returnObjects: true }) as string[];
  }, [t]);

  const SaveMoneyItems = useMemo(() => {
    return t('save_money_items', { returnObjects: true }) as Array<String>;
  }, [t]);

  const AdditionalValues = useMemo(() => {
    return t('additional_items', { returnObjects: true }) as Array<any>;
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

      <BreadCard innerClassName="flex flex-col items-center lg:flex-row gap-8">
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <SectionHeading noMargin heading={t('pay_zero_fee_heading')} />
          <p className="whitespace-pre-line md:text-lg">{t('pay_zero_fee_desc')}</p>
        </div>

        <div className="flex-1">
          <Image quality={100} width={580} src={PayZeroImg} alt="pay zero fee image" />
        </div>
      </BreadCard>

      <BreadCard innerClassName="flex flex-col items-center lg:flex-row gap-8">
        <div className="flex-1">
          <Image
            className="mx-auto"
            quality={100}
            width={390}
            src={InvoiceImg}
            alt="saving money image"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <SectionHeading noMargin heading={t('save_money_heading')} />
          <p className="md:text-lg">{HTMLReactParser(t('save_money_desc'))}</p>

          <div className="flex flex-col gap-3">
            {SaveMoneyItems?.map(item => (
              <div className="flex gap-2 items-center md:gap-3" key={`${item}`}>
                <IcCheckCircle className="w-6 h-6 text-green-500" />
                <span className="flex-1 text-md-semibold text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </BreadCard>

      <BreadCard innerClassName="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <SectionHeading noMargin heading={t('additional_value_heading')} />
        </div>

        <div className="flex flex-col flex-1 gap-6 rounded-2xl lg:gap-8">
          {AdditionalValues?.map((item, index) => {
            const Icon = AdditionalIcons[index];
            return (
              <div className="flex items-center gap-4 p-6 bg-neutral-100">
                <div className="w-12 h-12">
                  <Icon />
                </div>
                <p className="flex-1 text-md-semibold lg:text-lg-semibold">{item}</p>
              </div>
            );
          })}
        </div>
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
        <DiscoverBanner type="product" heading={t('footer_heading')} />
      </BreadCard>
    </div>
  );
};
