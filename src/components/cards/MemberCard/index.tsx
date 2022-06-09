import classNames from 'classnames';
import React from 'react';

type MemberCardProps = {
  name: string;
  job: string;
  profileImage: string;
  className?: string;
};

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  job,
  profileImage,
  className,
}) => {
  return (
    <div className={classNames('flex flex-col space-y-2', className)}>
      <img src={profileImage} className="object-cover w-full h-56" />
      <b className="text-sm font-medium">{name}</b>
      <b className="text-xs">{job}</b>
    </div>
  );
};

export default MemberCard;
