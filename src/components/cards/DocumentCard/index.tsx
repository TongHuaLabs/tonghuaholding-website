import classNames from 'classnames';
import { withPrefix } from 'gatsby';
import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useLg } from '@/hooks/responsive';

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
  const isLg = useLg();
  const content = (
    <>
      {coverImage && (
        <div className="!aspect-w-3 !aspect-h-4 cover-lg">
          <GatsbyImage
            alt={title || ''}
            image={coverImage}
            className="object-cover w-full h-full border rounded-lg border-primary-main"
          />
        </div>
      )}
      <div className="flex items-center space-x-2 mt-4">
        <div className="border-l-2 border-l-primary-main rounded-md h-6" />
        <span className="text-sm">{createdAt}</span>
      </div>
    </>
  );

  return isLg ? (
    <div className={classNames('flex flex-col', className)}>
      {content}
      <a href={withPrefix(`/pdf/${toFile}`)} target="__blank">
        <p className="text-neutral-900 mt-2 font-medium line-clamp-2 hover:text-primary-main delay-100">
          {title}
        </p>
      </a>
    </div>
  ) : (
    <a
      href={withPrefix(`/pdf/${toFile}`)}
      target="__blank"
      className={classNames('flex flex-col group', className)}
    >
      {content}
      <p className="text-neutral-900 mt-2 font-medium line-clamp-2 group-hover:text-primary-main delay-100">
        {title}
      </p>
    </a>
  );
};

export default DocumentCard;
