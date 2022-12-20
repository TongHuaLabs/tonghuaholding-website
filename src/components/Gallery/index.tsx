import React from 'react';
import SwiperCarousel, { SwiperCarouselProps } from '../SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import { GatsbyImage } from 'gatsby-plugin-image';

interface GalleryProps extends SwiperCarouselProps {
  slidesImage: GatsbyTypes.Maybe<
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
  slidesImage,
  className,
  slidesPerView,
  spaceBetween,
  showNavigation,
  autoplay,
  pagination,
}) => {
  if (!slidesImage) {
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
      {slidesImage.map((image, key) => {
        return (
          <SwiperSlide key={key} className={className}>
            <div className="!aspect-w-16 !aspect-h-9 cover-lg">
              <GatsbyImage
                alt=""
                image={image?.image?.childImageSharp?.gatsbyImageData}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </SwiperCarousel>
  );
};

export default Gallery;
