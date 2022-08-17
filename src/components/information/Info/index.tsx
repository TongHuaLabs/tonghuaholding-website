import classNames from 'classnames';
import React from 'react';

type InfoProps = {
  icon?: React.ReactNode;
  title?: string;
  className?: string;
  textClassName?: string;
};

const Info: React.FC<InfoProps> = ({
  icon,
  title,
  className,
  textClassName,
}) => {
  return (
    <div
      className={classNames(`flex flex-col items-center space-y-4`, className)}
    >
      {icon}
      <span className={classNames(`text-lg`, textClassName)}>{title}</span>
    </div>
  );
};

export default Info;
