import React from 'react';
import DotPattern from '@/images/dot-pattern.inline.svg';
import CoreValue from '@images/core-value.svg';

type BrandingSectionProps = {
  title: string;
  description: string;
  image: string;
};

const BrandingSection: React.FC<BrandingSectionProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <section
      className="relative py-10"
      style={{
        background: `url(${CoreValue})`,
        backgroundSize: 'contain',
      }}
    >
      <div className="flex relative z-20 flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-50">
          {title}
        </h1>
        <h2 className="text-xl mt-2 font-medium text-neutral-50">
          {description}
        </h2>
        <div className="relative mt-8 md:mt-10">
          <img src={image} className="w-40 h-40 relative z-20" />
          <DotPattern className="text-primary-main z-10 absolute top-8 left-9 opacity-50" />
        </div>
      </div>
      <div className="h-28 z-10 w-full bg-white absolute bottom-0" />
    </section>
  );
};

export default BrandingSection;
