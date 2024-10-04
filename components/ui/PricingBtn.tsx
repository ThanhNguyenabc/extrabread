import { useTranslation } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PricingBtnProps {
  color?: string;
  logo: StaticImageData | string;
  onClick?: () => void;
  title?: string;
  className?: string;
  children?: ReactNode;
}

const PricingBtn = ({
  logo,
  children,
  title,
  color = 'secondary',
  className,
  onClick,
}: PricingBtnProps): React.ReactNode => {
  const { t } = useTranslation();

  const onClickItem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick();
  };
  return (
    <div
      className={twMerge(
        'min-w-[150px] bg-white flex flex-col items-center border-2 rounded-lg cursor-pointer',
        className,
      )}
      style={{
        borderColor: color,
      }}
      onClick={onClickItem}
    >
      <div className="flex flex-1 flex-col p-2 gap-1 items-center md:py-4">
        <div className=" flex h-10 my-auto">
          <Image
            src={logo}
            width={100}
            height={40}
            quality={90}
            alt="logo-pos"
            className=" object-cover self-center"
          />
        </div>
        <p className="flex-1 text-sm text-neutral-700 md:text-base text-center">
          {title || t('monthly')}
        </p>
        <p className="txt-md-bold md:text-xl">{children}</p>
      </div>

      <button
        className={`flex w-full items-center justify-center h-12 md:h-16 rounded-b-md
        md:text-base lg:text-base font-semibold text-white ${color}`}
        style={{
          backgroundColor: color,
        }}
      >
        <p> {t('get_started')}</p>
      </button>
    </div>
  );
};

export default PricingBtn;
