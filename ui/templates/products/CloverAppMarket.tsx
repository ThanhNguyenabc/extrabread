import { Row, Space, Tabs, Typography } from 'antd';
import CloverAppMarketBanner from 'public/images/banners/Clover App Market.png';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';
import styles from './ProductsTemplate.module.scss';

// Images
import Image, { StaticImageData } from 'next/image';
import AdpTimeIcon from 'public/images/products/ADP Time.png';

import AbreezeLinkIcon from 'public/images/products/Abreeze Link.png';
import AppointmentsProIcon from 'public/images/products/Appointments Pro.png';
import BookerCloverMiniConnectorIcon from 'public/images/products/Booker-Clover Mini Connector.png';
import CloverAppImg from 'public/images/products/Clover App.png';
import CloverDiningIcon from 'public/images/products/Clover Dining.png';
import DavoAutomatedSalesTaxIcon from 'public/images/products/Davo Automated Sales Tax.png';
import FeedbackIcon from 'public/images/products/Feedback.png';
import GiftCardImg from 'public/images/products/Gift Cards.png';
import GustoIcon from 'public/images/products/Gusto.png';
import KitchenDisplayIcon from 'public/images/products/Kitchen Display.png';
import MainStreetInsightsIcon from 'public/images/products/Main Street Insights.png';
import OrderOutIcon from 'public/images/products/Order Out.png';
import Promos1Icon from 'public/images/products/Promos.png';
import QuickbooksByCommerceSyncIcon from 'public/images/products/Quickbooks by Commerce Sync.png';
import Rewards1Icon from 'public/images/products/Rewards.png';
import RunPoweredIcon from 'public/images/products/RUN Powered.png';
import SalonSchedulerIcon from 'public/images/products/Salon Scheduler.png';
import ScheduleIcon from 'public/images/products/Schedule.png';
import ShiftsIcon from 'public/images/products/Shifts.png';
import ShopventoryIcon from 'public/images/products/Shopventory.png';
import SimpleOrderIcon from 'public/images/products/Simple Order.png';
import StockitIcon from 'public/images/products/StockIt.png';
import TimeClockIcon from 'public/images/products/Time Clock.png';
import YelpForBusinessOwnersIcon from 'public/images/products/Yelp for Business Owners.png';

import classNames from 'classnames';
import { useDevice } from '~/hooks/useDetectMobile';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { Heading } from '~/ui/atoms/heading/Heading';
import SafeHydrate from '~/ui/atoms/safe-hydrate';
import { GiftCardIcon, PromosIcon, RewardIcon } from '~/ui/img-resource/ImageResources';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { DetailSolution } from '../../organisms/detail-solution/DetailSolution';
import { DiscoverBanner } from './components/discover-banner/DiscoverBanner';

const { Text } = Typography;

const CUSTOMERS = [
  {
    icon: <PromosIcon />,
    title: 'Promos',
    description:
      'Build sales and customer relationships with automated mailing list features, coupon programs, redemption tracking, and so much more.',
  },
  {
    icon: <RewardIcon />,
    title: 'Rewards',
    description:
      'Develop a custom loyalty program in minutes with built-in features that let you manage announcements, track usage, offer exciting perks, and more.',
  },
  {
    icon: <GiftCardIcon />,
    title: 'Gift Cards',
    description:
      'Create and order custom or pre-designed plastic or digital cards, sell cards to customers, check balances, and issue store credit.',
  },
];

