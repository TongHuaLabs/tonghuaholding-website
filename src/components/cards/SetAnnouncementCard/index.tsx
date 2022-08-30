import React from 'react';
import classNames from 'classnames';
import { ReadMoreButton } from '@/components/buttons';
import { withPrefix } from 'gatsby';

type SetAnnouncementCardProps = {
  title: string | GatsbyTypes.Maybe<string>;
  createAt: string | GatsbyTypes.Maybe<string>;
  pdf: string | GatsbyTypes.Maybe<string>;
  className?: string | GatsbyTypes.Maybe<string>;
};

const SetAnnouncementCard: React.FC<SetAnnouncementCardProps> = ({
  title,
  createAt,
  pdf,
  className,
}) => {
  return (
    <article
      className={classNames(
        `p-4 flex flex-col justify-between h-40 bg-neutral-50 rounded-t-lg border-b-4 border-b-primary-main`,
        className,
      )}
    >
      <div className="flex flex-col space-y-2">
        <span className="text-xs text-neutral-600">{createAt}</span>
        <p className="font-medium text-neutral-900 line-clamp-3">{title}</p>
      </div>
      <a
        href={withPrefix(`/pdf/${pdf}`)}
        target="__blank"
        className={classNames(`flex items-center`, className)}
      >
        <ReadMoreButton />
      </a>
    </article>
  );
};

export default SetAnnouncementCard;
