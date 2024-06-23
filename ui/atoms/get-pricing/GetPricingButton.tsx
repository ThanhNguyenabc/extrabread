import { QuestionnaireProps } from '@/components/elements/questionnaire/Questionnaire.type';
import { RouteConfig } from '@/constants/routes';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { BreadButtonProps, Button } from '../button/Button';
import Questionnaire from '@/components/elements/questionnaire/Questionnaire'
export const GetPricingButton = ({
  title,
  ...props
}: BreadButtonProps & {
  title?: string;
}) => {
  const ref = useRef<QuestionnaireProps>(null);
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const txtButton = title || t('get_pricing');

  if (pathname == '/hp2') {
    return (
      <>
        <Button type="primary" {...props} onClick={() => ref.current?.showDialog()}>
          {txtButton}
        </Button>
        <Questionnaire ref={ref} />
      </>
    );
  }

  return (
    <Link href={RouteConfig.GetPricing}>
      <Button type="primary" {...props}>
        {txtButton}
      </Button>
    </Link>
  );
};
