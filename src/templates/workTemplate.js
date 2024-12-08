// src/templates/workTemplate.js

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./workTemplate.scss";

const WorkTemplate = ({ data }) => {
  const { markdownRemark: work } = data;
  const { frontmatter, html } = work;
  const thumbnailImage = getImage(frontmatter.thumbnail);

  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description || frontmatter.title} />
      <div className="work-template">
        <h1>{frontmatter.title}</h1>
        <p className="work-date">{frontmatter.date}</p>
        <p className="work-author">Author: {frontmatter.author}</p>
        {thumbnailImage && (
          <div className="work-thumbnail">
            <GatsbyImage image={thumbnailImage} alt={`${frontmatter.title} Thumbnail`} />
          </div>
        )}
        <div className="work-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 1400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        description
        author
        path
      }
    }
  }
`;

export default WorkTemplate;
