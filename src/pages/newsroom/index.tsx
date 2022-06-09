import React from 'react';
import NewsCard from '../../components/cards/NewsCard';
import DocumentCard from '../../components/cards/DocumentCard';

type NewsRoomPageProps = {};

const NewsRoomPage: React.FC<NewsRoomPageProps> = () => {
  return (
    <>
      <section className="flex items-center px-4 md:px-6 lg:px-56 lg:py-20 oblique-lined bg-primary-main bg-opacity-20 h-72">
        <h1 className="text-4xl font-medium">ข้อมูลข่าวสาร</h1>
      </section>
      {/* News */}
      <section className="px-4 pt-20 space-y-4 md:px-6 lg:px-56">
        <h2 className="text-3xl font-medium">ข่าวสาร TH</h2>
        <hr className="h-0.5 border-0 bg-neutral-200" />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {[...Array(5)].map((_, key) => (
            <NewsCard
              title="Lorem"
              className="md:w-1/2 lg:w-1/3 md:p-2"
              description="Esse consequat nulla laborum id reprehenderit ut qui dolor. Est adipisicing ut quis elit elit excepteur magna irure dolore pariatur duis ex ullamco. Nulla laborum sunt id voluptate."
              coverImage="https://picsum.photos/500/500"
              key={key}
            />
          ))}
        </div>
      </section>
      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-20 space-y-4 md:px-6 lg:px-56">
        <h2 className="text-3xl font-medium">ข่าวแจ้งตลาดหลักทรัพย์</h2>
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
      {/* เอกสารเผยแพร่ */}
      <section className="px-4 py-16 md:px-6 md:py-20 lg:px-56 lg:py-20">
        <h2 className="text-3xl font-medium">เอกสารเผยแพร่</h2>
        <hr className="h-0.5 mt-2 border-0 bg-neutral-200" />
        <div className="flex flex-wrap mt-10">
          {[...Array(4)].map((_, key) => (
            <DocumentCard
              key={key}
              title="Lorem"
              className="w-1/2 p-2 md:p-4 md:w-1/3 lg:w-1/4"
              description="Esse consequat nulla laborum id reprehenderit ut qui dolor"
              coverImage="https://picsum.photos/300/300"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsRoomPage;
