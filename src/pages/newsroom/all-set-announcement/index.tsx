import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { SetAnnouncementCard } from '@/components/cards';
import UnderlineHeader from '@/components/UnderlineHeader';
import MainLayout from '@/layouts/MainLayout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '@/components/Seo';

type NewsRoomAllSetAnnouncementProps =
  PageProps<GatsbyTypes.NewsRoomAllSetAnnouncementQuery>;

const NewsRoomAllSetAnnouncement: React.FC<NewsRoomAllSetAnnouncementProps> = ({
  data,
}) => {
  const { t } = useTranslation();
  const { allSetAnnouncementJson } = data;

  return (
    <MainLayout>
      <Seo
        title={t('Seo.NewsRoom.AllSetAnnouncementPage.Title')}
        description={t('Seo.NewsRoom.AllSetAnnouncementPage.Desc')}
      />

      {/* Section 1: ข่าวแจ้งตลาดหลักทรัพย์ทั้งหมด */}
      <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        {/* ข่าวแจ้งตลาดหลักทรัพย์ทั้งหมด */}
        <UnderlineHeader
          title={t('Pages.NewsRoom.AllSetAnnouncementPage.Section-1.Title')}
          textClassName="text-2xl"
          underlineClassName="bg-neutral-900"
        />
        <div className="flex flex-col mt-10 md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {allSetAnnouncementJson.edges.map(({ node }, key) => {
            const { title, createdAt, pdf } = node || {};
            return (
              <div className="md:w-1/2 lg:w-1/3 md:px-4 md:py-6" key={key}>
                <SetAnnouncementCard
                  title={title}
                  createAt={createdAt}
                  pdf={pdf}
                />
              </div>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
};

export default NewsRoomAllSetAnnouncement;

export const query = graphql`
  query NewsRoomAllSetAnnouncement($language: String!) {
    allSetAnnouncementJson(sort: { fields: order, order: DESC }) {
      edges {
        node {
          title
          createdAt
          pdf
        }
      }
    }
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
