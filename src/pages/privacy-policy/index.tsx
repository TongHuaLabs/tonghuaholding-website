import { graphql, PageProps } from 'gatsby';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import Seo from '@/components/Seo';

type PrivacyPolicyProps = PageProps<GatsbyTypes.PrivacyPolicyPageQuery>;

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ data }) => {
  const { html } = data.markdownRemark || {};

  return (
    <MainLayout>
      <Seo title="Privacy Policy" />
      <section className="px-4 md:px-6 lg:px-16 py-10 lg:py-20 max-w-4xl mx-auto">
        <div
          dangerouslySetInnerHTML={{ __html: html || '<div />' }}
          className="mt-10 markdown"
        />
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;

export const query = graphql`
  query PrivacyPolicyPage($language: String!) {
    markdownRemark(frontmatter: { slug: { eq: "privacy-policy" } }) {
      html
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
