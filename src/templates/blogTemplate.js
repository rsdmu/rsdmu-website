// src/templates/blogTemplate.js

import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.thumbnail);

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        {image && (
          <GatsbyImage image={image} alt={post.frontmatter.title} />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
