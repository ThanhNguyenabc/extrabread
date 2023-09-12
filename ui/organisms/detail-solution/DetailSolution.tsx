import { Typography } from 'antd';
import { mapModifiers } from 'helpers';
import { ReactNode } from 'react';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './DetailSolution.module.scss';

type Props = {
  heading: ReactNode;
  type?: 'product';
  data: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
};

export const DetailSolution = ({ heading, data, type }: Props) => {
  return (
    <div className={mapModifiers('detail-solution', styles, type)}>
      <Heading centered level={3}>
        {heading}
      </Heading>
      <div className={styles['detail-solution_content']}>
        {data.map((item, idx) => (
          <div className={styles['detail-solution_item']} key={`${idx}`}>
            {item.icon}
            <Heading size="sm" className={styles['detail-solution_title']}>
              {item.title}
            </Heading>
            <Typography.Text className="text-grey">{item.description}</Typography.Text>
          </div>
        ))}
      </div>
    </div>
  );
};
