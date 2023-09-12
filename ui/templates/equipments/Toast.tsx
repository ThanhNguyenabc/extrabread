import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Toast01Img from 'public/images/equipments/Toast/Toast (1).jpg';
import Toast02Img from 'public/images/equipments/Toast/Toast (2).png';
import Toast03Img from 'public/images/equipments/Toast/Toast (3).png';
import Toast04Img from 'public/images/equipments/Toast/Toast (4).png';
import Toast05Img from 'public/images/equipments/Toast/Toast (5).png';
import Toast06Img from 'public/images/equipments/Toast/Toast (6).webp';
import Toast07Img from 'public/images/equipments/Toast/Toast (7).jpg';
import Toast08Img from 'public/images/equipments/Toast/Toast (8).jpg';
import Logo from 'public/images/service-logos/toast-color.png';
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
  Toast01Img,
  Toast02Img,
  Toast03Img,
  Toast04Img,
  Toast05Img,
  Toast06Img,
  Toast07Img,
  Toast08Img,
];

export const Toast = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Free Toast Flex <br/> System today!');
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
          heading="Toast"
          logo={Logo}
          os={['android']}
          description={
            <>
              Toast POS - the hospitality industry&#39;s exclusive POS system, offers tools to boost
              productivity and manage every aspect of your business. Its sleek and easy-to-use
              software pairs with top-notch Android hardware for a seamless experience. Toast POS
              includes essential features like online ordering, delivery, and takeout, and its touch
              screen hardware makes taking orders quick and easy. Toast POS is built to withstand
              the challenges of the restaurant industry.
            </>
          }
          pros={[
            'Inexpensive upfront cost to hardware ',
            'Easy to use back office ',
            'Low rates for card processing payments in the beginning',
            'Has modifier to modifier feature',
          ]}
          cons={[
            'Poor tech support',
            'No on-site support or training',
            'Proprietary card processing which leads to high rates after a short period of time',
            'Monthly servcie price hikes ',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Toast',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 65,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 1_800,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Toast for your business today, with pricing options starting at ',
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
                  'Simple ordering process that makes it simple for personnel to take orders and complete transactions',
                href: '#',
              },
              {
                description:
                  'Extensive menu building platform, customize special pricing and a wide range of integrations ',
                href: '#',
              },
              {
                description:
                  'Has a data reporting system that allows you to understand your business',
                href: '#',
              },
              {
                description:
                  'Easy ordering system that aids staff to receive orders and process transactions faster',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
