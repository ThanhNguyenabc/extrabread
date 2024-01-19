import { Typography } from 'antd';
import Link from 'next/link';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './KeyFeatures.module.scss';

type Props = {
  items: {
    description: string;
    href?: string;
  }[];
};

export const KeyFeatures = ({ items }: Props) => {
  return (
    <div className={styles['key-features']}>
      {items?.map((item, idx) => (
        <div className={styles['key-features_item']} key={`${idx}`}>
          <Icon name="check-circle-solid" color="green" style={{ width: 48, height: 48 }} />
          <Typography.Text className="text-grey">{item.description}</Typography.Text>
          {item.href && (
            <Typography.Text strong>
              <Link href={item.href} passHref className="text-primary">
                Read more <Icon name="right" color="green" />
              </Link>
            </Typography.Text>
          )}
        </div>
      ))}
    </div>
  );
};
