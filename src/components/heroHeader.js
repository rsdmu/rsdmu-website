// src/components/heroHeader.js
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const HeroHeader = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.description }}
        />
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> 
      </div>
    )}
  />
)

export default HeroHeader
