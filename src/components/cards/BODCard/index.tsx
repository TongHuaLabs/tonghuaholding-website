import classNames from 'classnames';
import { Link, withPrefix } from 'gatsby';
import React from 'react';

type BODCardProps = {
  name?: string;
  occupation?: string;
  profileImage?: string;
  href?: string;
  className?: string;
};

const BODCard: React.FC<BODCardProps> = ({
  name,
  occupation,
  profileImage,
  href,
  className,
}) => {
  return (
    <Link to={href || ''} className={classNames('flex flex-col', className)}>
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={withPrefix(profileImage || '')}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <span className="text-neutral-900 text-lg font-bold mt-5">{name}</span>
      <p className="mt-2 text-neutral-900">{occupation}</p>
    </Link>
  );
};

export default BODCard;
