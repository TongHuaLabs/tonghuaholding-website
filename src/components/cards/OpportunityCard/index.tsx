import classNames from 'classnames';
import React from 'react';
import { Link } from 'gatsby';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { ReadMoreButton } from '@/components/buttons';

type OpportunityCardProps = {
  occupation?: string;
  description?: string;
  location?: string;
  contract?: string;
  href?: string;
  className?: string;
};

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  occupation,
  description,
  location,
  contract,
  href,
  className,
}) => {
  return (
    <Link to={href || ''}>
      <article
        className={classNames(
          `p-4 h-40 rounded-lg border border-neutral-200`,
          className,
        )}
      >
        <span className="text-lg font-bold">{occupation}</span>
        <p className="text-sm mt-2 text-neutral-600 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-0.5">
              <LocationMarkerIcon className="w-4 h-4 text-neutral-500" />
              <span className="text-neutral-500 text-xs">{location}</span>
            </div>
            <span className="w-px bg-neutral-200 h-4" />
            <span className="text-neutral-900 text-xs">{contract}</span>
          </div>
          <ReadMoreButton />
        </div>
      </article>
    </Link>
  );
};

export default OpportunityCard;
