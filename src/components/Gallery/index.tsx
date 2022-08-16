import React from 'react';
import SwiperCarousel, { SwiperCarouselProps } from '../SwiperCarousel';
import { SwiperSlide } from 'swiper/react';

interface GalleryProps extends SwiperCarouselProps {
  images: string[];
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
    >
      {images.map((slide, key) => {
        return (
          <SwiperSlide key={key} className={className}>
            <div className="max-w-5xl mx-auto">
              <div className="aspect-w-3 aspect-h-2 md:aspect-w-16 md:aspect-h-9">
                <img
                  src={slide}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </SwiperCarousel>
  );
};

export default Gallery;
