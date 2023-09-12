import Link from 'next/link';
import { FC, Fragment } from 'react';
import { RouteConfig } from '~/constants/index';
import { Icon } from '~/ui/atoms/icon/Icon';

import styles from './Breadcrumb.module.scss';

interface Props {
  items: {
    title: string;
    href?: string;
  }[];
}

const HomeIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.00065 13.8334H4.50065V8.83341H9.50065V13.8334H12.0007V6.33341L7.00065 2.58341L2.00065 6.33341V13.8334ZM2.00065 15.5001C1.54232 15.5001 1.1501 15.337 0.823984 15.0109C0.497318 14.6842 0.333984 14.2917 0.333984 13.8334V6.33341C0.333984 6.06953 0.393151 5.81953 0.511484 5.58342C0.629262 5.3473 0.792318 5.15286 1.00065 5.00008L6.00065 1.25008C6.15343 1.13897 6.31315 1.05564 6.47982 1.00008C6.64648 0.944526 6.8201 0.916748 7.00065 0.916748C7.18121 0.916748 7.35482 0.944526 7.52148 1.00008C7.68815 1.05564 7.84787 1.13897 8.00065 1.25008L13.0007 5.00008C13.209 5.15286 13.3723 5.3473 13.4907 5.58342C13.6084 5.81953 13.6673 6.06953 13.6673 6.33341V13.8334C13.6673 14.2917 13.5043 14.6842 13.1782 15.0109C12.8515 15.337 12.459 15.5001 12.0007 15.5001H7.83398V10.5001H6.16732V15.5001H2.00065Z"
      fill="#98A2B3"
    />
  </svg>
);

export const BreadBreadcrumb: FC<Props> = ({ items }) => {
  const _items = [
    {
      title: <HomeIcon />,
      href: RouteConfig.Home,
    },
    ...items,
  ];
  return (
    <ul className={styles['breadcrumb']}>
      {_items.map((item, idx) => (
        <Fragment key={`${idx}`}>
          <li>{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</li>

          {idx !== _items.length - 1 && (
            <li>
              <Icon name="chevron-right" color="light" />
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};
