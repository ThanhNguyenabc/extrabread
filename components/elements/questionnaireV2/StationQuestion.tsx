import React, { useEffect } from 'react';

import SelectedList from '@/components/ui/select-list';
import useQuestionnaireStore, { updateQuestionnaireAns } from '@/hooks/questionnaire_store';
import { useTranslation } from 'next-i18next';

export const StationData = [
  {
    content: '1',
  },
  {
    content: '2-3',
  },
  {
    content: '4+',
  },
];

const StationQuestion = () => {
  const stationIndex = useQuestionnaireStore(state => state.numberStationIndex);
  const updateData = updateQuestionnaireAns();
  const { t } = useTranslation();

  const selectItem = (indexes: Array<number>) => {
    updateData({ numberStationIndex: indexes[0] });
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="txt-large-bold">How many POS Terminals do you require?</h3>
      <SelectedList
        data={StationData}
        selectIndex={stationIndex}
        className={' md:grid-cols-2 lg:grid-cols-3'}
        renderItem={(item, index: number) => {
          return (
            <div className="p-4">
              <p className="text-center txt-md-bold">
                {item.content} {t('stations')}
              </p>
            </div>
          );
        }}
        onItemSelected={selectItem}
      />
    </div>
  );
};

export default StationQuestion;
