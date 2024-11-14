module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani",
    description: "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Mushkani",
    siteUrl: "https://rsdmu.com",
    googleVerification: "google39150de1d9b66663",
  },

  plugins: [
    // Source content from the '_data/blog' directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/_data/blog`, // Ensure the exact folder name here
      },
    },

    // Source images from the 'static/admin/assets' directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets`,
      },
    },

    // Transformer for Markdown files
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-emojis",
        ],
      },
    },

    // Image processing plugins
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    // Other plugins
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet", // You may remove this and use built-in Gatsby Head API
    "gatsby-plugin-sitemap",

    // Manifest for PWA support
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rashid Mushkani Portfolio",
        short_name: "RashidMushkani",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#381696",
        display: "standalone",
        icon: "src/images/icon.png", // Ensure icon path matches your file structure
      },
    },

    // Offline plugin
    "gatsby-plugin-offline",

    // Netlify adapter
    {
      resolve: "gatsby-adapter-netlify",
      options: {
        // Configure options if needed
      },
    },
  ],
};
