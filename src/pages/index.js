// src/pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import './index.scss';

const IndexPage = () => (
  <>
    <Header />
    <div className="overlay"></div>
    <main className="main-content">
      <h1 className="name">YOUR NAME</h1>
      <div className="affiliations">
        <p>YOUR AFFILIATION 1</p>
        <p>YOUR AFFILIATION 2</p>
        <p>YOUR AFFILIATION 3</p>
      </div>
      <div className="roles">
        <p>YOUR ROLE 1</p>
        <p>YOUR ROLE 2</p>
      </div>
    </main>
    <footer className="icon-bar">
      <a href="/books/">
        <img src="/icons/books.svg" alt="Books" />
        <span>Books</span>
      </a>
      <a href="/papers/">
        <img src="/icons/papers.svg" alt="Papers" />
        <span>Papers</span>
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
  </>
);

export default IndexPage;
