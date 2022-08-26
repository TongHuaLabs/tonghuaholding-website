import React from 'react';
import QouteSvg from '@/icons/qoute.inline.svg';
import classNames from 'classnames';
import { withPrefix } from 'gatsby';

interface TestimonialCardProps {
  name?: string;
  profileImage?: string;
  occupation?: string;
  comment?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  profileImage,
  occupation,
  comment,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col p-6 space-y-4 rounded-2xl bg-neutral-50',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            src={withPrefix(profileImage || '')}
            className="w-12 h-12 rounded-full border border-primary-main bg-white p-0.5 mr-2"
          />
          <div className="flex flex-col">
            <span className="text-lg line-clamp-1">{name}</span>
            <span className="text-xs">{occupation}</span>
          </div>
        </div>
        <QouteSvg className="w-12 h-12" />
      </div>
      <p className="text-sm">{comment}</p>
    </div>
  );
};

export default TestimonialCard;
