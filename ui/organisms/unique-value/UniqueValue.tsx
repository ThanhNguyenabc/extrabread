import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { clsx } from 'yet-another-react-lightbox/core';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Container } from '~/ui/atoms/container/Container';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Icon } from '~/ui/atoms/icon/Icon';
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
  const { t } = useTranslation();
  const items = t('unique.items', { returnObjects: true }) as Array<string> | null;

  return (
    <Container className={styles['unique-value']}>
      <BreadCard>
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
          <div className="inline-flex h-[358px] md:h-[580px]">
            <Image
              quality={100}
              width={580}
              height={580}
              className={clsx(styles['unique-value_img'])}
              src={
                'https://res.cloudinary.com/dgrym3yz3/image/upload/v1718772698/extrabread/common/tdqyjoymfqyk8cbjqnby.webp'
              }
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 50vw"
              alt="UniqueValue"
            />
          </div>
          <div className="flex flex-col gap-4 md:justify-center">
            <h3 className="heading-xs md:heading-lg">{t('unique.heading')}</h3>
            {items && <Detail data={items} />}
          </div>
        </div>
      </BreadCard>
    </Container>
  );
};
