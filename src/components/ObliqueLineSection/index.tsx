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
      className={classNames(
        `flex relative items-center px-4 md:px-6 lg:px-56 h-72`,
        className,
      )}
    >
      <div>
        <h1 className="text-4xl font-medium text-neutral-50">{title}</h1>
        <div className="h-1 bg-neutral-50 w-7 mt-4 rounded-md" />
      </div>
      <DotPattern className="absolute -left-12 opacity-50" />
    </section>
  );
};

export default ObliqueLineSection;
