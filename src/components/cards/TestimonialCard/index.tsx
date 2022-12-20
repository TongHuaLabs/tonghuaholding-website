import React from 'react';
import QouteSvg from '@/icons/qoute.inline.svg';
import classNames from 'classnames';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface TestimonialCardProps {
  name?: string;
  profileImage?: IGatsbyImageData;
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
        'flex flex-col py-6 px-7 space-y-4 rounded-2xl bg-neutral-50',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex cover-full">
          <div className="w-12 h-12 mr-2 p-px border border-primary-main rounded-full">
            {profileImage && (
              <GatsbyImage
                alt={name || ''}
                image={profileImage}
                className="w-full h-full rounded-full border border-white"
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-lg line-clamp-1">{name}</span>
            <span className="text-xs">{occupation}</span>
          </div>
        </div>
        <QouteSvg className="w-12 h-12" />
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default TestimonialCard;
