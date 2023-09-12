import { Typography } from 'antd';
import classNames from 'classnames';
import { mapModifiers } from 'helpers/component';
import Link from 'next/link';
import { BUSINESS_MENU } from '~/constants/index';

import { Container } from '~/ui/atoms/container/Container';
import { Heading } from '~/ui/atoms/heading/Heading';

import Image from 'next/image';
import styles from './AllBusinesses.module.scss';

const { Text } = Typography;

type Props = {
  heading?: string[];
  subHeading?: string;
  noColor?: boolean;
  gridClass?: string;
  list: typeof BUSINESS_MENU;
  bolder?: boolean;
  cardClassName?: string;
  gridClassName?: string;
  type?: 'home' | 'product';
};

export const AllBusinesses = ({
  heading,
  list,
  subHeading,
  noColor,
  type,
  cardClassName,
  gridClassName,
  bolder = true,
}: Props) => {
  return (
    <div
      className={mapModifiers(
        'all-businesses',
        styles,
        noColor && 'no-color',
        bolder && 'bolder',
        type,
      )}
    >
      {heading && (
        <div className={styles['all-businesses_heading']}>
          <Heading level={3} centered>
            {heading.map((item, idx) => (
              <Text key={`${idx}`}>{item}&nbsp;</Text>
            ))}
          </Heading>
        </div>
      )}

      {subHeading && (
        <div className={styles['all-businesses_subHeading']}>
          <Text className="font-18 text-grey">{subHeading}</Text>
        </div>
      )}

      <Container className={classNames(styles['all-businesses_cards'], gridClassName)}>
        {list.map((item, idx) => {
          return (
            <Link href={item.href} key={`${idx}`}>
              <div className={classNames(styles['all-businesses_card'], cardClassName)}>
                <div className={styles['all-businesses_card-backdrop']} />
                <Image
                  alt=""
                  quality={100}
                  width={376}
                  height={300}
                  src={item.src}
                  className={styles['all-businesses_card-img']}
                />
                <Text className={styles['all-businesses_card-title']}>{item.title}</Text>
              </div>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};
