import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type LatestNewsCardProps = {
  coverImage?: IGatsbyImageData;
  title?: string;
  description?: string;
  createdAt?: string;
  href?: string;
  className?: string;
};

const LatestNewsCard: React.FC<LatestNewsCardProps> = ({
  coverImage,
  title,
  description,
  createdAt,
  href,
  className,
}) => {
  return (
    <Link to={href || ''} className={className}>
      {coverImage && (
        <div className="relative">
          <div className="!aspect-w-16 !aspect-h-9">
            <GatsbyImage
              alt={title || ''}
              image={coverImage}
              className="object-cover w-full h-full rounded-lg relative"
            />
            <div className="absolute -z-10 w-full h-full rounded-lg bg-primary-main !left-1.5 !top-1.5" />
          </div>
        </div>
      )}
      <p className="mt-5 text-sm text-neutral-900">{createdAt}</p>
      <h3 className="text-lg font-medium text-neutral-900 line-clamp-2 mt-2">
        {title}
      </h3>
      <span className="line-clamp-2 text-sm text-neutral-600 mt-2">
        {description}
      </span>
    </Link>
  );
};

export default LatestNewsCard;
