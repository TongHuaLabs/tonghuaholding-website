import React from 'react';
import UnderlineHeader from '@/components/UnderlineHeader';
import Gallery from '@/components/Gallery';
import BrandingSection from '@/components/sections/BrandingSection';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import { BusinessCard } from '@/components/cards';
import Circles from '@/images/circles.inline.svg';
import { graphql, PageProps } from 'gatsby';
import filter from 'lodash/filter';

type TongHuaMediaLabsProps =
  PageProps<GatsbyTypes.TongHuaMediaLabsPageQueryQuery>;

const TongHuaMediaLabs: React.FC<TongHuaMediaLabsProps> = ({ data }) => {
  const { allBusinessesJson, markdownRemark } = data;

  const info = filter(allBusinessesJson.edges, (x) => x.node.key === 'thml')[0]
    .node;

  const { title, description, image } = info;
  const { html } = markdownRemark || {};

  return (
    <>
      <BrandingSection title={title} description={description} image={image} />

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
        <Gallery
          showNavigation={true}
          slidesPerView={1}
          images={info.slides as string[]}
        />
      </section>

      {/* Map & Contact Info */}
      <section className="flex flex-col md:flex-row-reverse">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.748859222239!2d100.51239781483024!3d13.733648990359175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999cb642394d%3A0x30bc126296234b83!2sTONG%20HUA%20HOLDING%20PCL!5e0!3m2!1sen!2sth!4v1657095822723!5m2!1sen!2sth"
          className="w-full h-80 border-0 md:w-1/2 md:h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col h-80 bg-primary-main md:w-1/2 px-6 lg:px-24 xl:px-32 md:px-8 md:h-96 justify-center">
          <UnderlineHeader
            title="ข้อมูลการติดต่อ"
            textClassName="text-neutral-50 text-2xl"
            underlineClassName="w-12 bg-neutral-200"
          />
          <PhoneCall
            phone="(+66) 2236-9171-6"
            tel="+66223691716"
            className="mt-5 text-neutral-50 underline underline-offset-1"
            textClassName="text-xl"
          />
          <PhoneCall
            phone="(+66) 2236-0143-44"
            tel="+662236014344"
            className="mt-2 text-neutral-50 underline underline-offset-1"
            textClassName="text-xl"
          />
          <MailTo
            mail="contactus@tonghuagroup.com"
            className="mt-6 text-neutral-50 underline underline-offset-1"
            textClassName="text-xl"
          />
        </div>
      </section>

      {/* Businesses */}
      <section className="py-20 relative bg-neutral-700 overflow-hidden">
        <div className="flex relative z-10 overflow-x-scroll hide-scrollbar md:px-6 px-4 max-w-7xl mx-auto lg:px-0 lg:justify-around">
          {allBusinessesJson.edges.map(({ node }, key) => {
            const { title, image, description, to } = node;
            return (
              <div key={key} className="px-4 lg:px-0">
                <BusinessCard
                  image={image}
                  title={title}
                  description={description}
                  to={to}
                  className="h-80 w-56"
                />
              </div>
            );
          })}
        </div>
        <Circles className="absolute bottom-0 w-full h-60 xl:h-80 left-0" />
      </section>
    </>
  );
};

export default TongHuaMediaLabs;

export const query = graphql`
  query TongHuaMediaLabsPageQuery {
    allBusinessesJson {
      edges {
        node {
          key
          title
          description
          image
          to
          slides
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: "/businesses/info/thml" } }) {
      html
    }
  }
`;
