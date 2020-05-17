module.exports = {
  siteMetadata: {
    buildTimeUnix: Date.now(),
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#e44d90`,
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/static/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-plugin-catch-links`
  ]
}