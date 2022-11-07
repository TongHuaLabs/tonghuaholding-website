import React from 'react';
import classNames from 'classnames';
import { ReadMoreButton } from '@/components/buttons';
import { withPrefix } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

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
  const { t } = useTranslation();
  return (
    <a
      href={withPrefix(`/pdf/${pdf}`)}
      target="__blank"
      className={classNames(
        `group p-4 flex flex-col justify-between h-40 bg-neutral-50 rounded-t-lg border-b-4 border-b-primary-main`,
        className,
      )}
    >
      <div className="flex flex-col space-y-2">
        <span className="text-sm text-neutral-500">{createAt}</span>
        <p className="font-medium text-neutral-900 line-clamp-3 group-hover:underline">
          {title}
        </p>
      </div>
      <ReadMoreButton
        title={t('Components.ReadMoreButton.Title')}
        className="self-start"
      />
    </a>
  );
};

export default SetAnnouncementCard;
