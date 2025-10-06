// src/pages/index.js
import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import './index.scss';
import BioSection from "../components/BioSection";
import { RASHID_ID, RASHID_SAME_AS, RASHID_URL } from '../constants/rashidProfile';
import { FaFilePdf, FaEye, FaEyeSlash } from 'react-icons/fa';
import PublicationSchema from '../components/PublicationSchema'; 
import WorkSchema from '../components/WorkSchema';

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
          'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
      });

      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Thank you! Your message has been sent.' } });
        e.target.reset();
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

  const work = data.allMarkdownRemarkWork.edges;
  const publications = data.allMarkdownRemarkPublications.edges;

  const toggleAbstract = (path) => {
    setOpenAbstracts(prevState => ({
      ...prevState,
      [path]: !prevState[path]
    }));
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": RASHID_ID,
    "name": "Rashid Ahmad Mushkani",
    "image": "https://rsdmu.com/static/88867faf044097371b9619d62c5a5187/cc927/profile-photo.webp",
    "jobTitle": "PhD Candidate at University of Montreal",
    "affiliation": [
      {
        "@type": "Organization",
        "@id": "https://www.umontreal.ca/#organization",
        "name": "University of Montreal",
        "url": "https://www.umontreal.ca/en/",
        "logo": "https://rsdmu.com/icons/udem.svg"
      },
      {
        "@type": "Organization",
        "@id": "https://unesco-studio.umontreal.ca/#organization",
        "name": "UNESCO Chair in Urban Landscape",
        "url": "https://unesco-studio.umontreal.ca/",
        "logo": "https://rsdmu.com/icons/unesco.svg"
      },
      {
        "@type": "Organization",
        "@id": "https://mila.quebec/#organization",
        "name": "Mila - Quebec Artificial Intelligence Institute",
        "url": "https://mila.quebec/en/",
        "logo": "https://rsdmu.com/icons/mila.svg"
      },
      {
        "@type": "Organization",
        "@id": "https://www.obvia.ca/#organization",
        "name": "International Observatory on the Societal Impacts of AI and Digital Technologies",
        "url": "https://www.obvia.ca/en",
        "logo": "https://rsdmu.com/icons/obvia.svg"
      }
    ],
    "url": RASHID_URL,
    "sameAs": RASHID_SAME_AS
  };

  return (
    <Layout>
      <Seo title="Home" description="Welcome to Rashid Mushkani's Website" />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://rsdmu.com/#bio",
          "name": "Rashid Ahmad Mushkani",
          "image": "https://rsdmu.com/static/88867faf044097371b9619d62c5a5187/cc927/profile-photo.webp",
          "jobTitle": "PhD Candidate at University of Montreal",
          "affiliation": "Mila / University of Montreal",
          "description": "Rashid Mushkani is a researcher and lecturer at the University of Montreal and Mila researching participatory AI for inclusive public spaces and socio-spatial justice.",
          "url": "https://rsdmu.com/",
          "knowsAbout": [
            "Participatory urban planning",
            "Inclusive public spaces",
            "Socio-spatial justice",
            "Pluralistic AI alignment",
            "Artificial intelligence ethics",
            "Spatial justice"
          ],
          "knowsLanguage": [
            "English"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "PhD Candidate and Lecturer in Urban Planning and AI",
            "description": "Advances participatory design and inclusive public space research through AI collaborations at the University of Montreal and Mila.",
            "startDate": "2022",
            "employer": [
              {
                "@type": "CollegeOrUniversity",
                "name": "University of Montreal",
                "sameAs": "https://amenagement.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/"
              },
              {
                "@type": "ResearchOrganization",
                "name": "Mila - Quebec Artificial Intelligence Institute",
                "sameAs": "https://mila.quebec/en/directory/rashid-mushkani"
              }
            ]
          },
          "sameAs": [
            "https://www.linkedin.com/in/rashid-mushkani",
            "https://github.com/rsdmu",
            "https://scholar.google.com/citations?user=PClylNUAAAAJ&hl=en",
            "https://unesco-studio.umontreal.ca/team/rashid_mushkani.html",
            "https://orcid.org/0000-0002-3173-8310",
            "https://amenagement.umontreal.ca/en/recherche/professeurs/fiche/in/in35141/sg/Rashid%20Mushkani/",
            "https://www.researchgate.net/profile/Rashid-Mushkani-2?ev=hdr_xprf",
            "https://sp-exchange.ca/podcast/urban-planning-artificial-intelligence-and-inclusive-cities-an-interview-with-rashid-mushkani/",
            "https://mila.quebec/en/directory/rashid-mushkani"
          ]
        })}
      </script>
      
      {/* Hero Section */}
      <div id="home" className="background-image-wrapper">
        <div className="background-image"></div>
        <div className="overlay"></div>
        <div className="centered-content">
          <h1 className="site-title">RASHID MUSHKANI</h1>
          <p className="hero-subtitle" style={{ textAlign: 'left' }}>AI & Urban Studies PhD Candidate</p>
          <p className="hero-subtitle" style={{ textAlign: 'left' }}>University of Montreal I Mila - Quebec AI Institute</p>
        </div>
      </div>

      {/* Work Section */}
      <section id="work" className="content-section work-section">
        <h2>Work</h2>
        <div className="grid-container">
          {work.map(({ node }) => (
            <div className="grid-item" key={node.frontmatter.path}>
              {node.frontmatter.thumbnail && (
                <Link to={`/${node.frontmatter.path}`}>
                  <img src={node.frontmatter.thumbnail.publicURL} alt={node.frontmatter.title} className="grid-item-thumbnail" />
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
      <section id="publications" className="content-section publications-section">
        <h2>Publications</h2>
        <div className="grid-container">
          {publications.map(({ node }) => (
            <div className="grid-item" key={node.frontmatter.path}>
              {node.frontmatter.thumbnail && (
                <a href={node.frontmatter.link} target="_blank" rel="noopener noreferrer">
                  <img src={node.frontmatter.thumbnail.publicURL} alt={node.frontmatter.title} className="grid-item-thumbnail" />
                </a>
              )}
              <div className="grid-item-content">
                <h3 className="grid-item-title">
                  <a href={node.frontmatter.link} target="_blank" rel="noopener noreferrer">
                    {node.frontmatter.title}
                  </a>
                </h3>
                <p className="grid-item-author">{node.frontmatter.author}</p>
                <div className="publication-actions">
                  <button
                    className="abstract-toggle-button"
                    onClick={() => toggleAbstract(node.frontmatter.path)}
                    aria-expanded={openAbstracts[node.frontmatter.path] || false}
                    aria-controls={`abstract-${node.frontmatter.path}`}
                  >
                    {openAbstracts[node.frontmatter.path] ? <FaEyeSlash /> : <FaEye />} Abstract
                  </button>
                  <a
                    href={node.frontmatter.pdf}
                    className="pdf-download-link"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download PDF"
                  >
                    <FaFilePdf /> PDF
                  </a>
                </div>
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
      <section id="contact" className="content-section contact-section">
        <h2>Contact</h2>
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
                  <span>Mila - Quebec AI Institute</span>
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
            author
            link
            abstract
            pdf
            date(formatString: "2024-12-12")
          }
        }
      }
    }
  }
`;

export default IndexPage;
