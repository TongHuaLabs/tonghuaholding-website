import React from 'react';
import classNames from 'classnames';

type SeeAllButtonProps = {
  className?: string;
};

const SeeAllButton: React.FC<SeeAllButtonProps> = ({ className }) => {
  return (
    <button
      className={classNames(
        `bg-primary-main h-8 px-3 text-white text-sm font-medium rounded-lg`,
        className,
      )}
    >
      อ่านทั้งหมด
    </button>
  );
};

export default SeeAllButton;
