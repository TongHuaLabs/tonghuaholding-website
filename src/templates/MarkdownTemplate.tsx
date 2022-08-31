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
    <section className="relative px-4 md:px-6 lg:px-16 py-10 lg:py-20 max-w-4xl mx-auto">
      <h1 className="font-bold text-2xl lg:text-3xl text-neutral-900">
        {title}
      </h1>
      <h2 className="text-sm text-neutral-600 mt-2">{date}</h2>
      <ShareButton url={`${siteUrl}${slug}`} className="mt-7" />
      {cover && (
        <div className="mt-10">
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
        className="mt-10 markdown"
      />
      <hr className="border-0 h-px bg-neutral-900 mt-10 w-full" />
      <ShareButton url={`${siteUrl}${slug}`} className="mt-10" />
    </section>
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
