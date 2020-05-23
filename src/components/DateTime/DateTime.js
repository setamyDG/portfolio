import React from "react";
import Moment from "react-moment";
import classes from "./DateTime.module.css";

const date = new Date();
const DateTime = () => (
  <div className={classes.DateHome}>
    <h1>Today is</h1>
    <Moment withTitle format="D MMM YYYY">{date}</Moment>
    <br />
    <Moment className={classes.TimeHome} format="HH:mm">{date}</Moment>
  </div>
);

export default DateTime;
