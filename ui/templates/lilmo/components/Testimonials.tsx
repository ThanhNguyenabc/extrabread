import { NextBackButton } from '@/ui/atoms/next-back-button/NextBackButton';
import { Button, Carousel, Rate, Space, Typography } from 'antd';
import { CarouselProps, CarouselRef } from 'antd/es/carousel';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { uuid } from 'uuidv4';
import { BreakPoints, useDevice } from '~/hooks/useDetectMobile';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
import { NewRate } from '~/ui/atoms/new-rate/NewRate';
import { TrustpilotText } from '~/ui/atoms/trust-score/TrustScore';
import styles from './Testimonials.module.scss';

const { Text, Paragraph, Link } = Typography;

const CONTENTS: {
  index: string;
  rating: number;
  title: string;
  quote: string;
  author: {
    name: string;
    title: string;
  };
}[] = [
  {
    index: uuid(),
    rating: 5,
    title: 'Upgraded to a new Micros',
    quote:
      '“Thank you for paying for our Micros system, my local rep is great, he is always there for us. Answering our calls”',
    author: {
      name: 'Joe',
      title: 'Owner of Di Vinos (Howard Beach, NY)',
    },
  },
  {
    index: uuid(),
    rating: 5,
    title: 'Switched from Pixapoint to Union',
    quote:
      'Tom is great. Helped me find the best suited for my bar/restaurant business POS and replace my old system with Union. Paid for the hardware at no cost',
    author: {
      name: 'Bobby',
      title: 'Owner of Cabana (Long Beach, NY)',
    },
  },
  {
    index: uuid(),
    rating: 5,
    title: 'Switched from Restaurant Manager to Revel Deal',
    quote:
      'These guys were here for 2 weeks straight helping my large staff learning the new Revel system. System is as good as the service. Thank you to Jose and Yull',
    author: {
      name: 'Juana',
      title: 'Owner of Juanas Latin Sports Bar & Grill (MiraMar, FL)',
    },
  },
  {
    index: uuid(),
    rating: 5,
    title: 'Switched from Aldelo to Revel',
    quote:
      'These guys helped pay for my new Revel system as well as hiring a great team to help me with the new transition. Saving tons of money on cash discount',
    author: {
      name: 'Jimmy',
      title: 'Owner of Wicked Monk (Bayridge, NY)',
    },
  },
];

const RATE_LIST = [
  {
    score: 5,
    title: 'As a small business owner',
    description:
      'As a small business owner, this company got us up and running without breaking the bank. Their service allowed us to focus on our business and helped us keep more of our hard earned money in our pocket.',
    authorName: 'Luan Nguyen',
  },
  {
    score: 5,
    title: 'I was hesitant to switch credit card…',
    description:
      'I was hesitant to switch credit card processors, as my former system was working, although expensive.',
    authorName: 'Merch RCH',
  },
  {
    score: 5,
    title: 'Very simple and fast process',
    description: 'Very simple and fast process. Everything was straightforward and easy.',
    authorName: 'Andrew Toon',
  },
  {
    score: 5,
    title: 'Whole process was super easy thanks to',
    description:
      'Whole process was super easy thanks to Tom! He explained everything well and answered any of the questions I had about the application.',
    authorName: 'Alexa Alcalay',
  },
  {
    score: 5,
    title: 'Barbara was very helpful throughout the…',
    description:
      'Barbara was very helpful throughout the application process and setting up my account.',
    authorName: 'Alexey Yushin',
  },
];

const FIRST_ITEM = {
  title: 'Excellent',
  score: 4.5,
  href: 'https://www.trustpilot.com/review/breadme.co',
};

const scoreConfigs: CarouselProps = {
  initialSlide: 0,
  draggable: true,
  focusOnSelect: true,
  swipeToSlide: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  responsive: [
    {
      breakpoint: BreakPoints.tablet,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: BreakPoints.mobile,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
      },
    },
  ],
};

const scoreConfigsSp: CarouselProps = {
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
};

