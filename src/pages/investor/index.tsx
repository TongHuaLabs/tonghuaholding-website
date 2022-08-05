// import DocumentCard from '../../components/cards/DocumentCard';
import React from 'react';

type InvestorPageProps = {};

const InvestorPage: React.FC<InvestorPageProps> = () => {
  return (
    <>
      {/* Welcome to Investor Relations */}
      <section className="flex flex-col justify-center px-4 py-20 lg:py-36 lg:px-56 md:overflow-hidden md:flex-row md:items-center md:pl-16 md:pr-0 bg-primary-main bg-opacity-20">
        <h1 className="text-4xl font-medium whitespace-pre-line md:w-1/2">
          {`Welcome to\nInvestor Relations`}
        </h1>
        <div className="w-full md:-mr-8 lg:mr-0 md:w-1/2 mt-7 md:mt-0">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="https://picsum.photos/500/500"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </section>
      {/* ข้อมูลสำคัญทางการเงิน */}
      <section className="px-4 pt-16 md:px-6 md:pt-20 lg:px-56 lg:pt-20">
        <h2 className="text-3xl font-medium">ข้อมูลสำคัญทางการเงิน</h2>
        <hr className="h-px mt-2 border-0 bg-neutral-200" />
        <div className="flex flex-col mt-10 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
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
      {/* <section className="px-4 pt-16 md:px-6 md:pt-20 lg:px-56 lg:pt-20">
        <h2 className="text-3xl font-medium">เอกสารเผยแพร่</h2>
        <hr className="h-px mt-2 border-0 bg-neutral-200" />
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
      </section> */}
      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-16 md:px-6 md:py-20 lg:px-56 lg:py-20">
        <h2 className="text-3xl font-medium">ข่าวแจ้งตลาดหลักทรัพย์</h2>
        <hr className="h-px mt-2 border-0 bg-neutral-200" />
        <div className="flex flex-col mt-10 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
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

export default InvestorPage;
