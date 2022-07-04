import React from 'react';
import classNames from 'classnames';

type NewsCardProps = {
  coverImage?: string;
  title?: string;
  description?: string;
  createdAt?: string;
  className?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  coverImage,
  title,
  description,
  createdAt,
  className,
}) => {
  return (
    <article className={classNames('space-y-2.5', className)}>
      <div className="aspect-w-16 aspect-h-9">
        <img
          alt={title}
          src={coverImage}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex items-center space-x-2">
        <div className="border-l-2 border-l-primary-main rounded-md h-6" />
        <span className="text-sm text-neutral-900">{createdAt}</span>
      </div>
      <h3 className="text-lg font-medium text-neutral-900 line-clamp-2">
        {title}
      </h3>
      <span className="line-clamp-2 text-neutral-600">{description}</span>
    </article>
  );
};

export default NewsCard;
