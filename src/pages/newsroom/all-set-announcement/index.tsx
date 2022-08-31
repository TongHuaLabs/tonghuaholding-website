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
    <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
      <ListBox
        className="w-full md:max-w-xs md:ml-auto"
        list={setType}
        selected={selected}
        onSelected={(value) => handleSelected(value)}
      />
      <UnderlineHeader
        title="ข่าวแจ้งตลาดหลักทรัพย์ทั้งหมด"
        textClassName="text-2xl mt-10"
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
