// src/components/BioSection.js
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { RASHID_EMAIL, RASHID_PROFILE_IMAGE_ALT } from "../constants/rashidProfile";
import "./BioSection.scss";

const BioSection = () => {
  return (
    <section id="bio" className="bio-section" aria-labelledby="bio-heading">
      <h2 id="bio-heading" className="bio-section__title">Bio</h2>

      <div className="bio-section__overview-container">
        {/* Bio Overview */}
        <div className="bio-section__overview">
          <p>
            I am an IVADO Postdoctoral Fellow at Université de Montréal’s Faculty of Law, working with Catherine Régis on the AI Pluralism Index: an interoperable framework for pluralism in civic AI.
          </p>
          <p>
            My research asks who can shape an AI system’s criteria and challenge its public use. I work on democratic AI governance, civic participation, public institutions and administrative accountability, pluralistic evaluation, and urban public space.
          </p>
          <p>
            I hold a Ph.D. (interdisciplinaire en aménagement) from Université de Montréal, defended on 24 August 2026 under the supervision of Shin Alexandre Koseki. My thesis, <a href="https://arxiv.org/abs/2608.23999" target="_blank" rel="noopener noreferrer" className="bio-section__link">The urban right to AI: Pluralistic co-design and governance of public space</a>, argues that cities must govern the data and models through which they justify priorities, alongside the physical city.
          </p>
          <p>
            I am also co-founder and CEO of Cocoon Lab, which develops AI tools for planning and building review.
          </p>
          <p>
            I hold a Master of Engineering in Architecture and Civil Engineering from{" "}
            <a
              href="https://www.tut.ac.jp/english/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Toyohashi University of Technology
            </a>
            , Japan, where I studied socio-spatial equity in urban parks. Professionally, I've collaborated with the{" "}
            <a
              href="https://the.akdn/en/where-we-work/central-asia/afghanistan/cultural-development-overview-afghanistan/restoration-in-kabul-afghanistan"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Aga Khan Development Network
            </a>{" "}
            and taught architecture and environmental design at{" "}
            <a
              href="https://ku.edu.af/en"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Kabul University
            </a>.
          </p>
          <p>
            I lecture in the School of Urban Planning and Landscape Architecture at{" "}
            <a
              href="https://urbanismepaysage.umontreal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Université de Montréal
            </a>
            , where I teach the master’s course Urbanisme international (URB 6850). My research includes{" "}
            <strong>
              <a
                href="https://rsdmu.com/enhancing-inclusivity-public-spaces-ai-university-montreal/"
                target="_blank"
                rel="noopener noreferrer"
                className="bio-section__link"
              >
                Street Review
              </a>
            </strong>{" "}
            and{" "}
            <a
              href="https://mila.quebec/en/ai4humanity/applied-projects/artificial-intelligence-alignment-for-inclusion-aiai"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Artificial Intelligence Alignment for Inclusion (AIAI)
            </a>.
          </p>
          <p>
            From 2023 to 2025, I worked with Mila’s AI4Humanity team on participatory AI projects and led a nine-person project team. I continue to collaborate with academics, professionals, policymakers, and communities on AI governance and spatial justice.
          </p>
          <p><a href={`mailto:${RASHID_EMAIL}`} className="bio-section__link">Email me</a> for questions or collaboration opportunities.</p>
        </div>

        {/* Profile Image */}
        <div className="bio-section__image-container">
          <StaticImage
            src="../images/rashid-mushkani-portrait.webp"
            alt={RASHID_PROFILE_IMAGE_ALT}
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
            <strong>2026–present:</strong> IVADO Postdoctoral Fellow, Université de Montréal, Faculty of Law. Supervisor: Catherine Régis.
          </li>
          <li>
            <strong>2026–present:</strong> Co-founder and CEO, Cocoon Lab — AI tools for planning and building review.
          </li>
           <li>
            <strong>2025–present:</strong> Lecturer,{" "}
            <a
              href="https://urbanismepaysage.umontreal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              University of Montreal
            </a>
          </li>
          <li>
            <strong>Winter 2023:</strong> Practical Instructor, DIN 1043, Éléments de structure,{" "}
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
            <strong>2022–2026:</strong> Doctoral Researcher,{" "}
            <a
              href="https://urbanismepaysage.umontreal.ca/en/recherche/doctorantes-et-doctorants/etudiant/in/in35141/sg/Rashid%20Mushkani/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Université de Montréal
            </a>
          </li>
          <li>
            <strong>2023-2025:</strong> Researcher,{" "}
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
            <strong>2022–2025:</strong> Researcher,{" "}
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
            <strong>2017–2019:</strong> Faculty Member, Department of Architecture,{" "}
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
              Aga Khan Trust for Culture — Chihilsitoon Garden and Kabul Riverfront
            </a>
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="bio-section__full-width-container">
        <h3 className="bio-section__subtitle">Education</h3>
        <ul className="bio-section__list">
          <li>
            <strong>2026:</strong> Ph.D. (interdisciplinaire en aménagement),{" "}
            <a
              href="https://amenagement.umontreal.ca/accueil/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Université de Montréal
            </a>
            . Defended 24 August 2026. Thesis: <a href="https://arxiv.org/abs/2608.23999" target="_blank" rel="noopener noreferrer" className="bio-section__link">The urban right to AI: Pluralistic co-design and governance of public space</a>.
          </li>
          <li>
            <strong>2019–2021:</strong> Master of Engineering in Architecture and Civil Engineering,{" "}
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
            <strong>2012–2016:</strong> Bachelor of Science in Architecture,{" "}
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
            <strong>2026:</strong> Finalist, Prix Personnalités de l’innovation sociale, Gouvernance et communautés, Maison de l’innovation sociale.
          </li>
          <li>
            <strong>2026:</strong>{" "}
            <a
              href="https://amenagement.umontreal.ca/a-propos/actualites/nouvelles/nouvelle/news/detail/News/concours-jeunes-chercheurs-jeunes-chercheuses-2026-la-faculte-distribue-trois-bourses-de-10-0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Jeunes chercheurs, jeunes chercheuses Competition – $10,000 Award
            </a>
            , Université de Montréal
          </li>
          <li>
            <strong>2025:</strong>{" "}
            <a
              href="https://mila.quebec/en/news/milas-science-communication-contest-ai-research-in-3-minutes"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Mila’s Science Communication Contest (Speed Science) – 3rd Prize
            </a>
            , Mila – Quebec AI Institute
          </li>
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
            <strong>2025:</strong>{" "}
            <a
              href="https://www.mitacs.ca/en/programs/accelerate"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Mitacs Accelerate Award - 2
            </a>
            ,{" "}
            <a
              href="https://mila.quebec/en/ai4humanity/applied-projects/artificial-intelligence-alignment-for-inclusion-aiai"
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
              href="https://doi.org/10.69777/347989"
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
              Mitacs Accelerate Award - 1 
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
            <strong>2021–2022:</strong>{" "}
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
            <strong>2021:</strong> Young Researcher Award, Toyohashi University of Technology.
          </li>
          <li>
            <strong>2019–2021:</strong>{" "}
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
            <strong>2019:</strong>{" "}
            <a
              href="https://drive.google.com/file/d/1LOd3D782jRApV8Spsg7zzb9g-oS2FlmO/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Teaching Performance &amp; Academic Excellence Award
            </a>
            , Kabul University
          </li>
          <li>
            <strong>2018:</strong> Best Professor Award, Faculty of Engineering, Kabul University.
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
        <h3 className="bio-section__subtitle">Talks &amp; Events</h3>
        <ul className="bio-section__list">
          <li>
            <strong>6 November 2026 (upcoming):</strong> “WeDesign+: Deliberative Visual AI for Public Space Planning” — accepted poster, ACM EAAMO 2026. Presenter: Hugo Berard.
          </li>
          <li>
            <strong>2026:</strong> “Decision-Time Administrative Reason-Giving for U.S. Municipal AI: The Urban Reasonableness Layer” — accepted poster, ACM EAAMO 2026.
          </li>
          <li>
            <strong>1 October 2026:</strong> “AI Pluralism: Models and Governance” — FATE group, Mila.
          </li>
          <li>
            <strong>9 July 2026:</strong> ICML poster presentations: “Prompts for Public-Sector LLMs Should Be Governed as Commons” and “Benchmarks for Vision–Language Models in Urban Perception Should Be Reliability-Aware and Negotiated.”
          </li>
          <li>
            <strong>2026:</strong> “AI Pluralism and the Worlds It Misses” — poster, ICML Pluralistic Alignment Workshop.
          </li>
          <li>
            <strong>3 May 2026:</strong> “Participatory AI in Design: From Research to Practice” — featured speaker, InDesCanada, Carleton University, Ottawa, Canada.{" "}
            <a
              href="https://indescanada.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2026:</strong> "Participation Ledger: Traceable, Enforceable, and Compensable Participation for AI Governance" – PAIRS: Participatory AI Research &amp; Practice Symposium, Online.{" "}
            <a
              href="https://arxiv.org/abs/2602.10916"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Paper
            </a>{" "}
            <a
              href="https://www.pairs.site/Rights-and-incentives-A-participation-ledger-for-people-centered-AI-2fd260e24e1a81c3be45fa84ae19ebd2?pvs=21"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>3 February 2026:</strong> "AI Pluralism: What Models Do, Who Decides, and Why It Matters" – Montréal AI Safety, Ethics, and Governance, UQAM, Montréal, Canada.{" "}
            <a
              href="https://luma.com/azd9irwp"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2026:</strong> "Measuring What Matters: The AI Pluralism Index" – Second Conference of the International Association for Safe and Ethical AI (IASEAI'26), Paris, France.{" "}
            <a
              href="https://arxiv.org/abs/2510.08193"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Paper
            </a>
          </li>
          <li>
            <strong>2026:</strong> "Street Review" – Colloque Perspective 360, ACSA, Université de Montréal, Montréal, Canada.{" "}
            <a
              href="https://doi.org/10.1016/j.cities.2025.106602"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Paper
            </a>
          </li>
          <li>
            <strong>2026:</strong> "The Right to AI" – Critical Science Reading Group, Mila - Québec AI Institute, Montréal, Canada.{" "}
            <a
              href="https://arxiv.org/abs/2501.17899"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Paper
            </a>
          </li>
          <li>
            <strong>2026:</strong> "AIAI: AI for Inclusive Urban Spaces" – KIT Delegation Visit, Mila - Québec AI Institute, Montréal, Canada.{" "}
            <a
              href="https://unesco-studio.umontreal.ca/projects/aiai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Project
            </a>
          </li>
          <li>
            <strong>2025:</strong> "Locked Out by Design" – Speed Science Grand Finale, Mila, Montreal, Canada.{" "}
            <a
              href="https://www.youtube.com/watch?v=fiLFFUw6moI"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              3 mins Watch
            </a>
          </li>
          <li>
            <strong>2025:</strong> "Designing Inclusive Cities with Participatory AI" – Guest talk at the AI4Good Lab (Mila), Montreal, Canada.{" "}
            <a
              href="https://mila.quebec/en/news/ai4good-lab-2025-14-ai-projects-for-social-impact"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2025:</strong> "Position: The Right to AI" – Forty-Second International Conference on Machine Learning 2025, Vancouver, Canada.{" "}
            <a
              href="https://icml.cc/virtual/2025/poster/40155"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              5 mins Watch - Details
            </a>
          </li>
          <li>
            <strong>2025:</strong> "LIVS: A Pluralistic Alignment Dataset for Inclusive Public Spaces" – Forty-Second International Conference on Machine Learning 2025, Vancouver, Canada.{" "}
            <a
              href="https://icml.cc/virtual/2025/poster/45204"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              5 mins Watch - Details
            </a>
          </li>
          <li>
            <strong>2025:</strong> "Right to AI" – AI &amp; Cities track at the AMLD – Applied Machine Learning Days, EPFL, Lausanne, Switzerland.{" "}
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
            <strong>2025:</strong> "The Right to AI: Rethinking Participatory Approaches in AI" – Participatory AI Research &amp; Practice Symposium, SciencesPo, Paris, France.{" "}
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
            <strong>2024:</strong> "Using AI to Design Inclusive Public Spaces" – Innovate for Cities 2024 in Montreal, Canada.{" "}
            <a
              href="https://rsdmu.com/using-ai-design-inclusive-public-spaces/#:~:text=A%20predictive%20AI%20model%20was,sidewalk%20construction%20and%20surrounding%20buildings."
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              15 mins Watch - Details
            </a>
          </li>
          <li>
            <strong>2024:</strong> "MID-Space: Aligning Diverse Communities' Needs to Inclusive Public Spaces" – Contributed Talk at the Pluralistic Alignment Workshop at NeurIPS, Vancouver, Canada.{" "}
            <a
              href="https://neurips.cc/virtual/2024/109216"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              15 mins Watch - Details
            </a>
          </li>
          <li>
            <strong>2023:</strong> "Benchmarking Inclusion in Public Space: A Place—and Space—Based Assessment Method" – Spatial Justice in Practice Symposium – Benchmarking Spatial Justice in Policymaking, Planning & Design, TU Delft, Netherlands.{" "}
            <a
              href="https://just-city.org/conferences/practice/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2021:</strong> "Power and Political System in a Century of Urbanization" – Asian Studies Online Consortium: Challenge and Harmony in Asia, Kyushu University, University in Fukuoka, Japan (Online).{" "}
            <a
              href="https://www.kyushu-u.ac.jp/en/events/view/243/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-section__link"
            >
              Details
            </a>
          </li>
          <li>
            <strong>2020:</strong> "Spatial Equity and Accessibility of Public Parks in Kabul City, Afghanistan" – 16th Conference of Asian and African City Planning (Online).{" "}
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
            <strong>2019:</strong> "A Social Study of Public Space" – The 15th Conference of International Development and Urban Planning, Tokyo City University, Tokyo, Japan.
          </li>
          <li>
            <strong>2018:</strong> "Urban Fabric of Kabul Old City" – Tabriz University, Tabriz, Iran.
          </li>
          <li>
            <strong>2016:</strong> "Heritage and Public Space in Kabul" – Aga Khan Development Network, Dehli, India.
          </li>
          <li>
            <strong>2016:</strong> "Urban Fabric of Kabul" – Kabul University, Kabul, Afghanistan.
          </li>
        </ul>
      </div>

      <div className="bio-section__full-width-container">
        <h3 className="bio-section__subtitle">Public Writing</h3>
        <ul className="bio-section__list">
          <li>
            <strong>29 June 2026:</strong> <a href="https://nextcity.org/urbanist-news/ai-can-help-residents-imagine-better-cities-it-can-also-leave-them-out" target="_blank" rel="noopener noreferrer" className="bio-section__link">AI Can Help Residents Imagine Better Cities. It Can Also Leave Them Out.</a> — <em>Next City</em>.
          </li>
          <li>
            <strong>10 June 2026:</strong> <a href="https://doi.org/10.64628/aap.wjuaanwuj" target="_blank" rel="noopener noreferrer" className="bio-section__link">Des villes plus inclusives grâce à l’IA ? Oui, si les communautés gardent la main.</a> With Shin Koseki — <em>The Conversation</em>.
          </li>
        </ul>
      </div>

      <div className="bio-section__full-width-container">
        <h3 className="bio-section__subtitle">Service &amp; Community</h3>
        <ul className="bio-section__list">
          <li><strong>2026–present:</strong> Member, Researcher Council, Digital Research Alliance of Canada.</li>
          <li><strong>2025–2026:</strong> Guest editor with Robert J. Chaskin and Shin Koseki, <em>Cities</em> special issue, “The Politics of Spatial Inclusion in Cities.”</li>
          <li><strong>2024–present:</strong> Member and moderator, UNESCO Chairs on Social Inclusion in Cities.</li>
          <li><strong>2023–present:</strong> Member, International Observatory on the Societal Impacts of AI and Digital Technologies (OBVIA).</li>
          <li><strong>2023–present:</strong> Mentoring master’s and doctoral students on research projects and working with community participants.</li>
          <li><strong>2022–present:</strong> Daricha — informal mentoring and support for Afghan women pursuing higher education, including scholarship applications, remote academic support, and study pathways.</li>
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
          Download CV · Updated 31 October 2026
        </a>
      </div>
    </section>
  );
};

export default BioSection;
