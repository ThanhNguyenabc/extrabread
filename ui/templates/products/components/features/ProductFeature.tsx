import { Space, Typography } from 'antd';
import { mapModifiers } from 'helpers/component';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './ProductFeature.module.scss';

const { Text } = Typography;

type Props = {
  src: StaticImageData;
  alt: string;
  reversed?: boolean;
  content: {
    title: string;
    description: string;
    details: string[];
    subDetails?: string[];
  };
};

export const ProductFeature = ({ src, alt, content, reversed }: Props) => {
  return (
    <div className={mapModifiers('product-features', styles, reversed && 'reversed')}>
      <Image src={src} alt={alt} width={480} quality={100} />
      <div className={styles['product-features_content']}>
        <Heading level={3}>{content.title}</Heading>

        <Text className={styles['product-features_description']}>{content.description}</Text>

        <div className={styles['product-features_details']}>
          {content.details.map((item, idx) => (
            <Space key={`${idx}`} size={12} align="baseline">
              <Icon name="check-circle-solid" color="green" className={styles['checked-icon']} />
              <div>
                <Text strong className="font-18-16-16 block text-grey">
                  {item}
                </Text>
                {content.subDetails && <Text className="text-grey">{content.subDetails[idx]}</Text>}
              </div>
            </Space>
          ))}
        </div>
      </div>
    </div>
  );
};
