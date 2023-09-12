import Image from 'next/image';
import { clsx } from 'yet-another-react-lightbox/core';
import { useDevice } from '~/hooks/useDetectMobile';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Container } from '~/ui/atoms/container/Container';
import { Flex } from '~/ui/atoms/flex/Flex';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import { UniqueValueImg } from '~/ui/img-resource/ImageResources';
import styles from './UniqueValue.module.scss';

const Detail = () => {
  const data = [
    '24/7 U.S. - based, in-house technical support',
    'Cash Discount Program',
    'Compliant Dual Pricing Receipt',
    'Free Point-of-Sale Placement Program',
    'Free EMV (Chip Readers) Integration',
    'No cancellation fee',
    'Quick, seamless setup & implementation',
    'Next day funding',
    'Simplified batch processing',
  ];

  return (
    <div className={styles['unique-value_detail']}>
      {data.map((item, idx) => (
        <Flex key={idx}>
          <Icon name="check-circle-solid" color="green" />
          {item}
        </Flex>
      ))}
    </div>
  );
};

export const UniqueValue = () => {
  const { isMobile } = useDevice();
  return (
    <Container className={styles['unique-value']}>
      <BreadCard>
        <div className={styles['unique-value_inner']}>
          {isMobile && <Detail />}
          <div className={styles['unique-value_text']}>
            <SectionHeading
              noMargin
              heading={<span className="hide-sp">Our secret sauce to your success.</span>}
              subHeading={`At ExtraBread, we're committed to helping you save on Point of Sale costs and increase your profits through reduced payment processing fees. That's why we offer professional and personalized consulting on the ideal point of sale system, payment processing, merchant services, and more`}
            />
          </div>
          <div className={styles['unique-value_content']}>
            <Image
              quality={100}
              width={580}
              height={580}
              className={clsx(styles['unique-value_img'])}
              src={UniqueValueImg.src}
              alt="UniqueValue"
            />

            {!isMobile && <Detail />}
          </div>
        </div>
      </BreadCard>
    </Container>
  );
};
