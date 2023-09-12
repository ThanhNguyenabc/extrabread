import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { buildTitle } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lightspeed01Img from 'public/images/equipments/Lightspeed/Lightspeed (1).jpeg';
import Lightspeed10Img from 'public/images/equipments/Lightspeed/Lightspeed (10).webp';
import Lightspeed11Img from 'public/images/equipments/Lightspeed/Lightspeed (11).avif';
import Lightspeed02Img from 'public/images/equipments/Lightspeed/Lightspeed (2).jpg';
import Lightspeed03Img from 'public/images/equipments/Lightspeed/Lightspeed (3).jpg';
import Lightspeed04Img from 'public/images/equipments/Lightspeed/Lightspeed (4).webp';
import Lightspeed05Img from 'public/images/equipments/Lightspeed/Lightspeed (5).webp';
import Lightspeed06Img from 'public/images/equipments/Lightspeed/Lightspeed (6).jpg';
import Lightspeed07Img from 'public/images/equipments/Lightspeed/Lightspeed (7).png';
import Lightspeed08Img from 'public/images/equipments/Lightspeed/Lightspeed (8).webp';
import Lightspeed09Img from 'public/images/equipments/Lightspeed/Lightspeed (9).webp';
import Logo from 'public/images/service-logos/lightspeed-color.png';
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

const IMAGES = [
  Lightspeed01Img,
  Lightspeed02Img,
  Lightspeed03Img,
  Lightspeed04Img,
  Lightspeed05Img,
  Lightspeed06Img,
  Lightspeed07Img,
  Lightspeed08Img,
  Lightspeed09Img,
  Lightspeed10Img,
  Lightspeed11Img,
];

export const Lightspeed = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Lightspeed <br/> System today!');
    state.suggestedBusiness.set(['Retail Businesses', 'Small Business']);
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
          heading="Lightspeed"
          logo={Logo}
          os={['android']}
          description={
            <>
              Power your retail business with the flexible and user-friendly Lightspeed Retail POS,
              a cloud-based solution made for retailers of all sizes. Benefit from a wide range of
              services including customer tracking, inventory management, and sales reporting. Sell
              both online and offline with ease, thanks to the integrated eCommerce functionality.
            </>
          }
          pros={[
            'Has a 14-day free trial period',
            'Easy-to-use platform',
            'Custom built for restaurants',
            'Various software series',
          ]}
          cons={[
            'Very expensive software (monthly fees)',
            'Reports of glitches ',
            'Poor customer service',
            'No offline mode',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Lightspeed',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 90,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 2500,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Lightspeed for your business today, with pricing options starting at ',
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
                  'Inventory management helps you keep track of your stock making sure you are never low on products',
                href: '#',
              },
              {
                description:
                  'With Lightspeed Retail, you can sell your goods in-person, online, or through mobile platforms',
                href: '#',
              },
              {
                description:
                  'Offers 24/7 support so regardless of what time an issue may occurr, Lightspeed is there to help',
                href: '#',
              },
              {
                description:
                  'User-friendly - no intense training needed so you can start using it immediately',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
