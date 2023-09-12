import Link from 'next/link';
import { RouteConfig } from '~/constants/index';
import { BreadButtonProps, Button } from '../button/Button';

export const GetPricingButton = ({
  title = 'Get Pricing',
  ...props
}: BreadButtonProps & {
  title?: string;
}) => {
  return (
    <Link href={RouteConfig.GetPricing}>
      <Button type="primary" {...props}>
        {title}
      </Button>
    </Link>
  );
};
