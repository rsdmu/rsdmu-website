// src/pages/index.js
import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import './index.scss';
import BioSection from "../components/BioSection";
import { FaFilePdf, FaEye, FaEyeSlash } from 'react-icons/fa';
import PersonProfileSchema from '../components/PersonProfileSchema';
import PublicationSchema from '../components/PublicationSchema'; 
import WorkSchema from '../components/WorkSchema';
import {
  RASHID_EMAIL,
  RASHID_JOB_TITLE,
  RASHID_PRIMARY_IMAGE,
  RASHID_PROFILE_DESCRIPTION,
  RASHID_PROFILE_IMAGE_ALT,
} from '../constants/rashidProfile';

const IndexPage = ({ data }) => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [openAbstracts, setOpenAbstracts] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xkndbero', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
      });

      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Thank you! Your message has been sent.' } });
        e.target.reset();
      } else {
        const data = response.headers.get('content-type')?.includes('application/json')
          ? await response.json()
          : null;

        if (data && Object.hasOwnProperty.call(data, 'errors')) {
          setFormStatus({ submitted: false, submitting: false, info: { error: true, msg: data.errors.map(error => error.message).join(', ') } });
        } else {
          setFormStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Oops! There was a problem submitting your form.' } });
        }
      }
    } catch (error) {
      setFormStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Oops! There was a problem submitting your form.' } });
    }
  };

  const work = data.allMarkdownRemarkWork.edges;
  const publications = data.allMarkdownRemarkPublications.edges;

  const toggleAbstract = (path) => {
    setOpenAbstracts(prevState => ({
      ...prevState,
      [path]: !prevState[path]
    }));
  };

  return (
    <Layout>
      <Seo
        title="Rashid Mushkani"
        description={RASHID_PROFILE_DESCRIPTION}
        pathname="/"
        image={RASHID_PRIMARY_IMAGE}
        imageAlt={RASHID_PROFILE_IMAGE_ALT}
        type="profile"
      />
      <PersonProfileSchema />
      
      {/* Hero Section */}
      <header id="home" className="background-image-wrapper" aria-labelledby="home-title">
        <div className="background-image"></div>
        <div className="overlay"></div>
        <div className="centered-content">
          <h1 id="home-title" className="site-title" aria-describedby="home-role">RASHID MUSHKANI</h1>
          <p id="home-role" className="hero-subtitle">{RASHID_JOB_TITLE} · Université de Montréal</p>
          <p className="hero-subtitle">Democratic AI governance, civic participation &amp; urban planning</p>
          <p className="hero-subtitle">Co-founder &amp; CEO, Cocoon Lab</p>
        </div>
      </header>

      {/* Work Section */}
      <section id="work" className="content-section work-section" aria-labelledby="work-heading">
        <h2 id="work-heading">Work</h2>
        <div className="grid-container">
          {work.map(({ node }) => (
            <div className="grid-item" key={node.frontmatter.path}>
              {node.frontmatter.thumbnail && (
                <Link to={`/${node.frontmatter.path}`}>
                  <img
                    src={node.frontmatter.thumbnail.publicURL}
                    alt={node.frontmatter.title}
                    className="grid-item-thumbnail"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              )}
              <div className="grid-item-content">
                <p className="grid-item-date">{node.frontmatter.date}</p>
                <h3 className="grid-item-title">
                  <Link to={`/${node.frontmatter.path}`}>
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <WorkSchema work={node.frontmatter} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="content-section publications-section" aria-labelledby="publications-heading">
        <h2 id="publications-heading">Publications</h2>
        <div className="grid-container">
          {publications.map(({ node }) => (
            <div className="grid-item" key={node.frontmatter.path}>
              {node.frontmatter.thumbnail && (
                <a href={node.frontmatter.link} target="_blank" rel="noopener noreferrer">
                  <picture>
                    {node.frontmatter.animatedThumbnail && (
                      <source
                        media="(prefers-reduced-motion: no-preference)"
                        srcSet={node.frontmatter.animatedThumbnail.publicURL}
                        type="image/gif"
                      />
                    )}
                    <img
                      src={node.frontmatter.thumbnail.publicURL}
                      alt={node.frontmatter.thumbnailAlt || node.frontmatter.title}
                      className={`grid-item-thumbnail${node.frontmatter.thumbnailCaption ? ' grid-item-thumbnail--research' : ''}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </a>
              )}
              <div className="grid-item-content">
                <p className="grid-item-date">
                  {node.frontmatter.date}{node.frontmatter.venue && ` · ${node.frontmatter.venue}`}
                </p>
                <h3 className="grid-item-title">
                  <a href={node.frontmatter.link} target="_blank" rel="noopener noreferrer">
                    {node.frontmatter.title}
                  </a>
                </h3>
                <p className="grid-item-author">{node.frontmatter.author}</p>
                {(node.frontmatter.abstract || node.frontmatter.pdf) && <div className="publication-actions">
                  {node.frontmatter.abstract && <button
                    className="abstract-toggle-button"
                    onClick={() => toggleAbstract(node.frontmatter.path)}
                    aria-expanded={openAbstracts[node.frontmatter.path] || false}
                    aria-controls={`abstract-${node.frontmatter.path}`}
                  >
                    {openAbstracts[node.frontmatter.path] ? <FaEyeSlash /> : <FaEye />} Abstract
                  </button>}
                  {node.frontmatter.pdf && <a
                    href={node.frontmatter.pdf}
                    className="pdf-download-link"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download PDF"
                  >
                    <FaFilePdf /> PDF
                  </a>}
                </div>}
                {openAbstracts[node.frontmatter.path] && (
                  <div
                    id={`abstract-${node.frontmatter.path}`}
                    className="abstract-content"
                  >
                    <p>{node.frontmatter.abstract}</p>
                  </div>
                )}
                <PublicationSchema publication={node.frontmatter} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <BioSection />

      {/* Contact Section */}
      <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <div className="contact-container">
          <form
            action="https://formspree.io/f/xkndbero"
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-title-wrapper">
              <h3>Write</h3>
            </div>

            {formStatus.submitted && !formStatus.info.error && (
              <div className="form-feedback success">{formStatus.info.msg}</div>
            )}
            {formStatus.info.error && (
              <div className="form-feedback error">{formStatus.info.msg}</div>
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
          
          <div className="affiliations">
            <h3>Affiliations</h3>
            <ul className="affiliations-list">
              <li>
                <a href="https://droit.umontreal.ca/" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/udem.svg" alt="University of Montreal" />
                  <span>Université de Montréal · Faculty of Law</span>
                </a>
              </li>
              <li>
                <a href="https://unesco-studio.umontreal.ca/" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/unesco.svg" alt="UNESCO Chair in Urban Landscape" />
                  <span>UNESCO Chairs on Social Inclusion in Cities</span>
                </a>
              </li>
              <li>
                <a href="https://ivado.ca/en/ivado-postdoctoral-fellows/" target="_blank" rel="noopener noreferrer">
                  <span>IVADO · Postdoctoral Fellow</span>
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
                <a href={`mailto:${RASHID_EMAIL}`} aria-label="Email">
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

export const query = graphql`
  query {
    allMarkdownRemarkWork: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/data/work/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            thumbnail {
              publicURL
            }
            date(formatString: "YYYY-MM-DD")
            description
            author
          }
        }
      }
    }
    allMarkdownRemarkPublications: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/data/publications/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            thumbnail {
              publicURL
            }
            thumbnailAlt
            thumbnailCaption
            animatedThumbnail {
              publicURL
            }
            author
            link
            abstract
            pdf
            date(formatString: "YYYY")
            venue
          }
        }
      }
    }
  }
`;

export default IndexPage;
