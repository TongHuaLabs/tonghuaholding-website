import ObliqueLineSection from '@/components/sections/ObliqueLineSection';
import React from 'react';
import Topic from '@/components/information/Topic';
import Timeline from '@/components/information/Timeline';
import Info from '@/components/information/Info';
import LightningSVG from '@/icons/lightning.inline.svg';
import MissionQuoteSVG from '@/icons/mission-quote.inline.svg';
import { graphql, PageProps } from 'gatsby';
import UnderlineHeader from '@/components/UnderlineHeader';

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQuery>;

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { allInformationJson, allTimelineJson, allMissionJson } = data;
  return (
    <>
      <ObliqueLineSection title="ข้อมูลบริษัท" />

      <section className="flex flex-wrap px-4 2xl:max-w-7xl 2xl:px-0 mx-auto">
        {allInformationJson.edges.map(({ node }, key) => {
          const { title, description } = node;
          return (
            <Topic
              title={title}
              description={description}
              className="w-1/2 md:w-1/4 pt-10"
              key={key}
            />
          );
        })}
      </section>

      <section className="px-4 pt-10 lg:pt-20 flex flex-col 2xl:px-0 lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 2xl:max-w-7xl mx-auto">
        <img
          src="/images/tonghua-company.png"
          className="lg:w-96 lg:h-96 object-cover"
        />
        <p className="text-base 2xl:text-lg">
          ภายใต้การบริหารของ คุณ สมนึก กยาวัฒนกิจ บุตร ชาย คุณสาคร – คุณกัลยาณี
          กยาวัฒนกิจ บริษัทต่าง ๆ ได้ถูกก่อตั้ง เพื่อขยายงานไปสู่ธุรกิจยุคใหม่
          ทั้งด้าน สื่อสารมวลชน การเงินการลงทุน อสังหาริมทรัพย์ ธุร
          กิจเครื่องสำอาง พัฒนาซอฟต์แวร์และอื่น ๆ กลุ่ม บริษัทตงฮั้ว
          จึงถูกก่อตั้งขึ้น เพื่อรวบรวมและเชื่อมโยง ธุรกิจต่าง ๆ เข้าด้วยกัน
          และเป็นฐานที่แข่งแกร่งให้ กิจการตงฮั้วเติบโตได้อย่างมั่นคงต่อไป
          ปัจจุบันตงฮั้ว มีบริษัทในกลุ่มมากกว่า 10 บริษัท อาทิเช่น บริษัท ที.ซี.
          เอ็กซ์ซิบิชั่น เซอร์วิส จำกัด และ บริษัท ทายกร จำกัด ที่ทำวิทายุ FM101
          เป็นต้น
        </p>
      </section>

      {/* เหตุการณ์สำคัญ */}
      <section className="px-4 pt-16 md:pt-20 2xl:max-w-7xl mx-auto 2xl:px-0">
        <h2 className="font-bold text-3xl text-center md:text-left mb-5">
          เหตุการณ์สำคัญ
        </h2>
        {allTimelineJson.edges.map(({ node }, key) => {
          const { title, description } = node;
          return <Timeline title={title} description={description} key={key} />;
        })}
      </section>

      {/* วิสัยทัศน์ */}
      <section className="my-16 md:my-20 space-y-16 md:space-y-20 px-4 md:px-32 2xl:px-0 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <UnderlineHeader
            title="วิสัยทัศน์"
            className="items-center"
            textClassName="text-3xl"
            underlineClassName="bg-primary-main w-16"
          />
          <MissionQuoteSVG className="w-12 h-12 mt-5 text-primary-surface" />
          <h3 className="text-2xl font-bold text-primary-main mt-6 text-center">
            TH เติมเต็มโอกาส เพื่อทุกการเติบโต ร่วมกัน
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
              const { title } = node;
              return (
                <Info
                  icon={
                    <div className="bg-primary-main flex justify-center items-center rounded-full h-16 w-16">
                      <LightningSVG className="w-8 h-8 text-white" />
                    </div>
                  }
                  title={title}
                  className="lg:px-4"
                  textClassName="text-xl font-medium text-center"
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage {
    allInformationJson {
      edges {
        node {
          title
          description
        }
      }
    }
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
        }
      }
    }
  }
`;
