import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { buildTitle } from 'helpers';
import { useRouter } from 'next/router';
import Aldelo01Img from 'public/images/equipments/Aldelo/Aldelo (1).jpg';
import Aldelo02Img from 'public/images/equipments/Aldelo/Aldelo (2).jpg';
import Aldelo03Img from 'public/images/equipments/Aldelo/Aldelo (3).jpg';
import Aldelo04Img from 'public/images/equipments/Aldelo/Aldelo (3).png';
import Aldelo05Img from 'public/images/equipments/Aldelo/Aldelo (4).jpg';
import Aldelo06Img from 'public/images/equipments/Aldelo/Aldelo (5).png';

import Image from 'next/image';
import Logo from 'public/images/service-logos/aldelo-color.png';
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

const IMAGES = [Aldelo01Img, Aldelo02Img, Aldelo03Img, Aldelo04Img, Aldelo05Img, Aldelo06Img];

export const AldeloExpress = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a AldeloExpress <br/> System today!');
    state.suggestedBusiness.set(['Full Service Restaurants', 'Quick Service Restaurant']);
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
          heading="Aldelo"
          logo={Logo}
          os={['android']}
          description={
            <>
              Elevate your bar or restaurant with the customizable Aldelo POS system. With thousands
              of installs for its original Aldelo for Restaurants app, Aldelo has built a strong
              reputation in the competitive app market. Upgrade to the cloud-based Aldelo Express
              for even greater efficiency.
            </>
          }
          pros={[
            'User-friendly system',
            'Easy-to-use delivery features',
            'On-site support',
            'Customizable and personalized menus',
          ]}
          cons={[
            'Poor tech support',
            'Expensive monthly fees',
            'Lack of updates for Windows version systems',
            'Extra cost to online and delivery service',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from AldeloExpress',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 20,
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
              'Start using AldeloExpress for your business today, with pricing options starting at ',
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
                  'Cloud-based system that aids in storing data in case of hardware issues',
                href: '#',
              },
              {
                description: 'Easily access sales data and other information from remote locations',
                href: '#',
              },
              {
                description: 'Integrate a variety of modifiers to customize orders',
                href: '#',
              },
              {
                description: 'Build menus personalized for you and your staff',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
