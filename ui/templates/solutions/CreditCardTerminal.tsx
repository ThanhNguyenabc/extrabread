import { Space, Typography } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import CreditCardTerminalBanner from 'public/images/banners/credit-card.png';
import Item2 from 'public/images/solutions/Clover Flex.png';
import Item1 from 'public/images/solutions/PAX A920 Smart Terminal.png';
import { RouteConfig, SOLUTIONS_MENU } from '~/constants/index';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Button } from '~/ui/atoms/button/Button';
import { Collapse, Panel } from '~/ui/atoms/collapse/Collapse';
import { Flex } from '~/ui/atoms/flex/Flex';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading, SectionHeading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import {
  ChipIcon,
  MobileCardReaderImg,
  OnlineProcessingImg,
  PaymentTerminalIcon,
  WirelessIcon,
} from '~/ui/img-resource/ImageResources';
import { Banner } from '~/ui/organisms/banner/Banner';
import { SolutionExplore } from '~/ui/organisms/solution-explore/SolutionExplore';
import { WorkWithTheBest } from '~/ui/organisms/work-with-the-best/WorkWithTheBest';
import { DetailSolution } from '../../organisms/detail-solution/DetailSolution';
import styles from './Solutions.module.scss';
import { SolutionFeature } from './solution-feature/SolutionFeature';

const { Text } = Typography;

const SOLUTIONS = [
  {
    icon: <PaymentTerminalIcon />,
    title: 'Payment flexbility',
    description: `By supporting both Apple Pay and Google Pay, you can cater to your customers' contactless payment choices while also ensuring speedy checkout.
    `,
  },
  {
    icon: <ChipIcon />,
    title: 'EMV chip reader compatibility',
    description: `Provide a safer solution for processing debit and credit cards without the need for extra equipment or any concerns.
    `,
  },
  {
    icon: <WirelessIcon />,
    title: 'Wifi and Wireless models available',
    description: `Securely process payments from anywhere as long as you have a connection`,
  },
];

const BANNER_CONTENT = [
  'Operates at incredible speed',
  'Contactless payments',
  'Accepts chip cards and magstripe',
];

export const CreditCardTerminal = () => {
  return (
    <>
      <Head>
        <title>Credit Card Terminal</title>
      </Head>
      <Banner
        tagText="Credit Card Terminal"
        hasBackground
        type="align-left"
        content={<>Making payments in person has never been simpler</>}
        button={
          <GetPricingButton
            className={styles['solutions_pricing-button']}
            title="Get Pricing Today!"
            color="black"
            size="large"
          />
        }
        src={CreditCardTerminalBanner.src}
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
        <SectionHeading
          centered
          level={3}
          heading="It has never been simpler to carry out transactions"
        />
        <div className={styles['solutions_features']}>
          <SolutionFeature
            reversed
            src={Item1}
            alt="PAX A920 Smart Terminal"
            content={{
              title: 'PAX A920 Smart Terminal',
              description:
                'The PAX A920, is a smart handheld terminal that encompasses all the functions of a complete point of sale system. It currently operates on the Payanywhere payments platform and has the following capabilities:',
              details: [
                'Provides both WiFi and Wireless 4G connectivity alternatives',
                'Includes a 5" high-definition touchscreen and a large-capacity rechargeable Li-on battery',
                'Is equipped with a built-in receipt printer, dual cameras, and a barcode and QR code scanner',
                'Accepts a range of payment methods, including Apple Pay, EMV chip cards, contactless payments, and Magstripe cards.',
              ],
            }}
          />
          <SolutionFeature
            src={Item2}
            alt="Clover Flex"
            href={RouteConfig.CloverFlex}
            textLink="View Details"
            content={{
              title: 'Clover Flex',
              description:
                'In the palm of your hand, this multi-functional device has integrated features for accepting payments, managing business operations, and monitoring sales data.',
              details: [
                'Easily take orders and begin accepting cards with minimal setup and 0 training',
                'Equipped with a 6-inch touchscreen, a built-in printer, a camera, and a barcode scanner, this device supports tableside ordering, inventory management, and payment processing',
                'Super customizable handheld that provides the same functionality and power as their larger devices',
                'Always have your business information accessible due to the cloud-based system that it operates on',
              ],
            }}
          />
        </div>
      </BreadCard>

      <BreadCard>
        <div className={styles['solutions_highlight']}>
          <div>
            <Heading level={4} color="white" className={styles['solutions_highlight-heading']}>
              Processing Capabilities
            </Heading>
            <Text className={styles['solutions_highlight-description']}>
              Our processing solutions allow customers to pay using their preferred payment methods,
              keeping the line moving and enabling your business to function smoothly.
            </Text>
          </div>
          <Flex direction="column" gap={16} gapSp={8} align="start">
            <Space>
              <Icon name="check-circle-solid" style={{ width: 20, height: 20 }} color="green" />
              <Text strong color="white" className="font-16-16-14">
                EMV and chip readers
              </Text>
            </Space>
            <Space>
              <Icon name="check-circle-solid" style={{ width: 20, height: 20 }} color="green" />
              <Text strong color="white" className="font-18-16-14">
                Ability to swipe, tap, or dip payments
              </Text>
            </Space>
            <Space>
              <Icon name="check-circle-solid" style={{ width: 20, height: 20 }} color="green" />
              <Text strong color="white" className="font-18-16-14">
                Compatability with Apple and Google Pay
              </Text>
            </Space>
          </Flex>
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution
          heading={<>How a Credit Card Terminal works for your business</>}
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
              name: 'Mobile Card Reader',
              description: 'Accept Payments Anywhere',
              link: SOLUTIONS_MENU[1].href,
              src: MobileCardReaderImg.src,
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
