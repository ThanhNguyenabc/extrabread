import { RouteConfig } from '@/constants';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { getHash } from 'helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Upserve01Img from 'public/images/equipments/Upserve/Upserve (1).jpg';
import Upserve02Img from 'public/images/equipments/Upserve/Upserve (2).png';
import Upserve03Img from 'public/images/equipments/Upserve/Upserve (3).png';
import Upserve04Img from 'public/images/equipments/Upserve/Upserve (4).png';
import Upserve05Img from 'public/images/equipments/Upserve/Upserve (5).webp';
import Upserve06Img from 'public/images/equipments/Upserve/Upserve (6).jpg';
import Upserve07Img from 'public/images/equipments/Upserve/Upserve (7).webp';
import Logo from 'public/images/service-logos/upserve-color.png';
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
  Upserve02Img,
  Upserve01Img,
  Upserve03Img,
  Upserve04Img,
  Upserve05Img,
  Upserve06Img,
  Upserve07Img,
];

export const Upserve = () => {
  const state = useHookstate(commonState);

  useEffect(() => {
    state.footerText.set('Get your hands on on a Upserve <br/> System today!');
    state.suggestedBusiness.set(['Quick Service Restaurant', 'Small Business']);
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
          heading="Upserve"
          logo={Logo}
          os={['android']}
          description={
            <>
              Upserve POS is the solution to streamline your restaurant operations. The touch screen
              app, available on iOS and Android, offers easy menu creation, a wide range of
              integrations, seamless features, and powerful restaurant management tools. Choose from
              premium hardware options for the ultimate experience. Upserve POS has everything you
              need to revolutionize your restaurant.
            </>
          }
          pros={[
            'Great for small resturants',
            'Sleek hardware',
            'Bunch of add-ons & integrations',
            'Interface is tailored for restaurant',
          ]}
          cons={[
            'Poor for retail',
            'Poor tech support',
            'Expenavie Hardware ',
            'Reports of glicthes',
          ]}
        />

        <Pricing
          leftBlock={{
            heading: 'Get the full price from Upserve',
            items: [
              {
                title: 'Service Monthly Plan',
                price: 75,
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
              'Start using Upserve for your business today, with pricing options starting at ',
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
                  'Simple menu builder and customizer; you can even contact Upserve employees for free assistance in setting up your menu and user interface',
                href: '#',
              },
              {
                description:
                  'You can access reporting data through an app (Upserve Live) to check your reporting data from anywhere, which makes managing your business even easier',
                href: '#',
              },
              {
                description: `Your point-of-sale platform's management control center, Upserve HQ, allows you to simply customize, adjust, and arrange various administration and menu elements`,
                href: '#',
              },
              {
                description: `You may send orders or receipts to any of your venue's printers thanks to customizable printing`,
                href: '#',
              },
            ]}
          />
        </div>
      </BreadCard>
    </div>
  );
};
