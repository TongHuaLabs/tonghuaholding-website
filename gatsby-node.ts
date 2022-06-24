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

// type GatsbyNodeQuery = {
//   allFile: {
//     edges: Array<{
//       node: {
//         childMarkdownRemark: {
//           id: string;
//           html: string;
//           frontmatter: {
//             title: string;
//             slug: string;
//             lang: string;
//           };
//         };
//       };
//     }>;
//   };
// };

// export const createPages: GatsbyNode['createPages'] = async ({
//   graphql,
//   actions,
// }) => {
//   const markdownCareerEn = await graphql<GatsbyNodeQuery>(`
//     query {
//       allFile(
//         filter: {
//           sourceInstanceName: { eq: "markdown-en" }
//           relativeDirectory: { eq: "career" }
//         }
//         sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
//       ) {
//         edges {
//           node {
//             childMarkdownRemark {
//               id
//               html
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   const markdownCareerTh = await graphql<GatsbyNodeQuery>(`
//     query {
//       allFile(
//         filter: {
//           sourceInstanceName: { eq: "markdown-th" }
//           relativeDirectory: { eq: "career" }
//         }
//         sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
//       ) {
//         edges {
//           node {
//             childMarkdownRemark {
//               id
//               html
//               frontmatter {
//                 title
//                 slug
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (markdownCareerEn.errors || markdownCareerTh.errors) {
//     return Promise.reject(markdownCareerEn.errors || markdownCareerTh.errors);
//   }

//   const { allFile: allMarkdownCareerEn } = markdownCareerEn.data || {};
//   const { allFile: allMarkdownCareerTh } = markdownCareerTh.data || {};

//   allMarkdownCareerEn?.edges.forEach(({ node }) => {
//     const { html, frontmatter } = node.childMarkdownRemark;
//     const { slug, title } = frontmatter;
//     actions.createPage({
//       path: `/en${slug}`,
//       component: path.resolve('src', 'templates', 'MarkdownTemplate.tsx'),
//       context: {
//         title,
//         html,
//       },
//     });
//   });

//   allMarkdownCareerTh?.edges.forEach(({ node }) => {
//     const { html, frontmatter } = node.childMarkdownRemark;
//     const { slug, title } = frontmatter;
//     actions.createPage({
//       path: `/th${slug}`,
//       component: path.resolve('src', 'templates', 'MarkdownTemplate.tsx'),
//       context: {
//         title,
//         html,
//       },
//     });
//   });
// };

// export const onCreatePage = ({ page, actions }: any) => {
//   const { deletePage } = actions;
//   console.log(page.path);
//   if (
//     page.path.includes('/en/th/') ||
//     page.path.includes('/en/en/') ||
//     page.path.includes('/th/en/') ||
//     page.path.includes('/th/th/')
//   ) {
//     deletePage(page);
//   }
// };
