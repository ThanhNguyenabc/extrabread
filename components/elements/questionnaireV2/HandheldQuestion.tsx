import SelectedList from '@/components/ui/select-list';
import useQuestionnaireStore, { updateQuestionnaireAns } from '@/hooks/questionnaire_store';
import { useTranslation } from 'next-i18next';
import React from 'react';

export const HandHeldData = [
  {
    title: '1',
    quantity: '1',
  },
  {
    title: '2-3',
    quantity: '2-3',
  },
  {
    title: '4+',
    quantity: '4+',
  },
];

const HandHeldQuestion = () => {
  const handHeldIndex = useQuestionnaireStore(state => state.businessId);
  const updateData = updateQuestionnaireAns();

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <h3 className="txt-large-bold">How many handheld POS terminals do you require?</h3>
      <SelectedList
        data={HandHeldData}
        selectIndex={handHeldIndex}
        className={' md:grid-cols-2 lg:grid-cols-3'}
        renderItem={item => {
          return (
            <div key={item.title} className="p-4">
              <p className="text-center txt-md-bold">
                {item.title} {t('handhelds')}
              </p>
            </div>
          );
        }}
        onItemSelected={indexes => {
          updateData({
            handHeldIndex: indexes[0],
          });
        }}
      />
    </div>
  );
};

export default HandHeldQuestion;
