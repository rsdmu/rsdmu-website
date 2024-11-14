// src/pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import './index.scss';

const IndexPage = () => (
  <Layout>
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
      <a href="/books/">
        <img src="/icons/books.svg" alt="Books" />
        <span>Books</span>
      </a>
      <a href="/projects/">
        <img src="/icons/projects.svg" alt="Projects" />
        <span>Projects</span>
      </a>
      <a href="/bio/">
        <img src="/icons/bio.svg" alt="Bio" />
        <span>Bio</span>
      </a>
      <a href="/contact/">
        <img src="/icons/contact.svg" alt="Contact" />
        <span>Contact</span>
      </a>
    </footer>
  </Layout>
);

export default IndexPage;
