import { useDevice } from '@/hooks/useDetectMobile';
import { IcClose } from '@/ui/img-resource/ImageResources';
import { Drawer, DrawerProps } from 'antd';
import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import BusinessTypes from './components/BusinessTypes';
import CustomerContact from './components/CustomerContact';
import QuestionSection2 from './components/QuestionSection2';

type QuestionnaireData = {
  data: {
    businessIndex?: number;
    customerLookingIndex?: number;
    isHavingCardIndex?: number;
    contact?: any;
  };
  showAdditionalInfo: boolean;
  setData: (value) => void;
};

const initialValue: QuestionnaireData = {
  data: {
    businessIndex: 0,
    customerLookingIndex: 0,
    isHavingCardIndex: 0,
    contact: {},
  },
  showAdditionalInfo: false,

  setData: () => {},
};

const QuestionnaireProvider = React.createContext<QuestionnaireData>(initialValue);
export const useQuestionnaire = () => useContext(QuestionnaireProvider);

export type QuestionnaireProps = {
  showDialog: () => void;
  closeDialog: () => void;
} & DrawerProps;

const Questionnaire = forwardRef<QuestionnaireProps>((props, ref) => {
  const [open, setShow] = useState(false);
  const { isLaptop, isTablet } = useDevice();
  const [data, setData] = useState<QuestionnaireData>(initialValue);

  useImperativeHandle(ref, () => ({ showDialog: showDialog, closeDialog: onClose }));

  const showDialog = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <Drawer
        contentWrapperStyle={{
          width: (isTablet && 600) || (isLaptop && 768) || '100%',
        }}
        style={{
          zIndex: 1000,
        }}
        open={open && !data.showAdditionalInfo}
        onClose={onClose}
        closeIcon={null}
        destroyOnClose
        title={null}
        {...props}
      >
        <QuestionnaireProvider.Provider value={{ ...data, setData }}>
          <div className="flex flex-col gap-3 md:gap-8 lg:gap-10">
            <div className="flex flex-row bg-green-100 gap-1 px-4 py-2 rounded-2xl font-normal">
              We need a bit of information to get you started. To ensure we provide accurate payment
              processing & point of sale solutions plus an estimated cash signing bonus for your
              business, please fill out the following info.
              <button className="h-fit" onClick={onClose}>
                <IcClose />
              </button>
            </div>

            <BusinessTypes />
            <QuestionSection2 />
            <CustomerContact />
          </div>
        </QuestionnaireProvider.Provider>
      </Drawer>
    </>
  );
});

export default Questionnaire;
