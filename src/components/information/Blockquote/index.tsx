import React from 'react';

type BlockqouteProps = {
  icon?: React.ReactNode;
  title: string;
};

const Blockqoute: React.FC<BlockqouteProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col space-y-5">
      {icon}
      <div className="border-l-2 border-primary-main pl-5">
        <span className="text-lg font-medium">{title}</span>
      </div>
    </div>
  );
};

export default Blockqoute;
