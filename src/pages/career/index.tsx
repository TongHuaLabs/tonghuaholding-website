import React from 'react';
import Gallery from '../../components/Gallery';

type CareerPageProps = {};

const CareerPage: React.FC<CareerPageProps> = () => {
  return (
    <>
      <section className="flex items-center px-4 md:px-6 lg:px-56 lg:py-20 oblique-lined bg-primary-main bg-opacity-20 h-72">
        <h1 className="text-4xl font-medium">ร่วมงานกับเรา</h1>
      </section>
      {/* LIFE AT TONG HUA HOLDING */}
      <section className="flex flex-col px-4 py-20 md:items-center md:flex-row md:px-6 lg:px-56">
        <h2 className="text-3xl font-medium whitespace-pre-line md:w-1/2 md:pr-2">
          {`LIFE AT\nTONG HUA HOLDING`}
        </h2>
        <p className="mt-10 md:mt-0 md:w-1/2 md:pl-2">
          Consequat culpa exercitation non exercitation. Dolor eu amet fugiat do
          est reprehenderit dolor Lorem voluptate et eu sunt dolore quis. Id
          esse irure anim culpa ut nulla cupidatat consectetur anim nostrud non
          magna do. Ad exercitation nostrud duis officia et. Culpa incididunt
          duis pariatur adipisicing adipisicing.
        </p>
      </section>
      {/* Core Value */}
      <section className="px-4 py-20 space-y-6 md:px-6 lg:p-36 bg-neutral-200">
        <h2 className="text-3xl font-medium text-center">CORE VALUE</h2>
        <p className="mt-10">
          Consequat culpa exercitation non exercitation. Dolor eu amet fugiat do
          est reprehenderit dolor Lorem voluptate et eu sunt dolore quis. Id
          esse irure anim culpa ut nulla cupidatat consectetur anim nostrud non
          magna do. Ad exercitation nostrud duis officia et. Culpa incididunt
          duis pariatur adipisicing adipisicing.
        </p>
      </section>
      {/* Gallery */}
      <section className="px-4 pt-20 space-y-6 md:px-6 lg:px-36">
        <h2 className="text-3xl font-medium">Gallery</h2>
        <Gallery
          gallery={[
            { src: 'https://picsum.photos/500/500' },
            { src: 'https://picsum.photos/500/500' },
            { src: 'https://picsum.photos/500/500' },
            { src: 'https://picsum.photos/500/500' },
            { src: 'https://picsum.photos/500/500' },
          ]}
        />
      </section>
      {/* Career Opportunity */}
      <section className="px-4 py-20 space-y-4 md:px-6 lg:px-36">
        <h2 className="text-3xl font-medium">Career Opportunity</h2>
        <hr className="h-0.5 border-0 bg-neutral-200" />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {[...Array(5)].map((_, key) => (
            <article key={key} className="md:w-1/2 lg:w-1/3 md:p-2">
              <h3 className="text-lg font-medium">Ipsum et do minim nisi.</h3>
              <p className="mt-2.5 line-clamp-3">
                Dolor ad duis non et est cupidatat excepteur veniam duis nostrud
                cupidatat cupidatat. Laborum aute do nulla culpa mollit aliquip
                eiusmod commodo nostrud eu duis. Labore sint pariatur veniam
                cupidatat tempor laborum aliqua
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default CareerPage;
