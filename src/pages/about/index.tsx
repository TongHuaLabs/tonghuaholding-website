import PrimarySection from '@/components/sections/PrimarySection';
import React from 'react';
import Timeline from '@/components/information/Timeline';
import Info from '@/components/information/Info';
import MissionQuoteSVG from '@/icons/mission-quote.inline.svg';
import { graphql, PageProps } from 'gatsby';
import LightBulbIcon from '@/icons/lightbulb.inline.svg';
import HandshakeIcon from '@/icons/handshake.inline.svg';
import GlobeIcon from '@/icons/globe.inline.svg';
import UnderlineHeader from '@/components/UnderlineHeader';
import BusinessesSection from '@/components/sections/BusinessesSection';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import DotPattern from '@/images/dot-pattern.inline.svg';
import Gallery from '@/components/Gallery';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useLg } from '@/hooks/responsive';

type AboutPageProps = PageProps<GatsbyTypes.AboutPageQuery>;

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { t } = useTranslation();
  const isLg = useLg();
  const { allAboutJson, allTimelineJson, allMissionJson, allBusinessesJson } =
    data;
  const { data: timeline, slides } = allTimelineJson.edges[0].node;
  const { data: about } = allAboutJson.edges[0].node;
  const { data: mission } = allMissionJson.edges[0].node;

  const showcase: IGatsbyImageData[] = [];

  slides?.forEach((x) => {
    const { image } = x || {};
    if (image?.childImageSharp) {
      showcase.push(image?.childImageSharp?.gatsbyImageData);
    }
  });

  return (
    <MainLayout>
      {/* Section 1: ข้อมูลบริษัท */}
      <PrimarySection title={t('section-1-title')} />
      <section className="px-4 pt-10 lg:pt-20 lg:px-16 flex flex-col items-center max-w-7xl mx-auto space-y-10">
        {about && (
          <>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
              <StaticImage
                src="../../images/tonghua-company.png"
                alt="about of tonghuaholding"
                className="w-full lg:w-1/2 object-cover"
              />

              {isLg && (
                <p className="text-lg w-1/2 whitespace-pre-wrap">
                  {about[0]?.msg}
                </p>
              )}
            </div>
            <div className="space-y-4 w-full">
              {about.map((item, key) => {
                const { msg } = item || {};
                return (
                  key > 0 && (
                    <p className="text-lg whitespace-pre-wrap" key={key}>
                      {msg}
                    </p>
                  )
                );
              })}
            </div>
          </>
        )}
      </section>

      {/* Section 2: เหตุการณ์สำคัญ */}
      <section className="relative flex flex-col px-4 pt-16 lg:px-16 md:pt-20 max-w-5xl mx-auto space-y-10 lg:space-y-4 xl:flex-row-reverse xl:items-center xl:max-w-7xl xl:space-y-0 xl:justify-between">
        <DotPattern className="hidden text-primary-main z-10 absolute top-20 right-0 xl:block" />
        <div className="flex flex-col xl:w-[48.5%]">
          <h2 className="font-bold text-3xl mb-5">{t('section-2-title')}</h2>
          {timeline &&
            timeline.map((item, key) => {
              const { title, description } = item || {};
              return (
                <Timeline title={title} description={description} key={key} />
              );
            })}
        </div>
        <div className="w-full xl:w-[48.5%]">
          <Gallery showNavigation={true} slidesPerView={1} images={showcase} />
        </div>
        <DotPattern className="hidden text-primary-main z-10 absolute bottom-0 left-0 xl:block" />
      </section>

      {/* Section 3: วิสัยทัศน์ */}
      <section className="pt-16 pb-20 md:py-20 space-y-16 md:space-y-20 px-4 sm:px-28 lg:pb-28 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <UnderlineHeader
            title={t('section-3-title')}
            className="items-center"
            textClassName="text-3xl"
            underlineClassName="bg-primary-main w-16"
          />
          <MissionQuoteSVG className="w-12 h-12 mt-5 text-primary-surface" />
          <h3 className="text-2xl font-bold text-primary-main mt-6 text-center whitespace-normal sm:whitespace-pre-line leading-relaxed">
            {t('section-3-excerpt')}
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <UnderlineHeader
            title={t('section-3.1-title')}
            className="items-center"
            textClassName="text-3xl"
            underlineClassName="bg-primary-main w-14"
          />
          <div className="flex flex-col lg:flex-row mt-11 space-y-16 lg:space-y-0">
            {mission?.map((data, key) => {
              const { title, description } = data || {};
              return (
                <Info
                  icon={
                    <div className="bg-primary-main flex justify-center items-center rounded-full h-16 w-16">
                      {key === 0 ? (
                        <LightBulbIcon className="w-9 h-9 text-white" />
                      ) : key === 1 ? (
                        <GlobeIcon className="w-9 h-9 text-white" />
                      ) : (
                        <HandshakeIcon className="w-9 h-9 text-white" />
                      )}
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

      {/* Section 4: บริษัทย่อยในเครือ */}
      <BusinessesSection allBusinessesJson={allBusinessesJson} />
    </MainLayout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage($language: String!) {
    allAboutJson(filter: { language: { eq: $language } }) {
      edges {
        node {
          data {
            msg
          }
        }
      }
    }
    allTimelineJson(filter: { language: { eq: $language } }) {
      edges {
        node {
          data {
            title
            description
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
    }
    allMissionJson(filter: { language: { eq: $language } }) {
      edges {
        node {
          data {
            title
            description
          }
        }
      }
    }
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
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { eq: "about" } }
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
