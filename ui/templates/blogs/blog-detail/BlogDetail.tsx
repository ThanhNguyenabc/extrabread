import { getBlogsAPI } from '@/apis/blogs';
import { DOMAIN } from '@/constants';
import { parseBlogData } from '@/helpers';
import { BreadCard } from '@/ui/atoms/bread-card/BreadCard';
import { Button } from '@/ui/atoms/button/Button';
import { Flex } from '@/ui/atoms/flex/Flex';
import { Heading } from '@/ui/atoms/heading/Heading';
import { Icon } from '@/ui/atoms/icon/Icon';
import { ImageWithFallback } from '@/ui/atoms/img-fallback/ImageWithFallback';
import SafeHydrate from '@/ui/atoms/safe-hydrate';
import { Spin, Typography, message } from 'antd';
import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../Blogs.module.scss';
import { SubscriptionForm } from '../subscription-form/SubscriptionForm';
import { RouteConfig } from '@/constants/routes';

const { Paragraph, Text } = Typography;

export const BlogDetail = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const {
    asPath,
    query: { blogId },
  } = useRouter();
  const sharingUrl = `${DOMAIN}${asPath}`;
  const formattedBlogs: Blog[] = blogs.map(parseBlogData);
  const blog: Blog = parseBlogData(blogs.find(item => item.slug === blogId));
  const loading = isEmpty(blog);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await getBlogsAPI();
      setBlogs(blogs);
    };
    getBlogs();
  }, []);

  useEffect(() => {
    if (blog && blog.title) {
      document.title = blog.title;
    }
  }, [blog]);

  const handleCopy = () => {
    navigator.clipboard.writeText(sharingUrl);
    message.success('Copied');
  };

  return (
    <main className={styles.blogDetail}>
      <Spin spinning={loading} size="large">
        <BreadCard>
          <div className={styles.blogDetail_body}>
            <div className={styles.blogDetail_author}>
              <span>{blog.author}</span>
              <span>•</span>
              <span>{dayjs(blog.date).format('DD MMMM YYYY')}</span>
            </div>
            <Heading centered level={1}>
              <span dangerouslySetInnerHTML={{ __html: blog.title ?? '' }} />
            </Heading>
            <div className={styles.blogDetail_mainContent}>
              <div dangerouslySetInnerHTML={{ __html: blog.content ?? '' }} />
            </div>
          </div>

          <div className={styles.blogDetail_sharing}>
            <Flex direction="column" align="start" gap={0}>
              <Text strong type="success" className="font-14-12">
                Written by
              </Text>
              <Text className="font-18-16-14">{blog.author}</Text>
            </Flex>
            <Flex direction="column" align="start" gap={0}>
              <Text strong type="success" className="font-14-12">
                Published on
              </Text>
              <Text className="font-18-16-14">{dayjs(blog.date).format('DD MMMM YYYY')}</Text>
            </Flex>

            <Flex gap={12} className={styles.blogDetail_sharingButtons}>
              <Button className={styles.blogDetail_sharingButton} onClick={handleCopy}>
                <Flex>
                  <Icon name="link" />
                  Copy link
                </Flex>
              </Button>

              <SafeHydrate>
                {/* <FacebookShareButton
                  url={sharingUrl}
                  quote={blog.title}
                  className={styles.blogDetail_sharingButton}
                >
                  <Icon name="facebook" size={28} />
                </FacebookShareButton> */}
              </SafeHydrate>
{/* 
              <LinkedinShareButton
                title={blog.title}
                url={sharingUrl}
                className={styles.blogDetail_sharingButton}
              >
                <Icon name="linkedin" size={25} />
              </LinkedinShareButton> */}
            </Flex>
          </div>

          <SubscriptionForm onSubmit={values => {}} />
        </BreadCard>
      </Spin>

      <BreadCard innerClassName={styles.blogDetail_suggestList}>
        {formattedBlogs
          .filter(el => el.slug !== blogId)
          .slice(0, 2)
          .map(item => (
            <Link
              href={`${RouteConfig.Blogs}/${item.slug}`}
              key={item.id}
              style={{ overflow: 'hidden' }}
            >
              <article className={styles.blogDetail_suggestItem}>
                <ImageWithFallback src={item.img} alt="" width="584" height={200} quality={100} />

                <Flex direction="column" align="start">
                  <Text strong className={styles.blogDetail_suggestItemTitle} ellipsis>
                    <span dangerouslySetInnerHTML={{ __html: item.title ?? '' }} />
                  </Text>
                  <Paragraph className="16-14 text-grey mb-0" ellipsis={{ rows: 2 }}>
                    <span dangerouslySetInnerHTML={{ __html: item.description ?? '' }} />
                  </Paragraph>
                </Flex>

                <Flex gap={0} direction="column" align="start">
                  <Text strong className="font-14-12">
                    {item.author}
                  </Text>
                  <Text className="font-14-12" type="secondary">
                    {dayjs(item.date).format('MMM DD, YYYY')}
                  </Text>
                </Flex>
              </article>
            </Link>
          ))}
      </BreadCard>
    </main>
  );
};
