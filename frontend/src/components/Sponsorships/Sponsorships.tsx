import React from "react";
import "./Sponsorships.css";
import ASLogo from "../../images/sponsors/AS_Logo.png";
import CSEDeptLogo from "../../images/sponsors/CSEDept_Logo.png";
import BasementLogo from "../../images/sponsors/Basement_Logo.jpeg";
import EyePopAILogo from "../../images/sponsors/EyePopAI_Logo.png";
import BSLLogo from '../../images/sponsors/BSL.png'
import IGELogo from "../../images/sponsors/IGE_Logo.png";
import LinuxLogo from "../../images/sponsors/Linux_Logo.png";
import LovableLogo from "../../images/sponsors/Lovable_Logo.png";
import OSPOLogo from "../../images/sponsors/OSPO_Logo.png";
import PersonaLogo from "../../images/sponsors/Persona_Logo.png";
import RobloxLogo from "../../images/sponsors/Roblox_Logo.png";

export default function Sponsorships() {
  return (
    <div className="sponsorships">
      <div className="sponsorships-container">
        <h1>Become a part of the Team!</h1>

        <p>
          Join us in our mission to{" "}
          <span className="blue">build</span>,{" "}
          <span className="purple">innovate</span>, and{" "}
          <span className="teal">lead</span> the future of{" "}
          <span className="yellow computer-science">computer science.</span>
        </p>
      
        <p>
          Check out our sponsorship package{" "}
          <span className="sponsorship-link">
            <a href="/SponsorshipPackage.pdf" download>here.</a>
          </span>
        </p>
      
        <h2>Thank You to our Current Partners</h2>
      
        <div className="logos">
          <img src={ASLogo} alt="Associated Students Logo" className="sponsor-logo"/>
          <img src={CSEDeptLogo} alt="CSE Department Logo" className="sponsor-logo" />
          <img src={BSLLogo} alt="Big Strategy Lab" className="sponsor-logo" /> 
          <img src={RobloxLogo} alt="Roblox Logo" className="sponsor-logo" />
          <img src={PersonaLogo} alt="Persona Logo" className="sponsor-logo" />
          <img src={LovableLogo} alt="Lovable Logo" className="sponsor-logo" />
          <img src={EyePopAILogo} alt="EyePop AI Logo" className="sponsor-logo" />
          <img src={IGELogo} alt="IGE Logo" className="sponsor-logo" />
          <img src={LinuxLogo} alt="Linux Foundation Logo" className="sponsor-logo" />
          <img src={OSPOLogo} alt="OSPO Logo" className="sponsor-logo" />
          <img src={BasementLogo} alt="Basement Logo" className="sponsor-logo" />
        </div>
      </div>
    </div>
  );
}
