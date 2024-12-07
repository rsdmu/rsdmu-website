// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani",
    description:
      "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Mushkani",
    siteUrl: "https://rsdmu.com",
    googleVerification: "google39150de1d9b66663",
  },
  plugins: [

    // Source content from the 'src/data/work' directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: `${__dirname}/src/data/work`,
      },
    },
    // Source content from the 'src/data/publications' directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "publications",
        path: `${__dirname}/src/data/publications`,
      },
    },
    // Source images from the 'src/images' directory
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
    // SCSS support
    "gatsby-plugin-sass",
    // Sitemap generation
    "gatsby-plugin-sitemap",
    // React Helmet for managing document head
    "gatsby-plugin-react-helmet",
    // Manifest for PWA support
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rashid Mushkani Portfolio",
        short_name: "RashidMushkani",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#5ab9ea",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    // Offline support
    "gatsby-plugin-offline",
    // Netlify adapter
    {
      resolve: "gatsby-adapter-netlify",
      options: {
        // Configure options if needed
      },
    },
    // Font loading plugin using gatsby-plugin-webfonts
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [`400`, `700`],
            },
            {
              family: `Bebas Neue`,
              variants: [`400`],
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
        crossOrigin: `anonymous`, // Uncomment if needed
      },
    },
  ],
};
