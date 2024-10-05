import QuestionnaireForm from '@/components/elements/questionnaireV2/QuestionnaireForm';
import BDrawer from '@/components/ui/drawer';
import { useTranslation } from 'next-i18next';
import { BreadButtonProps, Button } from '../button/Button';
import { useState } from 'react';

export const GetPricingButton = ({
  title,
  ...props
}: BreadButtonProps & {
  title?: string;
}) => {
  const { t: common } = useTranslation();

  const [showForm, setShowForm] = useState(false);
  const txtButton = title || common('get_pricing');

  const setShowSuggestForm = () => setShowForm(!showForm);
  return (
    <>
      <Button type="primary" className="w-fit" {...props} onClick={setShowSuggestForm}>
        {txtButton}
      </Button>
      <BDrawer open={showForm} onClose={setShowSuggestForm}>
        <QuestionnaireForm onClose={setShowSuggestForm} />
      </BDrawer>
    </>
  );
};
