import React from 'react';
import DNASvg from '@/icons/dna.inline.svg';
import classNames from 'classnames';

type DNAProps = {
  text: string | GatsbyTypes.Maybe<string>;
  className?: string;
};

const DNA: React.FC<DNAProps> = ({ text, className }) => {
  return (
    <div className={classNames(`flex flex-col items-center`, className)}>
      <div className="w-14 h-14 flex rounded-full items-center justify-center bg-neutral-50">
        <DNASvg className="w-6 h-6" />
      </div>
      <span className="text-lg font-bold text-neutral-50 mt-3">{text}</span>
    </div>
  );
};

export default DNA;
