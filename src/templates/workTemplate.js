// src/templates/workTemplate.js

import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import WorkSchema from "../components/WorkSchema";
import { extractTagsFromMarkdown } from "../utils/contentMetadata";
import "./workTemplate.scss";

const WorkTemplate = ({ data }) => {
  const { markdownRemark: work } = data;
  const { frontmatter, html, excerpt, rawMarkdownBody } = work;
  const thumbnailUrl = frontmatter.thumbnail?.publicURL;
  const keywords = extractTagsFromMarkdown(rawMarkdownBody);
  const description = frontmatter.description || excerpt;
  const contentRef = useRef(null);

  useEffect(() => {
    const root = contentRef.current;

    if (!root) {
      return;
    }

    const paragraphs = Array.from(root.querySelectorAll("p"));

    const isCaptionParagraph = (element) => {
      if (!element || element.tagName !== "P" || element.children.length !== 1) {
        return false;
      }

      return element.firstElementChild?.tagName === "EM";
    };

    const getDirectCaption = (paragraph) =>
      Array.from(paragraph.children).find((child) => child.tagName === "EM");

    const hasVisualMedia = (paragraph) =>
      Array.from(paragraph.children).some((child) => {
        if (child.tagName === "IMG" || child.tagName === "PICTURE") {
          return true;
        }

        if (child.classList?.contains("gatsby-resp-image-wrapper")) {
          return true;
        }

        if (child.tagName === "A") {
          return Boolean(
            child.querySelector(
              ":scope > img, :scope > picture, :scope > .gatsby-resp-image-wrapper"
            )
          );
        }

        return false;
      });

    paragraphs.forEach((paragraph) => {
      if (!hasVisualMedia(paragraph) || paragraph.closest("figure.work-figure")) {
        return;
      }

      const figure = document.createElement("figure");
      figure.className = "work-figure";

      const media = document.createElement("div");
      media.className = "work-figure-media";

      let captionHTML = "";
      const directCaption = getDirectCaption(paragraph);

      if (directCaption) {
        captionHTML = directCaption.innerHTML;
        directCaption.remove();
      }

      while (paragraph.firstChild) {
        media.appendChild(paragraph.firstChild);
      }

      figure.appendChild(media);

      if (!captionHTML && isCaptionParagraph(paragraph.nextElementSibling)) {
        captionHTML = paragraph.nextElementSibling.firstElementChild.innerHTML;
        paragraph.nextElementSibling.remove();
      }

      if (captionHTML) {
        const caption = document.createElement("figcaption");
        caption.className = "work-figure-caption";
        caption.innerHTML = captionHTML;
        figure.appendChild(caption);
      }

      paragraph.replaceWith(figure);
    });
  }, [html]);

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={description}
        pathname={`/${frontmatter.path}`}
        image={frontmatter.thumbnail?.publicURL}
        imageAlt={`${frontmatter.title} thumbnail`}
        keywords={keywords}
      />
      <WorkSchema
        work={{
          ...frontmatter,
          description,
          keywords,
        }}
      />
      <div className="work-template">
        <h1>{frontmatter.title}</h1>
        <p className="work-date">{frontmatter.date}</p>
        <p className="work-author">Author: {frontmatter.author}</p>
        {thumbnailUrl && (
          <div className="work-thumbnail">
            <img
              src={thumbnailUrl}
              alt={`${frontmatter.title} Thumbnail`}
              decoding="async"
            />
          </div>
        )}
        <div
          ref={contentRef}
          className="work-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 180)
      rawMarkdownBody
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
