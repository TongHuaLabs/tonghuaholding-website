import React from 'react';
import { PrimaryButton } from '@/components/buttons';
import classNames from 'classnames';

type SeeAllButtonProps = {
  className?: string;
};

const SeeAllButton: React.FC<SeeAllButtonProps> = ({ className }) => {
  return (
    <PrimaryButton
      title="อ่านทั้งหมด"
      className={classNames('text-sm font-medium', className)}
    />
  );
};

export default SeeAllButton;
