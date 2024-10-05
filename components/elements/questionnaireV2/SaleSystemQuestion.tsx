import SelectedList from '@/components/ui/select-list';
import { YesNoQuestion } from '@/constants';
import useQuestionnaireStore, { updateQuestionnaireAns } from '@/hooks/questionnaire_store';
import { useTranslation } from 'next-i18next';
import React from 'react';

const SaleSystemQuestion = () => {
  const saleSystemIndex = useQuestionnaireStore(state => state.businessId);
  const updateData = updateQuestionnaireAns();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="txt-large-bold">Do you currently own a point of sale system?</h3>
      <SelectedList
        data={YesNoQuestion}
        selectIndex={saleSystemIndex}
        className={' md:grid-cols-2'}
        renderItem={(item, index: number) => {
          return (
            <div className="p-4">
              <p className="text-center txt-md-bold">{t(item)}</p>
            </div>
          );
        }}
        onItemSelected={indexes => {
          updateData({ saleSystemIndex: indexes[0] });
        }}
      />
    </div>
  );
};

export default SaleSystemQuestion;
