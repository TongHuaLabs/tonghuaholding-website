import React from 'react';
import {
  NewsCard,
  SetAnnouncementCard,
  DocumentCard,
} from '@/components/cards';
import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import UnderlineHeader from '@/components/UnderlineHeader';
import { graphql, Link, PageProps } from 'gatsby';
import { useLg, useMd } from '@/hooks/responsive';
import { SeeAllButton } from '@/components/buttons';

type NewsRoomPageProps = PageProps<GatsbyTypes.NewsRoomPageQuery>;

const NewsRoomPage: React.FC<NewsRoomPageProps> = ({ data }) => {
  const md = useMd();
  const lg = useLg();

  const { allFile, allSetAnnouncementJson, allDocumentJson } = data;
  const news = allFile.edges;
  const document = allDocumentJson.edges;

  const setAnnouncement = allSetAnnouncementJson.edges.slice(
    0,
    lg || md ? 6 : 3,
  );

  return (
    <>
      <ObliqueLineSection title="ข่าวและกิจกรรม" />

      {/* News */}
      <section className="px-4 pt-10 md:px-6 lg:px-16 lg:pt-20 max-w-7xl mx-auto">
        <UnderlineHeader
          title="ข่าวสาร TH"
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col mt-10 md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {news.map(({ node }, key) => {
            const { title, description, date, cover, slug } =
              node.childMarkdownRemark?.frontmatter || {};
            return (
              <NewsCard
                title={title}
                className="md:w-1/2 lg:w-1/3 md:px-4 md:py-6"
                description={description}
                coverImage={cover}
                createdAt={date}
                href={slug}
                key={key}
              />
            );
          })}
        </div>
        <Link
          to="/newsroom/all-news"
          className="flex w-max mx-auto mt-10 md:mt-4"
        >
          <SeeAllButton />
        </Link>
      </section>

      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 pt-20 md:px-6 lg:px-16 lg:pt-28 max-w-7xl mx-auto">
        <UnderlineHeader
          title="ข่าวแจ้งตลาดหลักทรัพย์"
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col mt-10 md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {setAnnouncement.map(({ node }, key) => {
            const { title, createdAt, pdf } = node;
            return (
              <div className="md:px-4 md:py-6 md:w-1/2 lg:w-1/3" key={key}>
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
          className="flex w-max mx-auto mt-10 md:mt-4"
        >
          <SeeAllButton />
        </Link>
      </section>

      {/* เอกสารเผยแพร่ */}
      <section className="px-4 py-20 md:px-6 lg:px-16 lg:py-28 max-w-7xl mx-auto">
        <UnderlineHeader
          title="เอกสารเผยแพร่"
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-wrap mt-6">
          {document.map(({ node }, key) => {
            const { title, createdAt, pdf, cover } = node;
            return (
              <DocumentCard
                key={key}
                title={title}
                className="w-1/2 md:w-1/4 px-2 py-4 lg:px-4 text-neutral-900"
                coverImage={cover}
                createdAt={createdAt}
                toFile={pdf}
              />
            );
          })}
        </div>
        <Link to="/newsroom/all-document" className="flex w-max mx-auto mt-10">
          <SeeAllButton />
        </Link>
      </section>
    </>
  );
};

export default NewsRoomPage;

export const query = graphql`
  query NewsRoomPage {
    allFile(
      filter: { relativeDirectory: { eq: "newsroom-markdown/all-news/news" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 6
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
    allSetAnnouncementJson(sort: { fields: createdAt, order: DESC }, limit: 9) {
      edges {
        node {
          title
          createdAt
          pdf
        }
      }
    }
    allDocumentJson(sort: { fields: createdAt, order: DESC }, limit: 4) {
      edges {
        node {
          createdAt
          title
          pdf
          cover
        }
      }
    }
  }
`;
