import React from 'react';
import { graphql, PageProps, withPrefix } from 'gatsby';
import { ShareButton } from '@/components/buttons';

type MarkdownTemplateProps = PageProps<GatsbyTypes.MarkdownTemplateQuery>;

const MarkdownTemplate = ({
  data: { markdownRemark, site },
}: MarkdownTemplateProps) => {
  const { siteMetadata } = site || {};
  const { siteUrl } = siteMetadata || {};
  const { html, frontmatter } = markdownRemark || {};
  const { title, cover, slug, date } = frontmatter || {};

  return (
    <>
      <section className="px-4 md:px-6 py-10 md:py-16 2xl:max-w-7xl mx-auto 2xl:px-0 relative">
        <h1 className="font-medium text-2xl">{title}</h1>
        <h2 className="text-sm text-neutral-400 mt-2">{date}</h2>
        <ShareButton url={`${siteUrl}${slug}`} className="mt-4" />
        {cover && (
          <div className="max-w-4xl mt-10">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={withPrefix(cover || '')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: html || '<div />' }}
          className="mt-10"
        />
      </section>
    </>
  );
};

export default MarkdownTemplate;

export const pageQuery = graphql`
  query MarkdownTemplate($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        cover
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
