import React from 'react';
import DotPattern from '@/images/dot-pattern.inline.svg';
import { graphql, Link, PageProps } from 'gatsby';
import {
  StockPriceCard,
  RedCircleStockCard,
  SetAnnouncementCard,
  DocumentCard,
} from '@/components/cards';
import UnderlineHeader from '@/components/UnderlineHeader';
import Blockquote from '@/components/information/Blockquote';
import BarChart from '@/components/chart/BarChart';
import ContactInvestorSection from '@/components/sections/ContactInvestorSection';
import { PrimaryButton } from '@/components/buttons';
import { useLg } from '@/hooks/responsive';
import OutlineButton from '@/components/buttons/OutlineButton';
import { StaticImage } from 'gatsby-plugin-image';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '@/components/Seo';

type InvestorPageProps = PageProps<GatsbyTypes.InvestorPageQuery>;

const InvestorPage: React.FC<InvestorPageProps> = ({ data }) => {
  const lg = useLg();
  const { t } = useTranslation();

  const { allSetAnnouncementJson, allDocumentJson } = data;
  const setAnnouncement = allSetAnnouncementJson.edges.slice(0, lg ? 6 : 4);

  // annualTurnover
  const annualTurnover: {
    title: string;
    unit: string;
    chart: { year: string; value: number }[];
  } = t('Data.AnnualTurnover', {
    returnObjects: true,
  });

  // turnover
  const turnover: {
    title: string;
    description: string;
  }[] = t('Data.Turnover', {
    returnObjects: true,
  });

  const { chart, title, unit } = annualTurnover;

  // pros
  const pros: {
    topic: string;
    title: string;
    description: string;
  }[] = t('Data.Pros', {
    returnObjects: true,
  });

  // stock
  const stock: {
    price: {
      title: string;
      value: string;
    };
    change: {
      title: string;
      value: string;
    };
    total: {
      title: string;
      value: string;
    };
    updatedAt: {
      title: string;
      value: string;
    };
  } = t('Data.Stock', {
    returnObjects: true,
  });

  const scrollToInvestorContactId = () => {
    const ele = document.getElementById('contact-investor');
    ele?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <MainLayout>
      <Seo
        title={t('Seo.Investor.Title')}
        description={t('Seo.Investor.Desc')}
      />

      {/* Section 1: Welcome to Investor Relations */}
      <section className="h-[75vh] relative">
        <div className="bg-black/40 absolute z-10 w-full h-full" />
        <StaticImage
          src="../../images/investor-relation-cover.png"
          alt="Tong Hua Holding Investor"
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="absolute top-0 z-20 w-full h-full">
          <div className="h-full flex flex-col justify-center items-center space-y-10 lg:flex-row lg:space-y-0 max-w-7xl mx-auto px-4 md:px-28 lg:px-16">
            <div className="flex flex-col items-center lg:items-start space-y-10 lg:w-3/5">
              <h2 className="text-4xl font-bold md:text-6xl whitespace-pre-line text-center lg:text-left text-neutral-50">
                {/* Welcome to\nInvestor Relations */}
                {t('Pages.Investor.Section-1.Title')}
              </h2>
              {/* ติดต่อนักลงทุนสัมพันธ์ */}
              <OutlineButton
                title={t('Pages.Investor.Section-1.ContactButton')}
                className="border-neutral-50 text-neutral-50 hover:bg-neutral-50 hover:text-neutral-900 delay-100"
                onClick={() => scrollToInvestorContactId()}
              />
            </div>
            <StockPriceCard className="w-full lg:w-2/5" {...stock} />
          </div>
        </div>
      </section>

      {/* Section 2: จุดเด่นการลงทุน */}
      <section className="relative px-4 py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title={t('Pages.Investor.Section-2.Title')}
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap justify-center space-y-32 md:space-y-0 pt-24 md:pt-10">
          {pros.map((item, key) => {
            const { topic, title, description } = item || {};
            return (
              <div
                className={`w-full md:px-4 md:w-1/2 xl:w-1/3 ${
                  key === 2 ? 'md:pt-28 xl:pt-14' : 'md:pt-14'
                }`}
                key={key}
              >
                <RedCircleStockCard
                  topic={topic}
                  title={title}
                  description={description}
                  className="h-auto md:h-64"
                />
              </div>
            );
          })}
        </div>
        <DotPattern className="text-primary-main z-0 absolute bottom-14 right-0" />
      </section>

      {/* Section 3: ผลประกอบการ */}
      <section className="bg-primary-main">
        <div className="relative px-4 py-20 md:px-6 lg:px-20 lg:py-28 max-w-7xl mx-auto">
          <UnderlineHeader
            title={t('Pages.Investor.Section-3.Title')}
            className="items-center"
            textClassName="text-3xl text-center lg:text-4xl text-neutral-50"
            underlineClassName="bg-neutral-50 w-16"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-10 mt-10 lg:space-y-0">
            <div className="w-full lg:w-1/2 lg:pr-10 flex flex-col space-y-5">
              {turnover.map((item, key) => {
                const { title, description } = item || {};
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
                {title}
              </h2>
              <BarChart
                className="mt-10 md:mt-3"
                data={{
                  labels:
                    chart?.map((turnover) => {
                      const { year } = turnover || {};
                      return `${year}`;
                    }) || [],
                  datasets: [
                    {
                      backgroundColor: 'rgb(250,250,250)',
                      borderColor: 'rgb(250,250,250)',
                      data:
                        chart?.map((turnover) => {
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
                        label: (item) => `${item.formattedValue} ${unit}`,
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

      {/* Section 4: ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title={t('Pages.Investor.Section-4.Title')}
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
          {/* ดูเพิ่มเติม */}
          <PrimaryButton
            title={t('Pages.Investor.Section-4.ReadMoreButton')}
            className="text-sm font-medium"
          />
        </Link>
      </section>

      {/* Section 5: เอกสารเผยแพร่ทั้งหมด */}
      <section className="px-4 pb-20 lg:pb-28 md:px-6 lg:px-16 max-w-7xl mx-auto">
        <UnderlineHeader
          title={t('Pages.Investor.Section-5.Title')}
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-wrap mt-10 md:mt-4 md:space-y-0">
          {allDocumentJson.edges.map(({ node }, key) => {
            const { title, createdAt, pdf, cover } = node;
            return (
              <DocumentCard
                key={key}
                title={title}
                className="w-1/2 md:w-1/4 px-2 py-4 lg:px-4 text-neutral-900"
                coverImage={cover?.childImageSharp?.gatsbyImageData}
                createdAt={createdAt}
                toFile={pdf}
              />
            );
          })}
        </div>
      </section>

      {/* Section 6: ติดต่อนักลงทุนสัมพันธ์ */}
      <ContactInvestorSection />
    </MainLayout>
  );
};

export default InvestorPage;

export const query = graphql`
  query InvestorPage($language: String!) {
    allSetAnnouncementJson(sort: { fields: createdAt, order: DESC }, limit: 6) {
      edges {
        node {
          title
          createdAt
          pdf
        }
      }
    }
    allDocumentJson(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          createdAt
          title
          pdf
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { eq: "translation" } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
