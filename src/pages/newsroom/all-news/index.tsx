import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { NewsCard } from '@/components/cards';
import ListBox, { ListProps } from '@/components/ListBox';
import UnderlineHeader from '@/components/UnderlineHeader';

type NewsRoomAllNewsProps = PageProps<GatsbyTypes.NewsRoomAllNewsQuery>;

const NewsRoomAllNews: React.FC<NewsRoomAllNewsProps> = ({ data }) => {
  const newsType: ListProps[] = [
    {
      title: 'ข่าวสาร TH ทั้งหมด',
      value: 0,
    },
    {
      title: 'ข่าวสาร CSR ทั้งหมด',
      value: 1,
    },
  ];

  const [selected, setSelected] = useState<ListProps>(newsType[0]);

  const { news, csr } = data;

  // select the first 12 elements
  const markdown = (selected.value === 0 ? news : csr).edges.slice(0, 12);

  const handleSelected = (value: ListProps['value']) => {
    if (typeof value === 'number') {
      setSelected(newsType[value]);
    }
  };

  return (
    <section className="px-4 pt-10 pb-20 lg:pb-28 md:px-6 lg:px-16 lg:py-20 max-w-7xl mx-auto">
      <ListBox
        className="w-full md:max-w-xs md:ml-auto"
        list={newsType}
        selected={selected}
        onSelected={(value) => handleSelected(value)}
      />
      <UnderlineHeader
        title={selected.title}
        textClassName="text-2xl mt-10"
        underlineClassName="bg-neutral-900"
      />
      <div className="flex flex-col mt-10 md:mt-4 space-y-10 md:flex-wrap md:space-y-0 md:flex-row">
        {markdown.map(({ node }, key) => {
          const { title, description, date, cover, slug } =
            node.childMarkdownRemark?.frontmatter || {};
          return (
            <NewsCard
              title={title}
              className="md:w-1/2 lg:w-1/3 md:px-4 md:py-6"
              description={description}
              coverImage={cover}
              createdAt={date}
              href={slug}
              key={key}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewsRoomAllNews;

export const query = graphql`
  query NewsRoomAllNews {
    news: allFile(
      filter: { relativeDirectory: { eq: "newsroom-markdown/all-news/news" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              lang
              slug
              title
              date(formatString: "DD/MM/YYYY")
              description
              cover
            }
          }
          sourceInstanceName
        }
      }
    }
    csr: allFile(
      filter: { relativeDirectory: { eq: "newsroom-markdown/all-news/csr" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              lang
              slug
              title
              date(formatString: "DD/MM/YYYY")
              description
              cover
            }
          }
          sourceInstanceName
        }
      }
    }
  }
`;
