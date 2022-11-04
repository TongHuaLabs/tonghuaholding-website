export const siteMetadata = {
  title: `Tong Hua Holding`,
  description: ``,
  twitter: `@tonghuaholding`,
  // siteUrl: `https://tonghuaholding.com`, // No trailing slash allowed!
  siteUrl: `http://localhost:8000`, // No trailing slash allowed!
  defaultMetaImage: '/images/meta-default.png', // Path to the image placed in the 'static' folder
};

export const pathPrefix = '/tonghuaholding-website';

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
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/data`,
    },
  },
  'gatsby-transformer-remark',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown`,
      path: `${__dirname}/src/markdown`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  'gatsby-remark-images',
  // {
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: `Tong Hua Holding`,
  //     short_name: `Tong Hua Holding`,
  //     description: 'Tong Hua Holding Website',
  //     start_url: '/',
  //     background_color: `#262626`,
  //     // This will impact how browsers show your PWA/website
  //     // https://css-tricks.com/meta-theme-color-and-trickery/
  //     theme_color: `#262626`,
  //     display: `minimal-ui`,
  //     icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
  //   },
  // },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
        'src/__generated__/gatsby-schema.graphql': true,
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/locales`,
      name: `locale`,
    },
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`,
      languages: [`th`, `en`],
      defaultLanguage: `th`,
      siteUrl: siteMetadata.siteUrl,
      // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
      // trailingSlash: 'always',
      i18nextOptions: {
        interpolation: {
          escapeValue: false,
        },
        keySeparator: '.',
        nsSeparator: false,
      },
      generateDefaultLanguagePage: true,
      redirect: false,
    },
  },
];
