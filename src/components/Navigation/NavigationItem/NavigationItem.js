import React from "react";
import { Link } from "react-scroll";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => (
  <Link
    className={props.className}
    activeClass="active"
    to={props.to}
    spy
    smooth
    offset={0}
    duration={500}
  >
    {props.title}
  </Link>
);

export default NavigationItem;
