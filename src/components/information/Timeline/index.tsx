import classNames from 'classnames';
import React from 'react';

type TimelineProps = {
  title?: string;
  description?: string;
  className?: string;
};

const Timeline: React.FC<TimelineProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={classNames('flex', className)}>
      <div className="mr-0.5 relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-neutral-600" />
        </div>
        <span className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary-main" />
      </div>
      <div className="timeline-card-arrow" />
      <div className="bg-primary-main p-4 rounded-lg my-4 mr-auto shadow-md w-full text-neutral-50">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Timeline;
