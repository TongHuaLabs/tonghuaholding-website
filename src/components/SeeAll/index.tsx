import classNames from 'classnames';
import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import SeeAllButton from '../buttons/SeeAllButton';

type SeeAllProps = {
  to: string;
  className?: string;
};

const SeeAll: React.FC<SeeAllProps> = ({ to, className }) => {
  return (
    <Link to={to} className={classNames(`flex w-max mx-auto`, className)}>
      <SeeAllButton />
    </Link>
  );
};

export default SeeAll;
