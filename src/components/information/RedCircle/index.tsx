import classNames from 'classnames';
import React from 'react';

type RedCircleProps = {
  className?: string;
};

const RedCircle: React.FC<RedCircleProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        `h-60 w-60 rounded-full bg-primary-main`,
        className,
      )}
    />
  );
};

export default RedCircle;
