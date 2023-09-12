import { Space, Typography } from 'antd';
import Head from 'next/head';
import OnlineProcessingBanner from 'public/images/banners/online-processing.png';
import Item2 from 'public/images/solutions/Integration.png';
import Item1 from 'public/images/solutions/Processing Capabilities.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Collapse, Panel } from '~/ui/atoms/collapse/Collapse';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  CartIcon,
  CreditCardTerminalImg,
  InterfaceIcon,
  MobileCardReaderImg,
  VirtualIcon,
} from '~/ui/img-resource/ImageResources';
import { Banner } from '~/ui/organisms/banner/Banner';
import { SolutionExplore } from '~/ui/organisms/solution-explore/SolutionExplore';
import { DetailSolution } from '../../organisms/detail-solution/DetailSolution';

import { Button } from '@/ui/atoms/button/Button';
import { Flex } from '@/ui/atoms/flex/Flex';
import { WorkWithTheBest } from '@/ui/organisms/work-with-the-best/WorkWithTheBest';
import Link from 'next/link';
import { RouteConfig, SOLUTIONS_MENU } from '~/constants/index';
import { SolutionFeature } from './solution-feature/SolutionFeature';
import styles from './Solutions.module.scss';

const { Text } = Typography;

const SOLUTIONS = [
  {
    icon: <CartIcon />,
    title: 'Multiple shopping cart integrations',
    description: `Our online processing solutions offer complete integration with over 100 shopping cart platforms, so you can continue offering the checkout experience your customers know.`,
  },
  {
    icon: <InterfaceIcon />,
    title: 'A built-in merchant interface',
    description: `Your online payment platform comes with a merchant interface that lets you review transactions, download reports, set up user permissions, and so much more.`,
  },
  {
    icon: <VirtualIcon />,
    title: 'Online terminal',
    description: `Accept payments, view orders, send invoices, and more, with a virtual terminal that helps you streamline your online business sales right from your computer.`,
  },
];

const BANNER_CONTENT = [
  'Process credit cards through your computer',
  'Send out invoices and process checks',
  'Easily integrates into your website',
];

export const OnlineProcessing = () => {
  return (
    <>
      <Head>
        <title>Online Processing</title>
      </Head>
      <Banner
        hasBackground
        tagText="Online Processing"
        type="align-left"
        content={<span>Streamline Your Online Payments </span>}
        button={
          <GetPricingButton
            title="Get Pricing Today!"
            color="black"
            size="large"
            className={styles['solutions_pricing-button']}
          />
        }
        src={OnlineProcessingBanner.src}
        descriptions={
          <Space direction="vertical">
            {BANNER_CONTENT.map((item, idx) => (
              <Space size={16} key={`${idx}`} align="baseline">
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
        <div className={styles['solutions_info']}>
          <Text>Turn your computer into a</Text>
          <Text color="green"> credit card machine</Text>
          <Text> & transform your website into an </Text>
          <Text color="green">online store</Text>
          <Text> in seconds</Text>
        </div>
        <div className={styles['solutions_features']}>
          <SolutionFeature
            src={Item1}
            alt="Online Processing Capabilities"
            content={{
              title: 'Processing Capabilities',
              description: `To cater to consumers who shop at any time, it's crucial to have a dependable online payment processing service. ExtraBread provides this service, allowing you to accept credit and debit cards online through Authorize.Net non-stop.`,
              details: [
                'Recurring billing capabilities',
                'Instantaneous credit card processing',
                'User-friendly merchant interface',
              ],
            }}
          />
          <SolutionFeature
            reversed
            src={Item2}
            alt="Shopping Cart Integration"
            content={{
              title: 'Integration',
              description: `ExtraBread, through its online processing services using Authorize.Net, enables your customers to shop at their convenience, allowing you to expand your business with each purchase`,
              details: [
                '100+ shopping cart solutions',
                'Hassle-free checkout process',
                'Enhance brand identity throughout checkout process',
              ],
            }}
          />
          <SolutionFeature
            src={Item1}
            alt="Online Terminal"
            content={{
              title: 'Online Terminal',
              description: `A virtual terminal credit card processing can transform your computer into a comprehensive payment processing tool, enabling you to keep your business operations flowing smoothly.`,
              details: [
                'Permits manual entry of credit and debit cards, as well as processes check orders',
                'Allows for process of recurring payments',
                'Send out invoices',
              ],
            }}
          />
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution heading="How Online Processing works for your business" data={SOLUTIONS} />
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
              link: SOLUTIONS_MENU[1].href,
              src: CreditCardTerminalImg.src,
            },
            {
              name: 'Mobile Card Reader',
              description: 'Accept Payments Anywhere',
              link: SOLUTIONS_MENU[2].href,
              src: MobileCardReaderImg.src,
            },
          ]}
        />
      </BreadCard>
    </>
  );
};
