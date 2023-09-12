import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Union01Img from 'public/images/equipments/Union/Union (1).jpeg';
import Union02Img from 'public/images/equipments/Union/Union (2).png';
import Union03Img from 'public/images/equipments/Union/Union (3).png';
import Union04Img from 'public/images/equipments/Union/Union (4).png';
import Union05Img from 'public/images/equipments/Union/Union (5).png';
import Logo from 'public/images/service-logos/union-color.png';
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

const IMAGES = [Union02Img, Union01Img, Union03Img, Union04Img, Union05Img];

export const Union = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Union <br/> System today!');
    state.suggestedBusiness.set(['Bars & nightclubs']);
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
          heading="Union"
          logo={Logo}
          os={['android']}
          description={
            <>
              The state-of-the-art point-of-sale system is designed for bars and restaurants to
              enhance customer experience and convenience. Customers can place their orders directly
              from their table using their mobile device or a provided tablet, saving time and
              improving efficiency. The system can also integrate with other restaurant technologies
              to streamline operations and provide real-time data and analytics for informed
              decision-making.
            </>
          }
          pros={[
            'Biometrics secure card payments (most secured way)',
            'Contactless Payments',
            'Fast bar system',
            'Custom QR ordering',
            '24/7 Tech Support',
          ]}
          cons={[
            'Only available on apple devices',
            'Limited features for Table Service Restaurants',
            'Limited back office portal',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Union',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 69,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 1_500,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Union for your business today, with pricing options starting at ',
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
                  'Restaurants can benefit from our leading point-of-sale software, which provides unparalleled flexibility, dependability, and speed.',
                href: '#',
              },
              {
                description:
                  'Support services provide your management team with a dedicated and experienced group of support personnel to ensure that your establishment is always running at peak performance.',
                href: '#',
              },
              {
                description:
                  'Fully integrated EMV and NFC payments, enterprise reporting, online ordering, gift and loyalty solutions, and multi-store compatibility.',
                href: '#',
              },
              {
                description:
                  'Analytics and reporting tool provides a real-time, 360-degree view of sales and labor reports.',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
