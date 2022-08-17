import classNames from 'classnames';
import React from 'react';
import { MailIcon } from '@heroicons/react/solid';

type MailToProps = {
  mail: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const MailTo: React.FC<MailToProps> = ({
  mail,
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      className={classNames(`flex items-center space-x-2.5`, className)}
      href={`mailto:${mail}`}
    >
      <MailIcon className={classNames(`w-6 h-6`, iconClassName)} />
      <span className={classNames(`font-medium`, textClassName)}>{mail}</span>
    </a>
  );
};

export default MailTo;
