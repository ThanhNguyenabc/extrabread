import { Icon } from '@/ui/atoms/icon/Icon';
import { Space, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './SolutionExplore.module.scss';

const { Text } = Typography;

type Props = {
  heading: string;
  cards: {
    name: string;
    description: string;
    link: string;
    src: string;
  }[];
};
export const SolutionExplore = ({ heading, cards }: Props) => {
  return (
    <div className={styles['solution-explore']}>
      <div className={styles['solution-explore_heading']}>
        <Heading size="sm">{heading}</Heading>
      </div>

      {cards.map((item, idx) => (
        <Link key={`${idx}`} href={item.link} className={styles['solution-explore_item']}>
          <Space direction="vertical">
            <Text className="font-18-16-16 weight-600">{item.name}</Text>
            <Text type="secondary">{item.description}</Text>
            <Space>
              <Text strong className="hover">
                Learn more
              </Text>
              <Icon name="right" color="black" />
            </Space>
          </Space>
          <Image alt="" width={150} height={163} src={item.src} quality={100} />
        </Link>
      ))}
    </div>
  );
};
