import { CubeIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import React from 'react';

type SocialProps = {
  className?: string;
};

const Social: React.FC<SocialProps> = ({ className }) => {
  return (
    <div className={classNames('flex items-center', className)}>
      <CubeIcon className="w-8 h-8 text-white" />
      <CubeIcon className="w-8 h-8 text-white" />
      <CubeIcon className="w-8 h-8 text-white" />
    </div>
  );
};

export default Social;
