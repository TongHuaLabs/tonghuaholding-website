import React from 'react';
import TongHuaBuildingSVG from '@/images/tonghua-building.svg';
import Social from '@/components/Social';
import DotPattern from '@/images/dot-pattern.inline.svg';
import UnderlineHeader from '@/components/UnderlineHeader';
import BuildingPNG from '@/images/building.png';
import RedCircle from '@/components/information/RedCircle';
import Topic from '@/components/information/Topic';
import Tabs from '@/components/Tabs';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import OurBusiness from '@/components/panel/OurBusiness';
import classNames from 'classnames';
import ContactInvestorSection from '@/components/sections/ContactInvestorSection';
import { useLg } from '@/hooks/responsive';
import {
  LatestNewsCard,
  BusinessCard,
  SetAnnouncementCard,
} from '@/components/cards';
import { graphql, Link, PageProps, withPrefix } from 'gatsby';

type IndexPageProps = PageProps<GatsbyTypes.IndexPageQuery>;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const isLg = useLg();

  const established = 1960;
  const currentYear = new Date().getFullYear();
  const companyAge = currentYear - established;

  const {
    allInformationJson,
    allOurBusinessJson,
    allBusinessesJson,
    allSetAnnouncementJson,
    news,
  } = data;

  const businesses = allBusinessesJson.edges;

  const latestNews = news.edges.slice(0, !isLg ? 4 : 3);

  const setNews = allSetAnnouncementJson.edges.slice(0, !isLg ? 4 : 3);

  const images = [
    '/images/image_1.png',
    '/images/image_2.png',
    '/images/image_3.png',
    '/images/image_4.png',
  ];

  return (
    <>
      {/* TONG HUA HOLDING PCL. */}
      <section
        style={{
          background: `linear-gradient(0deg, rgba(217, 35, 29, 0.8), rgba(217, 35, 29, 0.8)), url(${TongHuaBuildingSVG})`,
          backgroundSize: 'cover',
        }}
        className="flex flex-col items-left md:items-center justify-center relative landing px-6"
      >
        <div className="flex flex-col items-start justify-center space-y-4 md:items-center">
          <h1 className="text-4xl whitespace-pre-line font-bold md:text-center md:text-6xl lg:whitespace-normal text-neutral-50">
            {`TONG HUA\nHOLDING PCL.`}
          </h1>
          <h2 className="text-lg whitespace-pre-line text-left md:text-center md:text-2xl text-neutral-50 text-bold">
            {`62 ปี แห่งความซื่อสัตย์และมั่นคง\nTH ก้าวสู่ยุคใหม่ ขยายธุรกิจ เติบโตอย่างยืน`}
          </h2>
        </div>
        <Social
          className="space-x-10 mt-10 text-primary-main"
          backgroundClassName="bg-white"
        />
        <DotPattern className="text-neutral-50 z-10 absolute -top-2 left-3 opacity-80 md:hidden" />
        <DotPattern className="text-neutral-50 z-10 absolute bottom-2.5 right-3 opacity-80 md:hidden" />
      </section>

      {/* xx Years of Stability & Integrity */}
      <section className="relative px-4 md:px-6 lg:px-16 py-20 lg:py-28 2xl:max-w-7xl 2xl:px-0 mx-auto overflow-hidden 2xl:overflow-visible">
        <UnderlineHeader
          title={`${companyAge} Years of\nStability & Integrity `}
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl whitespace-pre-line"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="relative z-10 flex flex-col lg:flex-row lg:justify-center lg:items-center lg:mt-10">
          <div className="flex flex-wrap lg:items-center lg:flex-grow lg:h-64 xl:max-w-lg">
            {allInformationJson.edges.map(({ node }, key) => {
              const { title, description } = node;
              return (
                <Topic
                  title={title}
                  description={description}
                  className="w-1/2 md:w-1/4 pt-10 md:pt-10 lg:w-1/2 text-neutral-900"
                  key={key}
                />
              );
            })}
          </div>
          <div className="flex justify-center flex-wrap mt-20 rotate-45">
            {images.map((image, key) => (
              <div
                className={`w-1/2 flex p-1.5 ${
                  key % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
                key={key}
              >
                <img
                  className={classNames(
                    'object-cover',
                    key === 2
                      ? 'w-3/4 min-w-[96px] max-w-[128px] sm:max-w-[164px] md:max-w-[176px]'
                      : 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
                  )}
                  src={withPrefix(image)}
                />
              </div>
            ))}
          </div>
        </div>
        <DotPattern className="text-primary-main z-0 absolute bottom-36 sm:bottom-44 md:bottom-48 lg:bottom-32 left-0" />
        <RedCircle className="absolute bottom-24 md:bottom-36 md:right-6 -right-28 lg:-right-14 xl:-right-8 z-0" />
      </section>

      {/* ประเภทธุรกิจของเรา */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BuildingPNG})`,
          backgroundSize: 'cover',
        }}
      >
        <UnderlineHeader
          title="ประเภทธุรกิจของเรา"
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl text-neutral-50"
          underlineClassName="bg-primary-main w-16"
        />
        <Tabs
          className="px-4 md:px-6 lg:px-16 mt-10 max-w-7xl mx-auto"
          tabClassName="w-1/3 lg:w-[32%]"
          tabs={allOurBusinessJson.edges.map(({ node }) => {
            const { title } = node;
            return { title };
          })}
          components={allOurBusinessJson.edges.map(({ node }) => {
            const { title, description, cover } = node;
            return {
              child: (
                <OurBusiness
                  title={title}
                  description={description}
                  cover={cover}
                  className="mt-10"
                />
              ),
            };
          })}
        />
      </section>

      {/* บริษัทย่อยในเครือ */}
      <section className="pt-20 lg:pt-28">
        <UnderlineHeader
          title="บริษัทย่อยในเครือ"
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex relative z-10 px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 overflow-x-scroll hide-scrollbar lg:justify-around">
            {businesses.map(({ node }, key) => {
              const { title, image, description, to } = node;
              return (
                <div key={key} className="px-3 lg:px-0">
                  <BusinessCard
                    image={image}
                    title={title}
                    description={description}
                    to={to}
                    className="h-80 w-56 shadow-lg"
                  />
                </div>
              );
            })}
          </div>
          <div className="absolute z-0 bottom-0 left-0 bg-primary-main w-36 h-40 md:w-72" />
          <DotPattern className="text-primary-main z-0 absolute bottom-0 right-0" />
        </div>
      </section>

      {/* ข่าวสาร TH */}
      <section className="pl-4 pr-5 md:px-6 lg:px-16 pt-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title="ข่าวสาร TH"
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {latestNews.map(({ node }, key) => {
            const { title, description, date, cover, slug } =
              node.childMarkdownRemark?.frontmatter || {};
            return (
              <LatestNewsCard
                title={title}
                className="md:w-1/2 lg:w-1/3 md:p-4"
                description={description}
                coverImage={cover}
                createdAt={date}
                href={slug}
                key={key}
              />
            );
          })}
        </div>
        <Link to="/newsroom/all-news" className="flex w-max mx-auto">
          <PrimaryButton title="ดูเพิ่มเติม" className="text-sm font-medium" />
        </Link>
      </section>

      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 md:px-6 lg:px-16 pt-20 pb-20 lg:pt-28 lg:pb-28 max-w-7xl mx-auto space-y-10">
        <UnderlineHeader
          title="ข่าวแจ้งตลาดหลักทรัพย์"
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl"
          underlineClassName="bg-primary-main w-16"
        />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {setNews.map(({ node }, key) => {
            const { title, createdAt, pdf } = node || {};
            return (
              <div className="md:p-4 md:w-1/2 lg:w-1/3" key={key}>
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

      {/* ติดต่อนักลงทุนสัมพันธ์ */}
      <ContactInvestorSection />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allInformationJson {
      edges {
        node {
          title
          description
        }
      }
    }
    allOurBusinessJson {
      edges {
        node {
          title
          description
          cover
        }
      }
    }
    allBusinessesJson {
      edges {
        node {
          key
          title
          description
          image
          to
          slides
        }
      }
    }
    allSetAnnouncementJson(sort: { fields: createdAt, order: DESC }, limit: 4) {
      edges {
        node {
          title
          createdAt
          pdf
        }
      }
    }
    news: allFile(
      filter: { relativeDirectory: { eq: "newsroom-markdown/all-news/news" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              lang
              slug
              title
              date(formatString: "DD/MM/YYYY")
              description
              cover
            }
          }
          sourceInstanceName
        }
      }
    }
  }
`;