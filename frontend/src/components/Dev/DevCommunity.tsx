import React, { useState, useEffect } from 'react';
import './DevCommunity.css';

import contributer from "../../images/Become_A_Contributer.png";
import designer from "../../images/Designers.png";
import cohorts from "../../images/OpenSourceCohorts.png";
import workshops from "../../images/WorkShops.png";
import socials from "../../images/Socials.png";
import contribute from "../../images/EasyContributions.png";
import project1 from "../../images/devprojects/Webclicker.png";
import project2 from "../../images/devprojects/Lakewood.png";
import project3 from "../../images/devprojects/Paesani.png";
import placeholder from '../../images/Placeholder.jpg';
import defaultimage from "../../images/defaultprofileicon.png";

// Project data
const projectData: any = {
  "WebClicker++": {
    title: "WebClicker++",
    image: project1,
    description:
      "WebClicker++ is a mobile-friendly classroom response system that enables instructors to create courses, deploy timed questions, track attendance, and access detailed analytics, and is widely used in CSE courses at UC San Diego.",
    tags: ["WebClicker++"],
  },
  "Lakewood Heating and AC": {
    title: "Lakewood Heating and AC",
    image: project2,
    description:
      "Lakewood Heating and Air Conditioning is a website revamp that modernizes the company’s online presence, showcasing HVAC services, community involvement, success stories, integrated reviews, and a custom admin portal for staff.",
    tags: ["Lakewood Heating and AC"],
  },
  "Paesani MBX": {
    title: "Paesani MBX",
    image: project3,
    description:
      "Paesani MBX Website is a professional platform that showcases the MBX software, a C++ library enabling molecular dynamics drivers to simulate chemical systems using the lab’s potential energy functions, with tutorials, contributor profiles, and publication listings.",
    tags: ["Paesani MBX Website"],
  },
};

// 👇 NEW: Single flat list of all members (no grouping)
const allTeamMembers = [
  { name: "Shreya Gupta", role: "President", photo: placeholder },
  { name: "Steven Shi", role: "VP Products",  photo: placeholder },
  { name: "Jake Villasenor", role: "VP Design", photo: placeholder },
  { name: "Sardor Sobirov", role: "Frontend Developer", photo: placeholder },
  { name: "Sithu Soe", role: "Frontend Developer", photo: placeholder },
  { name: "Kevin Wu", role: "Frontend Developer", photo: placeholder },
  { name: "Shreya Nagunuri", role: "Backend Developer", photo: placeholder },
  { name: "Brian Liu", role: "Backend Developer", photo: placeholder },
  { name: "Ganesh Kumarappan", role: "Backend Developer", photo: placeholder },
];

const CsesOpenSource: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState("WebClicker++");
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
          What is <span className="dev-highlight">CSES DEV</span>?
        </h1>
        <p className="intro-text">
          <span className='dev-highlight'>CSES DEV</span>, a core initiative of the <span className="gold-highlight">Computer Science and Engineering Society (CSES)</span> at UC San Diego,
          bridges the gap between academics and industry by giving students their first real-world software development experience. Through hands-on projects with startups, research labs, and
          businesses, members gain technical skills, collaborate in an agile environment, and build the problem-solving and teamwork abilities needed to thrive in their future careers.
        </p>
      </section>

      {/* OPPORTUNITIES SECTION */}
      <section className="opportunities">
        <h2>Opportunities</h2>
        <div className="dev-opportunity-grid">
          <div className="opportunity-card">
            <h3>Developers</h3>
            <img src={contribute} alt="Developers" />
            <p>Developers build software products for companies, startups, research labs, gaining industry-ready skills.</p>
          </div>
          <div className="opportunity-card">
            <h3>UI/UX Designers</h3>
            <img src={designer} alt="Designers" />
            <p>Design polished user experiences for clients, building a portfolio tailored to company needs.</p>
          </div>
          <div className="opportunity-card">
            <h3>Product Managers</h3>
            <img src={contributer} alt="Become a Contributor" />
            <p>Define goals, manage timelines, and lead teams building software for external partners, gaining leadership and product strategy skills along the way.</p>
          </div>
          <div className="opportunity-card">
            <h3>Workshops</h3>
            <img src={workshops} alt="Technical Workshops" />
            <p>Get started with Git workshops, development sessions, and kickoff events, connecting with team leads, learning tools and workflows.</p>
          </div>
          <div className="opportunity-card">
            <h3>Recruitment & Intern Panels</h3>
            <img src={socials} alt="Connect at Our Socials" />
            <p>Learn how to land top internships through panels with FAANG interns, startup founders, researchers, and recruiters.</p>
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

export default CsesOpenSource;
