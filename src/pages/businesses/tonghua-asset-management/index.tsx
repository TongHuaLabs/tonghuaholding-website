import React from 'react';
import UnderlineHeader from '@/components/UnderlineHeader';
import Gallery from '@/components/Gallery';
import BrandingSection from '@/components/sections/BrandingSection';
import { graphql, PageProps } from 'gatsby';
import BusinessesSection from '@/components/sections/BusinessesSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '@/components/Seo';

type TonghuaAssetManagementProps =
  PageProps<GatsbyTypes.TonghuaAssetManagementPageQueryQuery>;

const TonghuaAssetManagement: React.FC<TonghuaAssetManagementProps> = ({
  data,
}) => {
  const { t } = useTranslation();

  const { markdownRemark, businessesJson } = data;
  const tonghuaAsset = businessesJson?.data && businessesJson?.data[1];
  const { title, description, image, slides } = tonghuaAsset || {}; // index 1: Tonghua Asset Management
  const { html } = markdownRemark || {};

  return (
    <MainLayout>
      <Seo
        title={t('Seo.Businesses.THAM.Title')}
        description={t('Seo.Businesses.THAM.Desc')}
      />

      {/* Section 1: บริษัท บริหารสินทรัพย์ตงฮั้ว จำกัด */}
      <BrandingSection
        title={title}
        description={description}
        image={image?.childImageSharp?.gatsbyImageData}
      />

      {/* Section 2: เกี่ยวกับบริษัท */}
      <section className="pb-10 lg:pb-16 px-4 md:px-6 lg:px-16 max-w-5xl mx-auto">
        <UnderlineHeader
          title={t('Pages.Businesses.Section-2.Title')}
          textClassName="text-2xl"
          underlineClassName="w-12 bg-primary-main"
        />
        <div
          dangerouslySetInnerHTML={{ __html: html || '<div />' }}
          className="mt-10 markdown"
        />
      </section>

      {/* Section 3: Image Gallery */}
      <section className="pb-10 lg:pb-20 px-4 md:px-6 lg:px-16 max-w-5xl mx-auto">
        <Gallery showNavigation={true} slidesPerView={1} images={slides} />
      </section>

      {/* Section 4: Map & Contact Info */}
      <ContactInfoSection
        phoneCall={[
          { phone: '(+66) 2236-9171', tel: '+6622369171' },
          { phone: '(+66) 2236-9172', tel: '+6622369172' },
        ]}
        mail="contactus@tonghuagroup.com"
        iframeUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
      />

      {/* Section 4: Businesses */}
      <BusinessesSection businesses={businessesJson} />
    </MainLayout>
  );
};

export default TonghuaAssetManagement;

export const query = graphql`
  query TonghuaAssetManagementPageQuery($language: String!) {
    businessesJson(language: { eq: $language }) {
      data {
        title
        to
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        slides {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    markdownRemark(
      frontmatter: {
        category: { eq: "/businesses/info/" }
        slug: { eq: "tonghua-asset-management" }
        lang: { eq: $language }
      }
    ) {
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
