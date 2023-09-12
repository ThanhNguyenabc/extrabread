import { Space, Typography } from 'antd';
import MobileCardReaderBanner from 'public/images/banners/mobile-card-reader.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Collapse, Panel } from '~/ui/atoms/collapse/Collapse';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';

import { Button } from '@/ui/atoms/button/Button';
import { Flex } from '@/ui/atoms/flex/Flex';
import { WorkWithTheBest } from '@/ui/organisms/work-with-the-best/WorkWithTheBest';
import Head from 'next/head';
import Link from 'next/link';
import Item2 from 'public/images/solutions/Clover Go Mobile App.png';
import Item1 from 'public/images/solutions/ProCharge Mobile.png';
import { RouteConfig, SOLUTIONS_MENU } from '~/constants/index';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading, SectionHeading } from '~/ui/atoms/heading/Heading';
import {
  CreditCardIcon,
  CreditCardTerminalImg,
  DevicesIcon,
  OnlineProcessingImg,
  OptionIcon,
} from '~/ui/img-resource/ImageResources';
import { SolutionExplore } from '~/ui/organisms/solution-explore/SolutionExplore';
import { DetailSolution } from '../../organisms/detail-solution/DetailSolution';
import styles from './Solutions.module.scss';
import { SolutionFeature } from './solution-feature/SolutionFeature';
const { Text } = Typography;

const SOLUTIONS = [
  {
    icon: <DevicesIcon />,
    title: 'Pairs with any device',
    description:
      'Whether you’re processing payments storefront or completely mobile, the MobilePay app turns your smartphone or tablet into a POS, allowing you to accept card transactions or record cash-based sales.',
  },
  {
    icon: <CreditCardIcon />,
    title: 'Collect payments with ease',
    description:
      'With end-to-end wireless transaction technology, MobilePay exceeds industry-standard security and encryption requirements to offer a more secure payment platform.',
  },
  {
    icon: <OptionIcon />,
    title: 'Affordable choices',
    description:
      'Supporting 10 active devices per account, MobilePay gives you the option to add sub-users and additional portable card readers so you can take more payments on the go and expand your POS capabilities for less.',
  },
];

const BANNER_CONTENT = [
  'Compatible with any mobile device',
  'Send receipts via text or email',
  'Bluetooth card reader with app',
];

export const MobileCardReader = () => {
  return (
    <>
      <Head>
        <title>Mobile Card Reader</title>
      </Head>
      <Banner
        hasBackground
        tagText="Mobile Card Reader"
        type="align-left"
        content={<span>Accept payments from anywhere at any time</span>}
        button={
          <GetPricingButton
            title="Get Pricing Today!"
            color="black"
            size="large"
            className={styles['solutions_pricing-button']}
          />
        }
        src={MobileCardReaderBanner.src}
        descriptions={
          <Space direction="vertical">
            {BANNER_CONTENT.map((item, idx) => (
              <Space size={16} key={`${idx}`}>
                <Icon name="check-circle-solid" color="green" />
                <Text strong className="font-18-16-16">
                  {item}
                </Text>
              </Space>
            ))}
          </Space>
        }
      />

      <BreadCard>
        <SectionHeading centered level={3} heading="Pay faster with smarter features" />
        <div className={styles['solutions_features']}>
          <SolutionFeature
            reversed
            src={Item1}
            alt="PAX A920 Smart Terminal"
            content={{
              title: 'ProCharge Mobile',
              description: `Flexibility is essential for running a business. ProCharge® provides this flexibility with a Bluetooth reader and a user-friendly mobile app that can handle all payment transactions, whether you're moving around your store, conducting business in the field, or working in the back office.`,
              details: ['Easy setup with flexible features', 'Reduce processing fees'],
            }}
          />
          <SolutionFeature
            src={Item2}
            alt="Clover Flex"
            href={RouteConfig.CloverDuo}
            textLink="View Details"
            content={{
              title: 'Clover Go Mobile App',
              description: `Bring your business directly to your clients by using the Go app and portable credit card reader, which can be used at places like local farmer's markets or your client's job site. These tools are user-friendly and provide you with the functionality of a full POS system as long as you have access to Wi-Fi or cellular connection.`,
              details: [
                'Accept payments in person',
                'Easy to use, minimal effort',
                'Works with iOS and Android',
              ],
            }}
          />
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution
          heading="How a Mobile Card Reader works for your business"
          data={SOLUTIONS}
        />
      </BreadCard>

      <BreadCard>
        <Heading level={3} centered>
          Frequently Asked Questions
        </Heading>
        <Collapse>
          <Panel header="What is a payment processor?" key="1">
            A payment processor is a company that facilitates the transfer of money between a buyer
            and a seller. Payment processors work with merchant accounts to process credit and debit
            card payments.
          </Panel>
          <Panel header="How do I choose the right payment processor for my business?" key="2">
            There are a number of factors to consider when choosing a payment processor, including:
          </Panel>
          <Panel header="What are the different types of payment processing fees?" key="3">
            There are a number of different types of payment processing fees, including:
          </Panel>
          <Panel header="How does payment processing work?" key="4">
            How does payment processing work? Payment processing works by securely transmitting
            payment information from the customer to the payment processor, who then sends the
            information to the customer&#39;s bank or credit card company for verification. If the
            transaction is approved, the funds are transferred to the merchant&#39;s account.
          </Panel>
          <Panel header="What types of payment methods are accepted?" key="5">
            Most payment processors accept a variety of payment methods, including credit cards,
            debit cards, e-wallets, and bank transfers. Some processors may also accept alternative
            payment methods, such as cryptocurrency.
          </Panel>
        </Collapse>

        <div className={styles['solutions_faq-button']}>
          <Button>
            <Link href={RouteConfig.Faqs}>
              <Flex gap={8}>
                Learn more
                <Icon name="right" />
              </Flex>
            </Link>
          </Button>
        </div>
      </BreadCard>

      <WorkWithTheBest />

      <BreadCard>
        <SolutionExplore
          heading="Explore more processing solutions"
          cards={[
            {
              name: 'Credit Card Terminal',
              description: 'In-person payments have never been easier.',
              link: SOLUTIONS_MENU[0].href,
              src: CreditCardTerminalImg.src,
            },
            {
              name: 'Online Processing',
              description: 'Streamline Your Online Payments',
              link: SOLUTIONS_MENU[2].href,
              src: OnlineProcessingImg.src,
            },
          ]}
        />
      </BreadCard>
    </>
  );
};
