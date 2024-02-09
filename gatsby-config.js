module.exports = {
  siteMetadata: {
    siteUrl: `https://updatedsite-dev.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
      serialize: ({ site, allSitePage }) => {
        return allSitePage.edges.map(({ node }) => {
          return {
            url: site.siteMetadata.siteUrl + node.path,
            changefreq: "daily",
            priority: 0.7,
          }
        })
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        version: "published",
        localAssets: true,
      },
    },
  ],
}
