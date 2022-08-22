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

  // select the first 6 elements after filtered
  const markdown = allFile.edges.slice(0, 6);

  const setAnnouncement = allSetAnnouncementJson.edges.slice(
    0,
    lg ? 9 : md ? 6 : 3,
  );

  const document = allDocumentJson.edges.slice(0, 4);

  return (
    <>
      <ObliqueLineSection title="ข่าวและกิจกรรม" />

      {/* News */}
      <section className="px-4 pt-10 space-y-10 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
        <UnderlineHeader
          title="ข่าวสาร TH"
          textClassName="text-2xl"
          underlineClassName="bg-primary-main"
        />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {markdown.map(({ node }, key) => {
            const { title, description, date, cover, slug } =
              node.childMarkdownRemark?.frontmatter || {};
            return (
              <NewsCard
                title={title}
                className="md:w-1/2 lg:w-1/3 md:p-2"
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
          <SeeAllButton />
        </Link>
      </section>

      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 pt-20 space-y-10 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
        <UnderlineHeader
          title="ข่าวแจ้งตลาดหลักทรัพย์"
          textClassName="text-2xl"
          underlineClassName="bg-primary-main"
        />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {setAnnouncement.map(({ node }, key) => {
            const { title, createdAt, pdf } = node;
            return (
              <div className="md:p-2 md:w-1/2 lg:w-1/3" key={key}>
                <SetAnnouncementCard
                  title={title}
                  createAt={createdAt}
                  readMore={`/pdf/${pdf}`}
                />
              </div>
            );
          })}
        </div>
        <Link
          to="/newsroom/all-set-announcement"
          className="flex w-max mx-auto"
        >
          <SeeAllButton />
        </Link>
      </section>

      {/* เอกสารเผยแพร่ */}
      <section className="px-4 py-20 space-y-10 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
        <UnderlineHeader
          title="เอกสารเผยแพร่"
          textClassName="text-2xl"
          underlineClassName="bg-primary-main"
        />
        <div className="flex flex-wrap mt-10">
          {document.map(({ node }, key) => {
            const { title, createdAt, pdf, cover } = node;
            return (
              <DocumentCard
                key={key}
                title={title}
                className="w-1/2 md:w-1/4 p-2"
                coverImage={cover}
                createdAt={createdAt}
                toFile={pdf}
              />
            );
          })}
        </div>
        <Link to="/newsroom/all-document" className="flex w-max mx-auto">
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
    allDocumentJson(sort: { fields: createdAt, order: DESC }) {
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
