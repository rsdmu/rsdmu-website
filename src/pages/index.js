// src/pages/index.js
import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './index.scss'; // Ensure this imports your global styles or is removed if global.scss is already imported in layout.js
import IconLink from '../components/IconLink';
import BioSection from "../components/BioSection"

const IndexPage = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xkndbero', { // Ensure this is your correct Formspree ID
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
      });

      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Thank you! Your message has been sent.' } });
        e.target.reset(); // Reset form fields
      } else {
        const data = await response.json();
        if (Object.hasOwnProperty.call(data, 'errors')) {
          setFormStatus({ submitted: false, submitting: false, info: { error: true, msg: data.errors.map(error => error.message).join(', ') } });
        } else {
          setFormStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Oops! There was a problem submitting your form.' } });
        }
      }
    } catch (error) {
      setFormStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Oops! There was a problem submitting your form.' } });
    }
  };

  return (
    <Layout>
      <div className="background-image-wrapper">
        <div className="background-image"></div>
        <div className="centered-content">
          <h1 className="site-title">RASHID MUSHKANI</h1>
          <p>AI & Urban Studies PhD Candidate</p>
          <p>University of Montreal</p>
        </div>
      </div>

      {/* Icon Navigation Bar */}
      <footer className="icon-bar">
        <IconLink to="#papers" src="/icons/papers.svg" alt="Papers" label="Papers" />
        <IconLink to="#projects" src="/icons/projects.svg" alt="Projects" label="Projects" />
        <IconLink to="#bio" src="/icons/bio.svg" alt="Bio" label="Bio" />
        <IconLink to="#contact" src="/icons/contact.svg" alt="Contact" label="Contact" />
      </footer>

      {/* Content Sections */}
      <section id="papers" className="content-section">
        <h2>Papers</h2>
        <p>Here are some publications and papers by Rashid Ahmad Mushkani.</p>
        {/* Add your papers with thumbnails and links here */}
      </section>

      <section id="projects" className="content-section">
        <h2>Projects</h2>
        <p>
          Explore the various projects in urban planning, AI, and architecture led by Rashid Ahmad Mushkani.
        </p>
        {/* Add your projects with thumbnails and links here */}
      </section>

      {/* Replace the existing bio section with BioSection component */}
      <BioSection />

      <section id="contact" className="content-section contact-section">
        <h2>Contact</h2>
        <p>Feel free to reach out to me through the form below or connect with me on social media!</p>
        
        <div className="contact-container">
          {/* Social Links */}
          <div className="social-links">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/rashid-mushkani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rashid_mushkani" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/icons/instagram.svg" alt="Instagram" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/rsdmu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img src="/icons/github.svg" alt="GitHub" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:rashid.mushkani@gmail.com" aria-label="Email">
                  <img src="/icons/email.svg" alt="Email" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form action="https://formspree.io/f/xkndbero" method="POST" className="contact-form" onSubmit={handleSubmit}>
            {/* Feedback Messages */}
            {formStatus.submitted && !formStatus.info.error && (
              <div className="form-feedback success">
                {formStatus.info.msg}
              </div>
            )}
            {formStatus.info.error && (
              <div className="form-feedback error">
                {formStatus.info.msg}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" disabled={formStatus.submitting}>
              {formStatus.submitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
