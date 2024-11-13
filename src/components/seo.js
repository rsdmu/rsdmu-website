import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, metaTag }) => (
  <Helmet
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        name: `google-site-verification`,
        content: metaTag, // This will use the value passed as metaTag prop
      },
    ]}
  />
)

export default SEO
