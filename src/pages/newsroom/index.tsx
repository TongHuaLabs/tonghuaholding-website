import React from 'react';
import {
  NewsCard,
  SetAnnouncementCard,
  DocumentCard,
} from '@/components/cards';
import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import UnderlineHeader from '@/components/UnderlineHeader';
import { graphql, PageProps } from 'gatsby';
import { useLg, useMd } from '@/hooks/responsive';
import SeeAll from '@/components/SeeAll';

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
        <UnderlineHeader title="ข่าวสาร TH" />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {markdown.map(({ node }, key) => {
            const { title, description, date, coverImage } =
              node.childMarkdownRemark?.frontmatter || {};
            return (
              <NewsCard
                title={title}
                className="md:w-1/2 lg:w-1/3 md:p-2"
                description={description}
                coverImage={coverImage}
                createdAt={date}
                key={key}
              />
            );
          })}
        </div>
        <SeeAll to="/newsroom/all-news" />
      </section>

      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 pt-20 space-y-10 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
        <UnderlineHeader title="ข่าวแจ้งตลาดหลักทรัพย์" />
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
        <SeeAll to="/newsroom/all-set-announcement" />
      </section>

      {/* เอกสารเผยแพร่ */}
      <section className="px-4 py-20 space-y-10 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto">
        <UnderlineHeader title="เอกสารเผยแพร่" />
        <div className="flex flex-wrap mt-10">
          {document.map(({ node }, key) => {
            const { title, createdAt, pdf, coverImage } = node;
            return (
              <DocumentCard
                key={key}
                title={title}
                className="w-1/2 md:w-1/4 p-2"
                coverImage={coverImage}
                createdAt={createdAt}
                toFile={pdf}
              />
            );
          })}
        </div>
        <SeeAll to="/newsroom/all-document" />
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
              coverImage
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
          coverImage
        }
      }
    }
  }
`;
