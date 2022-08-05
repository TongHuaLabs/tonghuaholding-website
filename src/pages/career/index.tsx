import React from 'react';
import CareerOffice from '@images/career-office.png';
import CoreValue from '@images/core-value.svg';
import DotPattern from '@images/dot-pattern.inline.svg';
import { graphql, PageProps } from 'gatsby';
import { useMd, useLg } from '@/hooks/responsive';
import Gallery from '@/components/Gallery';
import EllipseSvg from '@/icons/ellipse.inline.svg';
import { useIntl } from 'gatsby-plugin-intl';
import DNA from '@/components/DNA';
import { TestimonialCard, OpportunityCard } from '@/components/cards';
import { filter } from 'lodash';

type CareerPageProps = PageProps<GatsbyTypes.CareerPageQuery>;

const CareerPage: React.FC<CareerPageProps> = ({ data }) => {
  const intl = useIntl();
  const md = useMd();
  const lg = useLg();

  const { locale } = intl;

  const { allDnaJson, allTeamJson, allFile } = data;
  const teams = allTeamJson.edges;
  const dnas = allDnaJson.edges;

  // select the first 3 elements after filtered
  const markdown = filter(allFile.edges, {
    node: {
      sourceInstanceName: locale === 'th' ? 'markdown-th' : 'markdown-en',
    },
  }).slice(0, 3);

  return (
    <>
      {/* LIFE  @TONG HUA */}
      <section
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${CareerOffice})`,
          backgroundSize: 'cover',
        }}
        className="flex justify-center h-[75vh] items-center px-4"
      >
        <h2 className="text-4xl font-bold md:text-5xl text-neutral-50">
          {intl.formatMessage({ id: 'career.firstSection.header' })}
        </h2>
      </section>
      {/* Core Value */}
      <section
        style={{
          background: `url(${CoreValue})`,
          backgroundSize: 'contain',
        }}
        className="flex flex-col items-center justify-center px-4 md:px-6 py-20 lg:py-28 lg:px-36"
      >
        <h2 className="text-4xl whitespace-pre-line md:whitespace-normal font-medium text-center text-neutral-50">
          {intl.formatMessage({ id: 'career.secondSection.header' })}
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-neutral-50">
          {intl.formatMessage({ id: 'career.secondSection.description' })}
        </p>
        <div className="mt-10 flex items-center space-x-10 md:space-x-20">
          {dnas.map(({ node }, key) => (
            <DNA text={node.dna} key={key} />
          ))}
        </div>
      </section>
      {/* Thoughts From Our Team */}
      <section className="overflow-hidden py-20 lg:py-28 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          {intl.formatMessage({ id: 'career.thirdSection.header' })}
          <hr className="w-16 h-1 mx-auto mt-2 bg-primary-main" />
        </h2>
        <div className="px-4 md:px-6 lg:px-16 2xl:px-0 max-w-7xl mx-auto relative">
          <TestimonialCard
            showNavigation={lg}
            slidesPerView={lg ? 3 : md ? 2 : 1}
            data={teams}
          />
          <EllipseSvg className="absolute ellipse lg:-top-14 xl:-top-24 -top-7 -right-48" />
        </div>
      </section>
      {/* Performace Slide */}
      <section className="pb-20 relative flex flex-col">
        <div className="w-28 h-56 bg-primary-main absolute" />
        <div className="px-4 md:px-16 mt-20">
          <Gallery
            showNavigation={lg}
            slidesPerView={1}
            data={[
              'https://picsum.photos/500/500',
              'https://picsum.photos/600/600',
              'https://picsum.photos/700/700',
              'https://picsum.photos/800/800',
              'https://picsum.photos/900/900',
              'https://picsum.photos/1000/1000',
            ]}
          />
        </div>
        <div className="w-28 absolute bottom-0 h-56 bg-primary-main self-end" />
      </section>
      {/* Career Opportunity */}
      <section className="py-20 relative px-4 md:px-6 xl:px-36 2xl:px-0 xl:max-w-7xl mx-auto">
        <DotPattern className="absolute left-0 text-primary-main" />
        <h2 className="text-3xl relative font-medium pt-12">
          {intl.formatMessage({ id: 'career.fourthSection.header' })}
        </h2>
        <hr className="h-px mt-2 border-0 bg-neutral-900" />
        <div className="flex flex-col bg-white relative mt-10 space-y-6 md:flex-wrap md:space-y-0 md:flex-row">
          {markdown.map(({ node }, key) => {
            const { frontmatter } = node.childMarkdownRemark || {};
            if (!frontmatter) {
              return null;
            }
            const { title, location, contract, description, slug } =
              frontmatter;
            return (
              <div key={key} className="md:w-1/2 lg:w-1/3 md:p-2 lg:p-3">
                <OpportunityCard
                  description={description}
                  occupation={title}
                  location={location}
                  contract={contract}
                  href={slug}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CareerPage;

export const query = graphql`
  query CareerPage {
    allTeamJson {
      edges {
        node {
          profileImage
          name
          occupation
          comment
        }
      }
    }
    allDnaJson {
      edges {
        node {
          dna
        }
      }
    }
    allFile(
      filter: { relativeDirectory: { eq: "career-markdown" } }
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
              location
              description
              contract
            }
          }
          sourceInstanceName
        }
      }
    }
  }
`;
