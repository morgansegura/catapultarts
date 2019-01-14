
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
    siteUrl: 'https://catapultarts.com/app',
    description: 'If you don\'t know me by now, I doubt you\'ll ever know me. I won\'t win a Tony',
    keywords: 'Gatsby.js, React.js, GraphQL, Netlify, NetlifyCMS, Gulp, PostCSS'
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
        trackingId: `UA-131102503-1`,
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
        name: "Catapult Arts",
        short_name: "catapult arts",
        description: "web design, web development, social media marketing, search engine optimizaion, search engine marketing",
        start_url: "https://www.catapultarts.com",
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
