import { Space, Typography } from 'antd';
import { formatCurrency } from 'helpers';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button } from '~/ui/atoms/button/Button';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './Pricing.module.scss';
const { Text } = Typography;

interface Props {
  leftBlock: {
    heading: string;
    items: {
      title: string;
      price: number;
      description: string;
    }[];
  };
  rightBlock: {
    tag: string;
    heading: string;
    description: string;
    price: number;
    href: string;
  };
}

export const Pricing: FC<Props> = ({ leftBlock, rightBlock }) => {
  const { t } = useTranslation();
  const { push } = useRouter();
  return (
    <div className={styles['pricing']}>
      <Heading level={3} centered>
        {t('pricing')}
      </Heading>
      <div className={styles['pricing_inner']}>
        <div className={styles['pricing_left-block']}>
          <Heading size="sm" className={styles['pricing_left-block_heading']}>
            {leftBlock.heading}
          </Heading>

          <div className={styles['pricing_left-block_items']}>
            {leftBlock.items.map((item, idx) => (
              <div className={styles['pricing_left-block_item']} key={`${idx}`}>
                <Text strong>{item.title}</Text>
                <Text className={styles['pricing_left-block_item-price']}>
                  ${formatCurrency(item.price)}
                </Text>
                <Text className="text-grey">{item.description}</Text>
              </div>
            ))}
          </div>
        </div>
        <Text className="font-24 weight-600">{t('or')}</Text>
        <div className={styles['pricing_right-block']}>
          <div className={styles['pricing_right-block_tag']}>
            <span>{rightBlock.tag}</span>
          </div>
          <div className={styles['pricing_right-block_inner']}>
            <div className={styles['pricing_right-block_text']}>
              <Heading level={5} className="mb-8">
                {rightBlock.heading}
              </Heading>
              <Text className="font-16-14">{rightBlock.description}</Text>
            </div>
            <Text className={styles['pricing_right-block_price']}>
              ${formatCurrency(rightBlock.price)}
            </Text>
            <Button type="primary" className="block" onClick={() => push(rightBlock.href)}>
              <Space>
                {t('get_started')}
                <Icon name="right" color="white" />
              </Space>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
