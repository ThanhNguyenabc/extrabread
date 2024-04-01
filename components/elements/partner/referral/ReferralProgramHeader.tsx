import { Button } from '@/components/ui/button';
import { IcClose } from '@/ui/img-resource/ImageResources';
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
    <div className="flex flex-row gap-4 sm:gap-6">
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

      <div className="flex-1 flex flex-col text-center gap-2">
        <h4 className="text-xl-semibold md:heading-md">{t('referal_program.heading')}</h4>
        <p className="text-neutral-700 font-normal text-sm"> {t('referal_program.desc')}</p>
      </div>
    </div>
  );
};

export default ReferralProgramHeader;
