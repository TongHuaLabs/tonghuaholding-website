import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

type ReadMoreButtonProps = {
  className?: string;
};

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ className }) => {
  return (
    <button className={classNames(`flex justify-center`, className)}>
      <span className="text-primary-main font-medium text-xs">
        อ่านเพิ่มเติม
      </span>
      <ChevronRightIcon className="w-4 h-4 text-primary-main" />
    </button>
  );
};

export default ReadMoreButton;
