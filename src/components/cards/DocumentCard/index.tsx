import classNames from 'classnames';
import React from 'react';

type DocumentCardProps = {
  title: string;
  description: string;
  coverImage: string;
  className?: string;
};

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  description,
  coverImage,
  className,
}) => {
  return (
    <div className={classNames('flex flex-col space-y-2', className)}>
      <img src={coverImage} className="object-cover w-full h-56" />
      <b className="text-sm font-medium">{title}</b>
      <b className="text-xs">{description}</b>
    </div>
  );
};

export default DocumentCard;
