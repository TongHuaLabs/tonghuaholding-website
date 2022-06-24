import React, { useState } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import CustomNavigation from '@/components/SwiperCarousel/CustomNavigation';

export interface SwiperCarouselProps extends Omit<SwiperProps, 'navigation'> {
  showNavigation?: boolean;
  className?: string;
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  slidesPerView,
  spaceBetween,
  className,
  children,
  pagination,
  autoplay,
  showNavigation,
}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <>
      <Swiper
        navigation={{ prevEl, nextEl }}
        pagination={pagination}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView || 1}
        spaceBetween={spaceBetween || 24}
        autoplay={autoplay}
        loop
        className={className}
        onBeforeResize={(swiper) => {
          swiper.navigation.init();
        }}
      >
        {children}
      </Swiper>
      {showNavigation && (
        <CustomNavigation
          onNextClick={(node) => setNextEl(node)}
          onPrevClick={(node) => setPrevEl(node)}
        />
      )}
    </>
  );
};

export default SwiperCarousel;
