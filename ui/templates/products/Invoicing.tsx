import { Space, Typography } from 'antd';
import InvoicingBanner from 'public/images/banners/Invoicing.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';
import { ProductFeature } from './components/features/ProductFeature';
import styles from './ProductsTemplate.module.scss';

import Improve247Img from 'public/images/products/Improve24-7.png';
import LevelingUpImg from 'public/images/products/Leveling Up.png';
import PersonalizeYourInvoicingImg from 'public/images/products/Personalize Your Invoicing.png';
import PreventFraudActivitiesImg from 'public/images/products/Prevent Fraud Activities.png';
import { BUSINESS_MENU } from '~/constants/index';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';

const { Text } = Typography;
const BANNER_CONTENT = [
  'Tailored to fit your business needs',
  'User-friendly dashboard for easy management',
  'Automatic email reminders to ensure timely payments',
  'No charges for setup or initiation',
];

export const Invoicing = () => {
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
          <Text color="green">
            Authorize.Net provides you with the flexibility to get paid quickly and easily
          </Text>
          <Text>
            , with features that automate the process and a comprehensive dashboard that allows you
            to search, sort, and filter.
          </Text>
        </div>
      </BreadCard>

      <BreadCard>
        <ProductFeature
          reversed
          src={PersonalizeYourInvoicingImg}
          alt="Personalize Your Invoicing"
          content={{
            title: 'Personalize Your Invoicing',
            description:
              'With invoicing through your Authorize.Net account, you can create customized invoices that strengthen your brand and allow you to tailor your message for each payment.',
            details: [
              'Add your logo and choose your preferred colors and fonts',
              'Include personal notes to your customers for a more personalized touch',
            ],
          }}
        />
        <ProductFeature
          src={Improve247Img}
          alt="Improve Customer Convenience"
          content={{
            title: 'Improve Customer Convenience',
            description: `Authorize.Net's mobile-friendly technology provides a quick and secure way for your customers to receive and pay invoices using any mobile device, ensuring that your customers will appreciate the convenience and come back for more.`,
            details: [
              'Convenient, mobile-friendly payment option',
              'Secure way to pay from any mobile device',
            ],
          }}
        />
        <ProductFeature
          reversed
          src={LevelingUpImg}
          alt="Your Business, Your Way"
          content={{
            title: 'Your Business, Your Way',
            description:
              'Authorize.Net offers flexibility for organizing your invoicing to suit your business needs. With an easy-to-use dashboard and automated features, you can customize your invoicing experience.',
            details: ['Sort and Filter', 'Automatic Email Reminders'],
            subDetails: [
              'Use your dashboard to filter invoices by their status - sent, paid, canceled, or drafted.',
              'Set automatic email reminders for unpaid or overdue invoices.',
            ],
          }}
        />
        <ProductFeature
          src={PreventFraudActivitiesImg}
          alt="Protect Your Business"
          content={{
            title: 'Protect Your Business',
            description: `Authorize.Net ensures the security of your payments with automated receipts, fraud protection, and 24/7 support to give you peace of mind.`,
            details: [
              'Select a plan that suits your business requirements',
              'Receive reliable, round-the-clock assistance.',
            ],
          }}
        />
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={['Invoicing for every business.']}
          subHeading="Collect payments confidently with a faster and more simplified invoicing solution. Find one that is right for your business."
          list={BUSINESS_MENU}
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner type="product" heading="Ready to implement Invoicing for your business?" />
      </BreadCard>
    </div>
  );
};
