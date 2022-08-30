import classNames from 'classnames';
import { withPrefix } from 'gatsby';
import React from 'react';

type DocumentCardProps = {
  title?: string;
  coverImage?: string;
  createdAt?: string;
  toFile?: string;
  className?: string;
};

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  coverImage,
  createdAt,
  toFile,
  className,
}) => {
  return (
    <a
      href={withPrefix(`/pdf/${toFile}`)}
      target="__blank"
      className={classNames('flex flex-col', className)}
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={withPrefix(coverImage || '')}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <div className="border-l-2 border-l-primary-main rounded-md h-6" />
        <span className="text-sm">{createdAt}</span>
      </div>
      <p className="text-lg mt-2 font-medium line-clamp-2">{title}</p>
    </a>
  );
};

export default DocumentCard;
