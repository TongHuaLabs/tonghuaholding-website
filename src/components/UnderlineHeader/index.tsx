import classNames from 'classnames';
import React from 'react';

type UnderlineHeaderProps = {
  title: string;
  className?: string;
};

const UnderlineHeader: React.FC<UnderlineHeaderProps> = ({
  title,
  className,
}) => {
  return (
    <div className={classNames('flex flex-col space-y-2', className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <hr className="h-0.5 border-0 bg-neutral-200" />
    </div>
  );
};

export default UnderlineHeader;
