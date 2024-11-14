// src/templates/blogTemplate.js

import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from 'components/Layout';
import SEO from 'components/SEO';



const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.thumbnail);

  return (
    <article>
      {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      html
    }
  }
`;

export default BlogTemplate;