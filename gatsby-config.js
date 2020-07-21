require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    buildTimeUnix: Date.now(),
    siteUrl: "https://nabeelvalley.netlify.app",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
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
            serialize: ({query}) => {
              return query.allRenderedMarkdownPost.edges.map((edge) => {
                const {
                  id,
                  description,
                  slug,
                  subtitle,
                  title,
                  html,
                } = edge.node;

                const date = new Date(subtitle);

                return {
                  title,
                  date,
                  description,
                  url: query.site.siteMetadata.siteUrl + slug,
                  guid: id,
                  custom_elements: [{ "content:encoded": html }],
                };
              });
            },
            query: `
            {
              allRenderedMarkdownPost(filter: {slug: {regex: "/\/blog/"}}) {
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
            output: "/rss.xml",
            title: "Nabeel Valley's Blog",
          },
        ],
      },
    },
  ],
};
