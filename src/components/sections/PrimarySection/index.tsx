import React from 'react';
import DotPattern from '@images/dot-pattern.inline.svg';
import classNames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

type PrimarySectionProps = {
  title: string;
  className?: string;
};

const PrimarySection: React.FC<PrimarySectionProps> = ({
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
      <div className="relative z-0 h-full w-full">
        <div className="absolute w-full h-full bg-primary-main/80" />
        <StaticImage
          src="../../../images/tonghua-building.svg"
          alt="Tong Hua Building"
          className="w-full h-full opacity-10"
        />
      </div>
      <div className="absolute top-0 w-full h-full">
        <div className="relative max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          <div className="flex flex-col justify-center h-full px-4 md:px-6 lg:px-16">
            <h1 className="text-4xl font-medium text-neutral-50">{title}</h1>
            <div className="h-1 bg-neutral-50 w-7 mt-4 rounded-md" />
          </div>
          <DotPattern className="absolute left-0 opacity-50 text-neutral-50" />
        </div>
      </div>
    </section>
  );
};

export default PrimarySection;
