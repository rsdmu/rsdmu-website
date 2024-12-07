// src/components/BioSection.js
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./BioSection.scss";

const BioSection = () => {
  return (
    <section id="bio" className="bio-section">
      <h2 className="bio-section__title">Bio</h2>

      {/* Bio Overview and Profile Image */}
      <div className="bio-section__overview-container">
        {/* Bio Overview */}
        <div className="bio-section__overview">
          <p>
            Rashid Mushkani is an Afghan-Canadian researcher, architect, and educator with expertise in urban planning, artificial intelligence, and participatory design. His work focuses on integrating AI technologies into urban planning processes, exploring how these tools can contribute to creating inclusive and accessible public spaces. He is currently a PhD candidate at the{" "}
            <a
              href="https://amenagement.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              University of Montreal
            </a>
            , where his research emphasizes responsible AI development, co-production of knowledge, and the intersection of technology and community values.
          </p>
          <p>
            Mushkani's academic background includes a Master of Engineering in Architecture and Urban Planning from{" "}
            <a href="https://www.tut.ac.jp/english/" target="_blank" rel="noopener noreferrer" className="bio-section__link">
              Toyohashi University of Technology
            </a>{" "}
            in Japan, where he examined socio-spatial equity in urban public parks. His professional experience encompasses architectural design, urban conservation, and public space revitalization publications with the{" "}
            <a
              href="https://the.akdn/en/where-we-work/central-asia/afghanistan/cultural-development-overview-afghanistan/restoration-in-kabul-afghanistan"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Aga Khan Development Network
            </a>
            . From 2017 to 2022, he served as an Assistant Lecturer at{" "}
            <a href="https://ku.edu.af/en" target="_blank" rel="noopener noreferrer" className="bio-section__link">
              Kabul University
            </a>
            , teaching courses on environmental behavior, urban design, and architectural conservation.
          </p>
          <p>
            His recent publications include <strong>StreetReview</strong>, a doctoral initiative employing AI to evaluate streetscape quality, and the{" "}
            <a
              href="https://mila.quebec/en/ai4humanity/applied-publications/artificial-intelligence-alignment-for-inclusion-aiai"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Artificial Intelligence Alignment for Inclusion (AIAI)
            </a>{" "}
            publication, which develops community-annotated datasets to align AI outputs with diverse perspectives. He collaborates with organizations such as{" "}
            <a
              href="https://www.unesco.org/en/no-racism-no-discrimination"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              ICCAR-UNESCO
            </a>{" "}
            and{" "}
            <a
              href="https://mila.quebec/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Mila - Quebec Artificial Intelligence Institute
            </a>{" "}
            on issues of spatial inclusion and AI ethics in urban design.
          </p>
        </div>

        {/* Profile Image */}
        <div className="bio-section__image-container">
          <StaticImage
            src="../images/profile-photo.webp" // Ensure this path is correct
            alt="Portrait of Rashid Mushkani"
            placeholder="blurred"
            layout="constrained"
            width={1000} // Adjust as needed
            height={1400} // Adjust as needed
            className="bio-section__image"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="bio-section__full-width-container">
        <h3 className="bio-section__subtitle">Timeline</h3>
        <ul className="bio-section__list">
          <li>
            <strong>2024-Today:</strong> PhD Candidate,{" "}
            <a
              href="https://urbanismepaysage.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              University of Montreal
            </a>
          </li>
          <li>
            <strong>2024-Today:</strong> Researcher,{" "}
            <a
              href="https://mila.quebec/en/directory/rashid-mushkani"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Mila - Quebec Artificial Intelligence Institute
            </a>
          </li>
          <li>
            <strong>2022-Today:</strong> Researcher,{" "}
            <a
              href="https://unesco-studio.umontreal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              UNESCO Chair in Urban Landscape
            </a>
          </li>
          <li>
            <strong>2022-Today:</strong> Researcher,{" "}
            <a
              href="https://www.ono-unit.com/english"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              International Urban Planning Lab
            </a>
          </li>
          <li>
            <strong>2017-2022:</strong> Assistant Lecturer,{" "}
            <a
              href="https://www.ku.edu.af/en"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Kabul University
            </a>
          </li>
          <li>
            <strong>2016-2019:</strong> Architect,{" "}
            <a
              href="https://www.archdaily.com/911456/chihilsitoon-garden-publication-aga-khan-trust-for-culture"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Chihilsitoon Garden - Aga Khan Development Network
            </a>
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="bio-section__full-width-container">
        <h3 className="bio-section__subtitle">Education</h3>
        <ul className="bio-section__list">
          <li>
            <strong>2022-2027:</strong> Doctor of Philosophy in Interdisciplinary Planning,{" "}
            <a
              href="https://amenagement.umontreal.ca/accueil/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              University of Montreal
            </a>
          </li>
          <li>
            <strong>2019-2021:</strong> Master of Engineering in Architecture and Urban Planning,{" "}
            <a
              href="https://www.tut.ac.jp/english/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Toyohashi University of Technology
            </a>
          </li>
          <li>
            <strong>2012-2016:</strong> Bachelor of Architecture,{" "}
            <a
              href="https://www.ku.edu.af/en"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Kabul University
            </a>
          </li>
        </ul>
      </div>

      {/* Honors & Awards */}
      <div className="bio-section__full-width-container">
        <h3 className="bio-section__subtitle">Honors & Awards</h3>
        <ul className="bio-section__list">
          <li>
            <strong>2024:</strong>{" "}
            <a
              href="https://frq.gouv.qc.ca/en/program/frqsc-doctoral-training-scholarships-b2z-and-a2z2-autumn-2023-competition//"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              FRQSC Doctoral Training Award
            </a>
            , Fonds de recherche du Québec – Society and Culture
          </li>
          <li>
            <strong>2024:</strong>{" "}
            <a
              href="https://www.mitacs.ca/en/programs/accelerate"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Mitacs Accelerate Award
            </a>
            ,{" "}
            <a
              href="https://mila.quebec/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Mila - Quebec Artificial Intelligence Institute
            </a>
          </li>
          <li>
            <strong>2024:</strong>{" "}
            <a
              href="https://www.umontreal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Guy-Desbarats Excellence Scholarship
            </a>
            , University of Montreal
          </li>
          <li>
            <strong>2024:</strong>{" "}
            <a
              href="https://www.umontreal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Student Engagement Award
            </a>
            , University of Montreal
          </li>
          <li>
            <strong>2023:</strong>{" "}
            <a
              href="https://www.umontreal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Perseverance Award
            </a>
            , University of Montreal
          </li>
          <li>
            <strong>2022:</strong>{" "}
            <a
              href="https://www.umontreal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Welcome Award
            </a>
            , University of Montreal
          </li>
          <li>
            <strong>2022:</strong>{" "}
            <a
              href="https://www.tut.ac.jp/english/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              TUT-DC Fellowship
            </a>
            , Toyohashi University of Technology
          </li>
          <li>
            <strong>2019:</strong>{" "}
            <a
              href="https://www.jica.go.jp/english/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              JICA Scholar
            </a>
            , Japan International Cooperation Agency
          </li>
          <li>
            <strong>2018:</strong>{" "}
            <a
              href="https://ku.edu.af/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Appreciation Award
            </a>
            , Kabul University
          </li>
          <li>
            <strong>2016:</strong>{" "}
            <a
              href="https://ku.edu.af/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Best Student Award
            </a>
            , Kabul University
          </li>
        </ul>
      </div>

      {/* Download CV Button */}
      <div className="bio-section__download">
        <a
          href="/documents/rashid_mushkani_cv.pdf"
          download
          className="bio-section__download-button"
          aria-label="Download Rashid's CV"
        >
          Download Rashid's CV
        </a>
      </div>
    </section>
  );
};

export default BioSection;
