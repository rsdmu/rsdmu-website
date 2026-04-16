// src/components/PublicationSchema.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { RASHID_ID, RASHID_SAME_AS, RASHID_URL } from '../constants/rashidProfile';
import {
  normaliseUrl,
  splitAuthorNames,
} from '../utils/contentMetadata';

const RASHID_NAME_VARIANTS = new Set([
  'Rashid Mushkani',
  'Rashid A. Mushkani',
  'Rashid Ahmad Mushkani',
].map(name => name.toLowerCase()));

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
          locale
        }
      }
    }
  `);

  const { siteUrl, title: siteTitle, locale } = data.site.siteMetadata;

  const authors = publication.author
    ? splitAuthorNames(publication.author).map(mapAuthor)
    : [];

  const imageUrl = publication.thumbnail?.publicURL
    ? normaliseUrl(siteUrl, publication.thumbnail.publicURL)
    : undefined;
  const pageUrl = normaliseUrl(siteUrl, publication.path);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": publication.title,
    "author": authors,
    "datePublished": publication.date,
    "url": publication.link,
    "image": imageUrl,
    "abstract": publication.abstract,
    ...(locale ? { "inLanguage": locale } : {}),
    "publisher": {
      "@type": "Organization",
      "name": siteTitle,
      "url": siteUrl,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl,
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