const TYPES_OF_APPS = [
  {
    heading: 'Customer Loyalty and Promotion',
    items: [
      {
        icon: Promos1Icon,
        title: 'Promos',
        desc: 'Utilize automated mailing lists, coupon programs, redemption tracking, and other features to foster customer relationships and boost sales.',
      },
      {
        icon: Rewards1Icon,
        title: 'Rewards',
        desc: 'Create a personalized loyalty program in minutes using the built-in features that enable you to manage announcements, monitor usage, provide enticing rewards, and perform other related tasks.',
      },
      {
        icon: GiftCardImg,
        title: 'Gift Cards',
        desc: 'Easily design and order customized or pre-made plastic or digital cards, sell them to customers, check balances, and distribute store credit with ease.',
      },
    ],
  },
  {
    heading: 'Employee Management',
    items: [
      {
        icon: ShiftsIcon,
        title: 'Shifts',
        desc: 'Allow your employees to clock in and out, declare cash tips, and perform other functions, all while organizing employee schedules and generating comprehensive reports.',
      },
      {
        icon: TimeClockIcon,
        title: 'Time Clock',
        desc: 'Effortlessly monitor employee working hours, construct schedules, set shift reminders, advertise job openings, and perform other related tasks.',
      },
      {
        icon: AdpTimeIcon,
        title: 'ADP Time',
        desc: 'Improve the accuracy of your payroll system using tools that allow you to monitor employee time cards, schedules, requested time off, and other related information.',
      },
    ],
  },
  {
    heading: 'Playroll',
    items: [
      {
        icon: GustoIcon,
        title: 'Gusto',
        desc: 'Efficiently keep track of employee working hours and automatically calculate taxes, streamlining the payroll process and enabling swift and hassle-free payment for all levels of employees.',
      },
      {
        icon: RunPoweredIcon,
        title: 'RUN Powered by ADP',
        desc: 'Access a broad spectrum of payroll features, such as employee time tracking, tax management, data importing, and other related functions, to facilitate smooth and efficient payroll processing.',
      },
      {
        icon: ScheduleIcon,
        title: 'Schedule',
        desc: 'Efficiently construct and manage employee schedules, monitor working hours, issue shift reminders, automatically advertise job openings, and perform other related tasks.',
      },
    ],
  },
  {
    heading: 'Analytics and Back-of-House Management',
    items: [
      {
        icon: MainStreetInsightsIcon,
        title: 'Main Street Insights',
        desc: 'Gain valuable insights into your industry and make informed business decisions using actionable information and forecasts, including comparative data analysis with your competitors.',
      },
      {
        icon: QuickbooksByCommerceSyncIcon,
        title: 'Quickbooks by Commerce Sync',
        desc: 'Seamlessly transfer daily sales and analytics data into QuickBooks Online, QuickBooks Desktop, or Xero, effectively reducing the need for a bookkeeper.',
      },
      {
        icon: DavoAutomatedSalesTaxIcon,
        title: 'Davo Automated Sales Tax',
        desc: 'Streamline your business sales process using tools that enable you to automatically allocate daily sales tax, file and pay online in full, and archive crucial documents for future reference.',
      },
    ],
  },
  {
    heading: 'Customer Engagement and Management',
    items: [
      {
        icon: FeedbackIcon,
        title: 'Feedback',
        desc: 'Prompt customers for feedback automatically, link notes to specific orders, meticulously monitor negative reviews, and offer coupons to enhance customer satisfaction.',
      },
      {
        icon: YelpForBusinessOwnersIcon,
        title: 'Yelp for Business Owners',
        desc: 'Access critical analytics, engage with customers, respond to inquiries, manage business photos, monitor leads, and perform a host of other essential functions.',
      },
      {
        icon: AbreezeLinkIcon,
        title: 'Abreeze Link for Constant Contact',
        desc: 'Maximize the effectiveness of your email marketing by utilizing tools that connect in-store purchases to email campaigns, encouraging customer loyalty and repeat business.',
      },
    ],
  },
  {
    heading: 'Restaurant Management',
    items: [
      {
        icon: CloverDiningIcon,
        title: 'Clover Dining',
        desc: 'Personalize floor plans, track guest counts, pre-authorize payments, facilitate seamless communication between front and back-of-house, and perform a variety of other functions with ease.',
      },
      {
        icon: OrderOutIcon,
        title: 'Order Out',
        desc: 'Integrate third-party delivery orders seamlessly into your Clover system, ensuring rapid processing of order details and effortless data transfers between your POS and kitchen printer.',
      },
      {
        icon: KitchenDisplayIcon,
        title: 'Kitchen Display',
        desc: 'Input orders on your Register, Tables, or Dining apps and transmit them to your kitchen display in a matter of seconds, minimizing errors and enhancing order accuracy.',
      },
    ],
  },
  {
    heading: 'Inventory Management',
    items: [
      {
        icon: ShopventoryIcon,
        title: 'Shopventory',
        desc: 'Effortlessly manage sales, purchasing, and vendor relationships while generating reports on profitability, product categories, and other essential metrics.',
      },
      {
        icon: SimpleOrderIcon,
        title: 'Simple Order',
        desc: 'Optimize back-of-house restaurant operations by monitoring dish inventory and streamlining stock replenishment in real-time to enhance efficiency and productivity.',
      },
      {
        icon: StockitIcon,
        title: 'StockIt',
        desc: 'Simplify the process of vendor orders, inventory lists, and sales reports, making them more efficient and effortless than ever before.',
      },
    ],
  },
  {
    heading: 'Appointments',
    items: [
      {
        icon: AppointmentsProIcon,
        title: 'Appointments Pro',
        desc: 'Effortlessly integrate employee schedules, business hours, and service durations to send appointment reminders, monitor appointment history, facilitate check-ins, and perform various other functions automatically.',
      },
      {
        icon: SalonSchedulerIcon,
        title: 'Salon Scheduler',
        desc: 'Automatically send payment reminders to customers, monitor customer scheduling, manage employee commissions per service, generate detailed reports, and perform various other functions with ease.',
      },
      {
        icon: BookerCloverMiniConnectorIcon,
        title: 'Booker-Clover Mini Connector',
        desc: 'Manage your salon operations from anywhere with tools that allow you to track staff schedules, incorporate appointment booking into your website, oversee customer profiles, and more.',
      },
    ],
  },
];

