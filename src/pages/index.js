// src/pages/index.js
import React, { useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo'; // Updated import
import './index.scss';
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
      <Seo title="Home" description="Welcome to Rashid Mushkani's Portfolio" />
      
      {/* Assign an ID to the top section */}
      <div id="home" className="background-image-wrapper">
        {/* Set the WebP image as a background */}
        <div className="background-image"></div>
        {/* Overlay that changes with the theme */}
        <div className="overlay"></div>
        <div className="centered-content">
          {/* Move the subtitles above the name and align them to the right */}
          <h1 className="site-title">RASHID MUSHKANI</h1>
          <p className="hero-subtitle" style={{ textAlign: 'left' }}>
            AI & Urban Studies PhD Candidate
          </p>
          <p className="hero-subtitle" style={{ textAlign: 'left' }}>
            University of Montreal
          </p>

        </div>
      </div>


      {/* Content Sections */}
      <section id="papers" className="content-section">
        <h2>Papers</h2>
        <div className="grid-container">
          {/* Example Grid Items */}
          <div className="grid-item">
            <img src="/images/paper1.jpg" alt="Paper 1" />
            <div className="grid-item-content">
              <h3 className="grid-item-title">Paper Title One</h3>
              <p className="grid-item-author">Author: Rashid Mushkani</p>
            </div>
          </div>
          <div className="grid-item">
            <img src="/images/paper2.jpg" alt="Paper 2" />
            <div className="grid-item-content">
              <h3 className="grid-item-title">Paper Title Two</h3>
              <p className="grid-item-author">Author: Rashid Mushkani</p>
            </div>
          </div>
          {/* Add more grid items as needed */}
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2>Projects</h2>
        <div className="grid-container">
          {/* Example Grid Items */}
          <div className="grid-item">
            <img src="/images/project1.jpg" alt="Project 1" />
            <div className="grid-item-content">
              <h3 className="grid-item-title">Project One</h3>
              <p className="grid-item-author">AI Integration in Urban Design</p>
            </div>
          </div>
          <div className="grid-item">
            <img src="/images/project2.jpg" alt="Project 2" />
            <div className="grid-item-content">
              <h3 className="grid-item-title">Project Two</h3>
              <p className="grid-item-author">Sustainable Urban Development</p>
            </div>
          </div>
          {/* Add more grid items as needed */}
        </div>
      </section>

      {/* Replace the existing bio section with BioSection component */}
      <BioSection />

      <section id="contact" className="content-section contact-section">
        <h2>Contact</h2>
        <div className="contact-container">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xkndbero"
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* Form Title Wrapper */}
            <div className="form-title-wrapper">
              <h3>Write</h3>
            </div>

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
          
          {/* Affiliations */}
          <div className="affiliations">
            <h3>Affiliations</h3>
            <ul className="affiliations-list">
              <li>
                <a href="https://urbanismepaysage.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/udem.svg" alt="University of Montreal" />
                  <span>University of Montreal</span>
                </a>
              </li>
              <li>
                <a href="https://unesco-studio.umontreal.ca/team/rashid_mushkani.html" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/unesco.svg" alt="UNESCO Chair in Urban Landscape" />
                  <span>UNESCO Chair in Urban Landscape</span>
                </a>
              </li>
              <li>
                <a href="https://mila.quebec/en/directory/rashid-mushkani" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/mila.svg" alt="Mila - Quebec Artificial Intelligence Institute" />
                  <span>Mila - Quebec Artificial Intelligence Institute</span>
                </a>
              </li>
              <li>
                <a href="https://www.obvia.ca/en" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/obvia.svg" alt="Obvia" />
                  <span>International Observatory on the Societal Impacts of AI and Digital Technologies</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <h3>Connect</h3>
            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/in/rashid-mushkani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rashid_mushkani" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/icons/instagram.svg" alt="Instagram" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/rsdmu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img src="/icons/github.svg" alt="GitHub" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="mailto:rashid.mushkani@gmail.com" aria-label="Email">
                  <img src="/icons/email.svg" alt="Email" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
