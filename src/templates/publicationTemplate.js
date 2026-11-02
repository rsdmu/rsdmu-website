// src/templates/publicationTemplate.js
import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { FaFilePdf, FaEye, FaEyeSlash } from 'react-icons/fa';
import "./publicationTemplate.scss"; // Ensure this file exists and contains necessary styles
import PublicationSchema from '../components/PublicationSchema'; // Import the schema component

const PublicationTemplate = ({ data }) => {
  const { markdownRemark: publication } = data;
  const { frontmatter, html } = publication;
  const thumbnailUrl = frontmatter.thumbnail?.publicURL;
  const thumbnailAlt = frontmatter.thumbnailAlt || `${frontmatter.title} thumbnail`;
  const thumbnailDimensions = frontmatter.thumbnail?.childImageSharp?.original;
  const thumbnailType = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
  }[frontmatter.thumbnail?.extension];
  
  const [isAbstractOpen, setIsAbstractOpen] = useState(false); // State to track abstract toggle

  const toggleAbstract = () => {
    setIsAbstractOpen(!isAbstractOpen);
  };

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description || frontmatter.abstract || frontmatter.title}
        pathname={`/${frontmatter.path}`}
        image={thumbnailUrl}
        imageAlt={thumbnailAlt}
        imageWidth={thumbnailDimensions?.width}
        imageHeight={thumbnailDimensions?.height}
        imageType={thumbnailType}
      />
      
      {/* Add JSON-LD Schema */}
      <PublicationSchema publication={frontmatter} />

      <div className="publication-template">
        <h1>{frontmatter.title}</h1>
        <p className="publication-date">Year: {frontmatter.date}</p>
        {frontmatter.venue && <p className="publication-venue">{frontmatter.venue}</p>}
        <p className="publication-author">Author: {frontmatter.author}</p>
        {thumbnailUrl && (
          <figure className="publication-image">
            <a href={frontmatter.link} target="_blank" rel="noopener noreferrer">
              <picture>
                {frontmatter.animatedThumbnail && (
                  <source
                    media="(prefers-reduced-motion: no-preference)"
                    srcSet={frontmatter.animatedThumbnail.publicURL}
                    type="image/gif"
                  />
                )}
                <img
                  src={thumbnailUrl}
                  alt={thumbnailAlt}
                  className="publication-thumbnail"
                  decoding="async"
                />
              </picture>
            </a>
            {frontmatter.thumbnailCaption && (
              <figcaption>
                {frontmatter.thumbnailCaption}{" "}
                {frontmatter.thumbnailSource && (
                  <a href={frontmatter.thumbnailSource} target="_blank" rel="noopener noreferrer">Source</a>
                )}
              </figcaption>
            )}
          </figure>
        )}
        {(frontmatter.abstract || frontmatter.pdf) && <div className="publication-actions">
          {frontmatter.abstract && <button
            className="abstract-toggle-button"
            onClick={toggleAbstract}
            aria-expanded={isAbstractOpen}
            aria-controls="abstract-content"
          >
            {isAbstractOpen ? <FaEyeSlash /> : <FaEye />} Abstract
          </button>}
          {frontmatter.pdf && <a
            href={frontmatter.pdf}
            className="pdf-download-link"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download PDF"
          >
            <FaFilePdf /> PDF
          </a>}
        </div>}
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
        date(formatString: "YYYY")
        venue
        thumbnail {
          publicURL
          extension
          childImageSharp {
            original {
              width
              height
            }
          }
        }
        thumbnailAlt
        animatedThumbnail {
          publicURL
        }
        thumbnailCaption
        thumbnailSource
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
