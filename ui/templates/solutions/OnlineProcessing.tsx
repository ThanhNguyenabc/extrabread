import { Space, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import OnlineProcessingBanner from 'public/images/banners/online-processing.png';
import Item2 from 'public/images/solutions/Integration.png';
import Item1 from 'public/images/solutions/Processing Capabilities.png';
import { PropsWithChildren, useMemo } from 'react';
import { SOLUTIONS_MENU } from '~/constants/index';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
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
import styles from './Solutions.module.scss';
import { SolutionFeature } from './solution-feature/SolutionFeature';

const { Text } = Typography;

const SOLUTIONS = [
  { icon: <CartIcon /> },
  { icon: <InterfaceIcon /> },
  {
    icon: <VirtualIcon />,
  },
];

const TransConfig = [
  {
    src: Item1,
    reversed: false,
    alt: 'Online Processing Capabilities',
  },
  {
    src: Item2,
    reversed: true,
    alt: 'Shopping Cart Integration',
  },
  {
    src: Item1,
    reversed: false,
    alt: 'Online Terminal',
  },
];

export const OnlineProcessing = ({ children }: PropsWithChildren) => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('solutions');
  const BANNER_CONTENT =
    (t('online_processing.benefits', { returnObjects: true }) as string[]) || [];

  const TRANS = useMemo(
    () =>
      (t('online_processing.solutions.items', { returnObjects: true }) as Array<any>)?.map(
        (item, index) => ({
          ...TransConfig[index],
          textLink: item.textLink,
          content: item,
        }),
      ),
    [t],
  );

  const WORK_SOLUTIONS = useMemo(
    () =>
      (t('online_processing.business.items', { returnObjects: true }) as Array<any>).map(
        (item, index) => ({
          ...SOLUTIONS[index],
          title: item.title,
          description: item.description,
        }),
      ),
    [t],
  );
  return (
    <>
      <Head>
        <title>{t('online_processing.heading')}</title>
      </Head>
      <Banner
        hasBackground
        tagText={t('online_processing.heading')}
        type="align-left"
        content={<>{t('online_processing.title')}</>}
        button={
          <GetPricingButton
            title={`${common('get_pricing_today')}!`}
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
          <Text>{t('online_processing.solutions.heading')}</Text>
        </div>
        <div className={styles['solutions_features']}>
          {TRANS.map(({ alt, src, reversed, textLink = '', content }) => (
            <SolutionFeature
              key={content['title']}
              reversed={reversed}
              src={src}
              textLink={textLink}
              alt={alt}
              content={content}
            />
          ))}
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution heading={t('online_processing.business.heading')} data={WORK_SOLUTIONS} />
      </BreadCard>
      {children}
      <BreadCard>
        <SolutionExplore
          heading={t('processing_solutions')}
          cards={[
            {
              name: common('solutions.credit-card.title'),
              description: common('solutions.credit-card.desc'),
              link: SOLUTIONS_MENU[1].href,
              src: CreditCardTerminalImg.src,
            },
            {
              name: common('solutions.mobile-card.title'),
              description: common('solutions.mobile-card.desc'),
              link: SOLUTIONS_MENU[2].href,
              src: MobileCardReaderImg.src,
            },
          ]}
        />
      </BreadCard>
    </>
  );
};
