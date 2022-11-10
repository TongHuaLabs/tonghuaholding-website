/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

type SeoProps = {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  image?: string;
  title: string;
};

function Seo({ description = '', image, title }: SeoProps) {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          pathPrefix
          siteMetadata {
            title
            description
            twitter
            defaultMetaImage
            siteUrl
          }
        }
      }
    `,
  );

  const {
    description: siteDescription,
    title: siteTitle,
    siteUrl,
    twitter,
    defaultMetaImage,
  } = site?.siteMetadata || {};

  const { pathPrefix } = site || {};

  const metaDescription = description || siteDescription;
  const defaultTitle = siteTitle;
  const metaImage = `${siteUrl}${image || `${pathPrefix}${defaultMetaImage}`}`;

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </>
  );
}

export default Seo;
