// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani",
    siteUrl: "https://rsdmu.com/",
    description: "Rashid Mushkani is a specialist in urban planning, artificial intelligence, and architecture, focusing on their intersection. As a doctoral candidate at the University of Montreal, he is committed to co-creating AI with citizens to foster inclusive public spaces. His expertise is informed by his background in environmental design and urban conservation projects.",
    author: "Rashid Ahmad Mushkani",
    home: {
      title: "About",
      description: "Rashid's research, titled \"StreetReview: An AI-Based Approach to Measuring Streetscape Quality,\" explores how artificial intelligence can be integrated into urban planning to assess and enhance public spaces in Montreal. The project addresses ethical considerations, such as algorithmic biases and social impacts, through a commitment to responsible innovation. By employing a participative methodology, it engages diverse community members to ensure the AI application reflects a broad spectrum of concerns and fosters inclusivity, aiming to develop technology that resonates with community needs.\n\nAdditionally, Rashid's work involves using generative models for public consultation and visualization of public spaces. This includes co-creating a dataset with vulnerable communities in Montreal, focusing on inclusiveness, accessibility, and safety. By refining a Stable Diffusion XL model, the project aims to produce more inclusive renderings of public spaces, supporting the visualization of community needs and aspirations. Rooted in principles of participatory planning, design justice, equity, diversity, and inclusion (EDI), intersectionality, and inter-sectoriality, this research seeks to challenge barriers in urban design, empowering participants to articulate their needs for public spaces more effectively and contributing to a more inclusive and equitable urban environment."
    },
    googleVerification: "google39150de1d9b66663"
  },

  plugins: [
    `gatsby-plugin-netlify`,
    // Source content from the 'content' directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/_data/blog`,
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
          `gatsby-remark-relative-images`,
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
    'gatsby-plugin-offline',
  ],
};