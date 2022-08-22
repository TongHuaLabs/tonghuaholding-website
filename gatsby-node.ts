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

type GatsbyNodeQuery = {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        id: string;
        frontmatter: {
          slug: string;
        };
      };
    }>;
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { data, errors } = await graphql<GatsbyNodeQuery>(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    return Promise.reject(errors);
  }

  const { allMarkdownRemark } = data || {};

  allMarkdownRemark?.edges.forEach(({ node }) => {
    const { id, frontmatter } = node;
    const { slug } = frontmatter;
    actions.createPage({
      path: slug,
      component: path.resolve('src', 'templates', 'MarkdownTemplate.tsx'),
      context: {
        id,
      },
    });
  });
};
