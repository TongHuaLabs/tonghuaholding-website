import React from 'react';
import CareerOffice from '@images/career-office.png';
import DotPattern from '@/images/dot-pattern.inline.svg';
import { graphql, Link, PageProps } from 'gatsby';
import {
  StockPriceCard,
  RedCircleStockCard,
  DocumentCard,
  SetAnnouncementCard,
} from '@/components/cards';
import UnderlineHeader from '@/components/UnderlineHeader';
import Blockquote from '@/components/information/Blockquote';
import BarChart from '@/components/chart/BarChart';
import ContactInvestorSection from '@/components/sections/ContactInvestorSection';
import { PrimaryButton } from '@/components/buttons';
import { useLg } from '@/hooks/responsive';

type InvestorPageProps = PageProps<GatsbyTypes.InvestorPageQuery>;

const InvestorPage: React.FC<InvestorPageProps> = ({ data }) => {
  const lg = useLg();
  const {
    allProsJson,
    allTurnoverJson,
    allAnnualTurnoverJson,
    allDocumentJson,
    allSetAnnouncementJson,
  } = data;

  const bars = {
    labels: allAnnualTurnoverJson.edges.map(({ node }) => {
      const { year } = node;
      return `${year}`;
    }),
    datasets: [
      {
        label: 'กำไรสุทธิ (ล้านบาท)',
        backgroundColor: 'rgb(217, 35, 29)',
        borderColor: 'rgb(217, 35, 29)',
        data: allAnnualTurnoverJson.edges.map(({ node }) => {
          const { value } = node;
          return Number(value);
        }),
      },
    ],
  };

  const setAnnouncement = allSetAnnouncementJson.edges.slice(0, lg ? 6 : 4);

  return (
    <>
      {/* Welcome to Investor Relations */}
      <section
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${CareerOffice})`,
          backgroundSize: 'cover',
        }}
        className="h-[75vh]"
      >
        <div className="h-full flex flex-col justify-center items-center space-y-10 px-4 md:px-28 lg:px-16 lg:flex-row lg:space-y-0 max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-center lg:items-start space-y-10 lg:w-3/5">
            <h2 className="text-4xl font-bold md:text-6xl whitespace-pre-line text-center lg:text-left text-neutral-50">
              {`Welcome to\nInvestor Relations`}
            </h2>
            <Link
              to="/investor"
              className="border border-neutral-50 py-1.5 rounded-lg text-neutral-50 px-4 hover:bg-white hover:text-neutral-600 w-max"
            >
              ติดต่อนักลงทุนสัมพันธ์
            </Link>
          </div>
          <StockPriceCard
            className="w-full lg:w-2/5"
            price="4.84"
            change="8.43%"
            total="13,420,221"
            updatedAt="26 สิงหาคม 2565"
          />
        </div>
      </section>

      {/* ข้อมูลสำคัญทางการเงิน */}
      <section className="relative px-4 py-20 lg:px-20 lg:py-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title="จุดเด่นหุ้น TH"
          className="items-center"
          textClassName="text-4xl text-center"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap justify-center space-y-32 md:space-y-0 pt-24 md:pt-10">
          {allProsJson.edges.map(({ node }, key) => {
            const { roi, title, description } = node;
            return (
              <div
                className="w-full md:px-4 md:pt-14 md:w-1/2 lg:w-1/3"
                key={key}
              >
                <RedCircleStockCard
                  roi={roi}
                  title={title}
                  description={description}
                />
              </div>
            );
          })}
        </div>
        <div className="absolute z-0 bottom-0 left-0 bg-primary-main w-36 h-40 md:w-72" />
        <DotPattern className="text-primary-main z-0 absolute bottom-0 right-0" />
      </section>

      {/* ผลประกอบการ */}
      <section className="relative px-4 py-20 md:px-6 lg:px-20 lg:py-28 max-w-7xl mx-auto">
        <UnderlineHeader
          title="ผลประกอบการ"
          className="items-center"
          textClassName="text-4xl text-center"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-10 mt-10 lg:space-y-0">
          <div className="w-full lg:w-1/2 lg:pr-4 flex flex-col space-y-5">
            {allTurnoverJson.edges.map(({ node }, key) => {
              const { title, description } = node;
              return (
                <Blockquote
                  title={title}
                  description={description}
                  className="bg-neutral-100 p-5"
                  key={key}
                />
              );
            })}
          </div>
          <div className="w-full lg:w-1/2 lg:pl-4">
            <BarChart data={bars} />
          </div>
        </div>
      </section>

      {/* เอกสารเผยแพร่ */}
      <section className="relative max-w-7xl mx-auto">
        <div className="absolute z-0 flex flex-col md:flex-row justify-center items-center overflow-hidden h-full w-full">
          <div className="absolute z-10 -top-1/2  sm:-top-1/3 bg-primary-main rounded-full h-[800px] w-[800px] md:w-full md:h-full md:top-0 md:-left-1/2" />
          <div className="absolute z-0 bg-neutral-700 h-full w-full" />
        </div>
        <div className="relative z-10 flex flex-col items-center md:flex-row px-4 md:px-6 py-20 lg:px-20 lg:py-28 space-y-10 md:space-y-0">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col items-center md:items-start space-y-7">
            <h2 className="text-neutral-50 text-3xl lg:text-4xl font-bold text-center">
              เอกสารเผยแพร่
            </h2>
            <p className="text-base text-neutral-50 text-center md:text-left lg:text-2xl">
              เราพร้อมที่จะมุ่งมั่นเปลี่ยนแปลงความคิด
              และความเชื่อให้เป็นความจริง เราพร้อมที่จะมุ่งมั่น
              เปลี่ยนแปลงความคิด และความเชื่อให้เป็นความ
            </p>
            <Link
              to="/newsroom/all-document/"
              className="hidden border border-neutral-50 py-1.5 rounded-lg text-neutral-50 px-4 hover:bg-white hover:text-neutral-600 w-max md:block"
            >
              ดูเอกสารทั้งหมด
            </Link>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-8 flex flex-col items-center space-y-10">
            <div className="flex">
              {allDocumentJson.edges.map(({ node }, key) => {
                const { title, createdAt, pdf, cover } = node;
                return (
                  <DocumentCard
                    key={key}
                    title={title}
                    className="w-1/2 px-2 text-neutral-50"
                    coverImage={cover}
                    createdAt={createdAt}
                    toFile={pdf}
                  />
                );
              })}
            </div>
            <Link
              to="/newsroom/all-document/"
              className="border border-neutral-50 py-1.5 rounded-lg text-neutral-50 px-4 hover:bg-white hover:text-neutral-600 w-max md:hidden"
            >
              ดูเอกสารทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-20 lg:px-20 lg:py-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title="ข่าวแจ้งตลาดหลักทรัพย์"
          className="items-center"
          textClassName="text-4xl text-center"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {setAnnouncement.map(({ node }, key) => {
            const { title, createdAt, pdf } = node || {};
            return (
              <div className="md:p-2 md:w-1/2 lg:w-1/3" key={key}>
                <SetAnnouncementCard
                  title={title}
                  createAt={createdAt}
                  pdf={pdf}
                />
              </div>
            );
          })}
        </div>
        <Link
          to="/newsroom/all-set-announcement"
          className="flex w-max mx-auto"
        >
          <PrimaryButton title="ดูเพิ่มเติม" className="text-sm font-medium" />
        </Link>
      </section>

      <ContactInvestorSection />
    </>
  );
};

export default InvestorPage;

export const query = graphql`
  query InvestorPage {
    allProsJson {
      edges {
        node {
          roi
          title
          description
        }
      }
    }
    allTurnoverJson {
      edges {
        node {
          title
          description
        }
      }
    }
    allAnnualTurnoverJson {
      edges {
        node {
          year
          value
        }
      }
    }
    allDocumentJson(sort: { fields: createdAt, order: DESC }, limit: 2) {
      edges {
        node {
          createdAt
          title
          pdf
          cover
        }
      }
    }
    allSetAnnouncementJson(sort: { fields: createdAt, order: DESC }, limit: 6) {
      edges {
        node {
          title
          createdAt
          pdf
        }
      }
    }
  }
`;
