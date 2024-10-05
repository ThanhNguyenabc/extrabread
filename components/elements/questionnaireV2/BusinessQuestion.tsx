import useTrans from 'hooks/useTrans';
import React from 'react';

import SelectedList from '@/components/ui/select-list';
import { BUSINESS_MENU } from '@/constants';
import useQuestionnaireStore, { updateQuestionnaireAns } from '@/hooks/questionnaire_store';

const BusinessQuestion = () => {
  const businessId = useQuestionnaireStore(state => state.businessId);
  const updateData = updateQuestionnaireAns();

  const { locale } = useTrans();

  return (
    <div className="flex flex-col gap-4">
      <h3 className="txt-large-bold">What best describes your business?</h3>
      <SelectedList
        data={BUSINESS_MENU}
        selectIndex={businessId}
        className={' md:grid-cols-2 lg:grid-cols-3'}
        renderItem={item => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-row items-center p-3 gap-3 md:gap-2 md:flex-col md:justify-center"
            >
              <Icon className="text-4xl" />
              <p className="txt-md-bold md:text-center">{item.title[locale]}</p>
            </div>
          );
        }}
        onItemSelected={indexes => {
          updateData({ businessId: indexes[0] });
        }}
      />
    </div>
  );
};

export default BusinessQuestion;
