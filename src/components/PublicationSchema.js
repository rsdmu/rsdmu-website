// src/components/PublicationSchema.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const PublicationSchema = ({ publication }) => {
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
  const authors = publication.author.split(',').map(name => ({
    "@type": "Person",
    "name": name.trim(),
  }));

  // Construct the absolute URL for the thumbnail image if it exists
  const imageUrl = publication.thumbnail
    ? `${siteUrl}${publication.thumbnail}`
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": publication.title,
    "author": authors,
    "datePublished": publication.date,
    "url": publication.link,
    "image": imageUrl,
    "abstract": publication.abstract,
    "publisher": {
      "@type": "Organization",
      "name": siteTitle, // Using site title as publisher name
      "url": siteUrl,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/${publication.path}`,
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

export default PublicationSchema;