export const Testimonials = () => {
  const { isMobile } = useDevice();
  const carouselRef = useRef<CarouselRef>(null);
  const scoreCarouselRef = useRef<CarouselRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles['testimonials']}>
      <BreadCard>
        <Heading className="text-center" level={4}>
          Hear From Our Satisfied Clients
        </Heading>

        {!isMobile && (
          <div className={styles['testimonials_content']}>
            {CONTENTS.map(item => (
              <div key={item.index} className={styles['testimonials-slide-wrapper']}>
                <Rate
                  disabled
                  defaultValue={item.rating}
                  character={() => <Icon size={24} name="star-filled" color="green" />}
                />
                <Link className={styles['testimonials-slide_link']}>{item.title}</Link>
                <Text strong className={styles['testimonials-slide_quote']}>
                  {item.quote}
                </Text>

                <div className={styles['testimonials-slide_author']}>
                  <Space direction="vertical" size={0}>
                    <Text strong className={styles['testimonials-slide_author-name']}>
                      {item.author.name}
                    </Text>
                    <Text type="secondary" className="font-16-14">
                      {item.author.title}
                    </Text>
                  </Space>
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <Carousel
            dots={false}
            ref={carouselRef}
            beforeChange={(_, nextSlide) => {
              setTimeout(() => {
                setActiveIndex(nextSlide);
              }, 200);
            }}
          >
            {CONTENTS.map(item => (
              <div key={item.index} className={styles['testimonials-slide-wrapper']}>
                <Rate
                  disabled
                  defaultValue={item.rating}
                  character={() => <Icon size={24} name="star-filled" color="green" />}
                />
                <Link className={styles['testimonials-slide_link']}>{item.title}</Link>
                <Text strong className={styles['testimonials-slide_quote']}>
                  {CONTENTS[activeIndex].quote}
                </Text>

                <div className={styles['testimonials-slide_author']}>
                  <Space direction="vertical" size={0}>
                    <Text strong className={styles['testimonials-slide_author-name']}>
                      {item.author.name}
                    </Text>
                    <Text type="secondary" className="font-16-14">
                      {CONTENTS[activeIndex].author.title}
                    </Text>
                  </Space>

                  <NextBackButton
                    disabledBack={activeIndex === 0}
                    disabledNext={activeIndex === CONTENTS.length - 1}
                    onBack={() => carouselRef.current?.prev()}
                    onNext={() => carouselRef.current?.next()}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        )}

        <div className={styles['testimonials-rate-slide']}>
          {!isMobile && (
            <Carousel {...scoreConfigs} ref={scoreCarouselRef} dots={false}>
              <div className={classNames(styles['testimonials_rate-item--first'])}>
                <Text className="f-body-lg-semi">{FIRST_ITEM.title}</Text>
                <NewRate size={40} value={FIRST_ITEM.score} gutter={10} />
                <Space size={4}>
                  <img src="/images/color-icons/star-solid-half.png" width={25} height={25} />
                  <TrustpilotText />
                </Space>
              </div>
              {RATE_LIST.map((item, idx) => (
                <div key={`${idx}`} className={styles['testimonials_rate-item']}>
                  <Link
                    className={styles['testimonials_rate-item_inner']}
                    target="_blank"
                    href={FIRST_ITEM.href}
                  >
                    <div className={styles['testimonials_rate-item_top']}>
                      <NewRate size={20} value={item.score} gutter={10} />
                    </div>
                    <Text ellipsis className="f-body-lg-semi">
                      {item.title}
                    </Text>
                    <Paragraph style={{ marginBottom: 0 }} ellipsis={{ rows: 2 }}>
                      {item.description}
                    </Paragraph>
                    <div className={styles['testimonials_rate-item_divider']} />
                    <Text className="f-body-sm-semi">{item.authorName}</Text>
                  </Link>
                </div>
              ))}
            </Carousel>
          )}

          {isMobile && (
            <>
              <div className={classNames(styles['testimonials_rate-item--first'])}>
                <Text className="f-body-lg-semi">{FIRST_ITEM.title}</Text>
                <NewRate size={40} value={FIRST_ITEM.score} gutter={10} />
                <Space size={4}>
                  <img src="/images/color-icons/star-solid-half.png" width={25} height={25} />
                  <TrustpilotText />
                </Space>
              </div>

              <Carousel dots {...scoreConfigsSp} ref={scoreCarouselRef}>
                {[...RATE_LIST, ...RATE_LIST].map((item, idx) => (
                  <div key={`${idx}`} className={styles['testimonials_rate-item']}>
                    <div className={styles['testimonials_rate-item_inner']}>
                      <div className={styles['testimonials_rate-item_top']}>
                        <NewRate size={20} value={item.score} gutter={2} />
                      </div>
                      <Text ellipsis className="f-body-lg-semi">
                        {item.title}
                      </Text>
                      <Paragraph style={{ marginBottom: 0 }} ellipsis={{ rows: 2 }}>
                        {item.description}
                      </Paragraph>
                      <div className={styles['testimonials_rate-item_divider']} />
                      <Text className="f-body-sm-semi">{item.authorName}r</Text>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div className={classNames(styles['testimonials_sp-slide-btn'])}>
                <Button
                  shape="circle"
                  size="large"
                  onClick={() => scoreCarouselRef.current?.prev()}
                  icon={<Icon name="chevron-left" />}
                />
                <Button
                  shape="circle"
                  size="large"
                  onClick={() => scoreCarouselRef.current?.next()}
                  icon={<Icon name="chevron-right" />}
                />
              </div>
            </>
          )}
        </div>
      </BreadCard>
    </div>
  );
};
