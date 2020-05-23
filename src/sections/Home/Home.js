import React from "react";
import Footer from "../../components/Footer/Footer";
import DateTime from "../../components/DateTime/DateTime";
import MirrorContainer from "../../components/MirrorContainer/MirrorContainer";
import classes from "./Home.module.css";

const Home = () => (
  <div className={classes.HomeContainer} id="Home">
    <div className={classes.HomeHeader}>
      <DateTime />
    </div>
    <MirrorContainer />
    <Footer />
  </div>
);

export default Home;
