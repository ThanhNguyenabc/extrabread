import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RouteConfig } from '@/constants';
import Link from 'next/link';
import { IcChevronRight, NotificationIcon } from '~/ui/img-resource/ImageResources';
import styles from './Alert.module.scss';

export const Alert = () => {
  return (
    <div className={styles.alert}>
      <NotificationIcon />
      <span>Ultimate Side Hustle - Secure residual monthly income by partnering with us!</span>

      <Link href={RouteConfig.Partner}>
        <Badge className="bg-neutral-900  text-sm border-2 border-neutral-300 font-normal rounded-lg px-3">
          Partner
          <IcChevronRight />
        </Badge>
      </Link>
    </div>
  );
};
