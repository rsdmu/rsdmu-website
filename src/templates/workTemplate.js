// src/templates/workTemplate.js

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "./workTemplate.scss";

const WorkTemplate = ({ data }) => {
  const { markdownRemark: work } = data;
  const { frontmatter, html } = work;
  const thumbnailUrl = frontmatter.thumbnail?.publicURL;

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description || frontmatter.title}
        pathname={`/${frontmatter.path}`}
        image={frontmatter.thumbnail?.publicURL}
        imageAlt={`${frontmatter.title} thumbnail`}
      />
      <div className="work-template">
        <h1>{frontmatter.title}</h1>
        <p className="work-date">{frontmatter.date}</p>
        <p className="work-author">Author: {frontmatter.author}</p>
        {thumbnailUrl && (
          <div className="work-thumbnail">
            <img src={thumbnailUrl} alt={`${frontmatter.title} Thumbnail`} />
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
          publicURL
        }
        description
        author
        path
      }
    }
  }
`;

export default WorkTemplate;
