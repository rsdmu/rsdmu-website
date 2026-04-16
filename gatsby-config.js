// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani",
    description:
      "Official website of Rashid Mushkani, a PhD candidate at the University of Montreal and researcher at Mila working on participatory AI, inclusive public spaces, and socio-spatial justice.",
    author: "Rashid Mushkani",
    siteUrl: "https://rsdmu.com", // Ensure this is correct
    locale: "en-CA",
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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "/404",
          "/404.html",
          "/404/",
          "/dev-404-page",
          "/dev-404-page/",
          "/offline-plugin-app-shell-fallback",
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMarkdownRemark {
              nodes {
                frontmatter {
                  path
                  date
                }
              }
            }
          }
        `,
        resolvePages: ({ allSitePage, allMarkdownRemark }) => {
          const lastmodByPath = new Map(
            allMarkdownRemark.nodes
              .filter((node) => node.frontmatter?.path && node.frontmatter?.date)
              .map((node) => [
                `/${node.frontmatter.path.replace(/^\/+|\/+$/g, "")}/`,
                node.frontmatter.date,
              ])
          )

          return allSitePage.nodes.map((page) => ({
            ...page,
            lastmod: lastmodByPath.get(page.path),
          }))
        },
        serialize: ({ path, lastmod }) => ({
          url: path,
          ...(lastmod ? { lastmod } : {}),
        }),
      },
    },
    // React Helmet for managing document head
    "gatsby-plugin-react-helmet",
    // Manifest for PWA support
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rashid Mushkani Portfolio",
        short_name: "Rashid",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#5ab9ea",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    // Netlify adapter
    {
      resolve: "gatsby-adapter-netlify",
      options: {
        // Configure options if needed
      },
    },
  ],
};
