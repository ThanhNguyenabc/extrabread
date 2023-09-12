import { Typography } from 'antd';
import React from 'react';
import { PHONE } from '~/constants/index';
import { useDevice } from '~/hooks/useDetectMobile';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import {
  CashBonusIcon,
  NegociationIcon,
  PuzzleIcon,
  WritingIcon,
} from '~/ui/img-resource/ImageResources';
import styles from '../Home.module.scss';
import { CollapseHowItWorks } from './collapse-how-it-works/CollapseHowItWorks';
const { Text } = Typography;

const data = [
  {
    icon: <WritingIcon />,
    title: 'Fill out our Get Pricing form',
    description:
      'If you need quick assistance, please give us a call. If you prefer, we also have a short online form available. Our sales team is available during regular business hours, and our customer service team is available at all times to assist you.',
  },
  {
    icon: <NegociationIcon />,
    title: '1 on 1 Consultation',
    description:
      'After receiving your information, one of our sales specialists will connect with you to confirm details, discuss pricing, review your unique business needs, and explore equipment options.',
  },
  {
    icon: <PuzzleIcon />,
    title: 'Offer made & processed',
    description:
      'After finalizing the details, we will present you with a final offer that includes your cash signing bonus. An application will be sent to formalize the agreement, and your specialist will be available to assist you every step of the way.',
  },
  {
    icon: <CashBonusIcon />,
    title: 'Receive equipment, begin training.',
    description:
      'Following delivery, our account manager will be present on-site to guarantee a seamless setup and offer any needed training or support.',
  },
];

export const HowItWorks = () => {
  const { isMobile } = useDevice();
  return (
    <BreadCard className={styles['home-template_how-it-works']}>
      <SectionHeading
        centered
        centerSp
        heading="How it works?"
        subHeading={
          'We understand the importance of a fast turnaround for you. To achieve this, we request your cooperation in completing the following steps.'
        }
      />

      {!isMobile && (
        <ul className={styles['home-template_how-it-works_features']}>
          {data.map((item, idx) => (
            <li key={idx}>
              {item.icon}
              <Text strong className="font-16-14">
                {item.title}
              </Text>
              <Text className="font-14-12">{item.description}</Text>
            </li>
          ))}
        </ul>
      )}
      {isMobile && <CollapseHowItWorks data={data} />}

      <div className={styles['home-template_how-it-works_footer']}>
        <Text strong className="font-16-16-12">
          Available anytime for support
        </Text>
        <Text className="font-14-12">
          We&apos;re always here to help. Our customer service department is available 24/7. Just
          give us a call if you need assistance - <br className="only-sp" />{' '}
          <a href={`tel:${PHONE}`} style={{ fontWeight: 500 }}>
            {PHONE}
          </a>
        </Text>
      </div>
    </BreadCard>
  );
};
