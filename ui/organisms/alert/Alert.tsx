import { Badge } from '@/components/ui/badge';
import { RouteConfig } from '@/constants/routes';

import Link from 'next/link';
import { IcChevronRight, NotificationIcon } from '~/ui/img-resource/ImageResources';

export const Alert = () => {
  return (
    <div className="flex flex-row bg-neutral-900 justify-center items-center p-3 gap-3 text-neutral-200 text-sm-semibold">
      <span>
        <NotificationIcon />
      </span>
      <span>Ultimate Side Hustle - Secure residual monthly income by partnering with us!</span>

      <Link href={RouteConfig.Partner}>
        <Badge className="bg-neutral-900 text-sm border-2 border-neutral-300 font-normal rounded-lg px-3">
          Partner
          <IcChevronRight />
        </Badge>
      </Link>
    </div>
  );
};
