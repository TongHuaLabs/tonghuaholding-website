import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';

type CustomNavigationProps = {
  onPrevClick: (ele: HTMLDivElement | null) => void;
  onNextClick: (ele: HTMLDivElement | null) => void;
};

const CustomNavigation: React.FC<CustomNavigationProps> = ({
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
      <div
        className="p-0.5 cursor-pointer rounded-full bg-primary-main"
        ref={(node) => onPrevClick(node)}
      >
        <ChevronLeftIcon className="w-8 h-8 text-white" />
      </div>
      <div
        className="p-0.5 cursor-pointer rounded-full bg-primary-main"
        ref={(node) => onNextClick(node)}
      >
        <ChevronRightIcon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default CustomNavigation;
