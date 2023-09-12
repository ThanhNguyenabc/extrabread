import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Rpower01Img from 'public/images/equipments/Rpower/Rpower (1).png';
import Rpower02Img from 'public/images/equipments/Rpower/Rpower (2).png';
import Logo from 'public/images/service-logos/rpower-color.png';
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

const IMAGES = [Rpower01Img, Rpower02Img];

export const RPower = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a RPower <br/> System today!');
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
          heading="RPower"
          logo={Logo}
          os={['android']}
          description={
            <>
              RPOWER is a versatile and trustworthy point-of-sale software that caters to various
              business types. It doesn&#39;t matter if you manage a high-end eatery, a club, a
              cafeteria, offer delivery, or have a pick-up service, RPOWER is tailored to suit your
              specific requirements. Its advanced software offers incomparable adaptability,
              reliability, and swiftness, guaranteeing that your business runs effortlessly and
              effectively all the time.
            </>
          }
          pros={[
            'Contactless Payments',
            'Wide range of integrations',
            'Fully integrated EMV payments',
            'Online Ordering',
          ]}
          cons={['Third party pricing integrations', 'Antiquated hardware']}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from RPower',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 65,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 2_900,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using RPower for your business today, with pricing options starting at',
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
