import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { buildTitle } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Clover01Img from 'public/images/equipments/Clover/Clover (1).jpg';
import Clover02Img from 'public/images/equipments/Clover/Clover (2).jpg';
import Clover03Img from 'public/images/equipments/Clover/Clover (3).jpg';
import Clover04Img from 'public/images/equipments/Clover/Clover (4).webp';
import Clover05Img from 'public/images/equipments/Clover/Clover (5).webp';
import Logo from 'public/images/service-logos/clover-duo-color.png';
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

const IMAGES = [Clover02Img, Clover03Img, Clover04Img, Clover05Img, Clover01Img];

export const CloverDuo = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a CloverDuo <br/> System today!');
  }, []);

  const { asPath } = useRouter();
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      <BreadBreadcrumb
        items={[
          { title: 'POS Equipments' },
          {
            title: buildTitle(asPath),
          },
        ]}
      />

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
          heading="Clover Duo"
          logo={Logo}
          os={['android']}
          description={
            <>
              With Clover Duo, you can say goodbye to the hassle of multiple devices and systems.
              This complete POS solution offers everything you need in one easy-to-use package,
              saving you time and money. Whether you&#39;re creating menus, tracking sales, or
              managing employees, Clover Station has you covered with its advanced features and
              intuitive interface. Get started today and take your business to the next level!
            </>
          }
          pros={[
            'Provides extensive features',
            'Easy-to-use backoffice ',
            'Multiple apps & add-ons',
            'Sleek hardware',
          ]}
          cons={[
            'Not geared for full service rest & pizzerias ',
            'Reports of glitches',
            'Proprietary Software',
            'Added features (apps) increases monthly fees',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from CloverDuo',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 40,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 995,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using CloverDuo for your business today, with pricing options starting at ',
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
