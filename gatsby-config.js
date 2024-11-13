module.exports = {
  siteMetadata: {
    title: "Rashid Mushkani Portfolio",
    description: "Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.",
    author: "Rashid Ahmad Mushkani",
    siteUrl: "https://rsdmu.com", 
  },
  plugins: [
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
        plugins: [],
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
        icon: `static/favicon.ico`,
      },
    },
    `gatsby-plugin-netlify`, // for Netlify-specific optimizations
    `gatsby-plugin-sitemap`, 
  ],
}
