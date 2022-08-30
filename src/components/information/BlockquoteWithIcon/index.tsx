import React from 'react';

type BlockqouteWithIconProps = {
  icon: React.ReactNode;
  description: string;
};

const BlockqouteWithIcon: React.FC<BlockqouteWithIconProps> = ({
  icon,
  description,
}) => {
  return (
    <div className="flex flex-col space-y-5">
      {icon}
      <div className="border-l-2 border-primary-main pl-5">
        <span className="text-lg font-medium">{description}</span>
      </div>
    </div>
  );
};

export default BlockqouteWithIcon;
