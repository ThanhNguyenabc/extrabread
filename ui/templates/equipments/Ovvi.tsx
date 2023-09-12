import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Ovvi01Img from 'public/images/equipments/Ovvi/Ovvi (1).jpeg';
import Ovvi02Img from 'public/images/equipments/Ovvi/Ovvi (2).png';
import Ovvi03Img from 'public/images/equipments/Ovvi/Ovvi (3).jpg';
import Ovvi04Img from 'public/images/equipments/Ovvi/Ovvi (4).png';
import Ovvi05Img from 'public/images/equipments/Ovvi/Ovvi (5).jpg';
import Logo from 'public/images/service-logos/ovvi-color.png';
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

const IMAGES = [Ovvi05Img, Ovvi01Img, Ovvi02Img, Ovvi03Img, Ovvi04Img];

export const Ovvi = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Ovvi <br/> System today!');
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
          heading="Ovvi"
          logo={Logo}
          os={['android']}
          description={
            <>
              Streamline your restaurant operations with Ovvi&#39;s all-in-one POS system. Collect
              orders, track inventory, and access the key information you need to make smart
              business decisions that positively impact your bottom line.
            </>
          }
          pros={[
            'Easy to use interface',
            'Compatible w/ 3rd party delivery',
            'Cloud base for back office ',
            'Good tech support, 24/7',
          ]}
          cons={[
            'Messy hardware',
            'Not seamless for restaurant business',
            'Not compatible w/ iOS',
            'Does not the have modifiers to modifiers feature ',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Ovvi',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 75,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 995,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Ovvi for your business today, with pricing options starting at ',
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
                  'Fully customizable table layout to make it easy to navigate your floor plan',
                href: '#',
              },
              {
                description: 'Check management/split payments by item, table, guest',
                href: '#',
              },
              {
                description:
                  'Has a multi-store capability that allows you to connect all of your locations seamlessly',
                href: '#',
              },
              {
                description:
                  'Cloud-based back office makes viewing and managing reports from anywhere',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
