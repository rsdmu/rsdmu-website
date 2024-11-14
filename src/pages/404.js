// src/pages/404.js
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <h1>Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <p>
      <Link to="/">Go back to the homepage</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
