import classNames from 'classnames';
import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type OurBusinessProps = {
  title?: string;
  description?: string;
  cover?: IGatsbyImageData;
  className?: string;
};

const OurBusiness: React.FC<OurBusinessProps> = ({
  title,
  description,
  cover,
  className,
}) => {
  return (
    <div
      className={classNames(
        'relative flex flex-col md:flex-row md:items-center space-y-10 md:space-y-0',
        className,
      )}
    >
      <div className="space-y-5 pl-5 border-l-4 border-l-primary-main md:mr-10 md:w-1/2">
        <h3 className="text-3xl font-bold text-neutral-50">{title}</h3>
        <p className="text-neutral-50">{description}</p>
      </div>

      {cover && (
        <div className="relative z-10 w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9 sm:aspect-w-16 sm:aspect-h-9">
            <GatsbyImage
              alt={title || ''}
              image={cover}
              className="w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBusiness;
