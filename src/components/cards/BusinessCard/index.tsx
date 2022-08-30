import { ReadMoreButton } from '@/components/buttons';
import classNames from 'classnames';
import { Link, withPrefix } from 'gatsby';
import React from 'react';

type BusinessCardProps = {
  image?: string;
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
        `p-6 flex bg-white flex-col items-center rounded-2xl text-center`,
        className,
      )}
    >
      <img src={withPrefix(image || '')} className="w-36 h-36" />
      <span className="text-sm block font-medium mt-4">{title}</span>
      <span className="text-xs block line-clamp-2 whitespace-pre-line mt-3">
        {description}
      </span>
      <ReadMoreButton className="mt-4" />
    </Link>
  );
};

export default BusinessCard;
