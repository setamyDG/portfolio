import React from "react";
import Button from "@material-ui/core/Button";
import classes from "../CustomSwiper.module.css";

const SwiperSlide = (props) => (
  <div className={classes.SlideContainer}>
    <div className={classes.LeftSlideSide}>
      <img src={props.src} className={props.imageStyleType} />
    </div>
    <div className={classes.RightSlideSide}>
      <h1 className={classes.AppTitle}>{props.title}</h1>
      <p className={classes.AppSubtitle}>{props.subtitle}</p>
      <p className={classes.AppDescription}>{props.description}</p>
      <a target="_blank" rel="noopener noreferrer" href={props.href} className={classes.Redirect}>
        <Button variant="contained" color="secondary">GITHUB</Button>
      </a>
    </div>
  </div>
);

export default SwiperSlide;
