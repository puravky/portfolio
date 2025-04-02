import React from "react";
import clsx from "clsx";

type SkeletonProps = {
  className?: string;
};

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "bg-gray-200 dark:bg-[#18181b] rounded-lg shimmer mb-9 mt-9",
        className
      )}
    />
  );
};
