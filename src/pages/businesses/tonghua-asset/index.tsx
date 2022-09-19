import React from 'react';
import UnderlineHeader from '@/components/UnderlineHeader';
import Gallery from '@/components/Gallery';
import BrandingSection from '@/components/sections/BrandingSection';
import { graphql, PageProps } from 'gatsby';
import filter from 'lodash/filter';
import BusinessesSection from '@/components/sections/BusinessesSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type TongHuaAssetProps = PageProps<GatsbyTypes.TongHuaAssetPageQueryQuery>;

const TongHuaAsset: React.FC<TongHuaAssetProps> = ({ data }) => {
  const { allBusinessesJson, markdownRemark } = data;

  const info = filter(allBusinessesJson.edges, (x) => x.node.key === 'tha')[0]
    .node;

  const { title, description, image, slides } = info;
  const { html } = markdownRemark || {};

  const showcase: IGatsbyImageData[] = [];

  slides &&
    slides.forEach((image) => {
      if (image?.childImageSharp) {
        showcase.push(image?.childImageSharp?.gatsbyImageData);
      }
    });

  return (
    <>
      <BrandingSection
        title={title}
        description={description}
        image={image?.childImageSharp?.gatsbyImageData}
      />

      {/* เกี่ยวกับบริษัท */}
      <section className="pb-10 lg:pb-16 px-4 md:px-6 lg:px-16 max-w-5xl mx-auto">
        <UnderlineHeader
          title="เกี่ยวกับบริษัท"
          textClassName="text-2xl"
          underlineClassName="w-12 bg-primary-main"
        />
        <div
          dangerouslySetInnerHTML={{ __html: html || '<div />' }}
          className="mt-10 markdown"
        />
      </section>

      {/* Image Gallery */}
      <section className="pb-10 lg:pb-20 px-4 md:px-6 lg:px-16 max-w-5xl mx-auto">
        <Gallery showNavigation={true} slidesPerView={1} images={showcase} />
      </section>

      {/* Map & Contact Info */}
      <ContactInfoSection
        phoneCall={[
          { phone: '(+66) 2236-9171-6', tel: '+66223691716' },
          { phone: '(+66) 2236-0143-44', tel: '+662236014344' },
        ]}
        mail="contact@tonghuaholding"
        iframeUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
      />

      {/* Businesses */}
      <BusinessesSection allBusinessesJson={allBusinessesJson} />
    </>
  );
};

export default TongHuaAsset;

export const query = graphql`
  query TongHuaAssetPageQuery {
    allBusinessesJson {
      edges {
        node {
          key
          title
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          to
          slides {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: "/businesses/info/tha" } }) {
      html
    }
  }
`;
