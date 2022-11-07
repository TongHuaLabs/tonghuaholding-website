import classNames from 'classnames';
import React from 'react';

type PrimaryButtonProps = {
  title?: string;
  className?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, className }) => {
  return (
    <button
      className={classNames(
        'bg-primary-main text-neutral-50 font-bold px-4 py-1.5 rounded-lg delay-100 hover:bg-brand-red',
        className,
      )}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
