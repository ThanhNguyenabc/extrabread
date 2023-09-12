import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TouchBistro01Img from 'public/images/equipments/TouchBistro/TouchBistro (1).jpg';
import TouchBistro02Img from 'public/images/equipments/TouchBistro/TouchBistro (2).webp';
import TouchBistro03Img from 'public/images/equipments/TouchBistro/TouchBistro (3).png';
import TouchBistro04Img from 'public/images/equipments/TouchBistro/TouchBistro (4).png';
import TouchBistro05Img from 'public/images/equipments/TouchBistro/TouchBistro (5).webp';
import TouchBistro06Img from 'public/images/equipments/TouchBistro/TouchBistro (6).png';
import Logo from 'public/images/service-logos/touch-color.png';
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
  TouchBistro01Img,
  TouchBistro02Img,
  TouchBistro03Img,
  TouchBistro04Img,
  TouchBistro05Img,
  TouchBistro06Img,
];

export const TouchBistro = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a TouchBistro <br/> System today!');
    state.suggestedBusiness.set([
      'Full Service Restaurants',
      'Quick Service Restaurant',
      'Pizzerias',
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
          heading="TouchBistro"
          logo={Logo}
          os={['android']}
          description={
            <>
              TouchBistro is a restaurant management system and all-in-one POS designed to enhance
              restaurant operations regardless of the size or type of the restaurant. The system
              provides a comprehensive range of features to increase sales, streamline operations,
              and enhance customer experience. This restaurant management system is unique in its
              focus on the hospitality industry and provides exclusive services to restaurants and
              other food and beverage establishments.
            </>
          }
          pros={[
            'User-friendly',
            'Affordable pricing',
            'Wide range of add-ons',
            '24/7 customer support',
          ]}
          cons={[
            'Not able to do transactions offline',
            'May take some time to schedule an install',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from TouchBistro',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 75,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 2_800,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using TouchBistro for your business today, with pricing options starting at ',
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
                description: `Allows staff members to enter orders straight from the side of the clients' tables, increasing service speed and reducing costly mistakes.`,
                href: '#',
              },
              {
                description:
                  'Create menus quickly, transmit orders to the kitchen, and make modifications to tickets on the fly to guarantee your customers get exactly what they ordered.',
                href: '#',
              },
              {
                description:
                  'Payment and administration possibilities are expanded through integration partners such as Chase, Worldpay, 7Shifts, Xero, and Quickbooks.',
                href: '#',
              },
              {
                description:
                  'Remotely view your sales data and personnel information, which is a wonderful way to keep your finger on the pulse of your firm. It can help you improve your business approach and increase sales.',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
