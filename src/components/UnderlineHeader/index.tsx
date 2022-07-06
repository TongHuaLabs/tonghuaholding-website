import classNames from 'classnames';
import React from 'react';

type UnderlineHeaderProps = {
  title: string;
  className?: string;
  underlineClassName?: string;
};

const UnderlineHeader: React.FC<UnderlineHeaderProps> = ({
  title,
  className,
  underlineClassName,
}) => {
  return (
    <div className={classNames('flex flex-col space-y-2', className)}>
      <h2 className="text-2xl whitespace-pre-line md:whitespace-normal font-bold">
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
