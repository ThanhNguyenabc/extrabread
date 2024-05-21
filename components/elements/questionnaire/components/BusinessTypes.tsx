import SelectedList from '@/components/ui/select-list';
import { BUSINESS_MENU } from '@/constants';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useQuestionnaire as useQuestionnaireContext } from '../Questionnaire';

const BusinessTypes = () => {
  const { setData, data } = useQuestionnaireContext();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-lg-semibold">Select your business type</h3>
      <SelectedList
        data={BUSINESS_MENU}
        selectIndex={data.businessIndex}
        selectedClassName="border-blue-500"
        className={'w-full md:grid-cols-2 lg:grid-cols-3'}
        renderItem={item => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-row items-center p-3 gap-3 hover:border-blue-500 md:gap-2 md:flex-col md:justify-center"
            >
              <Icon
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="text-md-semibold md:text-center">{t(item.title)}</p>
            </div>
          );
        }}
        onItemSelected={indexes => {
          setData?.({
            data: {
              ...data,
              businessIndex: indexes[0],
            },
          });
        }}
      />
    </div>
  );
};

export default BusinessTypes;
