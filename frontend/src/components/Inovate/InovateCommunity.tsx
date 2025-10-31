import React, { useState, useEffect } from 'react';
import './InovateCommunity.css';

import contributer from "../../images/Become_A_Contributer.png";
import designer from "../../images/Designers.png";
import cohorts from "../../images/OpenSourceCohorts.png";
import workshops from "../../images/WorkShops.png";
import socials from "../../images/Socials.png";
import contribute from "../../images/EasyContributions.png";
import Orca from "../../images/innovateprojects/ORCA.png";
import Thia from "../../images/innovateprojects/THIA.png";
import Spyre from "../../images/innovateprojects/SPYRE.png";
import SkinLesion from "../../images/innovateprojects/Skin.png";
import VirtualTryOn from "../../images/innovateprojects/VTryOn.png";
import placeholder from "../../images/Placeholder.jpg";
import { RollerShades } from '@mui/icons-material';

// Project data
const projectData: any = {
  "ORCA": {
    title: "ORCA",
    image: Orca,
    description:
      "An AI-based music production platform for musicians of all skill levels. It streamlines complex production tasks such as arrangement, transcription, and sheet music digitization using deep learning models, allowing musicians to express themselves with ease. Outputs include editable sheet music with synchronized audio.",
    tags: ["ORCA"],
  },
  "THIA": {
    title: "THIA",
    image: Thia,
    description:
      "An AI-driven therapy system delivering personalized, emotionally responsive, and contextually aware mental health support using fine-tuned LLMs, memory tracking, and a lifelike 3D avatar with natural speaking ability.",
    tags: ["THIA"],
  },
  "SPYRE": {
    title: "SPYRE",
    image: Spyre,
    description:
      "An accessible coding platform that translates spoken language into executable code, empowering individuals with physical disabilities to participate fully in software development through voice-based programming interfaces.",
    tags: ["SPYRE"],
  },
  "Skin Lesion": {
    title: "Skin Lesion",
    image: SkinLesion,
    description:
      "A CNN-based diagnostic tool for classifying skin lesions in dermoscopic images to support early skin cancer detection and clinical decision-making.",
    tags: ["Skin Lesion"],
  },
  "Virtual Try On": {
    title: "Virtual Try On",
    image: VirtualTryOn,
    description:
      "A virtual try-on system using webcam input and generative models to render real-time, motion-aware garment fits with user-uploaded clothing.",
    tags: ["Virtual Try On"],
  },
};

// 👇 Single flat list of all members (no grouping)
const allTeamMembers = [
  { name: "Pranav Soma", role: "President", photo: placeholder },
  { name: "Aryamun Das", role: "Founder", photo: placeholder },
  { name: "Nikitha Maderamitla", role: "Internal Director", photo: placeholder },
  { name: "Aditya Kakarla", role: "External Director", photo: placeholder },
  { name: "Bhavik Chandna", role: "Project Lead", photo: placeholder },
];

const CsesInnovate: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState("ORCA");
  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(() => getMembersPerPage());

  function getMembersPerPage() {
    return window.innerWidth <= 768 ? 2 : 6;
  }

  useEffect(() => {
    const handleResize = () => setMembersPerPage(getMembersPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { title, image, description } = projectData[selectedProject];
  const totalPages = Math.ceil(allTeamMembers.length / membersPerPage);
  const startIdx = currentPage * membersPerPage;
  const visibleMembers = allTeamMembers.slice(startIdx, startIdx + membersPerPage);

  const handlePrev = () => currentPage > 0 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);

  return (
    <div className="cses-container">

      {/* INTRO SECTION */}
      <section className="intro">
        <h1 className="intro-title">
          What is CSES<span className="inovate-highlight"> Innovate</span>?
        </h1>
        <p className="intro-text">
          CSES <span className="inovate-highlight">Innovate</span>, a core initiative of the
          <span className="gold-highlight"> Computer Science and Engineering Society (CSES)</span> at UC San Diego,
          is the university’s first student-led AI research community. Innovate empowers students to explore the
          intersection of research and entrepreneurship by tackling real-world challenges through cutting-edge technology.
          Members lead original research projects, present at conferences, and build prototypes with real-world impact.
        </p>
      </section>

      {/* OPPORTUNITIES SECTION */}
      <section className="opportunities">
        <h2>Opportunities</h2>
        <div className="inovate-opportunity-grid">
          <div className="opportunity-card">
            <h3>Researchers</h3>
            <img src={contribute} alt="Contribute to student-led AI research" />
            <p>Contribute to student-led AI research. Tackle real-world challenges, publish papers, and present at conferences.</p>
          </div>
          <div className="opportunity-card">
            <h3>Developers</h3>
            <img src={contributer} alt="Become a Contributor" />
            <p>Turn research into reality. Build software prototypes, implement models, and create usable systems.</p>
          </div>
          <div className="opportunity-card">
            <h3>Designers</h3>
            <img src={designer} alt="Designers" />
            <p>Craft intuitive user experiences for AI products and research tools—from wireframes to polished UI.</p>
          </div>
          <div className="opportunity-card">
            <h3>Workshops</h3>
            <img src={workshops} alt="Technical Workshops" />
            <p>Join exclusive workshops focused on research, entrepreneurship, and innovation. Attend professor panels, VC events, and demo days.</p>
          </div>
        </div>
        <div className="cta-container">
          <button className="cta-button">Become a member now!</button>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h2>Current Projects</h2>
        <div className="project-tabs-wrapper">
          <div className="project-tabs-container">
            <div className="project-tabs">
              {Object.keys(projectData).map((projectKey) => (
                <button
                  key={projectKey}
                  className={selectedProject === projectKey ? "active-tab" : ""}
                  onClick={() => setSelectedProject(projectKey)}
                >
                  {projectKey}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="project-showcase">
          <div className="project-image-border">
            <img className="project-image" src={image} alt={title} />
          </div>
          <div className="project-details">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team">
        <h2>Meet the Team</h2>

        <div className="team-carousel">
          <button className="arrow-button left" onClick={handlePrev} disabled={currentPage === 0}>
            &lt;
          </button>

          <div className="team-members-wrapper">
            <div className="team-members">
              {visibleMembers.map((member, index) => (
                <div className="member-card" key={index}>
                  <div className="avatar-square-border clean">
                    <img className="member-image" src={member.photo} alt={member.name} />
                  </div>
                  <h3 className="member-name clean-name">{member.name}</h3>
                  <p className="member-role clean-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow-button right" onClick={handleNext} disabled={currentPage >= totalPages - 1}>
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default CsesInnovate;