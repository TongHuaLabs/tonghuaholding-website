import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import classNames from 'classnames';

type SeeAllButtonProps = {
  className?: string;
};

const SeeAllButton: React.FC<SeeAllButtonProps> = ({ className }) => {
  const intl = useIntl();
  return (
    <button
      className={classNames(
        `bg-primary-main h-8 px-3 text-white text-sm font-medium rounded-lg`,
        className,
      )}
    >
      {intl.formatMessage({ id: 'seeAll' })}
    </button>
  );
};

export default SeeAllButton;
