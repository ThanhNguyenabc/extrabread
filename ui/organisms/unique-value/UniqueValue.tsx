import { useTranslation } from 'next-i18next';
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

const Detail = ({ data }: { data: Array<string> }) => {
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
  const { t } = useTranslation();
  const items = t('unique.items', { returnObjects: true }) as Array<string> | null;

  return (
    <Container className={styles['unique-value']}>
      <BreadCard>
        <div className={styles['unique-value_inner']}>
          {isMobile && items && <Detail data={items} />}

          <div className={styles['unique-value_content']}>
            <Image
              quality={100}
              width={580}
              height={580}
              className={clsx(styles['unique-value_img'])}
              src={UniqueValueImg.src}
              alt="UniqueValue"
            />

            <div className={'flex flex-col gap-4'}>
              <SectionHeading
                noMargin
                heading={<span className="hide-sp">{t('unique.heading')}</span>}
              />
              {!isMobile && items && <Detail data={items} />}
            </div>
          </div>
        </div>
      </BreadCard>
    </Container>
  );
};
