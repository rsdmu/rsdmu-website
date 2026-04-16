// gatsby-node.js

const path = require('path');
const fs = require('fs/promises');
const { createFilePath } = require('gatsby-source-filesystem');

const PROFILE_IMAGE_ENTRIES = [
  {
    pagePath: '/',
    imagePath: '/assets/rashid-mushkani-portrait.webp',
    title: 'Rashid Mushkani',
    caption: 'Portrait of Rashid Mushkani',
  },
  {
    pagePath: '/',
    imagePath: '/assets/rashid-mushkani-headshot-1x1.jpg',
    title: 'Rashid Mushkani',
    caption: 'Portrait of Rashid Mushkani',
  },
  {
    pagePath: '/',
    imagePath: '/assets/rashid-mushkani-headshot-4x3.jpg',
    title: 'Rashid Mushkani',
    caption: 'Portrait of Rashid Mushkani',
  },
  {
    pagePath: '/',
    imagePath: '/assets/rashid-mushkani-headshot-16x9.jpg',
    title: 'Rashid Mushkani',
    caption: 'Portrait of Rashid Mushkani',
  },
];

const normaliseSiteUrl = (siteUrl) =>
  siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

const normalisePathname = (pathname = '/') => {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const trimmedPath = pathname.replace(/^\/+|\/+$/g, '');
  const lastSegment = trimmedPath.split('/').pop();

  if (lastSegment && lastSegment.includes('.')) {
    return `/${trimmedPath}`;
  }

  return `/${trimmedPath}/`;
};

const toAbsoluteUrl = (siteUrl, pathname = '/') => {
  if (!pathname) {
    return `${normaliseSiteUrl(siteUrl)}/`;
  }

  if (/^https?:\/\//.test(pathname)) {
    return pathname;
  }

  return `${normaliseSiteUrl(siteUrl)}${normalisePathname(pathname)}`;
};

const escapeXml = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      date: Date @dateformat
      path: String
      thumbnail: File @fileByRelativePath
      author: String
      description: String
    }
  `);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = node.frontmatter.path || createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define templates for work and publications
  const workTemplate = path.resolve('src/templates/workTemplate.js');
  const publicationTemplate = path.resolve('src/templates/publicationTemplate.js');

  // GraphQL query for Work
  const workResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/data/work/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (workResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query for work.');
    return;
  }

  // Create pages for each work
  workResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path, // URL path remains the same
      component: workTemplate,
      context: {
        slug: node.fields.slug, // Use 'slug' instead of 'path'
      },
    });
  });

  // GraphQL query for Publications
  const publicationsResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/data/publications/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (publicationsResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query for publications.');
    return;
  }

  // Create pages for each Project
  publicationsResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path, // URL path remains the same
      component: publicationTemplate,
      context: {
        slug: node.fields.slug, // Use 'slug' instead of 'path'
      },
    });
  });
};

exports.onPostBuild = async ({ graphql, reporter }) => {
  const result = await graphql(`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allMarkdownRemark(filter: { frontmatter: { path: { ne: null } } }) {
        nodes {
          frontmatter {
            title
            description
            path
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while building the image sitemap.');
    return;
  }

  const { siteUrl } = result.data.site.siteMetadata;
  const imageEntries = [
    ...PROFILE_IMAGE_ENTRIES.map((entry) => ({
      pageUrl: toAbsoluteUrl(siteUrl, entry.pagePath),
      imageUrl: toAbsoluteUrl(siteUrl, entry.imagePath),
      title: entry.title,
      caption: entry.caption,
    })),
    ...result.data.allMarkdownRemark.nodes
      .filter((node) => node.frontmatter?.thumbnail?.publicURL)
      .map((node) => ({
        pageUrl: toAbsoluteUrl(siteUrl, node.frontmatter.path),
        imageUrl: toAbsoluteUrl(siteUrl, node.frontmatter.thumbnail.publicURL),
        title: node.frontmatter.title,
        caption: node.frontmatter.description || node.frontmatter.title,
      })),
  ];

  const urlsByPage = new Map();

  imageEntries.forEach((entry) => {
    if (!urlsByPage.has(entry.pageUrl)) {
      urlsByPage.set(entry.pageUrl, []);
    }

    urlsByPage.get(entry.pageUrl).push(entry);
  });

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset',
    '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
    '>',
    ...Array.from(urlsByPage.entries()).map(([pageUrl, images]) => [
      '  <url>',
      `    <loc>${escapeXml(pageUrl)}</loc>`,
      ...images.flatMap((image) => [
        '    <image:image>',
        `      <image:loc>${escapeXml(image.imageUrl)}</image:loc>`,
        `      <image:title>${escapeXml(image.title)}</image:title>`,
        `      <image:caption>${escapeXml(image.caption)}</image:caption>`,
        '    </image:image>',
      ]),
      '  </url>',
    ].join('\n')),
    '</urlset>',
    '',
  ].join('\n');

  await fs.writeFile(path.join(process.cwd(), 'public', 'image-sitemap.xml'), sitemapXml);
};
