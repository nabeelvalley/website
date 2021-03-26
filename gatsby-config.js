const serializePost = require('./utils/serializePost')

require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    buildTimeUnix: Date.now(),
    siteUrl: process.env.URL || 'https://nabeelvalley.netlify.app',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#e44d90`,
        showSpinner: false,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/static/content`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/static/images`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/static/content/docs`,
        destination: '/docs'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: serializePost,
            query: `
            {
              allRenderedMarkdownPost(filter: {slug: {regex: "/\/(blog|stdout)/"}}) {
                edges {
                  node {
                    id
                    description
                    slug
                    subtitle
                    title
                    html
                  }
                }
              }
            }                     
            `,
            output: '/rss.xml',
            title: "Nabeel Valley's Blog",
          },
        ],
      },
    },
  ],
}
