import ReferralProgram from '@/components/elements/partner/referral/ReferralProgram';
import { useDevice } from '@/hooks/useDetectMobile';
import { Drawer } from 'antd';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

export type ReferalProgramType = {
  showDialog: () => void;
  closeDialog: () => void;
};

const ReferalProgramModal = forwardRef<
  ReferalProgramType,
  React.HtmlHTMLAttributes<HTMLDivElement>
>((_, ref) => {
  const [open, setOpen] = useState(false);

  const { isLaptop, isTablet } = useDevice();

  useImperativeHandle(
    ref,
    () => ({
      showDialog() {
        setOpen(true);
      },
      closeDialog: closeDialog,
    }),
    [],
  );

  const closeDialog = () => setOpen(false);

  return (
    <Drawer
      contentWrapperStyle={{
        width: (isTablet && 600) || (isLaptop && 768) || '100%',
      }}
      style={{
        zIndex: 1000,
      }}
      open={open}
      onClose={closeDialog}
      closeIcon={null}
      title={null}
    >
      <ReferralProgram
        showHeaderCloseButton={true}
        onCloseBtnClick={closeDialog}
        isOpenForm={!open}
      />
    </Drawer>
  );
});

export default ReferalProgramModal;
