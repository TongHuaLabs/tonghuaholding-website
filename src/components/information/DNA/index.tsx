import React from 'react';
import classNames from 'classnames';

type DNAProps = {
  text: string | GatsbyTypes.Maybe<string>;
  className?: string;
};

const DNA: React.FC<DNAProps> = ({ text, className }) => {
  return (
    <div
      className={classNames(`flex flex-col items-center space-y-2`, className)}
    >
      <div className="w-3 h-3 rounded-full bg-neutral-50" />
      <span className="text-2xl font-bold text-neutral-50">{text}</span>
    </div>
  );
};

export default DNA;
