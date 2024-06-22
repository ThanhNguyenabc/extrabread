import { BreadCard } from '~/ui/atoms/bread-card/BreadCard';

import aldeloLogo from 'public/images/service-logos/aldelo-color.png';
import alohaLogo from 'public/images/service-logos/aloha-color.png';
import brinkLogo from 'public/images/service-logos/brink-color.png';
import cloverLogo from 'public/images/service-logos/clover-color.png';
import cloverDuoLogo from 'public/images/service-logos/clover-duo-color.png';
import exatouchLogo from 'public/images/service-logos/exatouch-color.png';
import lightspeedLogo from 'public/images/service-logos/lightspeed-color.png';
import microsLogo from 'public/images/service-logos/micros-color.png';
import ovviLogo from 'public/images/service-logos/ovvi-color.png';
import revelLogo from 'public/images/service-logos/revel-color.png';
import rpowerLogo from 'public/images/service-logos/rpower-color.png';
import toastLogo from 'public/images/service-logos/toast-color.png';
import touchLogo from 'public/images/service-logos/touch-color.png';
import unionLogo from 'public/images/service-logos/union-color.png';
import upserveLogo from 'public/images/service-logos/upserve-color.png';
import { RouteConfig } from '@/constants/routes';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '~/ui/atoms/heading/Heading';
import styles from './WorkWithTheBest.module.scss';

const DATA = [
  {
    href: RouteConfig.Exatouch,
    img: exatouchLogo,
    alt: 'exatouchLogo',
  },
  {
    href: RouteConfig.Toast,
    img: toastLogo,
    alt: 'toastLogo',
  },
  {
    href: RouteConfig.Ovvi,
    img: ovviLogo,
    alt: 'ovviLogo',
  },
  {
    href: RouteConfig.Simphony,
    img: microsLogo,
    alt: 'microsLogo',
  },

  {
    href: RouteConfig.Aldelo,
    img: aldeloLogo,
    alt: 'aldeloLogo',
  },
  {
    href: RouteConfig.Lightspeed,
    img: lightspeedLogo,
    alt: 'lightspeedLogo',
  },
  {
    href: RouteConfig.CloverFlex,
    img: cloverLogo,
    alt: 'cloverLogo',
  },
  {
    href: RouteConfig.CloverDuo,
    img: cloverDuoLogo,
    alt: 'Clover Duo',
  },
  {
    href: RouteConfig.Brink,
    img: brinkLogo,
    alt: 'brinkLogo',
  },
  {
    href: RouteConfig.Revel,
    img: revelLogo,
    alt: 'revelLogo',
  },
  {
    href: RouteConfig.Upserve,
    img: upserveLogo,
    alt: 'upserveLogo',
  },
  {
    href: RouteConfig.Touchbistro,
    img: touchLogo,
    alt: 'touchLogo',
  },
  {
    href: RouteConfig.Aloha,
    img: alohaLogo,
    alt: 'alohaLogo',
  },
  {
    href: RouteConfig.Rpower,
    img: rpowerLogo,
    alt: 'rpowerLogo',
  },
  {
    href: RouteConfig.Union,
    img: unionLogo,
    alt: 'unionLogo',
  },
];

export const WorkWithTheBest = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['work-with-best']}>
      <BreadCard>
        <SectionHeading centered noAlignLeft heading={t('work_with_thebest')} />
        <div className={styles['work-with-best_logos']}>
          {DATA.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <Image quality={100} src={item.img} width={160} alt={item.alt} />
            </Link>
          ))}
        </div>
      </BreadCard>
    </div>
  );
};
