import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { PrimaryButton, OutlineButton } from '@/components/buttons';
import { graphql, navigate } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="landing items-center flex justify-center lg:justify-between flex-col lg:flex-row px-4 py-10 md:px-24 lg:px-20 max-w-7xl mx-auto">
        <StaticImage
          src="../images/404-unplugged.svg"
          alt="404 NotFound"
          className="w-4/5 lg:w-[45%] self-end lg:self-center"
        />
        <div className="flex flex-col space-y-10 lg:w-[45%]">
          <StaticImage
            src="../images/404-state.svg"
            alt="404 NotFound"
            className="w-1/2 lg:w-full lg:self-center"
          />
          <div className="flex flex-col">
            <h1 className="text-neutral-900 font-bold text-xl md:text-3xl">
              {t('Pages.NotFound.Title')}
            </h1>
            <p className="border-b-2 border-primary-main border w-12" />
          </div>
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="w-[48.5%]">
              <PrimaryButton
                title={t('Pages.NotFound.BackToHomeButton')}
                className="w-full"
              />
            </Link>
            <OutlineButton
              title={t('Pages.NotFound.GoBackButton')}
              className="w-[48.5%] border-primary-main text-primary-main font-bold"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery($language: String!) {
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
