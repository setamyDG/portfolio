import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => (
  <div className="nav-bar">
    <p className="logo">DANIEL GOLA</p>
    <NavigationItem to="Home" title="HOME" className="link" />
    <NavigationItem to="Portfolio" title="PORTFOLIO" className="link" />
    <NavigationItem to="AboutMe" title="ABOUT ME" className="link" />
    <NavigationItem to="Contact" title="CONTACT" className="link" />
    <div className="icon-container">
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/daniel.gola1">
        <FontAwesomeIcon icon={faFacebookSquare} className="first-icon" size="lg" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/setamyDG">
        <FontAwesomeIcon icon={faGithubSquare} className="next-icon" size="lg" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel--gola/">
        <FontAwesomeIcon icon={faLinkedin} className="next-icon" size="lg" />
      </a>
    </div>
  </div>
);

export default Navigation;
