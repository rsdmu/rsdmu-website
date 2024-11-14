// src/pages/contact.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/SEO';


const ContactPage = ({ data }) => {
  const { site } = data;

  return (
    <Layout>
      <SEO title={`Contact — ${site.siteMetadata.title}`} />
      <div className="contact-page">
        <div
          className="contact-banner"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
          }}
        >
          <h1 className="contact-title">Get in Touch</h1>
          <p>Let me assist with your next academic project &rarr;</p>
        </div>
        <div>
          <form
            className="form-container"
            action="https://formspree.io/f/xkndbero"
            method="POST"
          >
            <div>
              <label htmlFor="w3lName">Name</label>
              <input
                type="text"
                name="name"
                id="w3lName"
                style={{ fontSize: '18px' }}
                required
              />
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input
                type="email"
                name="_replyto"
                id="w3lSender"
                style={{ fontSize: '18px' }}
                required
              />
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input
                type="text"
                name="subject"
                id="w3lSubject"
                style={{ fontSize: '18px' }}
              />
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea
                name="message"
                id="w3lMessage"
                style={{ fontSize: '18px' }}
                required
              ></textarea>
            </div>
            <input type="hidden" name="_next" value="/thank-you" />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <input
                type="submit"
                value="Send"
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
