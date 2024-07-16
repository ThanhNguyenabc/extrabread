import { RouteConfigType } from '@/constants/routes';
import { Product } from '@/models/product.model';
import { SectionHeading } from '@/ui/atoms/heading/Heading';
import SafeHydrate from '@/ui/atoms/safe-hydrate';
import { ImageLightBox } from '@/ui/organisms/images-lightbox/ImageLightBox';
import { useHookstate } from '@hookstate/core';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { BUSINESS_MENU, EQUIPMENTS_MENU } from '~/constants/index';
import { commonState } from '~/hooks/useCtaFooterState';
import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';
import { Segmented } from '~/ui/atoms/segment/Segment';
import { AllBusinesses } from '~/ui/organisms/all-businesses/AllBusinesses';
import { CTAInnerFooter } from '~/ui/organisms/cta-inner-footer/CTAInnerFooter';
import styles from './EquipmentsTemplate.module.scss';
import { BreadBreadcrumb } from './components/breadcrumb/Breadcrumb';
import { EquipmentInfo } from './components/equipment-info/EquipmentInfo';
import { KeyFeatures } from './components/key-features/KeyFeatures';
import { Pricing } from './components/pricing/Pricing';

type EquiqmentProps = {
  data?: Product;
  children?: React.ReactNode;
};

export const EquipmentsTemplate = ({ data }: EquiqmentProps) => {
  const { push, asPath } = useRouter();
  const { t: common } = useTranslation();
  const path = asPath as RouteConfigType;
  const [activeTab, setActiveTab] = useState<RouteConfigType>('/revel');

  const state = useHookstate(commonState);
  const [activeIndex, setActiveIndex] = useState(-1);

  const {
    name = '',
    logo = '',
    pros = [],
    cons = [],
    features = [],
    longDesc = '',
    images,
    onetime_pricing = 0,
    monthly_pricing = 0,
  } = data || {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(path);

    return () => {
      state.footerText.set(undefined);
    };
  }, [asPath]);

  useEffect(() => {
    state.footerText.set(common('get_your_hand')?.replace('[name]', name));
  }, []);

  const BusinessMenu = useMemo(() => {
    return BUSINESS_MENU.map(item => ({
      ...item,
      title: common(item.title),
    }));
  }, [common]);

  return (
    <main className={styles['equipments-template']}>
      <div className={styles['equipments-template_segment']}>
        <Segmented
          activeKey={activeTab}
          onChange={value => push(value)}
          items={EQUIPMENTS_MENU.map(item => ({
            title: item.title,
            value: item.href,
          }))}
        />
      </div>
      <BreadBreadcrumb items={[{ title: common('pos_equipments') }, { title: name }]} />

      <BreadCard noPadding>
        <SafeHydrate>
          <ImageLightBox
            open={activeIndex > -1}
            images={images?.map(item => ({
              src: item,
            }))}
            onClose={() => setActiveIndex(-1)}
            startIndex={activeIndex}
          />
        </SafeHydrate>

        <div className={styles['equipments-template_lightbox']}>
          {images?.slice(0, 5).map((item, idx) => (
            <div
              key={`${idx}`}
              onClick={() => setActiveIndex(idx)}
              className={classNames(idx === 0 && styles['equipments-template_lightbox-main'])}
            >
              <Image
                quality={100}
                width={idx === 0 ? 588 : 286}
                height={idx === 0 ? 400 : 192}
                src={item}
                alt={item}
              />
            </div>
          ))}
        </div>
      </BreadCard>

      <BreadCard className={styles['equipments-template_card']}>
        <EquipmentInfo os={['apple']} logo={logo} description={longDesc} pros={pros} cons={cons} />

        <Pricing
          leftBlock={{
            heading: `${common('get_full_price_from')} ${name}`,
            items: [
              {
                title: common('monthly_price'),
                price: monthly_pricing,
                description: common('monthly_pricing_desc'),
              },
              {
                title: common('onetime_price'),
                price: onetime_pricing,
                description: common('per_station'),
              },
            ],
          }}
          rightBlock={{
            tag: common('extrabread_offer'),
            heading: common('pos_cost'),
            description: common('pricing_desc').replace('[name]', name),
            price: 0,
            href: '#',
          }}
        />
      </BreadCard>

      <BreadCard>
        <SectionHeading
          heading={common('key_features')}
          className={styles['equipments-template_features-heading']}
        />

        <div className={styles['equipments-template_features']}>
          <KeyFeatures items={features} />
        </div>
      </BreadCard>
      <BreadCard>
        <AllBusinesses
          noColor
          type="product"
          cardClassName={styles['equipments-template_cate-card']}
          heading={common('suggested_business')}
          list={BusinessMenu}
        />
      </BreadCard>

      <CTAInnerFooter htmlText={state.footerText.get()} />
    </main>
  );
};
