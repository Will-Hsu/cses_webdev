import React, { useState, useEffect } from 'react';
import './OpenSourceCommunity.css';

import contributer from "../../images/Become_A_Contributer.png";
import designer from "../../images/Designers.png";
import cohorts from "../../images/OpenSourceCohorts.png";
import workshops from "../../images/WorkShops.png";
import socials from "../../images/Socials.png";
import contribute from "../../images/EasyContributions.png";
import project1 from "../../images/LogoComingSoon.png";
import project2 from "../../images/LogoComingSoon.png";
import project3 from "../../images/LogoComingSoon.png";
import project4 from "../../images/LogoComingSoon.png";
import placeholder from "../../images/Placeholder.jpg";
import defaultimage from "../../images/defaultprofileicon.png";

// Project data
const projectData: any = {
  TritonScript: {
    title: "TritonScript",
    image: project1,
    description:
      "TritonScript is an open-source, community-driven forum for UCSD students to collaboratively share class notes, study guides, and learning materials.",
    tags: ["TypeScript", "Tooling", "Frontend"],
  },
  TritonSpend: {
    title: "TritonSpend",
    image: project2,
    description:
      "TritonSpend helps university students manage personal finances effectively through intuitive dashboards and expense tracking.",
    tags: ["Finance", "React", "Student Life"],
  },
  "Low-Price Center": {
    title: "Low-Price Center",
    image: project3,
    description:
      "Low-Price Center enables UCSD students to exchange and sell goods easily through a centralized marketplace.",
    tags: ["Deals", "Books", "Aggregation"],
  },
  Opportune: {
    title: "Opportune",
    image: project4,
    description:
      "Opportune connects UCSD students and alumni to support job searches, internships, and career growth with analytics and social features.",
    tags: ["Jobs", "Internships", "Career"],
  },
};

// 👇 Single flat list of all team members (no grouping)
const allTeamMembers = [
  { name: "Yashil Vora", role: "President", photo: placeholder },
  { name: "Mishka Jethwani", role: "VP Operations", photo: placeholder },
  { name: "Yash Ravipati", role: "VP Tech", photo: placeholder },
  { name: "Aryen Singhal", role: "Engineering Manager", photo: placeholder },
  { name: "Chase Peterson", role: "Engineering Manager", photo: placeholder },
  { name: "Shree Venkatesh", role: "Engineering Manager", photo: placeholder },
  { name: "Kevin Sun", role: "Engineering Manager", photo: placeholder },
  { name: "Kevin Kim", role: "Lead Software Engineer", photo: placeholder },
  { name: "Sofia Nguyen", role: "UI/UX Designer", photo: placeholder },
  { name: "Tia Irani", role: "UI/UX Designer", photo: placeholder },
  { name: "Aditi Bansal", role: "UI/UX Designer", photo: placeholder },
  { name: "Vinod Vairavaraj", role: "UI/UX Designer", photo: placeholder },
];

const CsesOpenSource: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState("TritonScript");
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
          What is CSES<span className="highlight"> Open Source</span>?
        </h1>
        <p className="intro-text">
          CSES <span className="highlight">Open Source</span>, a proud initiative of the
          <span className="gold-highlight"> Computer Science and Engineering Society (CSES)</span> at UC San Diego,
          fosters an open-source culture through collaboration, innovation, and mentorship.
          Our mission is to empower students to learn, build, and contribute to impactful software projects for the community.
        </p>
      </section>

      {/* OPPORTUNITIES SECTION */}
      <section className="opportunities">
        <h2>Opportunities</h2>
        <div className="open-opportunity-grid">
          <div className="opportunity-card">
            <h3>Become a Contributor</h3>
            <img src={contributer} alt="Become a Contributor" />
            <p>Explore our open-source projects and join as a developer. Passionate contributors welcome!</p>
          </div>
          <div className="opportunity-card">
            <h3>Designers</h3>
            <img src={designer} alt="Designers" />
            <p>Designers lead UI/UX, accessibility, and branding, shaping how users experience our tools.</p>
          </div>
          <div className="opportunity-card">
            <h3>Open Source Cohorts</h3>
            <img src={cohorts} alt="Open Source Cohorts" />
            <p>Join our 8-week cohort program and collaborate on real open-source projects with mentorship.</p>
          </div>
          <div className="opportunity-card">
            <h3>Technical Workshops</h3>
            <img src={workshops} alt="Technical Workshops" />
            <p>Attend workshops on Git, React, and collaboration workflows to boost your skills.</p>
          </div>
          <div className="opportunity-card">
            <h3>Connect at Our Socials</h3>
            <img src={socials} alt="Connect at Our Socials" />
            <p>Meet other developers and designers! Build connections that lead to collaboration and growth.</p>
          </div>
          <div className="opportunity-card">
            <h3>It’s Easy to Contribute</h3>
            <img src={contribute} alt="It’s Easy to Contribute" />
            <p>Check our GitHub repos, find beginner-friendly issues, and open your first PR!</p>
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
