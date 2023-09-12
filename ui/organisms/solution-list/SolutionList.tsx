import { Typography } from 'antd';
import { ReactNode } from 'react';
import { BusinessCard, BusinessCardProps } from '../business-card/BusinessCard';
import styles from './SolutionList.module.scss';
const { Text } = Typography;

type Props = {
  headings: ReactNode[];
  content: BusinessCardProps[];
};
export const SolutionList = ({ headings, content }: Props) => {
  return (
    <div className={styles['solution-list']}>
      <div className={styles['solution-list-heading']}>
        {headings.map((item, idx) => (
          <Text key={idx} color={(idx + 1) % 2 === 0 ? '' : 'green'}>
            {item}
          </Text>
        ))}
      </div>
      <div className={styles['solution-list-inner']}>
        {content.map((item, idx) => (
          <BusinessCard key={`${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
};
