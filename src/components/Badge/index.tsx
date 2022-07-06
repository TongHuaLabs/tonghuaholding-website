import classNames from 'classnames';
import React from 'react';

type BadgeProps = {
  title: string;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ title, className }) => {
  return (
    <span
      className={classNames(
        `px-4 text-neutral-50 py-0.5 font-bold bg-primary-main rounded-full w-max`,
        className,
      )}
    >
      {title}
    </span>
  );
};

export default Badge;
