import classNames from 'classnames';
import React from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';
import { LocationMarkerIcon, ChevronRightIcon } from '@heroicons/react/outline';

type OpportunityCardProps = {
  occupation: string | GatsbyTypes.Maybe<string>;
  description: string | GatsbyTypes.Maybe<string>;
  location: string | GatsbyTypes.Maybe<string>;
  contract: string | GatsbyTypes.Maybe<string>;
  href: string | GatsbyTypes.Maybe<string>;
  className?: string | GatsbyTypes.Maybe<string>;
};

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  occupation,
  description,
  location,
  contract,
  href,
  className,
}) => {
  const intl = useIntl();
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
            <div className="flex items-center">
              <LocationMarkerIcon className="w-4 h-4" />
              <span className="text-neutral-500 text-xs">{location}</span>
            </div>
            <span className="w-0.5 bg-neutral-200 h-4" />
            <span className="text-neutral-500 text-xs">{contract}</span>
          </div>
          <div className="flex items-center">
            <span className="text-brand-red font-medium text-xs">
              {intl.formatMessage({ id: 'readmore' })}
            </span>
            <ChevronRightIcon className="w-4 h-4 text-brand-red" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default OpportunityCard;
