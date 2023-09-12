import { RouteConfig } from '@/constants';
import { Typography } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Heading } from '~/ui/atoms/heading/Heading';
import {
  CreditCardBanner,
  MobileCardReaderBanner,
  OnlineProcessingBanner,
} from '~/ui/img-resource/ImageResources';
import styles from '../Home.module.scss';
const { Text } = Typography;

export const SolutionList = () => {
  return (
    <div className={styles['home-template_solution-list']}>
      <BreadCard>
        <Heading level={3} centered wrapper="pc">
          Find the right processing solutions <br className="hide-sp" />
          for your business.
        </Heading>
        <div className={styles['home-template_solution-list_grid']}>
          <Link
            href={`${RouteConfig.Solution}#credit-card`}
            className={classNames(styles['home-template_solution-list_grid-item'])}
          >
            <div className={styles['home-template_solution-list_text']}>
              <Text className={styles['home-template_solution-list_item-title']}>
                Credit Card Terminal
              </Text>
              <Text type="secondary">In-person payments have never been easier.</Text>
            </div>
            <Image alt="" width={376} height={376} quality={100} src={CreditCardBanner.src} />
          </Link>

          <Link
            href={`${RouteConfig.Solution}#mobile-card`}
            className={styles['home-template_solution-list_grid-item']}
          >
            <div className={styles['home-template_solution-list_text']}>
              <Text className={styles['home-template_solution-list_item-title']}>
                Mobile Card Reader
              </Text>
              <Text>Accept Payments Anywhere</Text>
            </div>
            <Image alt="" width={376} height={376} quality={100} src={MobileCardReaderBanner.src} />
          </Link>

          <Link
            href={`${RouteConfig.Solution}#online-processing`}
            className={styles['home-template_solution-list_grid-item']}
          >
            <div className={styles['home-template_solution-list_text']}>
              <Text className={styles['home-template_solution-list_item-title']}>
                Online Processing
              </Text>
              <Text>Streamline Your Online Payments</Text>
            </div>

            <Image alt="" width={376} height={376} quality={100} src={OnlineProcessingBanner.src} />
          </Link>
        </div>
        {/* <SolutionList
          heading="Find the right processing solutions for your business."
          content={[
            {
              href: EQUIPMENTS_MENU[0].href,
              logo: <ServiceLogo1 />,
              thumbnail: ServiceImg1,
              images: [ServiceImg1, ServiceImg1, ServiceImg1],
            },
            {
              href: EQUIPMENTS_MENU[1].href,
              logo: <ServiceLogo2 />,
              thumbnail: ServiceImg2,
              images: [ServiceLogo2, ServiceLogo2, ServiceLogo2],
            },
            {
              href: EQUIPMENTS_MENU[2].href,
              logo: <ServiceLogo3 />,
              thumbnail: ServiceImg3,
              images: [ServiceImg3, ServiceImg3, ServiceImg3],
            },
            {
              href: EQUIPMENTS_MENU[11].href,
              logo: <ServiceLogo4 />,
              thumbnail: ServiceImg4,
            },
          ]}
        /> */}
      </BreadCard>
    </div>
  );
};
