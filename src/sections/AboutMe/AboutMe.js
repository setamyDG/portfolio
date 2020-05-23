import React from "react";
import DescriptionContainer from "../../components/DescriptionContainer/DescriptionContainer";
import classes from "./AboutMe.module.css";

const AboutMe = () => (
  <div className={classes.AboutMeContainer} id="AboutMe">
    <div className={classes.AboutMeHeader}>
      <h1 className={classes.WelcomeTitle}>HELLO</h1>
    </div>
    <DescriptionContainer />
  </div>
);

export default AboutMe;
