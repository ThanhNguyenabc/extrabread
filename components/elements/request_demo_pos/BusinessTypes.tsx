import SelectedList from '@/components/ui/select-list';
import { BUSINESS_MENU } from '@/constants';
import useRequestDemoStore from '@/store/request_demo_store';
import { useTranslation } from 'next-i18next';
import React, { useCallback, useEffect } from 'react';

const BusinessTypes = () => {
  const { t } = useTranslation();

  const setBusinessType = (index: number) => {
    useRequestDemoStore.setState(state => ({
      ...state,
      businessType: t(BUSINESS_MENU[index].title),
    }));
  };

  useEffect(() => {
    setBusinessType(0);
  }, []);

  const onItemSelected = useCallback((indexes: Array<number>) => {
    const index = indexes?.[0] || 0;
    setBusinessType(index);
  }, []);

  return (
    <SelectedList
      data={BUSINESS_MENU}
      selectIndex={0}
      className={'md:grid-cols-2 lg:grid-cols-3'}
      renderItem={item => {
        const Icon = item.icon;
        return (
          <div className="flex flex-row items-center p-3 gap-3 md:gap-2 md:flex-col md:justify-center">
            <Icon className="text-4xl" />
            <p className="txt-md-bold md:text-center">{t(item.title)}</p>
          </div>
        );
      }}
      onItemSelected={onItemSelected}
    />
  );
};

export default BusinessTypes;
