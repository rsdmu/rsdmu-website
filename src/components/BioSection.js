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
            His recent project include <strong><a href="https://rsdmu.com/enhancing-inclusivity-public-spaces-ai-university-montreal/" target="_blank" rel="noopener noreferrer" className="bio-section__link">Street Review</a></strong>, a doctoral initiative employing AI to evaluate streetscape quality, and the{" "}
            <a
              href="https://mila.quebec/en/ai4humanity/applied-publications/artificial-intelligence-alignment-for-inclusion-aiai"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Artificial Intelligence Alignment for Inclusion (AIAI)
            </a>{" "}
            project, which develops community-annotated datasets to align AI outputs with diverse perspectives. He collaborates with organizations such as{" "}
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
            src="../images/profile-photo.webp"
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
            <strong>2022-Today:</strong> PhD Candidate,{" "}
            <a
              href="https://urbanismepaysage.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              University of Montreal I Mila - Quebec Artificial Intelligence Institute
            </a>
          </li>
          <li>
            <strong>2023-Today:</strong> Researcher,{" "}
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
            <strong>2019-2022:</strong> Researcher,{" "}
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
            <strong>2022-Today:</strong> Doctor of Philosophy in Interdisciplinary Planning,{" "}
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
            <strong>2025:</strong>{" "}
            <a
              href="https://bourses.umontreal.ca/repertoire-des-bourses/detail-dune-bourse/bid/2084/bsl/Bourses-en-intelligence-artificielle-des-%C3%89tudes-sup%C3%A9rieures-et-postdoctorales-ESP-2024-2025/#:~:text=ESP)%202024%2D2025-,Bourses%20en%20intelligence%20artificielle%20des%20%C3%89tudes,postdoctorales%20(ESP)%202024%2D2025&text=%C3%80%20l'intention%20des%20%C3%A9tudiantes,adoption%20de%20l'intelligence%20artificielle."
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Bourses en intelligence artificielle des Études supérieures et postdoctorales (ESP)
            </a>
            , University of Montreal
          </li>
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

      {/* Talks */}
      <div className="bio-section__full-width-container">
        <h3 className="bio-section__subtitle">Talks</h3>
        <ul className="bio-section__list">
          <li>
            <strong>2025:</strong> "Right to AI" – AI &amp; Cities track at the AMLD – Applied Machine Learning Days, EPFL, Lausanne, Switzerland on February 12, 2025 (09:00 AM–12:30 PM).{" "}
            <a
              href="https://dvstudies.net/2025/02/18/aicities-applied-machine-learning-days/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2025:</strong> Participatory AI Research &amp; Practice Symposium – "The Right to AI: Rethinking Participatory Approaches in AI" on February 7, 2025.{" "}
            <a
              href="https://pairs25.notion.site/Agenda-8th-Feb-17a260e24e1a8092b9e4ebe332807534?p=182260e24e1a81ad9618e685bf3b1110&pm=c"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2024:</strong> "Using AI to Design Inclusive Public Spaces" – Conference: Innovate for Cities 2024 in Montreal.{" "}
            <a
              href="https://rsdmu.com/using-ai-design-inclusive-public-spaces/#:~:text=A%20predictive%20AI%20model%20was,sidewalk%20construction%20and%20surrounding%20buildings."
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2024:</strong> Contributed Talk at the Pluralistic Alignment Workshop – "MID-Space: Aligning Diverse Communities' Needs to Inclusive Public Spaces" at NeurIPS, Vancouver.{" "}
            <a
              href="https://neurips.cc/virtual/2024/109216"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2023:</strong> Symposium on "Spatial Justice in Practice" – November 30, 2023, 09:00–17:30 at Berlage Rooms (Communicatie BK).{" "}
            <a
              href="https://issuu.com/robertorocco/docs/template_abstracts_def?fr=xKAE9_zU1NQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2021:</strong> "Power and Political System in a Century of Urbanization" – Presented in Kabul, Afghanistan at the Asian Studies Online Consortium: Challenge and Harmony in Asia (Online).
          </li>
          <li>
            <strong>2020:</strong> "Spatial Equity and Accessibility of Public Parks in Kabul City, Afghanistan" – In proceedings of the 16th Conference of Asian and African City Planning (Online).{" "}
            <a
              href="https://www.aacp2003.com/conference-top"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2019:</strong> "A Social Study of Public Space" – The 15th Conference of International Development and Urban Planning, December 22, 2019, Tokyo City University.
          </li>
          <li>
            <strong>2018:</strong> "Urban Fabric of Kabul Old City" – Tabriz, Iran.
          </li>
          <li>
            <strong>2016:</strong> "Heritage and Public Space in Kabul" – Aga Khan Development Network, India.
          </li>
          <li>
            <strong>2016:</strong> "Urban Fabric of Kabul" – Kabul University, Kabul, Afghanistan.
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
