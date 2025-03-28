import React from 'react';
import Gallery from '@/components/Gallery';
import EllipseSvg from '@/icons/ellipse.inline.svg';
import SwiperCarousel from '@/components/SwiperCarousel';
import { graphql, PageProps } from 'gatsby';
import { useMd, useLg } from '@/hooks/responsive';
import { OpportunityCard, TestimonialCard } from '@/components/cards';
import { SwiperSlide } from 'swiper/react';
import { StaticImage } from 'gatsby-plugin-image';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '@/components/Seo';
import AdaptabilitySVG from '@/icons/adaptability.inline.svg';
import CreativitySVG from '@/icons/creativity.inline.svg';
import InnovationSVG from '@/icons/innovation.inline.svg';
import LearnAndGrowthSVG from '@/icons/learn_growth.inline.svg';
import OpennessSVG from '@/icons/openness.inline.svg';
import TeamSpiritSVG from '@/icons/team_spirit.inline.svg';

type CareerPageProps = PageProps<GatsbyTypes.CareerPageQuery>;

const CareerPage: React.FC<CareerPageProps> = ({ data }) => {
  const md = useMd();
  const lg = useLg();
  const { t } = useTranslation();

  const { teamJson, showcaseJson, allMarkdownRemark } = data;

  // dna
  const dna: [{ title: string }] = t('Data.DNA', {
    returnObjects: true,
  });

  // team
  const team: [
    {
      title: string;
      occupation: string;
      comment: string;
      profileImage: GatsbyTypes.ImageSharp['gatsbyImageData'];
    },
  ] = t('Data.Team', {
    returnObjects: true,
  });
  teamJson?.data?.forEach((item, key) => {
    const { profileImage } = item || {};
    team[key].profileImage = profileImage;
  });

  const { slides } = showcaseJson?.data || {};

  return (
    <MainLayout>
      <Seo title={t('Seo.Career.Title')} description={t('Seo.Career.Desc')} />

      {/* Section 1: LIFE  @TONG HUA */}
      <section className="h-[75vh] relative">
        <div className="bg-black/40 absolute z-10 w-full h-full" />
        <StaticImage
          src="../../images/working.svg"
          alt="Tong Hua Holding Career"
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="absolute top-0 z-20 w-full h-full flex flex-col text-center justify-center space-y-4 px-4 md:px-28 lg:px-16">
          <h2 className="text-4xl font-bold md:text-5xl text-neutral-50">
            {/* LIFE @TONG HUA */}
            {t('Pages.Career.Section-1.Title')}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-neutral-50">
            {/* Let’s start something new with Powerful energy. */}
            {t('Pages.Career.Section-1.Desc')}
          </p>
        </div>
      </section>

      {/* Section 2: Core Value */}
      <section className="flex flex-col items-center justify-center px-4 md:px-6 py-20 lg:py-28 lg:px-36 bg-primary-main">
        <h2 className="text-3xl whitespace-pre-line md:whitespace-normal font-bold text-center text-neutral-50">
          {/* Our Core Values */}
          {t('Pages.Career.Section-2.Title')}
        </h2>
        <p className="mt-6 text-xl max-w-3xl mx-auto text-center text-neutral-50">
          {/* เราปรับตัวเข้ากับเทรนด์ในทุกยุคทุกสมัยด้วยการพัฒนานวัตกรรมในการสร้างสรรค์โซลูชันใหม่ */}
          {t('Pages.Career.Section-2.Desc')}
        </p>
        <div className="mt-10 w-full flex flex-col sm:flex-row sm:flex-wrap max-w-5xl mx-auto">
          {dna.map((item, key) => {
            const { title } = item || {};
            const iconStyle = 'w-12 h-12 text-neutral-50';
            return (
              <div
                key={key}
                className="flex flex-col items-center space-y-2 w-full sm:w-1/2 md:w-1/3 py-5"
              >
                {key === 0 ? (
                  <InnovationSVG className={iconStyle} />
                ) : key === 1 ? (
                  <CreativitySVG className={iconStyle} />
                ) : key === 2 ? (
                  <AdaptabilitySVG className={iconStyle} />
                ) : key === 3 ? (
                  <TeamSpiritSVG className={iconStyle} />
                ) : key === 4 ? (
                  <OpennessSVG className={iconStyle} />
                ) : (
                  <LearnAndGrowthSVG className={iconStyle} />
                )}
                <span className="text-2xl font-bold text-neutral-50">
                  {title}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Thoughts From Our Team */}
      <section className="overflow-hidden py-20 lg:py-28 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          {/* Thoughts From Our Team */}
          {t('Pages.Career.Section-3.Title')}
          <hr className="w-16 h-1 mx-auto mt-2 bg-primary-main" />
        </h2>
        <div className="px-4 md:px-6 lg:px-16 2xl:px-0 max-w-7xl mx-auto relative">
          <SwiperCarousel
            showNavigation={lg}
            pagination={{ clickable: true }}
            slidesPerView={lg ? 3 : md ? 2 : 1}
          >
            {team.map((item, key) => {
              const { profileImage } = item || {};
              return (
                <SwiperSlide key={key}>
                  <TestimonialCard
                    {...item}
                    profileImage={
                      profileImage?.childImageSharp?.gatsbyImageData
                    }
                  />
                </SwiperSlide>
              );
            })}
          </SwiperCarousel>
          <EllipseSvg className="absolute ellipse lg:-top-14 xl:-top-24 -top-7 -right-48 text-primary-border" />
        </div>
      </section>

      {/* Section 4: Performace Slide */}
      <section className="pb-20 relative flex flex-col">
        <div className="w-28 h-56 bg-primary-main absolute" />
        <div className="px-4 md:px-16 mt-20 w-full max-w-5xl mx-auto">
          <Gallery showNavigation={lg} slidesPerView={1} slidesImage={slides} />
        </div>
        <div className="w-28 absolute bottom-0 h-56 bg-primary-main self-end" />
      </section>

      {/* Section 5: Career Opportunity */}
      <section className="py-20 px-4 md:px-6 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl relative font-bold">
          {/* โอกาสร่วมงานกับเรา */}
          {t('Pages.Career.Section-5.Title')}
        </h2>
        <hr className="h-px mt-2 border-0 bg-neutral-900" />
        <div className="flex flex-col bg-white relative mt-10 space-y-6 md:flex-wrap md:space-y-0 md:flex-row">
          {allMarkdownRemark.edges.map(({ node }, key) => {
            const { title, location, contract, description, category, slug } =
              node.frontmatter || {};
            return (
              <div key={key} className="md:w-1/2 lg:w-1/3 md:p-2 lg:p-3">
                <OpportunityCard
                  description={description}
                  occupation={title}
                  location={location}
                  contract={contract}
                  href={`${category}${slug}`}
                />
              </div>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default CareerPage;

export const query = graphql`
  query CareerPage($language: String!) {
    teamJson(language: { eq: $language }) {
      data {
        profileImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    showcaseJson {
      data {
        slides {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { regex: "/career/blog/" }
          lang: { eq: $language }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 12
    ) {
      edges {
        node {
          frontmatter {
            lang
            slug
            category
            title
            date(formatString: "DD/MM/YYYY")
            location
            description
            contract
          }
        }
      }
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
