import useQuestionnaire from '@/hooks/useQuestionnaire';
import { useTranslation } from 'next-i18next';
import { BreadButtonProps, Button } from '../button/Button';

export const GetPricingButton = ({
  title,
  ...props
}: BreadButtonProps & {
  title?: string;
}) => {
  const { t: common } = useTranslation();

  const txtButton = title || common('get_pricing');

  const { openForm } = useQuestionnaire();

  return (
    <Button type="primary" className="w-fit" {...props} onClick={props.onClick || openForm}>
      {txtButton}
    </Button>
  );
};
