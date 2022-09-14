import React from 'react';
import { NewsCard, SetAnnouncementCard } from '@/components/cards';
import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import UnderlineHeader from '@/components/UnderlineHeader';
import { graphql, Link, PageProps } from 'gatsby';
import { useLg, useMd } from '@/hooks/responsive';
import { SeeAllButton } from '@/components/buttons';

type NewsRoomPageProps = PageProps<GatsbyTypes.NewsRoomPageQuery>;

const NewsRoomPage: React.FC<NewsRoomPageProps> = ({ data }) => {
  const md = useMd();
  const lg = useLg();

  const { allMarkdownRemark, allSetAnnouncementJson } = data;
  const news = allMarkdownRemark.edges;

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
          title="ข่าวประชาสัมพันธ์ TH"
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col mt-10 md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {news.map(({ node }, key) => {
            const { title, description, date, cover, slug } =
              node.frontmatter || {};
            return (
              <NewsCard
                title={title}
                className="md:w-1/2 lg:w-1/3 md:px-4 md:py-6"
                description={description}
                coverImage={cover?.childImageSharp?.gatsbyImageData}
                createdAt={date}
                href={slug}
                key={key}
              />
            );
          })}
        </div>
        <Link
          to="/newsroom/all-news/"
          className="flex w-max mx-auto mt-10 md:mt-4"
        >
          <SeeAllButton />
        </Link>
      </section>

      {/* ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-20 md:px-6 lg:px-16 lg:py-28 max-w-7xl mx-auto">
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
          to="/newsroom/all-set-announcement/"
          className="flex w-max mx-auto mt-10 md:mt-4"
        >
          <SeeAllButton />
        </Link>
      </section>
    </>
  );
};

export default NewsRoomPage;

export const query = graphql`
  query NewsRoomPage {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/newsroom/news/" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            lang
            slug
            title
            date(formatString: "DD/MM/YYYY")
            description
            cover {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
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
  }
`;
