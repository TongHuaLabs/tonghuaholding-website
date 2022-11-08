import React from 'react';
import { NewsCard, SetAnnouncementCard } from '@/components/cards';
import PrimarySection from '@/components/sections/PrimarySection';
import UnderlineHeader from '@/components/UnderlineHeader';
import { graphql, Link, PageProps } from 'gatsby';
import { useLg, useMd } from '@/hooks/responsive';
import { PrimaryButton } from '@/components/buttons';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '@/components/Seo';

type NewsRoomPageProps = PageProps<GatsbyTypes.NewsRoomPageQuery>;

const NewsRoomPage: React.FC<NewsRoomPageProps> = ({ data }) => {
  const md = useMd();
  const lg = useLg();
  const { t } = useTranslation();

  const { allSetAnnouncementJson, allMarkdownRemark } = data;
  const news = allMarkdownRemark.edges;

  const setAnnouncement = allSetAnnouncementJson.edges.slice(
    0,
    lg || md ? 6 : 3,
  );

  return (
    <MainLayout>
      <Seo
        title={t('Seo.NewsRoom.MainPage.Title')}
        description={t('Seo.NewsRoom.MainPage.Desc')}
      />

      {/* Section 1: หน้าหลักข่าวสาร TH */}
      <PrimarySection title={t('Pages.NewsRoom.MainPage.Section-1.Title')} />

      {/* Section 2: ข่าวประชาสัมพันธ์บริษัท */}
      <section className="px-4 pt-10 md:px-6 lg:px-16 lg:pt-20 max-w-7xl mx-auto">
        <UnderlineHeader
          title={t('Pages.NewsRoom.MainPage.Section-2.Title')}
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col mt-10 md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {news.map(({ node }, key) => {
            const { title, description, date, cover, category, slug } =
              node.frontmatter || {};
            return (
              <NewsCard
                title={title}
                className="md:w-1/2 lg:w-1/3 md:px-4 md:py-6"
                description={description}
                coverImage={cover?.childImageSharp?.gatsbyImageData}
                createdAt={date}
                href={`${category}${slug}`}
                key={key}
              />
            );
          })}
        </div>
        <Link
          to="/newsroom/all-news/"
          className="flex w-max mx-auto mt-10 md:mt-4"
        >
          <PrimaryButton
            title={t('Pages.Home.Section-6.ReadMoreButton')}
            className="text-sm font-medium"
          />
        </Link>
      </section>

      {/* Section 3: ข่าวแจ้งตลาดหลักทรัพย์ */}
      <section className="px-4 py-20 md:px-6 lg:px-16 lg:py-28 max-w-7xl mx-auto">
        <UnderlineHeader
          title={t('Pages.NewsRoom.MainPage.Section-3.Title')}
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
          <PrimaryButton
            title={t('Pages.NewsRoom.MainPage.Section-3.ReadMoreButton')}
            className="text-sm font-medium"
          />
        </Link>
      </section>
    </MainLayout>
  );
};

export default NewsRoomPage;

export const query = graphql`
  query NewsRoomPage($language: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { regex: "/newsroom/news/" }
          lang: { eq: $language }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            lang
            slug
            category
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
