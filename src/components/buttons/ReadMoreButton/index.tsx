import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { ChevronRightIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

type ReadMoreButtonProps = {
  className?: string;
};

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ className }) => {
  const intl = useIntl();
  return (
    <button className={classNames(`flex justify-center`, className)}>
      <span className="text-brand-red font-medium text-xs">
        {intl.formatMessage({ id: 'readMore' })}
      </span>
      <ChevronRightIcon className="w-4 h-4 text-brand-red" />
    </button>
  );
};

export default ReadMoreButton;
