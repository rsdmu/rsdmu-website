// src/components/BioSection.js
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./BioSection.scss"

const BioSection = () => {
  return (
    <section id="bio" className="content-section bio-section">
      <h2>Bio</h2>
      <div className="bio-container">
        {/* Bio Photo */}
        <div className="bio-photo">
          <StaticImage
            src="../images/profile-photo.webp" // Ensure this path is correct
            alt="Portrait of Rashid Mushkani"
            placeholder="blurred"
            layout="constrained"
            width={800} // Increased width for a larger image
            height={600} // Adjusted height for aspect ratio
            className="profile-image"
          />
        </div>

        {/* Bio Text */}
        <div className="bio-text">
          {/* Overview */}
          <div className="bio-overview">
            <p>
              Rashid Mushkani is an Afghan-Canadian researcher, architect, and educator with expertise in urban planning, artificial intelligence, and participatory design. His work focuses on integrating AI technologies into urban planning processes, exploring how these tools can contribute to creating inclusive and accessible public spaces. He is currently a PhD candidate at the <a href="https://amenagement.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/" target="_blank" rel="noopener noreferrer">University of Montreal</a>, where his research emphasizes responsible AI development, co-production of knowledge, and the intersection of technology and community values.
            </p>
            <p>
              Mushkani's academic background includes a Master of Engineering in Architecture and Urban Planning from <a href="https://www.tut.ac.jp/english/" target="_blank" rel="noopener noreferrer">Toyohashi University of Technology</a> in Japan, where he examined socio-spatial equity in urban public parks. His professional experience encompasses architectural design, urban conservation, and public space revitalization projects with the <a href="https://the.akdn/en/where-we-work/central-asia/afghanistan/cultural-development-overview-afghanistan/restoration-in-kabul-afghanistan" target="_blank" rel="noopener noreferrer">Aga Khan Development Network</a>. From 2017 to 2022, he served as an Assistant Lecturer at <a href="https://ku.edu.af/" target="_blank" rel="noopener noreferrer">Kabul University</a>, teaching courses on environmental behavior, urban design, and architectural conservation.
            </p>
            <p>
              His recent projects include <strong>StreetReview</strong>, a doctoral initiative employing AI to evaluate streetscape quality, and the <a href="https://mila.quebec/en/ai4humanity/applied-projects/artificial-intelligence-alignment-for-inclusion-aiai" target="_blank" rel="noopener noreferrer">Artificial Intelligence Alignment for Inclusion (AIAI)</a> project, which develops community-annotated datasets to align AI outputs with diverse perspectives. He collaborates with organizations such as <a href="https://www.unesco.org/en/no-racism-no-discrimination" target="_blank" rel="noopener noreferrer">ICCAR-UNESCO</a> and <a href="https://mila.quebec/en/" target="_blank" rel="noopener noreferrer">Mila - Quebec Artificial Intelligence Institute</a> on issues of spatial inclusion and AI ethics in urban design.
            </p>
          </div>

          {/* Timeline */}
          <div className="bio-timeline">
            <h3>Timeline</h3>
            <ul className="bio-list">
              <li><strong>2024-Today:</strong> PhD Candidate, <a href="https://urbanismepaysage.umontreal.ca/fr/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/" target="_blank" rel="noopener noreferrer">University of Montreal</a></li>
              <li><strong>2024-Today:</strong> Researcher, <a href="https://mila.quebec/en/directory/rashid-mushkani" target="_blank" rel="noopener noreferrer">Mila - Quebec Artificial Intelligence Institute</a></li>
              <li><strong>2022-Today:</strong> Researcher, <a href="https://unesco-studio.umontreal.ca/" target="_blank" rel="noopener noreferrer">UNESCO Chair in Urban Landscape</a></li>
              <li><strong>2022-Today:</strong> Researcher, <a href="https://www.ono-unit.com/english" target="_blank" rel="noopener noreferrer">International Urban Planning Lab</a></li> {/* Replace with actual URL */}
              <li><strong>2017-2022:</strong> Assistant Lecturer, <a href="https://www.ku.edu.af/en" target="_blank" rel="noopener noreferrer">Kabul University</a></li>
              <li><strong>2016-2019:</strong> Architect, <a href="https://www.archdaily.com/911456/chihilsitoon-garden-project-aga-khan-trust-for-culture" target="_blank" rel="noopener noreferrer">Chihilsitoon Garden - Aga Khan Development Network</a></li>
            </ul>
          </div>

          {/* Education */}
          <div className="bio-education">
            <h3>Education</h3>
            <ul className="bio-list">
              <li><strong>2022-2027:</strong> Doctor of Philosophy in Interdisciplinary Planning, <a href="https://amenagement.umontreal.ca/accueil/" target="_blank" rel="noopener noreferrer">University of Montreal</a></li>
              <li><strong>2019-2021:</strong> Master of Engineering in Architecture and Urban Planning, <a href="https://www.tut.ac.jp/english/" target="_blank" rel="noopener noreferrer">Toyohashi University of Technology</a></li>
              <li><strong>2012-2016:</strong> Bachelor of Architecture, <a href="https://www.ku.edu.af/en" target="_blank" rel="noopener noreferrer">Kabul University</a></li>
            </ul>
          </div>

          {/* Honors & Awards */}
          <div className="bio-awards">
            <h3>Honors & Awards</h3>
            <ul className="bio-list">
              <li><strong>2024:</strong> <a href="https://frq.gouv.qc.ca/en/program/frqsc-doctoral-training-scholarships-b2z-and-a2z2-autumn-2023-competition//" target="_blank" rel="noopener noreferrer">FRQSC Doctoral Training Award</a>, Fonds de recherche du Québec – Society and Culture</li>
              <li><strong>2024:</strong> <a href="https://www.mitacs.ca/en/programs/accelerate" target="_blank" rel="noopener noreferrer">Mitacs Accelerate Award</a>, <a href="https://mila.quebec/en/" target="_blank" rel="noopener noreferrer">Mila - Quebec Artificial Intelligence Institute</a></li>
              <li><strong>2024:</strong> <a href="https://www.umontreal.ca/" target="_blank" rel="noopener noreferrer">Guy-Desbarats Excellence Scholarship</a>, University of Montreal</li>
              <li><strong>2024:</strong> <a href="https://www.umontreal.ca/" target="_blank" rel="noopener noreferrer">Student Engagement Award</a>, University of Montreal</li>
              <li><strong>2023:</strong> <a href="https://www.umontreal.ca/" target="_blank" rel="noopener noreferrer">Perseverance Award</a>, University of Montreal</li>
              <li><strong>2022:</strong> <a href="https://www.umontreal.ca/" target="_blank" rel="noopener noreferrer">Welcome Award</a>, University of Montreal</li>
              <li><strong>2022:</strong> <a href="https://www.tut.ac.jp/english/" target="_blank" rel="noopener noreferrer">TUT-DC Fellowship</a>, Toyohashi University of Technology</li>
              <li><strong>2019:</strong> <a href="https://www.jica.go.jp/english/" target="_blank" rel="noopener noreferrer">JICA Scholar</a>, Japan International Cooperation Agency</li>
              <li><strong>2018:</strong> <a href="https://ku.edu.af/" target="_blank" rel="noopener noreferrer">Appreciation Award</a>, Kabul University</li>
              <li><strong>2016:</strong> <a href="https://ku.edu.af/" target="_blank" rel="noopener noreferrer">Best Student Award</a>, Kabul University</li>
            </ul>
          </div>

          {/* Download CV Button */}
          <div className="download-cv">
            <a href="/documents/rashid_mushkani_cv.pdf" download className="download-resume-button">
              Download Rashid's CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BioSection
