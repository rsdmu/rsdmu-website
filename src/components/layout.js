import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation" // Assuming Navigation is also in the same components directory
import SEO from "./seo" // Importing SEO
import 'prismjs/themes/prism-okaidia.css'
import "../styles/global.scss";


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="site-wrapper">
      <SEO 
        title={data.site.siteMetadata.title} 
        description="rsdmu" // Website description
        metaTag="l3J0y3XD8D3n9javX6yPcBrEYB9SXnICRguNy3C5JHA" // Google Search Console verification code
      />
      <header className="site-header">
        <div className="background-image">
          <div className="centered-content">
            <h1 className="site-title">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <nav className="main-menu">
              <Link to="/">Home</Link>
              <Link to="/bio">Bio</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/books">Books</Link>
              <Link to="/contact">Contact</Link>
            </nav>
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
