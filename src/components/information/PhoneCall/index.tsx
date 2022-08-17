import classNames from 'classnames';
import React from 'react';
import PhoneCellIcon from '@/icons/phone-cell.inline.svg';

type PhoneCallProps = {
  phone: string;
  tel: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const PhoneCall: React.FC<PhoneCallProps> = ({
  phone,
  tel,
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      className={classNames(`flex items-center space-x-2.5`, className)}
      href={`tel:${tel}`}
    >
      <PhoneCellIcon className={classNames(`w-6 h-6`, iconClassName)} />
      <span className={classNames(`font-medium`, textClassName)}>{phone}</span>
    </a>
  );
};

export default PhoneCall;
