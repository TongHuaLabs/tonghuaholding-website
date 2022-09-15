import PrimarySection from '@/components/sections/PrimarySection';
import UnderlineHeader from '@/components/UnderlineHeader';
import React from 'react';
import { BODCard } from '@/components/cards';
import { graphql, PageProps } from 'gatsby';

type BoardOfDirectorsPageProps = PageProps<GatsbyTypes.BoardOfDirectorsQuery>;

const BoardOfDirectors: React.FC<BoardOfDirectorsPageProps> = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <>
      <PrimarySection title="คณะกรรมการบริษัท" />
      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        <UnderlineHeader
          title="คณะกรรมการบริษัท"
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col sm:flex-row sm:flex-wrap mt-6 space-y-6 sm:space-y-0">
          {allMarkdownRemark.edges.map(({ node }, key) => {
            const { name, occupation, cover, slug } = node.frontmatter || {};
            return (
              <BODCard
                name={name}
                occupation={occupation}
                profileImage={cover?.childImageSharp?.gatsbyImageData}
                href={slug}
                className="w-4/5 mx-auto sm:mx-0 sm:w-1/2 md:w-1/4 px-2 py-4 lg:px-4"
                key={key}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BoardOfDirectors;

export const query = graphql`
  query BoardOfDirectors {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/about/board-of-directors/" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            occupation
            slug
            cover {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
