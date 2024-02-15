import { Space, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import CreditCardTerminalBanner from 'public/images/banners/credit-card.png';
import Item2 from 'public/images/solutions/Clover Flex.png';
import Item1 from 'public/images/solutions/PAX A920 Smart Terminal.png';
import { PropsWithChildren, useMemo } from 'react';
import { RouteConfig, SOLUTIONS_MENU } from '~/constants/index';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
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
import { DetailSolution } from '../../organisms/detail-solution/DetailSolution';
import styles from './Solutions.module.scss';
import { SectionItem, SolutionFeature } from './solution-feature/SolutionFeature';

const { Text } = Typography;

type SolutionType = {
  icon: any;
  title: string;
  description: string;
};

const SOLUTIONS = [
  {
    icon: PaymentTerminalIcon ,
  },
  {
    icon: ChipIcon ,
  },
  {
    icon: WirelessIcon ,
  },
];

const TransConfig: Array<SectionItem> = [
  {
    src: Item1,
    reversed: true,
    alt: 'PAX A920 Smart Terminal',
  },
  { src: Item2, alt: 'Clover Flex', href: RouteConfig.CloverFlex, reversed: false },
];

export const CreditCardTerminal = ({ children }: PropsWithChildren) => {
  const { t: common } = useTranslation();
  const { t } = useTranslation('solutions');
  const BANNER_CONTENT = t('credit.benefits', { returnObjects: true }) as string[];

  const TRANS = useMemo(
    () =>
      (t('credit.transactions.items', { returnObjects: true }) as Array<any>)?.map(
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
      (t('credit.works_section.items', { returnObjects: true }) as Array<SolutionType>).map(
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
        <title>{t('credit.heading')}</title>
      </Head>
      <Banner
        tagText={common('get_pricing_today')}
        hasBackground
        type="align-left"
        content={<>{t('credit.title')}</>}
        button={
          <GetPricingButton
            className={styles['solutions_pricing-button']}
            title={`${common('get_pricing_today')}!`}
            color="black"
            size="large"
          />
        }
        src={CreditCardTerminalBanner.src}
        descriptions={
          <Space direction="vertical">
            {Array.isArray(BANNER_CONTENT) &&
              BANNER_CONTENT?.map((item, idx) => (
                <Space size={16} key={`banner-${idx}`}>
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
        <SectionHeading centered level={3} heading={t('credit.transactions.heading')} />
        <div className={styles['solutions_features']}>
          {Array.isArray(TRANS) &&
            TRANS.map(({ alt, href, src, reversed, textLink = '', content }) => (
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
        <div className={styles['solutions_highlight']}>
          <div>
            <Heading level={4} color="white" className={styles['solutions_highlight-heading']}>
              {t('credit.capabilities.heading')}
            </Heading>
            <Text className={styles['solutions_highlight-description']}>
              {t('credit.capabilities.subHeading')}
            </Text>
          </div>
          <Flex direction="column" gap={16} gapSp={8} align="start">
            {(t('credit.capabilities.items', { returnObjects: true }) as string[]).map(item => (
              <Space key={item}>
                <Icon name="check-circle-solid" style={{ width: 20, height: 20 }} color="green" />
                <Text strong color="white" className="font-18-16-14">
                  {item}
                </Text>
              </Space>
            ))}
          </Flex>
        </div>
      </BreadCard>

      <BreadCard>
        <DetailSolution heading={<>{t('credit.works_section.heading')}</>} data={WORK_SOLUTIONS} />
      </BreadCard>
      {children}
      <BreadCard>
        <SolutionExplore
          heading={t('processing_solutions')}
          cards={[
            {
              name: common('solutions.mobile-card.title'),
              description: common('solutions.mobile-card.desc'),
              link: SOLUTIONS_MENU[1].href,
              src: MobileCardReaderImg.src,
            },
            {
              name: common('solutions.online-processing.title'),
              description: common('solutions.online-processing.desc'),
              link: SOLUTIONS_MENU[2].href,
              src: OnlineProcessingImg.src,
            },
          ]}
        />
      </BreadCard>
    </>
  );
};
