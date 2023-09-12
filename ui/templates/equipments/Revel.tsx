import { getHash } from 'helpers';
import { useRouter } from 'next/router';
import RevelLogo from 'public/images/service-logos/revel-color.png';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { ImageLightBox } from '~/ui/organisms/images-lightbox/ImageLightBox';
import { BreadBreadcrumb } from './components/breadcrumb/Breadcrumb';
import { EquipmentInfo } from './components/equipment-info/EquipmentInfo';
import { Pricing } from './components/pricing/Pricing';

import Revel01Img from 'public/images/equipments/Revel/Revel (1).jpeg';
import Revel02Img from 'public/images/equipments/Revel/Revel (2).png';
import Revel03Img from 'public/images/equipments/Revel/Revel (3).jpg';
import Revel04Img from 'public/images/equipments/Revel/Revel (4).png';
import Revel05Img from 'public/images/equipments/Revel/Revel (5).jpg';

import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { commonState } from '~/hooks/useCtaFooterState';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import SafeHydrate from '~/ui/atoms/safe-hydrate';
import styles from './EquipmentsTemplate.module.scss';
import { KeyFeatures } from './components/key-features/KeyFeatures';

const IMAGES = [Revel01Img, Revel02Img, Revel03Img, Revel04Img, Revel05Img];

export const Revel = () => {
  const { asPath } = useRouter();
  const state = useHookstate(commonState);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Free Revel POS <br/> System today!');
  }, []);

  return (
    <div>
      <BreadBreadcrumb
        items={[{ title: 'POS Equipments' }, { title: getHash(asPath).substr(1) }]}
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
          os={['apple']}
          logo={RevelLogo}
          description="Revel Systems offers a dynamic set of features for your business, including gift cards, loyalty programs, bill splitting, accessible menu creation, discounts, and more. View and manage reports and inventory from anywhere, making multi-location management a breeze. Run the software exclusively on iPads for ultimate mobility and flexibility. Upgrade your business operations with Revel Systems."
          pros={[
            'Customizable cloud system',
            'Amazing local on-site support',
            'Great back office management',
            'Seamless offline mode',
          ]}
          cons={[
            `Doesn't work with Android`,
            'Potential glitches with weak internet',
            'No modifiers to modifiers feature',
            'Pricey for low-volume merchants',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Revel',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 75,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 1500,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Revel for your business today, with pricing options starting at ',
            price: 0,
            href: '#',
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
                  'Create menus that are simple to navigate for you and your staff, with a spreadsheet upload function and a variety of other useful building tools',
                href: '#',
              },
              {
                description:
                  'Manage your restaurant from remote locations using our software - manage multiple restaurants or sites',
                href: '#',
              },
              {
                description: `View detailed reporting data and information - an easy way to stay on top of your business's performance so there is no need for you to physically go to your restaurant`,
                href: '#',
              },
              {
                description:
                  'Convenient system for staff and customers to split bills, manage tabs, create discounts, offer promotions, and more',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
