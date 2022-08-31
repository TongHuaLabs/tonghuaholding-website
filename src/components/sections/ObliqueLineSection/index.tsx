import React from 'react';
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
      className={classNames(
        `relative flex flex-col justify-center bg-primary-main h-72`,
        className,
      )}
    >
      <div className="px-4 md:px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="text-4xl font-medium text-neutral-50">{title}</h1>
          <div className="h-1 bg-neutral-50 w-7 mt-4 rounded-md" />
        </div>
      </div>
      <DotPattern className="absolute 2xl:hidden left-0 opacity-50 text-neutral-50" />
    </section>
  );
};

export default ObliqueLineSection;
