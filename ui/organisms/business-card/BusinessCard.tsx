import { Carousel, CarouselProps, Typography } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { mapModifiers } from 'helpers';
import { isEmpty } from 'lodash';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC, useRef } from 'react';
import { BreadButtonProps, Button } from '~/ui/atoms/button/Button';
import { Flex } from '~/ui/atoms/flex/Flex';
import { Icon } from '~/ui/atoms/icon/Icon';
import styles from './BusinessCard.module.scss';

const { Text } = Typography;

export type BusinessCardProps = {
  href: string;
  logo: StaticImageData;
  thumbnail: StaticImageData;
  images?: StaticImageData[];
  description?: string;
  os?: ('windows' | 'apple' | 'android')[];
};

const CircleButton = (props: BreadButtonProps) => {
  const className = mapModifiers('business-card_button', styles, props.direction);
  return (
    <Button
      {...props}
      size="small"
      shape="circle"
      className={className}
      icon={<Icon name={props.direction === 'left' ? 'chevron-left' : 'chevron-right'} />}
    />
  );
};

export const BusinessCard: FC<BusinessCardProps> = ({
  href,
  logo,
  thumbnail,
  os,
  images,
  description,
}) => {
  const configs: CarouselProps = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <Link href={href ?? '#'} className={styles['business-card']}>
      <div className={styles['business-card_inner']}>
        {!isEmpty(images) ? (
          <>
            <CircleButton
              direction="left"
              onClick={ev => {
                ev.preventDefault();
                carouselRef.current?.prev();
              }}
            />
            <CircleButton
              direction="right"
              onClick={ev => {
                ev.preventDefault();
                carouselRef.current?.next();
              }}
            />
            <Carousel
              {...configs}
              ref={carouselRef}
              dots={false}
              className={styles['restaurant-services_items']}
            >
              {images!.map((_, idx) => (
                <Image
                  key={`${idx}`}
                  src={thumbnail}
                  alt="business-card"
                  height={300}
                  quality={100}
                />
              ))}
            </Carousel>
          </>
        ) : (
          <Image src={thumbnail} alt="business-card" height={300} quality={100} />
        )}
      </div>
      <div className={styles['business-card_content']}>
        <Image src={logo} alt="business-card-logo" height={60} width={120} quality={100} />

        <Flex direction="column" align="start">
          <Text className="text-grey font-14-12">{description}</Text>
          <Flex gap={16} gapTb={8} className="w-full">
            {os?.map((os, idx) => (
              <Icon key={idx} name={os} size={24} color="light" />
            ))}
            <Flex gap={4} gapTb={0} style={{ marginLeft: 'auto' }}>
              <Text strong className="font-16-14" style={{ whiteSpace: 'nowrap' }}>
                Learn more
              </Text>
              <Icon name="chevron-right" color="black" size={24} />
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Link>
  );
};
