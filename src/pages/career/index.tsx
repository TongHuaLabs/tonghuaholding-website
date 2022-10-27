import React from 'react';
import Gallery from '@/components/Gallery';
import EllipseSvg from '@/icons/ellipse.inline.svg';
import DNA from '@/components/information/DNA';
import SwiperCarousel from '@/components/SwiperCarousel';
import DotPattern from '@/images/dot-pattern.inline.svg';
import { graphql, PageProps } from 'gatsby';
import { useMd, useLg } from '@/hooks/responsive';
import { OpportunityCard, TestimonialCard } from '@/components/cards';
import { SwiperSlide } from 'swiper/react';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import MainLayout from '@/layouts/MainLayout';

type CareerPageProps = PageProps<GatsbyTypes.CareerPageQuery>;

const CareerPage: React.FC<CareerPageProps> = ({ data }) => {
  const md = useMd();
  const lg = useLg();

  const { allDnaJson, allTeamJson, allShowcaseJson, allMarkdownRemark } = data;
  const team = allTeamJson.edges;
  const dna = allDnaJson.edges;

  const showcase: IGatsbyImageData[] = [];

  allShowcaseJson.edges.forEach((x) => {
    const { image } = x.node;
    if (image?.childImageSharp) {
      showcase.push(image?.childImageSharp?.gatsbyImageData);
    }
  });

  return (
    <MainLayout>
      {/* LIFE  @TONG HUA */}
      <section className="h-[75vh] relative">
        <div className="bg-black/40 absolute z-10 w-full h-full" />
        <StaticImage
          src="../../images/working.svg"
          alt="Tong Hua Holding Career"
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="absolute top-0 z-20 w-full h-full flex flex-col text-center justify-center space-y-4 px-4 md:px-28 lg:px-16">
          <h2 className="text-4xl font-bold md:text-5xl text-neutral-50">
            LIFE @TONG HUA
          </h2>
          <p className="text-xl md:text-2xl font-medium text-neutral-50">
            Let’s start something new with Powerful energy.
          </p>
        </div>
      </section>

      {/* Core Value */}
      <section className="flex flex-col items-center justify-center px-4 md:px-6 py-20 lg:py-28 lg:px-36 bg-primary-main">
        <h2 className="text-4xl whitespace-pre-line md:whitespace-normal font-medium text-center text-neutral-50">
          {`นวัตกรรม\nอยู่ใน DNA ของเรา`}
        </h2>
        <p className="mt-6 text-xl max-w-3xl mx-auto text-center text-neutral-50">
          พร้อมเริ่มสิ่งใหม่ด้วยพลังงาน และ minsdet ที่พร้อมก้าวหน้าตลอดเวลา
          พัฒนาโซลูชันใหม่ ๆ ในการแก้ไขปัญหาของเทคโนโลยีในยุคปัจจุบัน
        </p>
        <div className="mt-10 flex items-center space-x-10 md:space-x-20">
          {dna.map(({ node }, key) => (
            <DNA text={node.dna} key={key} />
          ))}
        </div>
      </section>

      {/* Thoughts From Our Team */}
      <section className="overflow-hidden py-20 lg:py-28 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Thoughts From Our Team
          <hr className="w-16 h-1 mx-auto mt-2 bg-primary-main" />
        </h2>
        <div className="px-4 md:px-6 lg:px-16 2xl:px-0 max-w-7xl mx-auto relative">
          <SwiperCarousel
            showNavigation={lg}
            pagination={{ clickable: true }}
            slidesPerView={lg ? 3 : md ? 2 : 1}
          >
            {team.map(({ node }, key) => {
              const { profileImage } = node;
              return (
                <SwiperSlide key={key}>
                  <TestimonialCard
                    {...node}
                    profileImage={profileImage?.childImageSharp?.original?.src}
                  />
                </SwiperSlide>
              );
            })}
          </SwiperCarousel>
          <EllipseSvg className="absolute ellipse lg:-top-14 xl:-top-24 -top-7 -right-48 text-primary-border" />
        </div>
      </section>

      {/* Performace Slide */}
      <section className="pb-20 relative flex flex-col">
        <div className="w-28 h-56 bg-primary-main absolute" />
        <div className="px-4 md:px-16 mt-20 w-full max-w-5xl mx-auto">
          <Gallery showNavigation={lg} slidesPerView={1} images={showcase} />
        </div>
        <div className="w-28 absolute bottom-0 h-56 bg-primary-main self-end" />
      </section>

      {/* Career Opportunity */}
      <section className="relative max-w-7xl mx-auto">
        <DotPattern className="text-primary-main z-0 absolute top-8 opacity-70 left-0" />
        <div className="py-20 px-4 md:px-6 lg:px-16">
          <h2 className="text-3xl relative font-medium">โอกาสร่วมงานกับเรา</h2>
          <hr className="h-px mt-2 border-0 bg-neutral-900" />
          <div className="flex flex-col bg-white relative mt-10 space-y-6 md:flex-wrap md:space-y-0 md:flex-row">
            {allMarkdownRemark.edges.map(({ node }, key) => {
              const { title, location, contract, description, slug } =
                node.frontmatter || {};
              return (
                <div key={key} className="md:w-1/2 lg:w-1/3 md:p-2 lg:p-3">
                  <OpportunityCard
                    description={description}
                    occupation={title}
                    location={location}
                    contract={contract}
                    href={slug}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CareerPage;

export const query = graphql`
  query CareerPage {
    allTeamJson {
      edges {
        node {
          profileImage {
            childImageSharp {
              original {
                src
              }
            }
          }
          name
          occupation
          comment
        }
      }
    }
    allDnaJson {
      edges {
        node {
          dna
        }
      }
    }
    allShowcaseJson {
      edges {
        node {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/career/blog/" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            lang
            slug
            title
            date(formatString: "DD/MM/YYYY")
            location
            description
            contract
          }
        }
      }
    }
  }
`;
