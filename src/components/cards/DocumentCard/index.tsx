import classNames from 'classnames';
import { withPrefix } from 'gatsby';
import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type DocumentCardProps = {
  title?: string;
  coverImage?: IGatsbyImageData;
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
    <div className={classNames('flex flex-col', className)}>
      {coverImage && (
        <div className="!aspect-w-3 !aspect-h-4">
          <GatsbyImage
            alt={title || ''}
            image={coverImage}
            className="object-cover w-full h-full rounded-lg border border-primary-main"
          />
        </div>
      )}
      <div className="flex items-center space-x-2 mt-4">
        <div className="border-l-2 border-l-primary-main rounded-md h-6" />
        <span className="text-sm">{createdAt}</span>
      </div>
      <a href={withPrefix(`/pdf/${toFile}`)} target="__blank">
        <p className="text-neutral-900 mt-2 font-medium line-clamp-2 hover:text-primary-main delay-100">
          {title}
        </p>
      </a>
    </div>
  );
};

export default DocumentCard;
