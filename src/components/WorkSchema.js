// src/components/WorkSchema.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const WorkSchema = ({ work }) => {
  // Query site metadata to get the site URL and title
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `);

  const { siteUrl, title: siteTitle } = data.site.siteMetadata;

  // Split authors by comma and trim whitespace
  const authors = work.author
    ? work.author.split(',').map(name => ({
        "@type": "Person",
        "name": name.trim(),
      }))
    : [];

  // Construct the absolute URL for the thumbnail image if it exists
  const imageUrl = work.thumbnail
    ? `${siteUrl}${work.thumbnail}`
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": work.title,
    "author": authors,
    "datePublished": work.date,
    "description": work.description,
    "url": `${siteUrl}/${work.path}`,
    "image": imageUrl,
    "publisher": {
      "@type": "Organization",
      "name": siteTitle, // Using site title as publisher name
      "url": siteUrl,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/${work.path}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default WorkSchema;
