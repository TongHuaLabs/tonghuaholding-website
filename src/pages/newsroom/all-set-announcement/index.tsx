import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { SetAnnouncementCard } from '@/components/cards';
import ListBox, { ListProps } from '@/components/ListBox';
import UnderlineHeader from '@/components/UnderlineHeader';

type NewsRoomAllSetAnnouncementProps =
  PageProps<GatsbyTypes.NewsRoomAllSetAnnouncementQuery>;

const NewsRoomAllSetAnnouncement: React.FC<NewsRoomAllSetAnnouncementProps> = ({
  data,
}) => {
  const setType: ListProps[] = [
    {
      title: 'ข่าวแจ้งตลาดหลักทรัพย์ทั้งหมด',
      value: 0,
    },
  ];

  const [selected, setSelected] = useState<ListProps>(setType[0]);

  const { allSetAnnouncementJson } = data;

  const handleSelected = (value: ListProps['value']) => {
    if (typeof value === 'number') {
      setSelected(setType[value]);
    }
  };

  return (
    <section className="px-4 md:px-6 space-y-10 pb-10 lg:px-16 2xl:max-w-7xl mx-auto">
      <ListBox
        className="mt-10 max-w-xl"
        list={setType}
        selected={selected}
        onSelected={(value) => handleSelected(value)}
      />
      <UnderlineHeader
        title="ข่าวแจ้งตลาดหลักทรัพย์ทั้งหมด"
        textClassName="text-2xl"
        underlineClassName="bg-primary-main"
      />
      <div className="flex flex-col space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
        {allSetAnnouncementJson.edges.map(({ node }, key) => {
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
  );
};

export default NewsRoomAllSetAnnouncement;

export const query = graphql`
  query NewsRoomAllSetAnnouncement {
    allSetAnnouncementJson(sort: { fields: createdAt, order: DESC }) {
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
