import React from 'react';
import SwiperCarousel, {
  SwiperCarouselProps,
} from '@/components/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import QouteSvg from '@/icons/qoute.inline.svg';

interface TestimonialCardProps extends SwiperCarouselProps {
  data: readonly {
    readonly node: Pick<
      GatsbyTypes.TeamJson,
      'name' | 'profileImage' | 'occupation' | 'comment'
    >;
  }[];
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  data,
  className,
  slidesPerView,
  spaceBetween,
  showNavigation,
  autoplay,
}) => {
  return (
    <SwiperCarousel
      showNavigation={showNavigation}
      pagination={{ clickable: true }}
      autoplay={autoplay}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={className}
    >
      {data.map(({ node }, key) => {
        const { name, profileImage, occupation, comment } = node;
        return (
          <SwiperSlide key={key}>
            <div className="flex flex-col p-6 space-y-4 rounded-2xl bg-neutral-50">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <img
                    src={profileImage}
                    className="w-12 h-12 rounded-full border border-primary-main bg-white p-0.5 mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg line-clamp-1">{name}</span>
                    <span className="text-xs">{occupation}</span>
                  </div>
                </div>
                <QouteSvg className="w-12 h-12" />
              </div>
              <p className="text-sm">{comment}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </SwiperCarousel>
  );
};

export default TestimonialCard;
