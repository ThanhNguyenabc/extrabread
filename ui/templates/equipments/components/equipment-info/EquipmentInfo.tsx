import { Col, Row, Space, Typography } from 'antd';
import { FC } from 'react';
import { Heading } from '~/ui/atoms/heading/Heading';
import { Icon } from '~/ui/atoms/icon/Icon';
const { Text, Link } = Typography;

import { useTranslation } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';
import { Flex } from '~/ui/atoms/flex/Flex';
import styles from './EquipmentInfo.module.scss';

interface Props {
  logo: StaticImageData | string;
  description: JSX.Element | string;
  pros: string[];
  cons: string[];
  heading?: string;
  readMore?: boolean;
  href?: string;
  onClick?: VoidFunction;
  os?: ('windows' | 'apple' | 'android')[];
}

export const EquipmentInfo: FC<Props> = ({
  heading,
  logo,
  description,
  readMore,
  href,
  onClick,
  pros,
  cons,
  os,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles['equipment-info']} onClick={onClick}>
      <div className={styles['equipment-info_text-logo']}>
        <div className={styles['equipment-info_logo']}>
          <Image alt="" width={240} height={120} src={logo} quality={100} />
          {os && (
            <Flex gap={16}>
              {os.map((os, idx) => (
                <div key={idx} className={styles['equipment-info_os']}>
                  <Icon name={os} size={20} />
                </div>
              ))}
            </Flex>
          )}
        </div>

        <div className={styles['equipment-info_text']}>
          {heading && (
            <Heading level={5} className="mb-8 block hide-sp hide-tb">
              {heading}
            </Heading>
          )}

          <Text className="font-18-16-16 block text-grey">{description}</Text>
          {readMore && (
            <Link href={href} className="font-18 weight-600 mt-16">
              <Space size={4} align="start">
                {t('read_more')}
                <Icon name="chevron-down" color="green" />
              </Space>
            </Link>
          )}
        </div>
      </div>
      <Row gutter={[32, 16]}>
        <Col md={{ span: 12 }} sm={{ span: 24 }}>
          <div className={styles['equipment-info_pros']}>
            <Heading size="sm">{t('pros')}</Heading>

            <Flex direction="column" align="start" gapSp={4}>
              {pros.map((item, idx) => (
                <Space key={`${idx}`} size={12} className={styles['equipment-info_item']}>
                  <Icon name="check" color="green" />
                  <Text className="font-18">{item}</Text>
                </Space>
              ))}
            </Flex>
          </div>
        </Col>

        <Col md={{ span: 12 }} sm={{ span: 24 }}>
          <div className={styles['equipment-info_cons']}>
            <Heading size="sm">{t('cons')}</Heading>

            <Flex direction="column" align="start" gapSp={4}>
              {cons.map((item, idx) => (
                <Space key={`${idx}`} size={12} className={styles['equipment-info_item']}>
                  <Icon name="close" color="red" />
                  <Text className="font-18-16-16">{item}</Text>
                </Space>
              ))}
            </Flex>
          </div>
        </Col>
      </Row>
    </div>
  );
};
