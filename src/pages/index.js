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
      <div className="intro-container">
        <h1 className="name">Rashid Mushkani</h1>
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
      </div>
    </main>
    <footer className="icon-bar">
      <Link to="/papers/" className="icon-link">
        <img src="/icons/papers.svg" alt="Papers" />
        <span>Papers</span>
      </Link>
      <Link to="/projects/" className="icon-link">
        <img src="/icons/projects.svg" alt="Projects" />
        <span>Projects</span>
      </Link>
      <Link to="/bio/" className="icon-link">
        <img src="/icons/bio.svg" alt="Bio" />
        <span>Bio</span>
      </Link>
      <Link to="/contact/" className="icon-link">
        <img src="/icons/contact.svg" alt="Contact" />
        <span>Contact</span>
      </Link>
    </footer>
  </Layout>
);

export default IndexPage;
