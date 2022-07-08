import React from 'react';
import CoreValue from '@images/core-value.svg';
import DotPattern from '@images/dot-pattern.inline.svg';
import classNames from 'classnames';

type ObliqueLineSectionProps = {
  title: string;
  className?: string;
};

const ObliqueLineSection: React.FC<ObliqueLineSectionProps> = ({
  title,
  className,
}) => {
  return (
    <section
      style={{
        background: `url(${CoreValue})`,
        backgroundSize: 'contain',
      }}
      className={classNames(`relative`, className)}
    >
      <div className="px-4 relative h-72 flex items-center md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col 2xl:ml-24">
          <h1 className="text-4xl font-medium text-neutral-50">{title}</h1>
          <div className="h-1 bg-neutral-50 w-7 mt-4 rounded-md" />
        </div>
        <DotPattern className="hidden 2xl:block absolute left-16 bottom-6 opacity-50 text-neutral-50" />
      </div>
      <DotPattern className="absolute -left-10 2xl:left-0 top-16 opacity-50 text-neutral-50 2xl:hidden" />
    </section>
  );
};

export default ObliqueLineSection;
