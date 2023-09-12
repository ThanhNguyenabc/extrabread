import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Exatouch01Img from 'public/images/equipments/Exatouch/Exatouch (1).png';
import Exatouch02Img from 'public/images/equipments/Exatouch/Exatouch (2).png';
import Exatouch03Img from 'public/images/equipments/Exatouch/Exatouch (3).png';
import Exatouch04Img from 'public/images/equipments/Exatouch/Exatouch (4).jpg';
import Logo from 'public/images/service-logos/exatouch-color.png';
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

const IMAGES = [Exatouch01Img, Exatouch02Img, Exatouch03Img, Exatouch04Img];

export const Exatouch = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Exatouch <br/> System today!');
    state.suggestedBusiness.set(['Retail Businesses', 'Small Business']);
  }, []);

  const { asPath } = useRouter();
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      <BreadBreadcrumb
        items={[{ title: 'POS Equipments' }, { title: getHash(asPath as any).substr(1) }]}
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
          heading="Exatouch"
          logo={Logo}
          os={['android']}
          description={
            <>
              Experience effortless business management with Exatouch! Designed to simplify your
              operations, enhance customer experience and drive growth, this versatile POS system is
              perfect for restaurants, retail stores, and service businesses of all sizes. With its
              quick, reliable and affordable solution, Exatouch will help you save time and money
              while delivering outstanding results. Make the smart choice for your business today!
            </>
          }
          pros={[
            'Good for retail & liquor stores',
            'Local representative ',
            'User-friendly register',
            '24/7 Phone Support',
          ]}
          cons={[
            'Has limited features for resturants & quick-servcie ',
            'Proprietary card payments',
            'Dull looking ',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Exatouch',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 40,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 895,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Exatouch for your business today, with pricing options starting at ',
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
                description: 'Fast checkout with a user-friendly register',
                href: '#',
              },
              {
                description: 'Support for dual-pricing methodology',
                href: '#',
              },
              {
                description: 'EMV & contactless transactions',
                href: '#',
              },
              {
                description: 'Employee, customer, menu/inventory management',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
