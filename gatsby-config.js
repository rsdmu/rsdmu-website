// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani",
    description: "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Mushkani",
    siteUrl: "https://rsdmu.com",
    googleVerification: "google39150de1d9b66663",
  },

  plugins: [
    // Source content from the 'content/blog' directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/_data/blog`,
      },
    },

    // Source images from the 'src/images' directory for better processing
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
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
              withWebp: true,
              quality: 80,
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
    "gatsby-plugin-image",

    // Other plugins
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",

    // Manifest for PWA support
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rashid Mushkani Portfolio",
        short_name: "RashidMushkani",
        start_url: "/",
        background_color: "#000000", // Changed to black to match dark theme
        theme_color: "#5ab9ea", // Light blue primary color
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },

    // Offline plugin
    "gatsby-plugin-offline",

    // Netlify adapter (ensure it's necessary)
    {
      resolve: "gatsby-adapter-netlify",
      options: {
        // Configure options if needed
      },
    },
  ],
};
