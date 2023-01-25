import { GatsbyNode } from 'gatsby';
import path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@icons': path.resolve(__dirname, 'src/icons'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

type AllMarkdownRemark = {
  edges: Array<{
    node: {
      frontmatter: {
        lang: string;
        slug: string;
        category: string;
      };
    };
  }>;
};

type GatsbyNodeQuery = {
  allMarkdownRemark: AllMarkdownRemark;
  allNewsTH: AllMarkdownRemark;
  allNewsEN: AllMarkdownRemark;
  bod: AllMarkdownRemark;
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<GatsbyNodeQuery>(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { category: { regex: "/newsroom/news/" } } }
      ) {
        edges {
          node {
            frontmatter {
              lang
              slug
              category
            }
          }
        }
      }
      allNewsTH: allMarkdownRemark(
        filter: {
          frontmatter: {
            lang: { eq: "th" }
            category: { regex: "/newsroom/news/" }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              lang
              slug
              category
            }
          }
        }
      }
      allNewsEN: allMarkdownRemark(
        filter: {
          frontmatter: {
            lang: { eq: "en" }
            category: { regex: "/newsroom/news/" }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              lang
              slug
              category
            }
          }
        }
      }
    }
  `);

  //   bod: allMarkdownRemark(
  //   filter: {
  //     frontmatter: { slug: { regex: "/about/board-of-directors/" } }
  //   }
  // ) {
  //   edges {
  //     node {
  //       id
  //       frontmatter {
  //         slug
  //       }
  //     }
  //   }
  // }

  if (errors) {
    return Promise.reject(errors);
  }

  const { allMarkdownRemark, allNewsTH, allNewsEN } = data || {};

  allMarkdownRemark?.edges.forEach(({ node }) => {
    const { frontmatter } = node;
    const { lang, slug, category } = frontmatter;

    {
      lang === 'th' &&
        actions.createPage({
          path: `${category}${slug}`,
          component: path.resolve('src', 'templates', 'MarkdownTemplate.tsx'),
          context: {
            category,
            slug,
          },
        });
    }

    actions.createPage({
      path: `${lang}${category}${slug}`,
      component: path.resolve('src', 'templates', 'MarkdownTemplate.tsx'),
      context: {
        category,
        slug,
      },
    });
  });

  if (allNewsTH && allNewsEN) {
    const postPerPage = 2;
    const numPagesTH = Math.ceil(allNewsTH?.edges.length / postPerPage);
    const numPagesEN = Math.ceil(allNewsEN?.edges.length / postPerPage);

    Array.from({ length: numPagesTH }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/newsroom/all-news` : `/newsroom/all-news/${i + 1}`,
        component: path.resolve('src', 'templates', 'AllNewsTemplate.tsx'),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          numPages: numPagesTH,
          currentPage: i + 1,
        },
      });
    });

    Array.from({ length: numPagesEN }).forEach((_, i) => {
      actions.createPage({
        path:
          i === 0 ? `/en/newsroom/all-news` : `/en/newsroom/all-news/${i + 1}`,
        component: path.resolve('src', 'templates', 'AllNewsTemplate.tsx'),
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          numPages: numPagesEN,
          currentPage: i + 1,
        },
      });
    });
  }

  // bod?.edges.forEach(({ node }) => {
  //   const { id, frontmatter } = node;
  //   const { slug } = frontmatter;
  //   actions.createPage({
  //     path: slug,
  //     component: path.resolve('src', 'templates', 'BodMarkdownTemplate.tsx'),
  //     context: {
  //       id,
  //     },
  //   });
  // });
};
