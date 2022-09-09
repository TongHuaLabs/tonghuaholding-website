import React from 'react';
import DotPattern from '@/images/dot-pattern.inline.svg';
import { graphql, Link, PageProps } from 'gatsby';
import {
  StockPriceCard,
  RedCircleStockCard,
  SetAnnouncementCard,
} from '@/components/cards';
import UnderlineHeader from '@/components/UnderlineHeader';
import Blockquote from '@/components/information/Blockquote';
import BarChart from '@/components/chart/BarChart';
import ContactInvestorSection from '@/components/sections/ContactInvestorSection';
import { PrimaryButton } from '@/components/buttons';
import { useLg } from '@/hooks/responsive';
import OutlineButton from '@/components/buttons/OutlineButton';
import { StaticImage } from 'gatsby-plugin-image';

type InvestorPageProps = PageProps<GatsbyTypes.InvestorPageQuery>;

const InvestorPage: React.FC<InvestorPageProps> = ({ data }) => {
  const lg = useLg();

  const {
    stockJson,
    allProsJson,
    allTurnoverJson,
    allAnnualTurnoverJson,
    allSetAnnouncementJson,
  } = data;

  const turnover = allAnnualTurnoverJson.edges[0].node;

  const setAnnouncement = allSetAnnouncementJson.edges.slice(0, lg ? 6 : 4);

  const { price, change, total, updatedAt } = stockJson || {};

  return (
    <>
      {/* Welcome to Investor Relations */}
      <section className="h-[75vh] relative">
        <div className="absolute w-full h-full bg-black/70" />
        <StaticImage
          src="../../images/career-office.png"
          alt="Tong Hua Holding Investor"
          className="w-full h-full opacity-10"
        />
        <div className="absolute top-0 w-full h-full">
          <div className="h-full flex flex-col justify-center items-center space-y-10 lg:flex-row lg:space-y-0 max-w-7xl mx-auto px-4 md:px-28 lg:px-16">
            <div className="flex flex-col items-center lg:items-start space-y-10 lg:w-3/5">
              <h2 className="text-4xl font-bold md:text-6xl whitespace-pre-line text-center lg:text-left text-neutral-50">
                {`Welcome to\nInvestor Relations`}
              </h2>
              <OutlineButton title="ติดต่อนักลงทุนสัมพันธ์" />
            </div>
            <StockPriceCard
              className="w-full lg:w-2/5"
              price={price}
              change={change}
              total={total}
              updatedAt={updatedAt}
            />
          </div>
        </div>
      </section>

      {/* ข้อมูลสำคัญทางการเงิน */}
      <section className="relative px-4 py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title="จุดเด่นหุ้น TH"
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap justify-center space-y-32 md:space-y-0 pt-24 md:pt-10">
          {allProsJson.edges.map(({ node }, key) => {
            const { roi, title, description } = node;
            return (
              <div
                className={`w-full md:px-4 md:w-1/2 xl:w-1/3 ${
                  key === 2 ? 'md:pt-28 xl:pt-14' : 'md:pt-14'
                }`}
                key={key}
              >
                <RedCircleStockCard
                  roi={roi}
                  title={title}
                  description={description}
                  className="h-auto md:h-[296px]"
                />
              </div>
            );
          })}
        </div>
        <DotPattern className="text-primary-main z-0 absolute bottom-14 right-0" />
      </section>

      {/* ผลประกอบการ */}
      <section className="bg-primary-main">
        <div className="relative px-4 py-20 md:px-6 lg:px-20 lg:py-28 max-w-7xl mx-auto">
          <UnderlineHeader
            title="ผลประกอบการ"
            className="items-center"
            textClassName="text-3xl text-center lg:text-4xl text-neutral-50"
            underlineClassName="bg-neutral-50 w-16"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-10 mt-10 lg:space-y-0">
            <div className="w-full lg:w-1/2 lg:pr-10 flex flex-col space-y-5">
              {allTurnoverJson.edges.map(({ node }, key) => {
                const { title, description } = node;
                return (
                  <Blockquote
                    title={title}
                    description={description}
                    className="bg-neutral-50 p-5"
                    key={key}
                  />
                );
              })}
            </div>
            <div className="w-full lg:w-1/2 lg:pl-10">
              <h2 className="text-neutral-50 font-bold text-2xl text-left md:text-right">
                {turnover.title}
              </h2>
              <h3 className="text-neutral-50 font-bold text-lg mt-5 md:mt-3 text-left md:text-right">
                กำไรสุทธิ
              </h3>
              <BarChart
                className="mt-10 md:mt-3"
                data={{
                  labels:
                    turnover.data?.map((turnover) => {
                      const { year } = turnover || {};
                      return `${year}`;
                    }) || [],
                  datasets: [
                    {
                      backgroundColor: 'rgb(250,250,250)',
                      borderColor: 'rgb(250,250,250)',
                      data:
                        turnover.data?.map((turnover) => {
                          const { value } = turnover || {};
                          return Number(value);
                        }) || [],
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      grid: {
                        color: 'rgba(250,250,250,0.2)',
                      },
                      ticks: {
                        color: 'rgb(250,250,250)',
                      },
                    },
                    x: {
                      grid: {
                        color: 'rgba(250,250,250,0.2)',
                      },
                      ticks: {
                        color: 'rgb(250,250,250)',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      callbacks: {
                        label: (item) => `${item.formattedValue} ล้านบาท`,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <DotPattern className="hidden lg:block text-neutral-50 z-0 absolute lg:top-40 xl:top-52 left-1" />
        </div>
      </section>

      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title="ข่าวแจ้งตลาดหลักทรัพย์"
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="flex flex-col mt-10 md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {setAnnouncement.map(({ node }, key) => {
            const { title, createdAt, pdf } = node || {};
            return (
              <div className="md:w-1/2 lg:w-1/3 md:px-4 md:py-6" key={key}>
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
    stockJson {
      price
      change
      total
      updatedAt
    }
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
          title
          data {
            year
            value
          }
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
