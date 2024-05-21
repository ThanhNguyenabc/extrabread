import SelectedList from '@/components/ui/select-list';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useQuestionnaire } from '../Questionnaire';

export const QuestionData = [
  {
    title: 'cash_signing_bonus',
  },
  {
    title: 'zero_fee',
  },
  {
    title: 'point_of_sale_systems',
  },
  {
    title: 'all_of_above',
  },
];

export const YesAndNo = ['yes', 'no'];

const QuestionSection2 = () => {
  const { t } = useTranslation('questionnaire');
  const { t: common } = useTranslation('common');
  const { setData, data } = useQuestionnaire();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-lg-semibold">What are you looking for?</h3>
      <SelectedList
        selectIndex={data.customerLookingIndex}
        data={QuestionData}
        selectedClassName="border-blue-500"
        className={' md:grid-cols-2 lg:grid-cols-4'}
        renderItem={item => {
          return (
            <div
              key={item.title}
              className="flex flex-row items-center p-3 gap-3 hover:border-blue-500 md:gap-2 md:flex-col md:justify-center"
            >
              <p className="text-md-semibold md:text-center">{t(item.title)}</p>
            </div>
          );
        }}
        onItemSelected={indexes => {
          setData?.({
            data: {
              ...data,
              customerLookingIndex: indexes[0],
            },
          });
        }}
      />
      <p className="mt-4 text-center lg:max-w-xl">{t('card_payment_fee')}</p>
      <div className="flex flex-row gap-4">
        <SelectedList
          data={YesAndNo}
          selectIndex={data.isHavingCardIndex}
          selectedClassName="bg-neutral-900 text-white"
          className={'grid-cols-2'}
          renderItem={item => {
            return (
              <div
                key={item}
                className="w-[120px] flex flex-row items-center p-3 gap-3 hover:border-none hover:text-white hover:bg-neutral-900 md:gap-2 md:flex-col md:justify-center"
              >
                <p className="text-md-semibold md:text-center">{common(item)}</p>
              </div>
            );
          }}
          onItemSelected={indexes => {
            setData?.({
              data: {
                ...data,
                isHavingCardIndex: indexes[0],
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default QuestionSection2;
