import { Typography } from 'antd';
import classNames from 'classnames';
import { BUSINESS_MENU } from '~/constants/index';
import { Container } from '~/ui/atoms/container/Container';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './GetPricing.module.scss';

const { Text } = Typography;

interface Props {
  activeIndex?: number;
  onClick?: ({ index, value }: { index: number; value: string }) => void;
}

export const PricingBusinessList = ({ activeIndex, onClick }: Props) => {
  const { t: common } = useTranslation();
  return (
    <Container className={classNames(styles['pricing-business_cards'])}>
      {BUSINESS_MENU.map((item, idx) => {
        const isActive = activeIndex === idx;
        const title = common(item.title);
        return (
          <div
            key={`${idx}`}
            className={classNames(
              styles['pricing-business_card'],
              isActive && styles['pricing-business_card--active'],
            )}
            onClick={() =>
              onClick?.({
                index: idx,
                value: title,
              })
            }
          >
            <div className={styles['pricing-business_card-backdrop']} />
            <Image
              alt=""
              width={258}
              height={200}
              quality={100}
              src={item.src}
              className={styles['pricing-business_card-img']}
            />
            <Text className={styles['pricing-business_card-title']}>{title}</Text>

            {isActive && (
              <img
                className={styles['pricing-business_card-checkmark']}
                src="/images/color-icons/check_circle.png"
                width={24}
                height={24}
              />
            )}
          </div>
        );
      })}
    </Container>
  );
};
