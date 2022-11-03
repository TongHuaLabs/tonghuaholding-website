import React from 'react';
import UnderlineHeader from '@/components/UnderlineHeader';
import { BusinessCard } from '@/components/cards';
import DotPattern from '@/images/dot-pattern.inline.svg';
import Circles from '@/images/circles.inline.svg';
import classNames from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';

type BusinessesSectionProps = {
  businesses?: {
    title?: string;
    image?: GatsbyTypes.ImageSharp['gatsbyImageData'];
    description?: string;
    to?: string;
  }[];
  className?: string;
};

const BusinessesSection: React.FC<BusinessesSectionProps> = ({
  businesses,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <section
      className={classNames(
        'py-20 relative bg-neutral-700 overflow-hidden space-y-10',
        className,
      )}
    >
      <UnderlineHeader
        title={t('Components.BusinessesSection.Title')}
        className="items-center"
        textClassName="text-3xl text-center lg:text-4xl text-neutral-50"
        underlineClassName="bg-primary-main w-16"
      />
      <div className="flex relative z-10 overflow-x-scroll hide-scrollbar md:px-6 px-4 max-w-7xl mx-auto lg:px-0 lg:justify-around">
        {businesses?.map((item, key) => {
          const { title, image, description, to } = item;
          return (
            <div key={key} className="px-4 lg:px-0">
              <BusinessCard
                image={image?.childImageSharp?.gatsbyImageData}
                title={title}
                description={description}
                to={to}
                className="h-80 w-56"
              />
            </div>
          );
        })}
      </div>
      <DotPattern className="text-neutral-50 z-10 absolute top-6 left-6 opacity-50" />
      <Circles className="absolute bottom-0 w-full h-60 xl:h-80 left-0" />
    </section>
  );
};

export default BusinessesSection;
