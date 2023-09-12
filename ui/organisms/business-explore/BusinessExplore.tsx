import { Typography } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './BusinessExplore.module.scss';
const { Text } = Typography;

interface Props {
  heading: string;
  items: {
    title: string;
    src: string;
    href: string;
  }[];
}

export const BusinessExplore: FC<Props> = ({ heading, items }) => {
  return (
    <div className={styles['business-explore']}>
      <Heading level={4} centered>
        {heading}
      </Heading>
      <div className={styles['business-explore_grid']}>
        {items.map((item, idx) => (
          <div key={`${idx}`}>
            <Link href={item.href}>
              <div className={classNames(styles['business-explore_card'])}>
                <div className={styles['business-explore_card-backdrop']} />
                <Image
                  quality={100}
                  alt=""
                  width={212.8}
                  height={240}
                  src={item.src}
                  className={styles['business-explore_card-img']}
                />
                <Text className={styles['business-explore_card-title']}>{item.title}</Text>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
