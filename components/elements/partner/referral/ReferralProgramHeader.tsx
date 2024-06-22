import { Button } from '@/components/ui/button';
import { IcClose } from '@/ui/img-resource/ExIcon';
import { useTranslation } from 'next-i18next';
import React from 'react';

const ReferralProgramHeader = ({
  onClose,
  showCloseBtn,
}: {
  showCloseBtn: boolean;
  onClose?: () => void;
}) => {
  const { t } = useTranslation('common');
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex flex-row items-center gap-6">
        {showCloseBtn && (
          <Button
            variant={'outline'}
            size={'default'}
            className="w-12 h-12 p-3  rounded-3xl"
            onClick={onClose}
          >
            <IcClose />
          </Button>
        )}
        <h4 className="flex-1 md:text-center text-xl-semibold md:heading-md">
          {t('referal_program.heading')}
        </h4>
      </div>
      <p className="text-neutral-700 font-normal text-sm"> {t('referal_program.desc')}</p>
    </div>
  );
};

export default ReferralProgramHeader;
