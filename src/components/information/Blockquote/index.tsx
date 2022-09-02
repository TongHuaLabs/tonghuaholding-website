import classNames from 'classnames';
import React from 'react';

type BlockqouteProps = {
  title?: string;
  description?: string;
  className?: string;
};

const Blockqoute: React.FC<BlockqouteProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={classNames('border-l-8 border-neutral-300', className)}>
      <span className="block text-lg text-primary-main font-bold">{title}</span>
      <span className="block text-neutral-900 font-bold">{description}</span>
    </div>
  );
};

export default Blockqoute;
