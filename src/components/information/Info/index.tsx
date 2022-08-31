import classNames from 'classnames';
import React from 'react';

type InfoProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  textClassName?: string;
};

const Info: React.FC<InfoProps> = ({
  icon,
  title,
  description,
  className,
  textClassName,
}) => {
  return (
    <div
      className={classNames(
        `flex flex-col items-center text-center`,
        className,
      )}
    >
      {icon}
      <span
        className={classNames(
          `text-xl mt-10 font-bold text-neutral-900`,
          textClassName,
        )}
      >
        {title}
      </span>
      <p className="text-base mt-2 font-medium text-neutral-700">
        {description}
      </p>
    </div>
  );
};

export default Info;
