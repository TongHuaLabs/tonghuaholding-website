import classNames from 'classnames';
import { Link } from 'gatsby-plugin-intl';
import React from 'react';

export type BreadCrumbProps = {
  crumbs: {
    pathname: string;
    crumbLabel: string;
  }[];
  className?: string;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ crumbs, className }) => {
  return (
    <div className={classNames(`flex items-center`, className)}>
      {crumbs.map(({ pathname, crumbLabel }, key) => (
        <Link to={pathname} key={key} className="flex items-center">
          <span className="block text-neutral-900 font-medium">{`${crumbLabel}`}</span>
          <span className="block text-neutral-900 font-medium px-2">{`${
            key + 1 !== crumbs.length ? '>' : ''
          }`}</span>
        </Link>
      ))}
    </div>
  );
};

export default BreadCrumb;
