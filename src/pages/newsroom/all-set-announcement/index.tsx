import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, PageProps } from 'gatsby';
import { SetAnnouncementCard } from '@/components/cards';
import ListBox, { ListProps } from '@/components/ListBox';
import UnderlineHeader from '@/components/UnderlineHeader';

type NewsRoomAllSetAnnouncementProps =
  PageProps<GatsbyTypes.NewsRoomAllSetAnnouncementQuery>;

const NewsRoomAllSetAnnouncement: React.FC<NewsRoomAllSetAnnouncementProps> = ({
  data,
}) => {
  const intl = useIntl();
  const { locale } = intl;
  const setType: ListProps[] = [
    {
      title: intl.formatMessage({
        id: 'newsRoom.allSetAnnouncement.list.first',
      }),
      value: 0,
    },
  ];

  const [selected, setSelected] = useState<ListProps>(setType[0]);

  const { allSetAnnouncementEnJson, allSetAnnouncementThJson } = data;

  const announcement =
    locale === 'th'
      ? allSetAnnouncementThJson.edges
      : allSetAnnouncementEnJson.edges;

  const handleSelected = (value: ListProps['value']) => {
    if (typeof value === 'number') {
      setSelected(setType[value]);
    }
  };

  return (
    <>
      <section className="px-4 md:px-6 space-y-10 pb-10 lg:px-16 2xl:max-w-7xl mx-auto">
        <ListBox
          className="mt-10 max-w-xl"
          list={setType}
          selected={selected}
          onSelected={(value) => handleSelected(value)}
        />
        <UnderlineHeader
          title={intl.formatMessage({
            id: 'newsRoom.allSetAnnouncement.firstSection.header',
          })}
        />
        <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
          {announcement.map(({ node }, key) => {
            const { title, createdAt, pdf } = node || {};
            return (
              <div className="md:p-2 md:w-1/2 lg:w-1/3" key={key}>
                <SetAnnouncementCard
                  title={title}
                  createAt={createdAt}
                  readMore={`/pdf/${pdf}`}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NewsRoomAllSetAnnouncement;

export const query = graphql`
  query NewsRoomAllSetAnnouncement {
    allSetAnnouncementEnJson(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          createdAt
          pdf
        }
      }
    }
    allSetAnnouncementThJson(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          createdAt
          pdf
        }
      }
    }
  }
`;
