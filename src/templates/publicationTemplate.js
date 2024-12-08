// src/templates/publicationTemplate.js
import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaFilePdf, FaEye, FaEyeSlash } from 'react-icons/fa';
import "./publicationTemplate.scss"; // Ensure this file exists and contains necessary styles
import PublicationSchema from '../components/PublicationSchema'; // Import the schema component

const PublicationTemplate = ({ data }) => {
  const { markdownRemark: publication } = data;
  const { frontmatter, html } = publication;
  const image = getImage(frontmatter.thumbnail);
  
  const [isAbstractOpen, setIsAbstractOpen] = useState(false); // State to track abstract toggle

  const toggleAbstract = () => {
    setIsAbstractOpen(!isAbstractOpen);
  };

  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description || frontmatter.title} />
      
      {/* Add JSON-LD Schema */}
      <PublicationSchema publication={frontmatter} />

      <div className="publication-template">
        <h1>{frontmatter.title}</h1>
        <p className="publication-date">Year: {frontmatter.date}</p>
        <p className="publication-author">Author: {frontmatter.author}</p>
        {image && (
          <a href={frontmatter.link} target="_blank" rel="noopener noreferrer">
            <GatsbyImage image={image} alt={`${frontmatter.title} Thumbnail`} className="publication-thumbnail" />
          </a>
        )}
        <div className="publication-actions">
          <button
            className="abstract-toggle-button"
            onClick={toggleAbstract}
            aria-expanded={isAbstractOpen}
            aria-controls="abstract-content"
          >
            {isAbstractOpen ? <FaEyeSlash /> : <FaEye />} Abstract
          </button>
          <a
            href={frontmatter.pdf}
            className="pdf-download-link"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download PDF"
          >
            <FaFilePdf /> PDF
          </a>
        </div>
        {isAbstractOpen && (
          <div id="abstract-content" className="abstract-content">
            <p>{frontmatter.abstract}</p>
          </div>
        )}
        <div className="publication-content" dangerouslySetInnerHTML={{ __html: html }} />
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
        date(formatString: "2024-12-12") # Ensure date is in ISO format
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        description
        author
        link
        abstract
        pdf
        path
      }
    }
  }
`;

export default PublicationTemplate;
