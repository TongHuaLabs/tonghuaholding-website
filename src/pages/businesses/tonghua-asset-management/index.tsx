import React from 'react';
import {
  BadgeCheckIcon,
  ChartPieIcon,
  ChartBarIcon,
} from '@heroicons/react/solid';
import { LightBulbIcon } from '@heroicons/react/solid';
import Blockqoute from '@/components/information/Blockquote';
import Info from '@/components/information/Info';
import UnderlineHeader from '@/components/UnderlineHeader';
import RedCircle from '@/components/information/RedCircle';
import Gallery from '@/components/Gallery';
import BrandingSection from '@/components/sections/BrandingSection';
import PhoneCall from '@/components/information/PhoneCall';
import MailTo from '@/components/information/MailTo';
import { BusinessCard } from '@/components/cards';
import Circles from '@/images/circles.inline.svg';
import { graphql, PageProps } from 'gatsby';
import filter from 'lodash/filter';
import Badge from '@/components/information/Badge';

type TongHuaAssetManagementProps =
  PageProps<GatsbyTypes.TongHuaAssetManagementPageQueryQuery>;

const TongHuaAssetManagement: React.FC<TongHuaAssetManagementProps> = ({
  data,
}) => {
  const { allBusinessesJson } = data;
  const businesses = filter(
    allBusinessesJson.edges,
    (x) => x.node.key !== 'tham',
  );

  const thamSlides: string[] = filter(
    allBusinessesJson.edges,
    (x) => x.node.key === 'tham',
  )[0].node.slides as any;

  return (
    <>
      <BrandingSection
        title="บริษัท TONG HUA ASSET MANAGEMENT"
        description="ดำเนินธุรกิจบริหารหนี้ด้อยคุณภาพ"
        image="/images/tonghua-asset-management.svg"
      />
      {/* วิสัยทัศน์ และพันธกิจ */}
      <section className="flex flex-col space-y-10 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto px-4">
        <Badge
          title="วิสัยทัศน์ และพันธกิจ"
          className="bg-neutral-600 text-xl text-neutral-50 font-medium"
        />
        <Blockqoute
          icon={
            <div className="flex space-x-2">
              <LightBulbIcon className="h-6 w-6 text-primary-main" />
              <h3 className="text-xl font-medium text-primary-main">
                วิสัยทัศน์
              </h3>
            </div>
          }
          title="สร้างสรรค์มูลค่าที่ยั่งยืนให้กับผู้ที่มีส่วนได้เสียผ่านการลงทุนใน Synergy และเทคโนโลยี"
        />
        <Blockqoute
          icon={
            <div className="flex space-x-2">
              <LightBulbIcon className="h-6 w-6 text-primary-main" />
              <h3 className="text-xl font-medium text-primary-main">พันธกิจ</h3>
            </div>
          }
          title="สร้างสรรค์มูลค่าที่ยั่งยืนให้กับผู้ที่มีส่วนได้เสียผ่านการลงทุนใน Synergy และเทคโนโลยี"
        />
      </section>

      {/* รางวัล และความสำเร็จ */}
      <section className="pt-10 lg:pt-16 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto px-4">
        <div className="rounded-3xl border border-neutral-400 py-10 px-5 flex md:px-10 flex-col space-y-11 lg:space-y-0 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center space-y-2 lg:whitespace-pre-line lg:border-r-2 lg:border-primary-main lg:pr-10 lg:h-32 lg:justify-center">
            <h2 className="text-2xl lg:text-3xl font-medium">{`รางวัล และ\nความสำเร็จ`}</h2>
            <hr className="h-px border-0 bg-primary-main w-12 lg:hidden" />
          </div>
          <div className="flex flex-col md:flex-row space-y-11 md:space-y-0 lg:flex-grow">
            <Info
              icon={<BadgeCheckIcon className="w-12 h-12 text-primary-main" />}
              title="Lorem ipsum dolor"
              className="md:w-1/3"
              textClassName="font-bold"
            />
            <Info
              icon={<ChartPieIcon className="w-12 h-12 text-primary-main" />}
              title="Lorem ipsum dolor"
              className="md:w-1/3"
              textClassName="font-bold"
            />
            <Info
              icon={<ChartBarIcon className="w-12 h-12 text-primary-main" />}
              title="Lorem ipsum dolor"
              className="md:w-1/3"
              textClassName="font-bold"
            />
          </div>
        </div>
      </section>

      {/* เกี่ยวกับบริษัท */}
      <section className="py-10 lg:py-16 md:px-6 lg:px-16 2xl:max-w-7xl mx-auto px-4">
        <UnderlineHeader
          title="เกี่ยวกับบริษัท"
          textClassName="text-2xl"
          underlineClassName="w-12 bg-primary-main"
        />
        <article className="mt-10 space-y-5">
          <p>
            ดำเนินธุรกิจให้สินเชื่อ จดทะเบียนจัดตั้งบริษัท เมื่อวันที่ 25
            ธันวาคม 2557 ดำเนินธุรกิจค้าปลีก ในรูปแบบประเภท Discount Supermarket
            ที่มีสาขาขนาดเล็กคล้ายคลึงกับ ALDI หรือ LIDL ซึ่งเป็น Supermarket
            ของประเทศเยอรมนีที่ประสบความสำเร็จอย่างมากทั้งในสหภาพยุโรปสหรัฐอเมริกาและออสเต
          </p>
          <p>
            โดยมุ่งเน้นจำหน่ายสินค้าประเภทอุปโภคบริโภคในชีวิตประจำวันสินค้าคุณภาพดีในราคาถูกและมีทำเลที่ตั้งใกล้ชุมชนทำให้ลูกค้าไม่ต้องเดินทางไกลซึ่งเทียบได้กับ
            Low Cost Airline กล่าวคือลูกค้ามีความพึงพอใจ
            ในคุณภาพสินค้าและบริการบนราคาที่ถูกกว่า (Fit for Purpose)
            ปีปัจจุบันเปลี่ยนแปลงธุรกิจเป็นให้เช่าพื้นที่เพื่อจำหน่ายสินค้าและบริการ
          </p>
          <p>
            โดยมุ่งเน้นจำหน่ายสินค้าประเภทอุปโภคบริโภคในชีวิตประจำวันสินค้าคุณภาพดีในราคาถูกและมีทำเลที่ตั้งใกล้ชุมชนทำให้ลูกค้าไม่ต้องเดินทางไกลซึ่งเทียบได้กับ
            Low Cost Airline
            กล่าวคือลูกค้ามีความพึงพอใจในคุณภาพสินค้าและบริการบนราคาที่ถูกกว่า
            (Fit for Purpose)
            ปีปัจจุบันเปลี่ยนแปลงธุรกิจเป็นให้เช่าพื้นที่เพื่อจำหน่ายสินค้าและบริการ
          </p>
        </article>
      </section>

      {/* Image Gallery */}
      <section className="md:px-6 lg:px-16 px-4">
        <div className="py-10">
          <h2 className="text-3xl relative z-20 md:text-2xl font-bold text-right md:text-center">
            Image Gallery
          </h2>
          <div className="relative">
            <Gallery
              className="mt-10"
              showNavigation={true}
              slidesPerView={1}
              images={thamSlides}
            />
            <RedCircle className="absolute -left-32 -top-20 md:w-80 md:h-80 md:-left-40 lg:left-0" />
          </div>
        </div>
      </section>

      {/* Map & Contact Info */}
      <section className="flex flex-col md:flex-row-reverse mt-10">
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
            className="mt-5 text-neutral-50"
            textClassName="text-xl"
          />
          <PhoneCall
            phone="(+66) 2236-0143-44"
            tel="+662236014344"
            className="mt-2 text-neutral-50"
            textClassName="text-xl"
          />
          <MailTo
            mail="contactus@tonghuagroup.com"
            className="mt-6 text-neutral-50"
            textClassName="text-xl"
          />
        </div>
      </section>

      {/* Businesses */}
      <section className="py-20  relative bg-neutral-600 overflow-hidden">
        <div className="flex relative z-10 overflow-x-scroll hide-scrollbar md:px-6 px-4 max-w-7xl mx-auto lg:px-0 lg:justify-around">
          {businesses.map(({ node }, key) => {
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

export default TongHuaAssetManagement;

export const query = graphql`
  query TongHuaAssetManagementPageQuery {
    allBusinessesJson {
      edges {
        node {
          title
          description
          image
          to
          key
          slides
        }
      }
    }
  }
`;
