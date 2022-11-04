// import React from 'react';
// import { graphql, PageProps } from 'gatsby';
// import PrimarySection from '@/components/sections/PrimarySection';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import MainLayout from '@/layouts/MainLayout';

// type BodMarkdownTemplateProps = PageProps<GatsbyTypes.BodMarkdownTemplateQuery>;

// const BodMarkdownTemplate = ({
//   data: { markdownRemark },
// }: BodMarkdownTemplateProps) => {
//   const { html, frontmatter } = markdownRemark || {};
//   const { name, cover } = frontmatter || {};

//   return (
//     <MainLayout>
//       <PrimarySection title="คณะกรรมการบริษัท" />
//       <section className="flex flex-col sm:flex-row px-4 sm:px-6 lg:px-16 pt-4 pb-10 max-w-7xl mx-auto">
//         <div className="flex pt-6 flex-col sm:w-1/3 sm:pr-5 lg:pr-10">
//           {cover?.childImageSharp && (
//             <div className="!aspect-w-3 !aspect-h-4 overflow-hidden">
//               <GatsbyImage
//                 alt={name || ''}
//                 image={cover.childImageSharp.gatsbyImageData}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           )}
//           <div className="flex flex-col items-start mt-5">
//             <span className="text-xl text-neutral-900 font-bold">{name}</span>
//             <p className="mt-2 text-sm text-neutral-400 line-clamp-2">
//               {occupation}
//             </p>
//           </div>
//         </div>
//         <div
//           dangerouslySetInnerHTML={{ __html: html || '<div />' }}
//           className="mt-4 sm:mt-0 markdown sm:w-2/3"
//         />
//       </section>
//     </MainLayout>
//   );
// };

// export default BodMarkdownTemplate;

// export const pageQuery = graphql`
//   query BodMarkdownTemplate($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         name
//         cover {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;
