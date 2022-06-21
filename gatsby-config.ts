export const siteMetadata = {
  title: `Tong Hua Holding`,
  description: ``,
  siteUrl: `https://tonghuaholding.com`, // No trailing slash allowed!
  // defaultMetaImage: '/images/meta-default.png', // Path to the image placed in the 'static' folder
};

export const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-image`,
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Tong Hua Holding`,
      short_name: `Tong Hua Holding`,
      description: 'Tong Hua Holding Website',
      start_url: '/',
      background_color: `#262626`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      theme_color: `#262626`,
      display: `minimal-ui`,
      icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-plugin-breadcrumb`,
    options: {
      useAutoGen: true,
    },
  },
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/intl`,
      // supported language
      languages: [`en`, `th`],
      // language file path
      defaultLanguage: `th`,
      // option to redirect to `/en` when connecting `/`
      redirect: false,
    },
  },
];
