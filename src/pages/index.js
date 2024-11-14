// src/pages/index.js
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="main-content">
      <h1 className="name">Rashid Ahmad Mushkani</h1>
      <div className="affiliations">
        <p>University of Montreal</p>
        <p>Doctoral Candidate</p>
        {/* Add more affiliations if needed */}
      </div>
      <div className="roles">
        <p>Urban Planner</p>
        <p>AI Specialist</p>
        {/* Add more roles if needed */}
      </div>
    </main>
    <footer className="icon-bar">
      <Link to="/books/">
        <img src="/icons/books.svg" alt="Books" />
        <span>Books</span>
      </Link>
      <Link to="/projects/">
        <img src="/icons/projects.svg" alt="Projects" />
        <span>Projects</span>
      </Link>
      <Link to="/bio/">
        <img src="/icons/bio.svg" alt="Bio" />
        <span>Bio</span>
      </Link>
      <Link to="/contact/">
        <img src="/icons/contact.svg" alt="Contact" />
        <span>Contact</span>
      </Link>
    </footer>
  </Layout>
);

export default IndexPage;
