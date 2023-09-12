import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { buildTitle } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Brick01Img from 'public/images/equipments/Brick/Brick-01.png';
import Logo from 'public/images/service-logos/brink-color.png';
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

const IMAGES = [Brick01Img];

export const Brinkpos = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Brinkpos <br/> System today!');
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
          heading="Brink"
          logo={Logo}
          os={['android']}
          description={
            <>
              Optimize your restaurant operations with the cost-effective and feature-rich Brink POS
              system by PAR Technology. With comprehensive capabilities such as online ordering
              support, table reservations, and gift card management, this system is designed to help
              busy restaurants run more smoothly and efficiently. Get the solution your business
              needs to succeed, with the Brink POS system.
            </>
          }
          pros={[
            'Stable hardware & software',
            'Great on-site tech support',
            'Customizable layout & features',
            'Modifier to modifier features',
          ]}
          cons={[
            'Expensive hardware if you do not use their credit card processing',
            'Requires a strong internet connection',
            'Need better integration w/ KDS',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Brinkpos',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 75,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 1595,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Brinkpos for your business today, with pricing options starting at ',
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
                  'User-friendly system with an interface that makes it easy for staff to learn and use',
                href: '#',
              },
              {
                description: 'Highly customizable so you can personalize it to fit your business',
                href: '#',
              },
              {
                description:
                  'Offers a range of features making it a versatile POS for any type of business',
                href: '#',
              },
              {
                description:
                  'Has excellent customer service with a great team and helpful representatives',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
