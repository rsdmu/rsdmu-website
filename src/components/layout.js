// src/components/layout.js
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Navigation from "./navigation"
import SEO from "./SEO"
import 'prismjs/themes/prism-okaidia.css'
import "../styles/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="site-wrapper">
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <header className="site-header">
        <div className="background-image">
          <div className="centered-content">
            <h1 className="site-title">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <Navigation />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Rashid A. Mushkani</p>
      </footer>
    </div>
  )
}

export default Layout
