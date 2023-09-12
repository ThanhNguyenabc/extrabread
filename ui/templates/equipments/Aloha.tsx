import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Aloha01Img from 'public/images/equipments/Aloha/Aloha (1).jpg';
import Aloha02Img from 'public/images/equipments/Aloha/Aloha (2).jpg';
import Aloha03Img from 'public/images/equipments/Aloha/Aloha (3).jpg';
import Aloha04Img from 'public/images/equipments/Aloha/Aloha (4).png';
import Aloha05Img from 'public/images/equipments/Aloha/Aloha (5).webp';
import Logo from 'public/images/service-logos/aloha-color.png';
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

const IMAGES = [Aloha01Img, Aloha02Img, Aloha03Img, Aloha04Img, Aloha05Img];

export const Aloha = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Aloha <br/> System today!');
    state.suggestedBusiness.set(['Quick Service Restaurant']);
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
          heading="Aloha"
          logo={Logo}
          os={['android']}
          description={
            <>
              Transform your restaurant with NCR Aloha, a cloud-based technology platform that helps
              you increase revenue, improve management, and enhance customer satisfaction. Get all
              the essential tools, including mobile and fixed POS systems, contactless eating,
              analytics, online ordering, and third-party delivery interfaces, in one convenient
              package. Widely used and trained, NCR Aloha is the choice of hundreds of restaurants
              worldwide.
            </>
          }
          pros={[
            'Stable hardware & software',
            'Great for resturants and bars',
            'Great for large Enterpirses ',
            'Customizable menu',
          ]}
          cons={[
            'Very expensive hardware & monthly fees',
            'No in-house system for online ordering servcie',
            'Poor customer service',
            'Customizable is time consuming & expensive ',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Aloha',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 95,
                description: 'Per Month (avg. 3 stations or more)',
              },
              {
                title: 'One Time Purchase',
                price: 6500,
                description: 'Per Station',
              },
            ],
          }}
          rightBlock={{
            tag: 'ExtraBread’s Offer',
            heading: 'Save Big on POS Costs',
            description:
              'Start using Aloha for your business today, with pricing options starting at ',
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
                  'Cloud-based system that has an offline mode to ensure no transactions are lost',
                href: '#',
              },
              {
                description: 'Easy to quickly build menus and customize orders',
                href: '#',
              },
              {
                description: 'A wide range of integrations and add-ons',
                href: '#',
              },
              {
                description:
                  'Mobile POS allows you to not only have tableside ordering but quick service as well',
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
