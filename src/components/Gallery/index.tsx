import React from 'react';
import classNames from 'classnames';
import SwiperCarousel, { SwiperCarouselProps } from '../SwiperCarousel';
import { SwiperSlide } from 'swiper/react';

interface GalleryProps extends SwiperCarouselProps {
  data: string[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  data,
  className,
  slidesPerView,
  spaceBetween,
  showNavigation,
}) => {
  return (
    <SwiperCarousel
      showNavigation={showNavigation}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
    >
      {data.map((slide, key) => {
        return (
          <SwiperSlide key={key} className={className}>
            <div
              className={classNames(
                'w-full md:w-10/12 lg:w-3/5 xl:w-1/2 mx-auto',
              )}
            >
              <div className="aspect-w-16 aspect-h-9">
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
