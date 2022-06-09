import React from 'react';
import classNames from 'classnames';

type GalleryProps = {
  gallery: {
    src: string;
  }[];
  className?: string;
};

const Gallery: React.FC<GalleryProps> = ({ gallery, className }) => {
  return (
    <div
      className={classNames(
        'flex hide-scrollbar items-center space-x-1.5 overflow-x-scroll',
        className,
      )}
    >
      {gallery.map(({ src }, key) => (
        <div className="min-w-[100%] md:min-w-[50%]" key={key}>
          <div className=" aspect-w-16 aspect-h-9">
            <img className="object-cover w-full h-full rounded-lg" src={src} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