const AppRow = ({
  heading,
  items,
}: {
  heading?: string;
  items: {
    icon: StaticImageData;
    title: string;
    desc: string;
  }[];
}) => {
  return (
    <Row className={styles['clover-app_row']}>
      {heading && (
        <div>
          <Text className={styles['clover-app_row-heading']}> {heading}</Text>
        </div>
      )}
      {items.map((item, idx) => (
        <div key={`${idx}`} className={styles['clover-app_app-item']}>
          <Image width={40} src={item.icon} alt="app-img" quality={100} />
          <Text strong className={styles['clover-app_app-item-title']}>
            {item.title}
          </Text>
          <Text className={styles['clover-app_app-item-decs']}>{item.desc}</Text>
        </div>
      ))}
    </Row>
  );
};

const BANNER_CONTENT = [
  'Integrates with all Clover POS systems',
  '200+ available apps at your convenience',
  'Effortlessly install apps directly onto your POS system',
  'Easily access business tools from any location',
];

export const CloverAppMarket = () => {
  const { isMobile } = useDevice();

  return (
    <div>
      <Banner
        hasBackground
        type={['product', 'align-left']}
        content={<span>Clover App Market </span>}
        button={<GetPricingButton />}
        src={CloverAppMarketBanner.src}
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
      <BreadCard noPadding>
        <div className={styles['clover-app_main']}>
          <div>
            <Image
              width={479}
              height={485}
              quality={100}
              src={CloverAppImg.src}
              alt="CloverAppImg"
            />
          </div>

          <div>
            <Heading
              level={3}
              className={styles['clover-app_row-heading']}
              style={{ lineHeight: 1 }}
            >
              Apps to enhance your business
            </Heading>
            <Text className="font-18-16-16 text-grey block">
              Clover&#39;s App Market offers over 200 robust applications to facilitate employee
              scheduling, inventory management, loyalty programs, and promotions, among other
              business aspects. Integrate these applications with your Clover POS system to access
              numerous tools with ease and efficiency.
            </Text>
          </div>
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution type="product" heading="Customer Loyalty and Promotion" data={CUSTOMERS} />
      </BreadCard>

      <BreadCard isGrey>
        <Heading centered level={3} className={classNames('hide-sp')}>
          Types of Apps
        </Heading>

        <div className={styles['clover-app_app-items']}>
          {isMobile ? (
            <SafeHydrate>
              <Tabs
                defaultActiveKey="0"
                // style={{ height: 488 }}
                items={TYPES_OF_APPS.map((item, i) => {
                  const key = String(i);
                  return {
                    key,
                    label: item.heading,
                    children: <AppRow items={item.items} />,
                  };
                })}
              />
            </SafeHydrate>
          ) : (
            TYPES_OF_APPS.map((item, idx) => (
              <AppRow key={`${idx}`} heading={item.heading} items={item.items} />
            ))
          )}
        </div>
      </BreadCard>

      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          heading={'Clover App Market for all types of business.'}
          subHeading="Learn more about how we can help your business."
        />
      </BreadCard>

      <BreadCard>
        <DiscoverBanner
          type="product"
          heading="Ready to implement a Clover App Market for your business?"
        />
      </BreadCard>
    </div>
  );
};
