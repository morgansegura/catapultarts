const metaData = require('./src/data/setup')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: metaData.setup.title,
    short_name: metaData.setup.short_name,
    copyright: metaData.setup.copyright,    
    siteUrl: metaData.setup.siteUrl,
    startUrl: metaData.setup.startUrl,
    pathPrefix: metaData.setup.pathPrefix,
    icons: metaData.setup.icons,
    rssFeed: metaData.setup.rssFood,
    siteFBAppID: metaData.setup.siteFBAppID,
    twitterHandle: metaData.setup.twitterHandle,
    googleAnalyticsId: metaData.setup.googleAnalyticsId,
    themeColor: metaData.setup.themeColor,
    backgroundColor: metaData.setup.backgroundColor
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-moltin',
      options: {
        key:
          process.env.MOLTIN_CLIENT_ID ||
          'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4',
        products: ['main_image', 'brands', 'files', 'categories'],
      },
    },    
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: metaData.setup.googleAnalyticsId,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
    // `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          },
          // {   
          //   resolve: `gatsby-plugin-netlify-cms-paths`,
          //   options: {
          //     // Path to your Netlify CMS config file
          //     cmsConfig: `/static/admin/config.yml`
          //   }
          // }          
        ],
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
        name: metaData.setup.title,
        short_name: metaData.setup.short_name,
        description: metaData.setup.description,
        start_url: metaData.setup.startUrl,
        background_color: metaData.setup.short_name,
        theme_color: metaData.setup.themeColor,
        display: 'standalone',
        icons: metaData.setup.icons,
        legacy: true,
      }
    },
    // 'gatsby-plugin-offline',
    // `gatsby-plugin-netlify-cache`,
    // `gatsby-plugin-remove-serviceworker`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: false,
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: `Content Manager`,
      },
    },    
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected: false, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },    
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
