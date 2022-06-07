import React from 'react';
import classNames from 'classnames';

type CSRCardProps = {
  coverImage: string;
  title: string;
  description: string;
  className?: string;
};

const CSRCard: React.FC<CSRCardProps> = ({
  coverImage,
  title,
  description,
  className,
}) => {
  return (
    <article className={classNames(className)}>
      <div className="aspect-w-16 aspect-h-9">
        <img
          alt={title}
          src={coverImage}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <span className="mt-2.5 text-sm line-clamp-2">{description}</span>
    </article>
  );
};

export default CSRCard;
