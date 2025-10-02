import React from "react";
import "./Sponsorships.css";
import picOne from "../../images/ucsdcseWorld.jpg";
import picTwo from "../../images/AssociatedStudent.jpg";

export default function Sponsorships() {
  return (
    <div className="sponsorships">
      <div className="sponsorships-container">
        <h1>Become a part of the Team</h1>

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
          <img src={picOne} alt="UCSD CSE Logo" className="image-one"/>
          <img src={picTwo} alt="Associated Students Logo" className="image-two" />
        </div>
      </div>
    </div>
  );
}
