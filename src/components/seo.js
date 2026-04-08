// src/components/SEO.js

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {
  RASHID_PRIMARY_IMAGE,
  RASHID_PRIMARY_IMAGE_HEIGHT,
  RASHID_PRIMARY_IMAGE_WIDTH,
  RASHID_PROFILE_IMAGE_ALT,
} from "../constants/rashidProfile"

const normaliseUrl = (siteUrl, path = "/") => {
  const baseUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl

  if (!path) {
    return `${baseUrl}/`
  }

  if (/^https?:\/\//.test(path)) {
    return path
  }

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`
}

const SEO = ({
  title,
  description,
  pathname = "/",
  image = RASHID_PRIMARY_IMAGE,
  imageAlt = RASHID_PROFILE_IMAGE_ALT,
  imageWidth = RASHID_PRIMARY_IMAGE_WIDTH,
  imageHeight = RASHID_PRIMARY_IMAGE_HEIGHT,
  type = "website",
  noindex = false,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          googleVerification
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata.siteUrl
  const resolvedTitle = title || defaultTitle
  const canonicalUrl = normaliseUrl(siteUrl, pathname)
  const imageUrl = normaliseUrl(siteUrl, image)
  const twitterCard = type === "profile" ? "summary" : "summary_large_image"
  const titleTemplate = resolvedTitle && resolvedTitle !== defaultTitle
    ? `%s | ${defaultTitle}`
    : undefined
  const robotsContent = noindex
    ? `noindex, nofollow`
    : `index, follow, max-image-preview:large`
  const profileMeta = type === "profile"
    ? [
        {
          property: `profile:first_name`,
          content: `Rashid`,
        },
        {
          property: `profile:last_name`,
          content: `Mushkani`,
        },
      ]
    : []

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={resolvedTitle}
      titleTemplate={titleTemplate}
      link={[
        {
          rel: `canonical`,
          href: canonicalUrl,
        },
        {
          rel: `image_src`,
          href: imageUrl,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata?.author || "",
        },
        {
          name: `google-site-verification`,
          content: site.siteMetadata.googleVerification,
        },
        {
          name: `robots`,
          content: robotsContent,
        },
        {
          property: `og:site_name`,
          content: defaultTitle,
        },
        {
          property: `og:title`,
          content: resolvedTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:url`,
          content: canonicalUrl,
        },
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          property: `og:image:secure_url`,
          content: imageUrl,
        },
        {
          property: `og:image:alt`,
          content: imageAlt,
        },
        ...(imageWidth
          ? [
              {
                property: `og:image:width`,
                content: String(imageWidth),
              },
            ]
          : []),
        ...(imageHeight
          ? [
              {
                property: `og:image:height`,
                content: String(imageHeight),
              },
            ]
          : []),
        {
          name: `twitter:card`,
          content: twitterCard,
        },
        {
          name: `twitter:title`,
          content: resolvedTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: imageUrl,
        },
        {
          name: `twitter:image:alt`,
          content: imageAlt,
        },
        ...profileMeta,
      ]}
    />
  )
}

export default SEO
