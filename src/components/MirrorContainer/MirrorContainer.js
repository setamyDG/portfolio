import React from "react";
import Button from "@material-ui/core/Button";
import classes from "./MirrorContainer.module.css";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";

const MirrorContainer = () => (
  <div className={classes.MirrorContainer}>
    <div className={classes.MirrorTopContainer}>
      <p className={classes.Title}>
        {" "}
        I AM
        <br />
        {" "}
        DEVELOPER
      </p>
      <p className={classes.Subtitle}>With react and react native technology</p>
      <p className={classes.Description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
      <div className='button-container'>
        <NavigationItem className='button-link' title='READ MORE' to='AboutMe'></NavigationItem>
      </div>
    </div>
    <div className={classes.MirrorBottomContainer}>
      <div className={classes.MirrorBottomContainerLeft}>
        <p className={classes.SubtitleSecond}>CREATIVE AND PROFESSIONAL</p>
        <p className={classes.DescriptionSecond}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='button-container'>
          <NavigationItem className='button-link' title='READ MORE' to='Portfolio'></NavigationItem>
        </div>
      </div>
      <div className={classes.MirrorBottomContainerRight}>
        <div className={classes.Avatar} />
        <p className={classes.Name}>DANIEL GOLA</p>
      </div>
    </div>
  </div>
);

export default MirrorContainer;
