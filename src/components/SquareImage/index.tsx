import React from 'react';
import classNames from 'classnames';

type SquareImageProps = {
  src: string;
  className?: string;
};

const SquareImage: React.FC<SquareImageProps> = ({ src, className }) => {
  return (
    <img
      src={src}
      className={classNames('w-40 h-40 object-cover', className)}
    />
  );
};

export default SquareImage;
