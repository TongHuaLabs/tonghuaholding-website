import React from 'react';
import DotPattern from '@/images/dot-pattern.inline.svg';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type BrandingSectionProps = {
  title?: string;
  description?: string;
  image?: IGatsbyImageData;
};

const BrandingSection: React.FC<BrandingSectionProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <section className="relative py-10 bg-primary-main">
      <div className="flex relative space-y-8 md:space-y-10 z-20 px-4 flex-col items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-50">
            {title}
          </h1>
          <h2 className="text-lg mt-3 font-medium text-neutral-50 whitespace-pre-line md:whitespace-normal">
            {description}
          </h2>
        </div>
        {image && (
          <div className="relative cover-lg">
            <GatsbyImage
              alt={title || ''}
              image={image}
              className="w-44 h-44 md:w-52 md:h-52 relative z-20 shadow rounded-lg"
            />
            <DotPattern className="text-primary-main z-10 absolute top-12 left-12 md:top-20 md:left-20 opacity-50" />
          </div>
        )}
      </div>
      <div className="h-28 z-10 w-full bg-white absolute bottom-0" />
    </section>
  );
};

export default BrandingSection;
