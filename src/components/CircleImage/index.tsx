import React from 'react';
import classNames from 'classnames';

type CircleImageProps = {
  src: string;
  className?: string;
};

const CircleImage: React.FC<CircleImageProps> = ({ src, className }) => {
  return (
    <img
      src={src}
      className={classNames('w-20 h-20 rounded-full object-cover', className)}
    />
  );
};

export default CircleImage;
