import classNames from 'classnames';
import React from 'react';

type UnderlineHeaderProps = {
  title: string;
  className?: string;
  underlineClassName?: string;
  textClassName?: string;
};

const UnderlineHeader: React.FC<UnderlineHeaderProps> = ({
  title,
  className,
  underlineClassName,
  textClassName,
}) => {
  return (
    <div className={classNames('flex flex-col space-y-2', className)}>
      <h2
        className={classNames(
          `text-2xl whitespace-pre-line md:whitespace-normal font-bold`,
          textClassName,
        )}
      >
        {title}
      </h2>
      <hr
        className={classNames(
          `h-0.5 border-0 bg-neutral-200`,
          underlineClassName,
        )}
      />
    </div>
  );
};

export default UnderlineHeader;
