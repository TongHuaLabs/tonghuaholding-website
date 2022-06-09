import React from 'react';

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <>
      <section className="flex items-center px-4 lg:px-36 oblique-lined bg-primary-main bg-opacity-20 h-72">
        <h1 className="text-4xl font-medium">ข้อมูลบริษัท</h1>
      </section>
    </>
  );
};

export default AboutPage;
