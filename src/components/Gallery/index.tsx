import React from 'react';
import SwiperCarousel, { SwiperCarouselProps } from '../SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface GalleryProps extends SwiperCarouselProps {
  images: IGatsbyImageData[];
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
            <div className="!aspect-w-16 !aspect-h-9">
              <GatsbyImage
                alt=""
                image={slide}
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
