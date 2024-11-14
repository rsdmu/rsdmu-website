const siteMetadata = require('./site-meta-data.json');

module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani Portfolio",
    description:
      "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Ahmad Mushkani",
    siteUrl: "https://rsdmu.com",
    googleVerification: "google39150de1d9b66663",

  },

  plugins: [
    // Image processing plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // Source filesystem for images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    // Source filesystem for markdown files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    // Transformer for markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-emojis`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-X3HZGWVSDS",
        head: true,
        anonymize: true, // Anonymize IPs
      },
    },
    // Manifest for PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rashid Mushkani Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: `src/images/icon.png`, // Ensure this path is correct
      },
    },
    // Other plugins
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`, // For Netlify-specific optimizations
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`, // For offline support
  ],
};

