import classNames from 'classnames';
import React from 'react';

type OutlineButtonProps = {
  title?: string;
  onClick?: () => void;
  className?: string;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'border border-neutral-50 py-1.5 rounded-lg text-neutral-50 px-4 hover:bg-white hover:text-neutral-600 w-max',
        className,
      )}
    >
      {title}
    </button>
  );
};

export default OutlineButton;
