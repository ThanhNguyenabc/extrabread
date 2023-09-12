import { Space, Typography } from 'antd';
import { mapModifiers } from 'helpers/component';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '~/ui/atoms/button/Button';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './SolutionFeature.module.scss';

const { Text } = Typography;

type Props = {
  src: StaticImageData;
  alt: string;
  reversed?: boolean;
  href?: string;
  textLink?: string;
  content: {
    title: string;
    description: string;
    details: string[];
    subDetails?: string[];
  };
};

export const SolutionFeature = ({ src, alt, content, reversed, href, textLink }: Props) => {
  return (
    <div className={mapModifiers('solution-feature', styles, reversed && 'reversed')}>
      <Image src={src} alt={alt} width={480} quality={100} />
      <div className={styles['solution-feature_content']}>
        <Heading level={5}>{content.title}</Heading>

        <Text className={styles['solution-feature_description']}>{content.description}</Text>

        <div className={styles['solution-feature_details']}>
          {content.details.map((item, idx) => (
            <Space key={`${idx}`} size={12} align="baseline">
              <Icon name={'check'} color="green" />
              <div>
                <Text className="font-16 block text-grey">{item}</Text>
                {content.subDetails && <Text className="text-grey">{content.subDetails[idx]}</Text>}
              </div>
            </Space>
          ))}
        </div>
        {href && (
          <Button className={styles['solution-feature_button']}>
            <Link href={href}>
              <Flex gap={8}>
                {textLink}
                <Icon name="chevron-right" />
              </Flex>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
