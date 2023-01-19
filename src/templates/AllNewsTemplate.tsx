import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { NewsCard } from '@/components/cards';
import UnderlineHeader from '@/components/UnderlineHeader';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '@/components/Seo';
import Pagination from '@/components/Pagination';

export type AllNewsTemplatePageContext = {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  feedBasePath: string;
  feedRootPath?: string;
  gardenBasePath: string;
};

const AllNewsTemplate = ({
  data: { allMarkdownRemark },
  pageContext,
}: PageProps<GatsbyTypes.AllNewsTemplateQuery, AllNewsTemplatePageContext>) => {
  const { t } = useTranslation();

  const { currentPage, numPages } = pageContext;

  const news = allMarkdownRemark.nodes;

  return (
    <MainLayout>
      <Seo
        title={t('Seo.NewsRoom.AllNewsPage.Title')}
        description={t('Seo.NewsRoom.AllNewsPage.Desc')}
      />

      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto space-y-16 lg:space-y-10">
        <UnderlineHeader
          title={t('Pages.NewsRoom.AllNewsPage.Section-1.List-1')}
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {news.map(({ frontmatter }, key) => {
            const { title, description, date, cover, category, slug } =
              frontmatter || {};
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
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          feedBasePath="/newsroom/all-news"
          feedRootPath="/newsroom/all-news"
          className="mt-10 lg:mt-16"
        />
      </section>
    </MainLayout>
  );
};

export default AllNewsTemplate;

export const pageQuery = graphql`
  query AllNewsTemplate($language: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          lang: { eq: $language }
          category: { regex: "/newsroom/news/" }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          description
          date(formatString: "DD MMMM YYYY")
          slug
          category
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
