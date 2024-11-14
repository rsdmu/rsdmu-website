module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani Portfolio",
    description:
      "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Ahmad Mushkani",
    siteUrl: "https://rsdmu.com",
  },
  plugins: [
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
          // Add remark plugins here
          `gatsby-remark-prismjs`,
          `gatsby-remark-emojis`,
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
        icon: `src/images/icon.png`,
      },
    },
    // Add these plugins to your plugins array
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`, // For Netlify-specific optimizations
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`, // For offline support
  ],
};
