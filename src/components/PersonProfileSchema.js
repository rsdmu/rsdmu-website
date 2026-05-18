import React from "react";
import { Helmet } from "react-helmet";
import {
  RASHID_ALTERNATE_NAMES,
  RASHID_DISAMBIGUATING_DESCRIPTION,
  RASHID_EMAIL,
  RASHID_FAMILY_NAME,
  RASHID_GIVEN_NAME,
  RASHID_ID,
  RASHID_IMAGE_OBJECTS,
  RASHID_IMAGE_SET,
  RASHID_IDENTIFIERS,
  RASHID_JOB_TITLE,
  RASHID_KNOWS_ABOUT,
  RASHID_LOCALE,
  RASHID_PRIMARY_IMAGE_OBJECT_ID,
  RASHID_PROFILE_CREATED_AT,
  RASHID_PROFILE_DESCRIPTION,
  RASHID_PROFILE_PAGE_ID,
  RASHID_PROFILE_REFERENCES,
  RASHID_PROFILE_UPDATED_AT,
  RASHID_SAME_AS,
  RASHID_URL,
  RASHID_WEBSITE_ID,
} from "../constants/rashidProfile";

const PersonProfileSchema = () => {
  const identifierObjects = RASHID_IDENTIFIERS.map((identifier) => ({
    "@type": "PropertyValue",
    propertyID: identifier.propertyID,
    value: identifier.value,
    url: identifier.url,
  }));
  const imageObjects = RASHID_IMAGE_OBJECTS.map((image, index) => ({
    "@type": "ImageObject",
    "@id": image.id,
    url: image.url,
    contentUrl: image.url,
    thumbnailUrl: image.url,
    width: image.width,
    height: image.height,
    caption: image.caption,
    name:
      index === 0
        ? "Primary portrait of Rashid Mushkani"
        : `${image.caption} (${image.width}x${image.height})`,
    description: RASHID_PROFILE_DESCRIPTION,
    representativeOfPage: index === 0,
    encodingFormat: image.encodingFormat || "image/jpeg",
    creator: {
      "@id": RASHID_ID,
    },
    creditText: "Rashid Mushkani",
    copyrightNotice: "Rashid Mushkani",
    inLanguage: RASHID_LOCALE,
  }));
  const primaryImage = imageObjects[0];
  const referencedProfilePages = RASHID_PROFILE_REFERENCES.map((reference) => ({
    "@type": "ProfilePage",
    "@id": `${reference.url}#profilepage`,
    url: reference.url,
    name: reference.name,
    inLanguage: RASHID_LOCALE,
    isPartOf: {
      "@type": "WebSite",
      name: reference.publisher,
    },
    about: {
      "@id": RASHID_ID,
    },
    mainEntity: {
      "@id": RASHID_ID,
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": RASHID_WEBSITE_ID,
        url: RASHID_URL,
        name: "Rashid Mushkani",
        description: RASHID_PROFILE_DESCRIPTION,
        inLanguage: RASHID_LOCALE,
        image: {
          "@id": primaryImage["@id"],
        },
        publisher: {
          "@id": RASHID_ID,
        },
        author: {
          "@id": RASHID_ID,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": RASHID_PROFILE_PAGE_ID,
        url: RASHID_URL,
        name: "Rashid Mushkani",
        description: RASHID_PROFILE_DESCRIPTION,
        inLanguage: RASHID_LOCALE,
        isPartOf: {
          "@id": RASHID_WEBSITE_ID,
        },
        about: {
          "@id": RASHID_ID,
        },
        thumbnailUrl: primaryImage.url,
        image: RASHID_IMAGE_SET,
        primaryImageOfPage: {
          "@id": RASHID_PRIMARY_IMAGE_OBJECT_ID,
        },
        significantLink: RASHID_SAME_AS,
        relatedLink: RASHID_SAME_AS,
        mainEntity: {
          "@id": RASHID_ID,
        },
        dateCreated: RASHID_PROFILE_CREATED_AT,
        dateModified: RASHID_PROFILE_UPDATED_AT,
      },
      {
        "@type": "Person",
        "@id": RASHID_ID,
        identifier: identifierObjects,
        url: RASHID_URL,
        givenName: RASHID_GIVEN_NAME,
        familyName: RASHID_FAMILY_NAME,
        mainEntityOfPage: {
          "@id": RASHID_PROFILE_PAGE_ID,
        },
        name: "Rashid Mushkani",
        alternateName: RASHID_ALTERNATE_NAMES,
        description: RASHID_PROFILE_DESCRIPTION,
        disambiguatingDescription: RASHID_DISAMBIGUATING_DESCRIPTION,
        email: `mailto:${RASHID_EMAIL}`,
        image: RASHID_IMAGE_SET,
        photo: {
          "@id": primaryImage["@id"],
        },
        sameAs: RASHID_SAME_AS,
        jobTitle: RASHID_JOB_TITLE,
        knowsAbout: RASHID_KNOWS_ABOUT,
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Researcher",
            description:
              "Researcher in participatory AI, inclusive public spaces, and socio-spatial justice.",
          },
          {
            "@type": "Occupation",
            name: RASHID_JOB_TITLE,
            description:
              "Doctoral researcher working at the intersection of urban planning and artificial intelligence.",
          },
        ],
        worksFor: [
          {
            "@type": "CollegeOrUniversity",
            name: "University of Montreal",
            url: "https://www.umontreal.ca/en/",
          },
          {
            "@type": "ResearchOrganization",
            name: "Mila - Quebec Artificial Intelligence Institute",
            url: "https://mila.quebec/en/",
          },
        ],
        affiliation: [
          {
            "@type": "Organization",
            name: "UNESCO Chair in Urban Landscape",
            url: "https://unesco-studio.umontreal.ca/",
          },
          {
            "@type": "Organization",
            name: "International Observatory on the Societal Impacts of AI and Digital Technologies",
            url: "https://www.obvia.ca/en",
            sameAs: "https://www.obvia.ca/en",
          },
        ],
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Toyohashi University of Technology",
            url: "https://www.tut.ac.jp/english/",
            sameAs: "https://www.tut.ac.jp/english/",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Kabul University",
            url: "https://www.ku.edu.af/en",
            sameAs: "https://www.ku.edu.af/en",
          },
        ],
        subjectOf: [
          {
            "@id": RASHID_PROFILE_PAGE_ID,
          },
          ...referencedProfilePages.map((reference) => ({
            "@id": reference["@id"],
          })),
        ],
      },
      ...referencedProfilePages,
      ...imageObjects,
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default PersonProfileSchema;
