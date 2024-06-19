import { Space, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import MobileCardReaderBanner from 'public/images/banners/mobile-card-reader.png';
import { PropsWithChildren, useMemo } from 'react';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Icon } from '~/ui/atoms/icon/Icon';
import { Banner } from '~/ui/organisms/banner/Banner';

import Head from 'next/head';
import Item2 from 'public/images/solutions/Clover Go Mobile App.png';
import Item1 from 'public/images/solutions/ProCharge Mobile.png';
import { RouteConfig, SOLUTIONS_MENU } from '~/constants/index';
import { GetPricingButton } from '~/ui/atoms/get-pricing/GetPricingButton';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import {
  CreditCardIcon,
  DevicesIcon,
  OptionIcon,
  CreditCardTerminalImg,
  OnlineProcessingImg
} from '~/ui/img-resource/ImageResources';
import { SolutionExplore } from '~/ui/organisms/solution-explore/SolutionExplore';
import { DetailSolution } from '../../organisms/detail-solution/DetailSolution';
import styles from './Solutions.module.scss';
import { SectionItem, SolutionFeature } from './solution-feature/SolutionFeature';
const { Text } = Typography;

const SOLUTIONS = [
  {
    icon: DevicesIcon,
  },
  {
    icon: CreditCardIcon,
  },
  {
    icon: OptionIcon,
  },
];

const TransConfig: Array<SectionItem> = [
  {
    src: Item1,
    reversed: true,
    alt: 'PAX A920 Smart Terminal',
  },
  { src: Item2, alt: 'Clover Flex', href: RouteConfig.CloverDuo, reversed: false },
];
export const MobileCardReader = ({ children }: PropsWithChildren) => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('solutions');
  const BANNER_CONTENT = (t('mobile.benefits', { returnObjects: true }) as string[]) || [];

  const TRANS = useMemo(
    () =>
      (t('mobile.smart_features.items', { returnObjects: true }) as Array<any>)?.map(
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
      (t('mobile.solutions.items', { returnObjects: true }) as Array<any>).map((item, index) => ({
        ...SOLUTIONS[index],
        title: item.title,
        description: item.description,
      })),
    [t],
  );
  return (
    <>
      <Head>
        <title>{t('mobile.heading')}</title>
      </Head>
      <Banner
        hasBackground
        tagText={t('mobile.heading')}
        type="align-left"
        content={<>{t('mobile.title')}</>}
        button={
          <GetPricingButton
            title={`${common('get_pricing_today')}!`}
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
        <SectionHeading centered level={3} heading={t('mobile.smart_features.heading')} />
        <div className={styles['solutions_features']}>
          {TRANS.map(({ alt, href, src, reversed, textLink = '', content }) => (
            <SolutionFeature
              key={content['title']}
              reversed={reversed}
              href={href}
              src={src}
              textLink={textLink}
              alt={alt}
              content={content}
            />
          ))}
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution heading={t('mobile.solutions.heading')} data={WORK_SOLUTIONS} />
      </BreadCard>

      {children}
      <BreadCard>
        <SolutionExplore
          heading={t('processing_solutions')}
          cards={[
            {
              name: common('solutions.credit-card.title'),
              description: common('solutions.credit-card.desc'),
              link: SOLUTIONS_MENU[0].href,
              src: CreditCardTerminalImg,
            },
            {
              name: common('solutions.online-processing.title'),
              description: common('solutions.online-processing.desc'),
              link: SOLUTIONS_MENU[2].href,
              src: OnlineProcessingImg,
            },
          ]}
        />
      </BreadCard>
    </>
  );
};
