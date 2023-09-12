import { Typography } from 'antd';
import { mapModifiers } from 'helpers';
import { Heading } from '~/ui/atoms/heading/Heading';
import styles from './BusinessList.module.scss';

const { Text } = Typography;

interface Props {
  heading: string;
  column?: number;
  items: {
    title: string;
    description: string;
  }[];
}

export const BusinessList = ({ heading, column = 3, items }: Props) => {
  return (
    <div className={mapModifiers('business-list', styles, `${column}`)}>
      <Heading level={5}>{heading}</Heading>
      <div className={styles['business-list_items']}>
        {items.map((item, idx) => (
          <div key={`${idx}`} className={styles['business-list_item']}>
            <Text className="font-18 text-center" strong>
              {item.title}
            </Text>
            <Text className="text-grey">{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};
