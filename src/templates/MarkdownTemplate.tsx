import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { ShareButton } from '@/components/buttons';
import { GatsbyImage } from 'gatsby-plugin-image';
import MainLayout from '@/layouts/MainLayout';
import Seo from '@/components/Seo';

type MarkdownTemplateProps = PageProps<GatsbyTypes.MarkdownTemplateQuery>;

const MarkdownTemplate = ({
  data: { markdownRemark, site },
}: MarkdownTemplateProps) => {
  const { siteMetadata, pathPrefix } = site || {};
  const { siteUrl } = siteMetadata || {};
  const { html, frontmatter } = markdownRemark || {};
  const { title, description, cover, slug, category, date } = frontmatter || {};

  const coverImage =
    cover?.childImageSharp?.gatsbyImageData.images.fallback.src;

  const shareUrl = `${siteUrl}${pathPrefix}${category}${slug}`;

  return (
    <MainLayout>
      <Seo title={title || ''} description={description} image={coverImage} />
      <section className="relative px-4 md:px-6 lg:px-16 py-10 lg:py-20 max-w-4xl mx-auto">
        <h1 className="font-bold text-2xl lg:text-3xl text-neutral-900">
          {title}
        </h1>
        <h2 className="text-sm text-neutral-600 mt-2">{date}</h2>
        <ShareButton url={shareUrl} className="mt-7" />
        {cover?.childImageSharp && (
          <div className="mt-10 cover-lg">
            <div className="!aspect-w-16 !aspect-h-9">
              <GatsbyImage
                alt={title || ''}
                image={cover.childImageSharp.gatsbyImageData}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: html || '<div />' }}
          className="mt-10 markdown"
        />
        <hr className="border-0 h-px bg-neutral-900 mt-10 w-full" />
        <ShareButton url={shareUrl} className="mt-10" />
      </section>
    </MainLayout>
  );
};

export default MarkdownTemplate;

export const pageQuery = graphql`
  query MarkdownTemplate(
    $language: String!
    $slug: String!
    $category: String!
  ) {
    site {
      pathPrefix
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(
      frontmatter: {
        lang: { eq: $language }
        category: { eq: $category }
        slug: { eq: $slug }
      }
    ) {
      html
      frontmatter {
        title
        slug
        category
        description
        date(formatString: "DD/MM/YYYY")
        cover {
          childImageSharp {
            gatsbyImageData
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
