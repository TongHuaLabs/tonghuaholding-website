import classNames from 'classnames';
import React from 'react';

type RedCircleStockCardProps = {
  topic?: string;
  title?: string;
  description?: string;
  className?: string;
};

const RedCircleStockCard: React.FC<RedCircleStockCardProps> = ({
  topic,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={classNames(
        'relative flex justify-center items-center bg-neutral-100 rounded-2xl px-8 space-y-24 pb-8',
        className,
      )}
    >
      <div className="absolute px-6 -top-20 h-40 w-40 flex flex-col items-center justify-center text-center bg-primary-main rounded-full border-4 border-primary-surface">
        <span className="block text-neutral-50 text-xl font-medium whitespace-pre-line">
          {topic}
        </span>
        <span className="block text-neutral-50 text-xs font-bold text-center whitespace-pre-line">
          {title}
        </span>
      </div>
      <p className="text-neutral-900 text-center self-start">{description}</p>
    </div>
  );
};

export default RedCircleStockCard;
