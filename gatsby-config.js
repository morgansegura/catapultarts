
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
    siteUrl: 'https://catapultarts.com/app',
    keywords: 'Gatsby.js, React.js, GraphQL, Netlify, NetlifyCMS, Gulp, PostCSS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'catapultarts.com/app',
        hostingWPCOM: false,
        protocol: 'https',
        useACF: true,
        auth: {
          htaccess_user: process.env.WP_USERNAME,
          htaccess_pass: process.env.WP_PASSWORD,
          htaccess_sendImmediately: false,
        },
        perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "catapultarts.com/app",
        //   replacementUrl: "catapultarts.netlify.com",
        // },
        concurrentRequests: 10,
        includedRoutes: [
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/media",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
          "/*/*/acf",
          "/*/*/menus",
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        },
        verboseOutput: true,
      },
    },
    // Add after these plugins if used
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    `gatsby-transformer-sharp`,
     {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Catapult Arts",
        short_name: "catapult arts",
        description: "web design, web development, social media marketing, search engine optimizaion, search engine marketing",
        start_url: "catapultarts.com",
        background_color: "#efefef",
        theme_color: "red",
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logos/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
