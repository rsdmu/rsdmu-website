import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import "../styles/global.scss" // Ensure global styles are imported

const IndexPage = ({ data: { site } }) => (
  <Layout>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <div className="background-image">
      <div className="centered-content">
        <h1 className="site-title">Rashid Ahmad Mushkani</h1>
        <p className="subtitle">Specialist in urban planning, AI, and architecture</p>
        <nav className="main-menu">
          <Link to="/bio">Bio</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/books">Books</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="icon-links">
        <Link to="/bio">
          <img src="/icons/bio-icon.svg" alt="Bio Icon" />
        </Link>
        <Link to="/projects">
          <img src="/icons/projects-icon.svg" alt="Projects Icon" />
        </Link>
        <Link to="/books">
          <img src="/icons/books-icon.svg" alt="Books Icon" />
        </Link>
        <Link to="/contact">
          <img src="/icons/contact-icon.svg" alt="Contact Icon" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
