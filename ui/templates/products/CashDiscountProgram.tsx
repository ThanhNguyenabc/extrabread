import { Collapse, Space, Typography } from 'antd';
import Image from 'next/image';
import CashDiscountProgramBanner from 'public/images/banners/Cash Discount Program.png';
import TheUltimateSolutionImg from 'public/images/products/The Ultimate Solution.png';
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

const BANNER_CONTENT = [
  'Process payments at 0% cost',
  'Fees are passed onto the customer',
  'Compliant with laws and regulations in all 50 states',
  'Receive a FREE credit card terminal at not cost',
];

export const CashDiscountProgram = () => {
  return (
    <div className={styles['cash-discount-program']}>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={
          <span>
            Cash <br className="hide-tb" /> Discount <br className="hide-tb" /> Program
          </span>
        }
        button={<GetPricingButton />}
        src={CashDiscountProgramBanner.src}
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
        <SectionHeading
          noMargin
          centered
          className={styles['section-heading']}
          heading="Pay 0% for your processing rates"
          subHeading="Nowadays, cash discounting is increasingly becoming the preferred method of payment acceptance among small businesses, allowing thousands of them to save significant amounts of money on their monthly processing fees."
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

          <SectionHeading
            noMargin
            heading="The Ultimate Solution for Your Business Needs"
            subHeading="Enrolling in our Cash Discount Program is simple and hassle-free, allowing you to start saving immediately. Upon enrollment, you will receive all the necessary in-store materials to inform your customers about the potential savings, enabling you to maximize your savings."
          />
          <div>
            <Text className={styles['cash-discount-program_main_sub-header']}>
              We provide your business with:
            </Text>

            <Flex direction="column" gap={32} gapTb={16}>
              <Space size={12} align="baseline">
                <Icon name="check-circle-solid" color="green" className={styles['checked-icon']} />
                <Text strong className="font-18-16-16 text-grey">
                  We offer simple and user-friendly signs for you to display at your business
                  entrance and point-of-sale.
                </Text>
              </Space>

              <Space size={12} align="baseline">
                <Icon name="check-circle-solid" color="green" className={styles['checked-icon']} />
                <Text strong className="font-18-16-16 text-grey">
                  Our payment processing equipment comes equipped with pre-installed software to
                  enable you to easily implement the Cash Discount Program.
                </Text>
              </Space>

              <Space size={12} align="baseline">
                <Icon name="check-circle-solid" color="green" className={styles['checked-icon']} />
                <Text strong className="font-18-16-16 text-grey">
                  We offer comprehensive back-office reporting tools that enable you to keep track
                  of your transaction history and monitor your savings.
                </Text>
              </Space>
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
          heading="Cash Discount Pricing for all types of business"
          subHeading="Learn more about how we can help your business."
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
