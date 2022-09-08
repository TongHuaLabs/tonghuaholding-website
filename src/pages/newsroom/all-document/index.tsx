import React from 'react';
import UnderlineHeader from '@/components/UnderlineHeader';
import { graphql, PageProps } from 'gatsby';
import { DocumentCard } from '@/components/cards';

type NewsRoomAllDocumentProps = PageProps<GatsbyTypes.NewsRoomAllDocumentQuery>;

const NewsRoomAllDocument: React.FC<NewsRoomAllDocumentProps> = ({ data }) => {
  // const newsType: ListProps[] = [
  //   {
  //     title: 'เอกสารเผยแพร่ทั้งหมด',
  //     value: 0,
  //   },
  // ];

  // const [selected, setSelected] = useState<ListProps>(newsType[0]);

  const { allDocumentJson } = data;

  // const handleSelected = (value: ListProps['value']) => {
  //   if (typeof value === 'number') {
  //     setSelected(newsType[value]);
  //   }
  // };

  return (
    <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
      {/* <ListBox
        className="w-full md:max-w-xs md:ml-auto"
        list={newsType}
        selected={selected}
        onSelected={(value) => handleSelected(value)}
      /> */}
      <UnderlineHeader
        title="เอกสารเผยแพร่ทั้งหมด"
        textClassName="text-2xl"
        underlineClassName="bg-neutral-900"
      />
      <div className="flex flex-wrap mt-10 md:mt-4 md:space-y-0">
        {allDocumentJson.edges.map(({ node }, key) => {
          const { title, createdAt, pdf, cover } = node;
          return (
            <DocumentCard
              key={key}
              title={title}
              className="w-1/2 md:w-1/4 px-2 py-4 lg:px-4 text-neutral-900"
              coverImage={cover?.childImageSharp?.gatsbyImageData}
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
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
