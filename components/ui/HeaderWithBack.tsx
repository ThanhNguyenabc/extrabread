import { IcClose } from '@/ui/img-resource/ExIcon';
import React from 'react';

interface HeaderWithBackProps {
  onClose?: () => void;
  title: string;
  subTitle?: React.ReactElement;
}
const HeaderWithBack = ({ onClose, title, subTitle }: HeaderWithBackProps) => {
  return (
    <div className="flex flex-col md:flex-row  p-4 sticky top-0 bg-white z-10">
      {onClose && (
        <button onClick={onClose} className="md:w-10 md:h-10">
          <IcClose />
        </button>
      )}
      <div className="flex flex-col gap-2 w-full">
        <p className="txt-large mr-3 font-bold text-center md:text-2xl">{title}</p>
        {subTitle}
      </div>
    </div>
  );
};

export default HeaderWithBack;
