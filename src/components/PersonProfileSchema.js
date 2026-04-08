import React from 'react';
import { Helmet } from 'react-helmet';
import {
  RASHID_ALTERNATE_NAMES,
  RASHID_EMAIL,
  RASHID_ID,
  RASHID_IMAGE_OBJECTS,
  RASHID_JOB_TITLE,
  RASHID_KNOWS_ABOUT,
  RASHID_PRIMARY_IMAGE_OBJECT_ID,
  RASHID_PROFILE_CREATED_AT,
  RASHID_PROFILE_DESCRIPTION,
  RASHID_PROFILE_PAGE_ID,
  RASHID_PROFILE_UPDATED_AT,
  RASHID_SAME_AS,
  RASHID_URL,
  RASHID_WEBSITE_ID,
} from '../constants/rashidProfile';

const PersonProfileSchema = () => {
  const imageObjects = RASHID_IMAGE_OBJECTS.map((image, index) => ({
    '@type': 'ImageObject',
    '@id': image.id,
    url: image.url,
    contentUrl: image.url,
    thumbnailUrl: image.url,
    width: image.width,
    height: image.height,
    caption: image.caption,
    representativeOfPage: index === 0,
    encodingFormat: 'image/jpeg',
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': RASHID_WEBSITE_ID,
        url: RASHID_URL,
        name: 'Rashid Mushkani',
        description: RASHID_PROFILE_DESCRIPTION,
        inLanguage: 'en-CA',
        publisher: {
          '@id': RASHID_ID,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': RASHID_PROFILE_PAGE_ID,
        url: RASHID_URL,
        name: 'Rashid Mushkani',
        description: RASHID_PROFILE_DESCRIPTION,
        isPartOf: {
          '@id': RASHID_WEBSITE_ID,
        },
        image: {
          '@id': RASHID_PRIMARY_IMAGE_OBJECT_ID,
        },
        primaryImageOfPage: {
          '@id': RASHID_PRIMARY_IMAGE_OBJECT_ID,
        },
        mainEntity: {
          '@id': RASHID_ID,
        },
        dateCreated: RASHID_PROFILE_CREATED_AT,
        dateModified: RASHID_PROFILE_UPDATED_AT,
      },
      {
        '@type': 'Person',
        '@id': RASHID_ID,
        identifier: 'rashid-mushkani',
        url: RASHID_URL,
        mainEntityOfPage: {
          '@id': RASHID_PROFILE_PAGE_ID,
        },
        name: 'Rashid Ahmad Mushkani',
        alternateName: RASHID_ALTERNATE_NAMES,
        description: RASHID_PROFILE_DESCRIPTION,
        email: `mailto:${RASHID_EMAIL}`,
        image: imageObjects.map((image) => ({
          '@id': image['@id'],
        })),
        sameAs: RASHID_SAME_AS,
        jobTitle: RASHID_JOB_TITLE,
        knowsAbout: RASHID_KNOWS_ABOUT,
        worksFor: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'University of Montreal',
            sameAs: 'https://amenagement.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/',
          },
          {
            '@type': 'ResearchOrganization',
            name: 'Mila - Quebec Artificial Intelligence Institute',
            sameAs: 'https://mila.quebec/en/directory/rashid-mushkani',
          },
        ],
        affiliation: [
          {
            '@type': 'Organization',
            name: 'UNESCO Chair in Urban Landscape',
            sameAs: 'https://unesco-studio.umontreal.ca/team/rashid_mushkani.html',
          },
          {
            '@type': 'Organization',
            name: 'International Observatory on the Societal Impacts of AI and Digital Technologies',
            sameAs: 'https://www.obvia.ca/en',
          },
        ],
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Toyohashi University of Technology',
            sameAs: 'https://www.tut.ac.jp/english/',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'Kabul University',
            sameAs: 'https://www.ku.edu.af/en',
          },
        ],
      },
      ...imageObjects,
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default PersonProfileSchema;
