import React from 'react';
import { Helmet } from 'react-helmet';
import {
  RASHID_ALTERNATE_NAMES,
  RASHID_EMAIL,
  RASHID_FAMILY_NAME,
  RASHID_GIVEN_NAME,
  RASHID_ID,
  RASHID_IMAGE_OBJECTS,
  RASHID_IMAGE_SET,
  RASHID_JOB_TITLE,
  RASHID_KNOWS_ABOUT,
  RASHID_LOCALE,
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
    name: index === 0 ? 'Primary portrait of Rashid Mushkani' : `${image.caption} (${image.width}x${image.height})`,
    description: RASHID_PROFILE_DESCRIPTION,
    representativeOfPage: index === 0,
    encodingFormat: image.encodingFormat || 'image/jpeg',
    creator: {
      '@id': RASHID_ID,
    },
    creditText: 'Rashid Mushkani',
    copyrightNotice: 'Rashid Mushkani',
    inLanguage: RASHID_LOCALE,
  }));
  const primaryImage = imageObjects[0];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': RASHID_WEBSITE_ID,
        url: RASHID_URL,
        name: 'Rashid Mushkani',
        description: RASHID_PROFILE_DESCRIPTION,
        inLanguage: RASHID_LOCALE,
        image: {
          '@id': primaryImage['@id'],
        },
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
        inLanguage: RASHID_LOCALE,
        isPartOf: {
          '@id': RASHID_WEBSITE_ID,
        },
        about: {
          '@id': RASHID_ID,
        },
        thumbnailUrl: primaryImage.url,
        image: RASHID_IMAGE_SET,
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
        givenName: RASHID_GIVEN_NAME,
        familyName: RASHID_FAMILY_NAME,
        mainEntityOfPage: {
          '@id': RASHID_PROFILE_PAGE_ID,
        },
        subjectOf: {
          '@id': RASHID_PROFILE_PAGE_ID,
        },
        name: 'Rashid Mushkani',
        alternateName: RASHID_ALTERNATE_NAMES,
        description: RASHID_PROFILE_DESCRIPTION,
        email: `mailto:${RASHID_EMAIL}`,
        image: RASHID_IMAGE_SET,
        photo: {
          '@id': primaryImage['@id'],
        },
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
