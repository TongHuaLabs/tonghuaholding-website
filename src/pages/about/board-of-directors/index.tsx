import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import UnderlineHeader from '@/components/UnderlineHeader';
import React from 'react';
import { BODCard } from '@/components/cards';
import { graphql, PageProps } from 'gatsby';

type BoardOfDirectorsPageProps = PageProps<GatsbyTypes.BoardOfDirectorsQuery>;

const BoardOfDirectors: React.FC<BoardOfDirectorsPageProps> = ({ data }) => {
  const { bod } = data;

  return (
    <>
      <ObliqueLineSection title="คณะกรรมการบริษัท" />
      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        <UnderlineHeader
          title="คณะกรรมการบริษัท"
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col sm:flex-row sm:flex-wrap mt-6 space-y-6 sm:space-y-0">
          {bod.edges.map(({ node }, key) => {
            const { name, occupation, profileImage, slug } =
              node.childMarkdownRemark?.frontmatter || {};
            return (
              <BODCard
                name={name}
                occupation={occupation}
                profileImage={profileImage}
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
    bod: allFile(
      filter: { relativeDirectory: { eq: "about-markdown/bod" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              occupation
              profileImage
              slug
            }
          }
        }
      }
    }
  }
`;
