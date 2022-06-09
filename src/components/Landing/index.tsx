import React from 'react';
import classNames from 'classnames';

type LandingProps = {
  className?: string;
};

const Landing: React.FC<LandingProps> = ({ className }) => {
  return (
    <section
      className={classNames(
        'relative full-page bg-primary-main bg-opacity-20',
        className,
      )}
    >
      <div className="absolute max-w-xl px-6 bottom-1/4">
        <h1 className="text-3xl font-medium lg:text-5xl">TONG HUA HOLDING</h1>
        <h2 className="text-xl mt-7 text-neutral-500 lg:text-2xl">
          Officia id in labore aliqua. Sunt ea esse veniam Lorem incididunt
          pariatur ipsum veniam. Aliquip esse cupidatat laborum ut nisi id
        </h2>
      </div>
    </section>
  );
};

export default Landing;
