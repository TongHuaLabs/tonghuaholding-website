import React, { useState } from 'react';
import ListBox, { ListProps } from '@/components/ListBox';
import UnderlineHeader from '@/components/UnderlineHeader';
import { graphql, PageProps } from 'gatsby';
import { DocumentCard } from '@/components/cards';

type NewsRoomAllDocumentProps = PageProps<GatsbyTypes.NewsRoomAllDocumentQuery>;

const NewsRoomAllDocument: React.FC<NewsRoomAllDocumentProps> = ({ data }) => {
  const newsType: ListProps[] = [
    {
      title: 'เอกสารเผยแพร่ทั้งหมด',
      value: 0,
    },
  ];

  const [selected, setSelected] = useState<ListProps>(newsType[0]);

  const { allDocumentJson } = data;

  const document = allDocumentJson.edges;

  const handleSelected = (value: ListProps['value']) => {
    if (typeof value === 'number') {
      setSelected(newsType[value]);
    }
  };

  return (
    <section className="px-4 md:px-6 space-y-10 pb-10 lg:px-16 2xl:max-w-7xl mx-auto">
      <ListBox
        className="mt-10 max-w-xl"
        list={newsType}
        selected={selected}
        onSelected={(value) => handleSelected(value)}
      />
      <UnderlineHeader
        title="เอกสารเผยแพร่ทั้งหมด"
        textClassName="text-2xl"
        underlineClassName="bg-primary-main"
      />
      <div className="flex flex-wrap mt-10">
        {document.map(({ node }, key) => {
          const { title, createdAt, pdf, coverImage } = node;
          return (
            <DocumentCard
              key={key}
              title={title}
              className="w-1/2 md:w-1/4 p-2"
              coverImage={coverImage}
              createdAt={createdAt}
              toFile={pdf}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewsRoomAllDocument;

export const query = graphql`
  query NewsRoomAllDocument {
    allDocumentJson(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          createdAt
          title
          pdf
          coverImage
        }
      }
    }
  }
`;
