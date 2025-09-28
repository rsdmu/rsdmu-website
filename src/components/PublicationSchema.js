// src/components/PublicationSchema.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const RASHID_ID = 'https://rsdmu.com/#bio';
const RASHID_URL = 'https://rsdmu.com/';
const RASHID_SAME_AS = [
  'https://www.linkedin.com/in/rashid-mushkani',
  'https://github.com/rsdmu',
  'https://scholar.google.com/citations?user=PClylNUAAAAJ&hl=en',
  'https://unesco-studio.umontreal.ca/team/rashid_mushkani.html',
  'https://orcid.org/0000-0002-3173-8310',
  'https://amenagement.umontreal.ca/en/recherche/professeurs/fiche/in/in35141/sg/Rashid%20Mushkani/',
  'https://www.researchgate.net/profile/Rashid-Mushkani-2?ev=hdr_xprf',
  'https://sp-exchange.ca/podcast/urban-planning-artificial-intelligence-and-inclusive-cities-an-interview-with-rashid-mushkani/',
  'https://mila.quebec/en/directory/rashid-mushkani',
];

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
