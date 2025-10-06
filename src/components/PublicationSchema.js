// src/components/PublicationSchema.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { RASHID_ID, RASHID_SAME_AS, RASHID_URL } from '../constants/rashidProfile';

const RASHID_NAME_VARIANTS = new Set([
  'Rashid Mushkani',
  'Rashid A. Mushkani',
  'Rashid Ahmad Mushkani',
].map(name => name.toLowerCase()));

const normaliseSiteUrl = (siteUrl) =>
  siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

const mapAuthor = (rawName) => {
  const name = rawName.trim();
  if (RASHID_NAME_VARIANTS.has(name.toLowerCase())) {
    return {
      '@type': 'Person',
      '@id': RASHID_ID,
      name,
      url: RASHID_URL,
      sameAs: RASHID_SAME_AS,
    };
  }

  return {
    '@type': 'Person',
    name,
  };
};

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
  const baseSiteUrl = normaliseSiteUrl(siteUrl);

  // Split authors by comma and trim whitespace
  const authors = publication.author
    ? publication.author.split(',').map(mapAuthor)
    : [];

  // Construct the absolute URL for the thumbnail image if it exists
  const imageUrl = publication.thumbnail?.publicURL
    ? `${baseSiteUrl}${publication.thumbnail.publicURL}`
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
      "@id": `${baseSiteUrl}/${publication.path}`,
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
