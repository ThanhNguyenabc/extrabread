import React from "react";
import IcRecommend from "assets/icons/ic_recommend.svg";
import { twMerge } from "tailwind-merge";

export interface RecommendTagProps {
  tagColor?: string;
  iconColor?: string;
  showIcon?: boolean;
  bgColor?: string;
}
const RecommendTag = ({
  tagColor,
  iconColor,
  showIcon = true,
  bgColor,
}: RecommendTagProps) => {
  return (
    <div className=" flex flex-row w-fit">
      {showIcon && (
        <div
          className={twMerge(
            "flex justify-center items-center px-3 py-[2px] rounded-l-2xl",
            tagColor
          )}
        >
          <IcRecommend
            className={twMerge("text-2xl text-neutral-900", iconColor)}
          />
        </div>
      )}

      <p
        className={twMerge(
          "flex-1 text-xs font-semibold bg-secondary px-3 rounded-r-2xl text-white py-1 md:text-sm",
          bgColor && bgColor
        )}
      >
        MOST RECOMMENDED
      </p>
    </div>
  );
};

export default RecommendTag;
