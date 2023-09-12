import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { buildTitle } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Clover02Img from 'public/images/equipments/Clover Flex/Clover Flex (1).jpg';
import Clover03Img from 'public/images/equipments/Clover Flex/Clover Flex (2).jpg';
import Clover04Img from 'public/images/equipments/Clover Flex/Clover Flex (3).png';
import Clover05Img from 'public/images/equipments/Clover Flex/Clover Flex (4).webp';
import Clover06Img from 'public/images/equipments/Clover Flex/Clover Flex (5).png';
import Clover01Img from 'public/images/equipments/Clover Flex/Clover Flex (6).webp';
import CloverLogo from 'public/images/service-logos/clover-color.png';
import { useEffect, useState } from 'react';
import { commonState } from '~/hooks/useCtaFooterState';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import SafeHydrate from '~/ui/atoms/safe-hydrate';
import { ImageLightBox } from '~/ui/organisms/images-lightbox/ImageLightBox';
import styles from './EquipmentsTemplate.module.scss';
import { BreadBreadcrumb } from './components/breadcrumb/Breadcrumb';
import { EquipmentInfo } from './components/equipment-info/EquipmentInfo';
import { KeyFeatures } from './components/key-features/KeyFeatures';
import { Pricing } from './components/pricing/Pricing';

const IMAGES = [Clover03Img, Clover02Img, Clover04Img, Clover05Img, Clover01Img, Clover06Img];

export const CloverFlex = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Free Clover Flex <br/> System today!');
  }, []);

  const { asPath } = useRouter();
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      <BreadBreadcrumb items={[{ title: 'POS Equipments' }, { title: buildTitle(asPath) }]} />

      <BreadCard noPadding>
        <SafeHydrate>
          <ImageLightBox
            open={activeIndex > -1}
            images={IMAGES}
            onClose={() => setActiveIndex(-1)}
            startIndex={activeIndex}
          />
        </SafeHydrate>

        <div className={styles['equipments-template_lightbox']}>
          {IMAGES.slice(0, 5).map((item, idx) => (
            <div
              key={`${idx}`}
              onClick={() => setActiveIndex(idx)}
              className={classNames(idx === 0 && styles['equipments-template_lightbox-main'])}
            >
              <Image
                quality={100}
                width={idx === 0 ? 588 : 286}
                height={idx === 0 ? 400 : 192}
                src={item.src}
                alt={item.src}
              />
            </div>
          ))}
        </div>
      </BreadCard>

      <BreadCard className={styles['equipments-template_card']}>
        <EquipmentInfo
          heading="Clover Flex"
          logo={CloverLogo}
          os={['android']}
          description={`Clover Flex is a top choice for restaurants and small business owners, providing a comprehensive all-in-one POS solution with software, hardware, and payment processing included. The company offers plug-and-play hardware stations for ease of use. Choose from a range of durable touch screen options to suit your business needs. Enhance your system with a variety of external apps, allowing you to create menus, customize the interface, view reports, manage employees, and more. Get everything you need with Clover Station.
          `}
          pros={[
            'Easy-to-use backoffice ',
            'Multiple apps & add-ons',
            'Sleek hardware',
            'Affordable monthly prices',
          ]}
          cons={[
            'Customer support complaints',
            'Proprietary Software',
            'Added features increases price',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Clover Flex',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 75,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 1295,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Clover Flex for your business today, with pricing options starting at ',
            price: 0,
            href: RouteConfig.GetPricing,
          }}
        />
      </BreadCard>

      <BreadCard>
        <SectionHeading
          heading="Key Features"
          className={styles['equipments-template_features-heading']}
        />
        <div className={styles['equipments-template_features']}>
          <KeyFeatures
            items={[
              {
                description:
                  'Allows for contactless delivery - online ordering and payments online',
                href: '#',
              },
              {
                description:
                  'Reporting data and sales are easily accessible from remote location - no need to physically be in the restaurant to view sales/data',
                href: '#',
              },
              {
                description:
                  'Provides customers the option to build and split tabs with easy payment options',
                href: '#',
              },
              {
                description: 'Easy to build comprehensive menus and navigate platform',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
