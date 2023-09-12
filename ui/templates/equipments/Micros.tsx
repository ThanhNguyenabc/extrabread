import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { buildTitle } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Simphony07Img from 'public/images/equipments/Simphony/Simphony (1).jpg';
import Simphony08Img from 'public/images/equipments/Simphony/Simphony (2).jpg';
import Simphony01Img from 'public/images/equipments/Simphony/Simphony (3).jpg';
import Simphony02Img from 'public/images/equipments/Simphony/Simphony (4).jpg';
import Simphony03Img from 'public/images/equipments/Simphony/Simphony (5).png';
import Simphony04Img from 'public/images/equipments/Simphony/Simphony (6).webp';
import Simphony05Img from 'public/images/equipments/Simphony/Simphony (7).png';
import Simphony06Img from 'public/images/equipments/Simphony/Simphony (8).avif';
import Logo from 'public/images/service-logos/micros-color.png';
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
  Simphony01Img,
  Simphony02Img,
  Simphony03Img,
  Simphony04Img,
  Simphony05Img,
  Simphony06Img,
  Simphony07Img,
  Simphony08Img,
];

export const Micros = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Micros <br/> System today!');
    state.suggestedBusiness.set([
      'Full Service Restaurants',
      'Quick Service Restaurant',
      'Small Business',
    ]);
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
          heading="Micros"
          logo={Logo}
          os={['android']}
          description={
            <>
              Streamline your restaurant operations with MICROS POS, trusted by over 300,000
              establishments worldwide! Their latest offering, Oracle MICROS Simphony, is an
              innovative POS solution with open API program and proprietary hardware designed
              specifically for the restaurant industry. Enjoy seamless and efficient operations with
              the intuitive touchscreen interface featuring color-coded functionality. Upgrade to
              MICROS POS today and take your restaurant to the next level!
            </>
          }
          pros={[
            'Great for full & quick-service restaurants',
            'Very customizable',
            'Cloud base point-of-sale',
            'Range of in-house options',
          ]}
          cons={[
            'Expensive hardware & monthly fees',
            'Customizable is time consuming & expensive',
            'Software & back end design is very complex',
            'Requires expensive updates',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Micros',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 55,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 7_750,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Micros for your business today, with pricing options starting at ',
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
                  'A simple, color coded user interface that makes it easy for users to explore the system',
                href: '#',
              },
              {
                description:
                  'Easy menu builder that enables you to provide clients with a variety of options to customers',
                href: '#',
              },
              {
                description:
                  'Manage multiple orders efficiently, take payments, split bills and perform a range of other basic POS tasks',
                href: '#',
              },
              {
                description:
                  'Cloud-based system that allows for online data and access from off-site locations',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
