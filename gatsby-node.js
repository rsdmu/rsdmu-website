// gatsby-node.js

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
