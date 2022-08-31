import classNames from 'classnames';
import React from 'react';

type TopicProps = {
  title?: string;
  description?: string;
  className?: string;
};

const Topic: React.FC<TopicProps> = ({ title, description, className }) => {
  return (
    <div className={classNames('flex flex-col items-center', className)}>
      <span className="text-primary-main block text-2xl md:text-4xl font-bold">
        {title}
      </span>
      <span className="text-xl md:text-2xl font-medium">{description}</span>
    </div>
  );
};

export default Topic;
