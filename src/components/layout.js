// src/components/layout.js
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "./seo";
import ScrollSpyNav from "./ScrollSpyNav";
import "../styles/global.scss";

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
  `);

  return (
    <div className="site-wrapper">
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <ScrollSpyNav />

      <main>{children}</main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Rashid Mushkani. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
