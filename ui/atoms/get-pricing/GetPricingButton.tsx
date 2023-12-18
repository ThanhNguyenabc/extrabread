import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { RouteConfig } from '~/constants/index';
import { BreadButtonProps, Button } from '../button/Button';

export const GetPricingButton = ({
  title,
  ...props
}: BreadButtonProps & {
  title?: string;
}) => {
  const { t } = useTranslation();
  const txtButton = title || t('get_pricing');
  return (
    <Link href={RouteConfig.GetPricing}>
      <Button type="primary" {...props}>
        {txtButton}
      </Button>
    </Link>
  );
};
