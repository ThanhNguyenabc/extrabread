import { Typography } from 'antd';
import { mapModifiers } from 'helpers';
import { ReactNode } from 'react';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './DetailSolution.module.scss';

type Props = {
  heading: ReactNode;
  type?: 'product';
  data: {
    icon: React.FunctionComponent<any>;
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
        {data.map(({ icon: Icon, title, description }, idx) => (
          <div className={'flex flex-row gap-6 md:gap-5 md:flex-col'} key={`${idx}`}>
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
            <div className="flex flex-col flex-1 gap-2 md:gap-0">
              <Heading size="sm" className={styles['detail-solution_title']}>
                {title}
              </Heading>
              <Typography.Text className="text-grey">{description}</Typography.Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
