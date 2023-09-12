import { Carousel, CarouselProps, Space, Typography } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';
import { FC, useRef } from 'react';
import { BreakPoints, useDevice } from '~/hooks/useDetectMobile';
import { Heading } from '~/ui/atoms/heading/Heading';
import { LinkMore } from '~/ui/atoms/link-more/LinkMore';
import { NextBackButton } from '~/ui/atoms/next-back-button/NextBackButton';
import styles from './SolutionPackages.module.scss';

const { Text } = Typography;
interface Props {
  heading: string;
  items: {
    title: string;
    description: string;
    href: string;
    onClick?: VoidFunction;
    src: string;
  }[];
}

export const SolutionPackages: FC<Props> = ({ heading, items }) => {
  const { isMobile } = useDevice();
  const configs: CarouselProps = {
    initialSlide: 2,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: BreakPoints.mobile,
        settings: {
          centerPadding: '88px',
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: BreakPoints.tablet,
        settings: {
          slidesToShow: 2,
          infinite: true,
          centerMode: true,
          centerPadding: '92px',
        },
      },
    ],
  };
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div className={styles['solution-packages']}>
      <div className={styles['solution-packages_heading-wrapper']}>
        <Heading
          level={3}
          className={styles['solution-packages_heading']}
          style={{ lineHeight: 1 }}
        >
          {heading}
        </Heading>

        {!isMobile && (
          <NextBackButton
            onBack={() => carouselRef.current!.prev()}
            onNext={() => carouselRef.current!.next()}
          />
        )}
      </div>
      <Carousel
        {...configs}
        ref={carouselRef}
        dots={false}
        className={styles['solution-packages_items']}
      >
        {items.map((item, idx) => (
          <div key={`${idx}`} className={styles['solution-packages_item']} onClick={item.onClick}>
            <Space direction="vertical">
              <Text strong className="font-18">
                {item.title}
              </Text>
              <Text className="text-grey" style={{ fontSize: 14 }}>
                {item.description}
              </Text>
              <LinkMore href={item.href} color="green" />
            </Space>
            <div className={styles['solution-packages_img']}>
              <Image quality={100} width={274} height={274} src={item.src} alt={item.title} />
            </div>
          </div>
        ))}
      </Carousel>

      {isMobile && (
        <div className={styles['solution-packages_button-sp']}>
          <NextBackButton
            onBack={() => carouselRef.current!.prev()}
            onNext={() => carouselRef.current!.next()}
          />
        </div>
      )}
    </div>
  );
};
