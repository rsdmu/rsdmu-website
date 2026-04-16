// src/components/WorkSchema.js
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

const WorkSchema = ({ work }) => {
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

  const authors = work.author
    ? splitAuthorNames(work.author).map(mapAuthor)
    : [];

  const imageUrl = work.thumbnail?.publicURL
    ? normaliseUrl(siteUrl, work.thumbnail.publicURL)
    : undefined;
  const pageUrl = normaliseUrl(siteUrl, work.path);
  const keywords = Array.isArray(work.keywords)
    ? work.keywords.filter(Boolean)
    : [];
  const description = work.description || work.title;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "headline": work.title,
    "name": work.title,
    "author": authors,
    "datePublished": work.date,
    "description": description,
    "url": pageUrl,
    "image": imageUrl,
    ...(locale ? { "inLanguage": locale } : {}),
    ...(keywords.length > 0 ? { "keywords": keywords } : {}),
    ...(keywords.length > 0
      ? {
          "about": keywords.map(keyword => ({
            "@type": "Thing",
            "name": keyword,
          })),
        }
      : {}),
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

export default WorkSchema;
