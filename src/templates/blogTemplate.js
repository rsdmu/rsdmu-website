import React from "react";
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data,
}) {
  const { site, markdownRemark } = data;
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription || siteMetadata.description} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          <div
            className="post-thumbnail"
            style={frontmatter.thumbnail ? { backgroundImage: `url(${frontmatter.thumbnail})` } : {}}
          >
            <h1 className="post-title">{frontmatter.title}</h1>
            <div className="post-meta">{frontmatter.date}</div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        metaDescription
        thumbnail
      }
    }
  }
`;
