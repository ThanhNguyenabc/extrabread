import { BreadCard } from '@/ui/atoms/bread-card/BreadCard';
import { Flex } from '@/ui/atoms/flex/Flex';
import { SectionHeading } from '@/ui/atoms/heading/Heading';
import { Spin, Typography } from 'antd';
import dayjs from 'dayjs';

import { getBlogsAPI } from '@/apis/blogs';
import { RouteConfig } from '@/constants';
import { parseBlogData } from '@/helpers';
import { ImageWithFallback } from '@/ui/atoms/img-fallback/ImageWithFallback';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Blogs.module.scss';
import { SubscriptionForm } from './subscription-form/SubscriptionForm';

const { Paragraph, Text } = Typography;

export const BlogsTemplate = () => {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await getBlogsAPI();
      setBlogs(blogs);
    };
    getBlogs();
  }, []);

  const formattedBlogs: Blog[] = blogs.map(parseBlogData);
  const loading = isEmpty(formattedBlogs);

  return (
    <main className={styles['blogs']}>
      <BreadCard>
        <SectionHeading
          centered
          level={2}
          heading={'ExtraBread blog'}
          subHeading={`Tool and strategies modern teams need to help their companies grow.`}
        />

        <Spin spinning={loading} size="large">
          <div className={styles['blogs_list']}>
            {formattedBlogs.map(item => (
              <Link href={`${RouteConfig.Blogs}/${item.slug}`} key={item.id}>
                <article className={styles['blogs_item']}>
                  <ImageWithFallback src={item.img} alt="" width={320} height={200} quality={100} />
                  <Flex direction="column" align="start">
                    <Text strong className="font-18-16-14" ellipsis>
                      <span dangerouslySetInnerHTML={{ __html: item.title ?? '' }} />
                    </Text>
                    <Paragraph className="font-18-16-14 text-grey" ellipsis={{ rows: 2 }}>
                      <span dangerouslySetInnerHTML={{ __html: item.description ?? '' }} />
                    </Paragraph>

                    <Flex
                      gap={0}
                      direction="column"
                      align="start"
                      className={styles['blogs_item-author']}
                    >
                      <Text strong className="font-14-12">
                        {item.author}
                      </Text>
                      <Text className="font-14-12" type="secondary">
                        {dayjs(item.date).format('MMM DD, YYYY')}
                      </Text>
                    </Flex>
                  </Flex>
                </article>
              </Link>
            ))}
          </div>
        </Spin>

        <SubscriptionForm
          onSubmit={values => {
            console.log(values);
          }}
        />
      </BreadCard>
    </main>
  );
};
