import classNames from 'classnames';
import React from 'react';

type StockPriceCardProps = {
  price?: {
    title?: string;
    value?: string;
  };
  change?: {
    title?: string;
    value?: string;
  };
  total?: {
    title?: string;
    value?: string;
  };
  updatedAt?: {
    title?: string;
    value?: string;
  };
  className?: string;
};

const StockPriceCard: React.FC<StockPriceCardProps> = ({
  price,
  change,
  total,
  updatedAt,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col p-10 rounded-lg bg-neutral-50 border border-neutral-50 space-y-6 opacity-90',
        className,
      )}
    >
      <div className="flex justify-between items-center border-b border-black pb-2">
        <span className="block text-primary-main text-4xl font-bold">TH</span>
        <span className="text-xs">
          {updatedAt?.title}
          {updatedAt?.value}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="block">{price?.title}</span>
        <span className="block text-xl">{price?.value}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="block">{change?.title}</span>
        <span className="block text-xl">{change?.value}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="block">{total?.title}</span>
        <span className="block text-xl">{total?.value}</span>
      </div>
    </div>
  );
};

export default StockPriceCard;
