import PrimarySection from '@/components/sections/PrimarySection';
import MainLayout from '@/layouts/MainLayout';
import { graphql, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

type OrganizationChartProps = PageProps<GatsbyTypes.OrganizationChartPageQuery>;

const OrganizationChart: React.FC<OrganizationChartProps> = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      {/* Section 1: โครงสร้างองค์กร */}
      <PrimarySection title={t('section-1-title')} />
      {/* Section 2: ณ เดือนกันยายน 2565 */}
      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto space-y-10">
        <h2 className="text-neutral-900 font-bold">{t('section-2-title')}</h2>
        <StaticImage
          src="../../../images/organization-chart.jpeg"
          alt="tonghuaholding organization chart"
          className="w-full"
        />
      </section>
    </MainLayout>
  );
};

export default OrganizationChart;

export const query = graphql`
  query OrganizationChartPage($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { eq: "org-chart" } }
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
