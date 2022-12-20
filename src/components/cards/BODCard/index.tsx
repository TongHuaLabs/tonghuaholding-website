import React from 'react';
import classNames from 'classnames';
// import { Link } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type BODCardProps = {
  name?: string;
  occupation?: string;
  profileImage?: IGatsbyImageData;
  href?: string;
  className?: string;
};

const BODCard: React.FC<BODCardProps> = ({
  name,
  occupation,
  profileImage,
  // href,
  className,
}) => {
  return (
    // <Link to={href || ''} className={classNames('flex flex-col', className)}>
    <div className={classNames('flex flex-col cover-lg', className)}>
      {profileImage && (
        <div className="!aspect-w-3 !aspect-h-4">
          <GatsbyImage
            alt={name || ''}
            image={profileImage}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}
      <span className="text-neutral-900 text-lg font-bold mt-5">{name}</span>
      <p className="mt-2 text-neutral-900">{occupation}</p>
    </div>

    // </Link>
  );
};

export default BODCard;
