import { ReadMoreButton } from '@/components/buttons';
import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type BusinessCardProps = {
  image?: IGatsbyImageData;
  title?: string;
  description?: string;
  to?: string;
  className?: string;
};
const BusinessCard: React.FC<BusinessCardProps> = ({
  image,
  title,
  description,
  to,
  className,
}) => {
  return (
    <Link
      to={to || '/'}
      className={classNames(
        `py-9 px-3 flex bg-white flex-col items-center justify-between rounded-2xl text-center`,
        className,
      )}
    >
      <div className="flex flex-col items-center">
        {image && (
          <GatsbyImage alt={title || ''} image={image} className="w-36 h-36" />
        )}
        <span className="text-sm block font-medium mt-3">{title}</span>
        <span className="text-xs block line-clamp-2 whitespace-pre-line mt-2">
          {description}
        </span>
      </div>
      <ReadMoreButton />
    </Link>
  );
};

export default BusinessCard;
