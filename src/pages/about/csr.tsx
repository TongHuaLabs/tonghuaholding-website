import NewsCard from '../../components/cards/NewsCard';
import React from 'react';

type CSRPageProps = {};

const CSRPage: React.FC<CSRPageProps> = () => {
  return (
    <>
      <section className="flex items-center px-4 lg:px-36 oblique-lined bg-primary-main bg-opacity-20 h-72">
        <h1 className="text-4xl font-medium">การพัฒนาอย่างยั่งยืน</h1>
      </section>
      <section className="px-4 pt-20 md:px-6 lg:px-36 lg:pt-36">
        <h2 className="text-3xl font-medium">Roles and Responsibilities</h2>
        <hr className="h-px border-0 mt-4 bg-neutral-200" />
        <h3 className="mt-10 text-lg font-medium">
          Esse ullamco veniam magna velit minim esse nulla aliquip qui occaecat
          reprehenderit.
        </h3>
        <p className="mt-6">
          Cillum incididunt duis ut non deserunt. Commodo ex eiusmod qui laborum
          nostrud laborum excepteur ut proident culpa dolor nulla. Et amet et do
          duis occaecat magna ex. Culpa Lorem reprehenderit dolore quis ad magna
          ipsum cillum veniam deserunt labore nulla enim qui. Lorem velit
          consequat enim proident Lorem ipsum deserunt labore dolor officia.
          Commodo culpa dolor proident ut id elit exercitation cupidatat tempor
          Lorem. Deserunt ullamco Lorem veniam anim ipsum ad dolore esse
          ullamco. Lorem sit ad aliqua dolore irure ipsum cupidatat cupidatat
          pariatur pariatur est. Dolor excepteur laborum adipisicing aute
          pariatur id aliquip aliqua enim non elit adipisicing occaecat qui.
          Amet aliqua id veniam eiusmod occaecat. Aute Lorem qui excepteur ea id
          ullamco veniam ut. Pariatur duis sit pariatur velit laboris in Lorem
          nulla exercitation proident do deserunt velit. Ut dolor dolore anim
          duis eu labore tempor. Amet non duis proident eiusmod deserunt commodo
          non Lorem deserunt ut amet aliqua. Aliquip laborum amet occaecat
          consectetur deserunt cillum eu. Ipsum dolore laboris cillum qui nisi
          ex id irure deserunt ipsum exercitation quis amet est. Aliqua et eu
          deserunt in id pariatur eiusmod amet. Ex nulla aute amet eu eu nulla
          velit nisi officia eiusmod ipsum. Consequat ut nulla officia eu ex
          enim anim. Tempor pariatur non eu magna ex est sunt ullamco.
        </p>
      </section>
      <section className="px-4 py-20 space-y-4 md:px-6 lg:p-36">
        <h2 className="text-3xl font-medium">CSR Events</h2>
        <hr className="h-px border-0 bg-neutral-200" />
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
    </>
  );
};

export default CSRPage;
