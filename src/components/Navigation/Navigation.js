import React from "react";
import classes from './Navigation.module.css'
const Navigation = () => (
    <div className={classes.NavigationBar}>
        <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About me</li>
            <li>Contact</li>
        </ul>
    </div>
);

export default Navigation;