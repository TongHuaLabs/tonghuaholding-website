import React from 'react';
import { NewsCard, CSRCard } from '@/components/cards';

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      {/* Our Vision */}
      <section className="px-4 py-20 space-y-6 text-center md:px-0 lg:p-36 bg-neutral-200">
        <h2 className="text-3xl font-medium">Our Vision</h2>
        <h3 className="w-3/4 mx-auto md:w-2/4">
          Ea reprehenderit fugiat voluptate minim tempor consectetur excepteur
          deserunt. Nisi quis consectetur nisi deserunt amet nisi. Do tempor
        </h3>
        <div className="flex items-center justify-center space-x-5">AAAAA</div>
      </section>
      {/* Businesses */}
      <section className="relative py-20 space-y-6 text-center lg:py-36">
        <h2 className="text-3xl font-medium">ธุรกิจในเครือ</h2>
        <h3 className="w-3/4 mx-auto md:w-2/4">
          Ea reprehenderit fugiat voluptate minim tempor consectetur excepteur
          deserunt. Nisi quis consectetur nisi deserunt amet nisi. Do tempor
        </h3>
        <div className="flex hide-scrollbar relative z-20 md:pr-0 md:pl-4 md:max-w-3xl lg:max-w-4xl lg:justify-center mx-auto pl-4 items-center space-x-1.5 overflow-x-scroll">
          Hi! TOngHu@
        </div>
        <div className="absolute bottom-0 z-10 w-full h-40 bg-neutral-200 lg:h-56" />
      </section>
      {/* News */}
      <section className="px-4 pt-20 space-y-4 md:px-6 lg:px-36 lg:pt-36">
        <h2 className="text-3xl font-medium">ข่าวสาร TH</h2>
        <hr className="h-px border-0 bg-neutral-200" />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {[...Array(5)].map((_, key) => (
            <NewsCard
              title="Lorem"
              className="md:w-1/2 lg:w-1/3 md:p-2"
              description="Esse consequat nulla laborum id reprehenderit ut qui dolor. Est adipisicing ut quis elit elit excepteur magna irure dolore pariatur duis ex ullamco. Nulla laborum sunt id voluptate."
              coverImage="/images/document.jpeg"
              key={key}
            />
          ))}
        </div>
      </section>
      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-20 space-y-4 md:px-6 lg:p-36">
        <h2 className="text-3xl font-medium">ข่าวแจ้งตลาดหลักทรัพย์</h2>
        <hr className="h-px border-0 bg-neutral-200" />
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
      {/* CSR */}
      <section className="px-4 py-20 space-y-6 lg:p-36 bg-neutral-200">
        <h2 className="text-3xl font-medium text-center">
          การพัฒนาอย่างยั่งยืน (CSR)
        </h2>
        <CSRCard
          title="Lorem"
          description="Esse consequat nulla laborum id reprehenderit ut qui dolor. Est adipisicing ut quis elit elit excepteur magna irure dolore pariatur duis ex ullamco. Nulla laborum sunt id voluptate."
          cover="/images/document.jpeg"
        />
      </section>
      {/* Contact */}
      <section className="px-4 py-20 space-y-6 lg:p-36">
        <h2 className="text-3xl font-medium text-center">ติดต่อเรา</h2>
        <h3 className="w-3/4 mx-auto md:w-2/4">
          Ea reprehenderit fugiat voluptate minim tempor consectetur excepteur
          deserunt. Nisi quis consectetur nisi deserunt amet nisi. Do tempor
        </h3>
      </section>
    </>
  );
};

export default IndexPage;
