import classNames from 'classnames';
import React from 'react';

type StockPriceCardProps = {
  price?: string;
  change?: string;
  total?: string;
  updatedAt?: string;
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
        <span className="text-xs">ปรับปรุงเมื่อ : {updatedAt}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="block">ราคาล่าสุด (บาท)</span>
        <span className="block text-xl">{price}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="block">เปลี่ยนแปลง (%)</span>
        <span className="block text-xl">{change}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="block">ปริมาณซื้อขาย (หุ้น)</span>
        <span className="block text-xl">{total}</span>
      </div>
    </div>
  );
};

export default StockPriceCard;
