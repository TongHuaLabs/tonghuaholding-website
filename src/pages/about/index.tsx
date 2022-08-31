import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import React from 'react';
import Timeline from '@/components/information/Timeline';
import Info from '@/components/information/Info';
import MissionQuoteSVG from '@/icons/mission-quote.inline.svg';
import { graphql, PageProps, withPrefix } from 'gatsby';
import { LightBulbIcon } from '@heroicons/react/outline';
import UnderlineHeader from '@/components/UnderlineHeader';
import { BusinessCard } from '@/components/cards';
import DotPattern from '@/images/dot-pattern.inline.svg';
import Circles from '@/images/circles.inline.svg';

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQuery>;

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { allTimelineJson, allMissionJson, allBusinessesJson } = data;
  return (
    <>
      <ObliqueLineSection title="ข้อมูลบริษัท" />
      <section className="px-4 pt-10 lg:pt-20 lg:px-16 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-7xl mx-auto">
        <img
          src={withPrefix('/images/tonghua-company.png')}
          className="w-full h-full lg:h-96 object-cover"
        />
        <div className="space-y-4">
          <p className="text-lg">
            บริษัท ตงฮั้ว โฮลดิ้ง จำกัด (มหาชน) เริ่มต้นทำหนังสือ พิมพ์จีนรายวัน
            ในนาม “หนังสือพิมพ์ตงฮั้ว” ตลอด เวลาบริษัทพัฒนา
            ปรับปรุงคุณภาพเพื่อให้การนำ เสนอข่าวสาร ตอบสนองความต้องการของผู้อ่าน
            อย่างต่อเนื่อง ต่อมามีการเพิ่มทุนจดทะเบียนจาก 1 ล้านเป็น
            ทุนจดทะเบียน 50 ล้านบาท และได้เข้าจดทะ
            เบียนในตลาดหลักทรัพย์แห่งประเทศไทย โดยเสนอ
            ขายหุ้นให้กับประชาชนทั่วไปอีก 10 ล้านบาท และเมื่อ วันที่ 14 มกราคม
            2537 เพิ่มทุนจดทะเบียนเป็น 120 ล้าน
          </p>
          <p className="text-lg">
            บริษัท ตงฮั้ว โฮลดิ้ง จำกัด (มหาชน) เพิ่มประสิทธิ ภาพในการบริหาร
            โดยการถือหุ้นเพื่อการลงทุนเชิง
            กลยุทธ์และวางแผนที่จะขยายธุรกิจไปยังธุรกิจใหม่ๆ
            ที่ไม่ใช่สื่อสิ่งพิมพ์อย่างเดียว
          </p>
          <p className="text-lg">
            ปัจจุบันบริษัท ตงฮั้ว โฮลดิ้ง จำกัด (มหาชน) มีทุนจดทะเบียนเรียกชำระ
            แล้ว 965,035,922บาท
          </p>
        </div>
      </section>
      {/* เหตุการณ์สำคัญ */}
      <section className="px-4 pt-16 lg:px-16 md:pt-20 max-w-5xl mx-auto">
        <h2 className="font-bold text-3xl mb-5">เหตุการณ์สำคัญ</h2>
        {allTimelineJson.edges.map(({ node }, key) => {
          const { title, description } = node;
          return <Timeline title={title} description={description} key={key} />;
        })}
      </section>
      {/* วิสัยทัศน์ */}
      <section className="pt-16 pb-20 md:py-20 space-y-16 md:space-y-20 px-4 sm:px-28 lg:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <UnderlineHeader
            title="วิสัยทัศน์"
            className="items-center"
            textClassName="text-3xl"
            underlineClassName="bg-primary-main w-16"
          />
          <MissionQuoteSVG className="w-12 h-12 mt-5 text-primary-surface" />
          <h3 className="text-2xl font-bold text-primary-main mt-6 text-center whitespace-normal sm:whitespace-pre-line leading-relaxed">
            {`ดำเนินธุรกิจด้วยความซื่อสัตย์และมั่นคง\nพร้อมก้าวสู่ยุคใหม่เพื่อขยายธุรกิจ\nให้เติบโตอย่างยั่งยืน`}
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <UnderlineHeader
            title="พันธกิจ"
            className="items-center"
            textClassName="text-3xl"
            underlineClassName="bg-primary-main w-14"
          />
          <div className="flex flex-col lg:flex-row mt-11 space-y-16 lg:space-y-0">
            {allMissionJson.edges.map(({ node }, key) => {
              const { title, description } = node;
              return (
                <Info
                  icon={
                    <div className="bg-primary-main flex justify-center items-center rounded-full h-16 w-16">
                      <LightBulbIcon className="w-9 h-9 text-white" />
                    </div>
                  }
                  title={title}
                  description={description}
                  className="lg:w-1/3 lg:px-4"
                  textClassName="text-xl font-medium text-center"
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* บริษัทย่อยในเครือ */}
      <section className="py-20 relative bg-neutral-700 overflow-hidden space-y-10">
        <UnderlineHeader
          title="บริษัทย่อยในเครือ"
          className="items-center"
          textClassName="text-3xl text-center lg:text-4xl text-neutral-50"
          underlineClassName="bg-primary-main w-16"
        />
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
        <DotPattern className="text-neutral-50 z-10 absolute top-6 left-6 opacity-50" />
        <Circles className="absolute bottom-0 w-full h-60 xl:h-80 left-0" />
      </section>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage {
    allTimelineJson {
      edges {
        node {
          title
          description
        }
      }
    }
    allMissionJson {
      edges {
        node {
          title
          description
        }
      }
    }
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
  }
`;
