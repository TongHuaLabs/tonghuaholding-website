import React from 'react';
import SwiperCarousel, { SwiperCarouselProps } from '../SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import { GatsbyImage } from 'gatsby-plugin-image';

interface GalleryProps extends SwiperCarouselProps {
  images: GatsbyTypes.Maybe<
    readonly GatsbyTypes.Maybe<{
      readonly image: GatsbyTypes.Maybe<{
        readonly childImageSharp: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.ImageSharp, 'gatsbyImageData'>
        >;
      }>;
    }>[]
  >;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  className,
  slidesPerView,
  spaceBetween,
  showNavigation,
  autoplay,
  pagination,
}) => {
  if (!images) {
    return <div />;
  }
  return (
    <SwiperCarousel
      showNavigation={showNavigation}
      pagination={pagination || { clickable: true }}
      autoplay={autoplay || { delay: 1500, disableOnInteraction: false }}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop
    >
      {images.map((slide, key) => {
        return (
          <SwiperSlide key={key} className={className}>
            <div className="!aspect-w-16 !aspect-h-9 cover-lg">
              <GatsbyImage
                alt=""
                image={slide?.image?.childImageSharp?.gatsbyImageData}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </SwiperCarousel>
  );
};

export default Gallery;
