import { QuestionnaireProps } from '@/components/elements/questionnaire/Questionnaire.type';
import QuestionnaireForm from '@/components/elements/questionnaireV2/QuestionnaireForm';
import BDrawer from '@/components/ui/drawer';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { BreadButtonProps, Button } from '../button/Button';

export const GetPricingButton = ({
  title,
  ...props
}: BreadButtonProps & {
  title?: string;
}) => {
  const ref = useRef<QuestionnaireProps>(null);
  const { t: common } = useTranslation();

  const [showForm, setShowForm] = useState(false);
  const txtButton = title || common('get_pricing');

  const setShowSuggestForm = () => setShowForm(!showForm);
  return (
    <>
      <Button
        type="primary"
        className='w-fit'
        {...props}
        onClick={setShowSuggestForm}
      >
        {txtButton}
      </Button>
      <BDrawer open={showForm} onClose={setShowSuggestForm}>
        <QuestionnaireForm />
      </BDrawer>
    </>
  );
};
