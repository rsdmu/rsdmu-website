// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani Portfolio",
    description:
      "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Ahmad Mushkani",
    siteUrl: "https://rsdmu.com",
  },


  
  plugins: [
    // Source content from the 'content' directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    // Source images from the 'assets' directory (now outside 'static/')
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`, // Adjusted path
      },
    },
    // Transformer for Markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Add support for processing images in Markdown
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          // Other remark plugins
          `gatsby-remark-prismjs`,
          `gatsby-remark-emojis`,
        ],
      },
    },
    // Plugins for image processing
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Other plugins
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rashid Mushkani Portfolio`,
        short_name: `RashidMushkani`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline', // Use single or double quotes here
  ],
};