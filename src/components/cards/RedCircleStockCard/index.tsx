import classNames from 'classnames';
import React from 'react';

type RedCircleStockCardProps = {
  roi?: string;
  title?: string;
  description?: string;
  className?: string;
};

const RedCircleStockCard: React.FC<RedCircleStockCardProps> = ({
  roi,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={classNames(
        'relative flex justify-center items-center bg-neutral-100 rounded-2xl px-8 space-y-20 pb-5',
        className,
      )}
    >
      <div className="absolute px-6 -top-20 h-36 w-36 flex flex-col items-center justify-center bg-primary-main rounded-full">
        <span className="block text-neutral-50 text-3xl font-medium">
          {roi}
        </span>
        <span className="block text-neutral-50 text-xs font-bold text-center">
          {title}
        </span>
      </div>
      <p className="text-neutral-700 text-lg text-center">{description}</p>
    </div>
  );
};

export default RedCircleStockCard;
