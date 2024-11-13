module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani Portfolio",
    description: "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Ahmad Mushkani",
    siteUrl: "https://rsdmu.com", // Ensure this matches your actual site URL for sitemap generation
  },
  plugins: [
    `gatsby-plugin-sass`, // Enables SCSS support
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-emojis`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-X3HZGWVSDS",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rashid Mushkani Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: `static/favicon.ico`, // Ensure this path matches your favicon location
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`, // Requires siteUrl in siteMetadata for sitemap generation
  ],
}
