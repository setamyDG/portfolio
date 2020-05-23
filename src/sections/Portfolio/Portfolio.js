import React from "react";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiper";
import classes from "./Portfolio.module.css";

const Portfolio = () => (
  <div className={classes.Portfolio} id="Portfolio">
    <div className={classes.PortfolioContainer}>
      <CustomSwiper />
    </div>
  </div>
);

export default Portfolio;
