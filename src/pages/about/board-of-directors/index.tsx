import PrimarySection from '@/components/sections/PrimarySection';
import UnderlineHeader from '@/components/UnderlineHeader';
import React from 'react';
import { BODCard } from '@/components/cards';
import { graphql, PageProps } from 'gatsby';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';

type BoardOfDirectorsPageProps = PageProps<GatsbyTypes.BoardOfDirectorsQuery>;

const BoardOfDirectors: React.FC<BoardOfDirectorsPageProps> = ({ data }) => {
  const { t } = useTranslation();
  const { allMarkdownRemark } = data;

  return (
    <MainLayout>
      {/* Section 1: คณะกรรมการบริษัท */}
      <PrimarySection title={t('Pages.About.BodPage.Section-1.Title')} />
      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        {/* Section 1.1: คณะกรรมการบริษัท */}
        <UnderlineHeader
          title={t('Pages.About.BodPage.Section-1-1.Title')}
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col sm:flex-row sm:flex-wrap mt-6 space-y-6 sm:space-y-0">
          {allMarkdownRemark.edges.map(({ node }, key) => {
            const { name, cover } = node.frontmatter || {};
            return (
              <BODCard
                name={name}
                profileImage={cover?.childImageSharp?.gatsbyImageData}
                className="w-4/5 mx-auto sm:mx-0 sm:w-1/2 md:w-1/4 px-2 py-4 lg:px-4"
                key={key}
              />
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default BoardOfDirectors;

export const query = graphql`
  query BoardOfDirectors($language: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/about/board-of-directors/" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            cover {
              childImageSharp {
                gatsbyImageData
              }
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
