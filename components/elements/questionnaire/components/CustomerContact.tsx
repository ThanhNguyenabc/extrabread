import { submitGetPricing } from '@/apis';
import { Button } from '@/components/ui/button';
import { BUSINESS_MENU } from '@/constants';
import { GetPricingForm } from '@/ui/templates/get-pricing/GetPricingForm';
import { ConfirmModal } from '@/ui/templates/get-pricing/components/confirm-modal/ConfirmModal';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuestionnaire } from '../Questionnaire';
import { QuestionData, YesAndNo } from './QuestionSection2';

const CustomerContact = () => {
  const router = useRouter();
  const { data, setData } = useQuestionnaire();
  const [showConfirm, setShowConfirmDialog] = useState(false);
  const { t: common } = useTranslation('common');
  const { t } = useTranslation('questionnaire');

  const onFinishAll = contact => {
    // submit data
    setData({
      data: {
        ...data,
        contact,
      },
    });
    setShowConfirmDialog(true);
  };

  const sendData = async () => {
    const submittedData = {
      typeBusiness: common(BUSINESS_MENU[data.businessIndex!].title),
      lookingFor: t(QuestionData[data.customerLookingIndex!].title),
      cashBonus: YesAndNo[data.isHavingCardIndex!] == 'yes' ? true : false,
      ...data.contact,
    };
    setShowConfirmDialog(false);
    submitGetPricing(
      {
        typeBusiness: submittedData.typeBusiness,
        lookingFor: submittedData.lookingFor,
        cashBonus: submittedData.cashBonus,
        ...data.contact,
      },
      'get-pricing',
      true,
    );
    router.push(
      {
        pathname: 'get-pricing',
        query: {
          curStep: 4,
          data: JSON.stringify(submittedData),
        },
      },
      'get-pricing',
    );
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <h3 className="text-lg-semibold">{t('follow_up_contact')}</h3>
      <GetPricingForm
        btnSubmit={
          <Button type="submit" style={{ width: 200 }} className=" self-center">
            Get Result
          </Button>
        }
        onFinish={onFinishAll}
      />
      <ConfirmModal
        centered
        open={showConfirm}
        onContinue={sendData}
        onCancel={() => setShowConfirmDialog(false)}
      />
    </div>
  );
};

export default CustomerContact;
