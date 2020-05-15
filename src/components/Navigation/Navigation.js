import React from "react";
import classes from './Navigation.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => (
    <div className='nav-bar'>
        <NavigationItem  to='Home' title='HOME'/>
        <NavigationItem  to='Portfolio' title='PORTFOLIO'/>
        <NavigationItem  to='AboutMe' title='ABOUT ME'/>
        <NavigationItem  to='Contact' title='CONTACT'/>
    </div>
);

export default Navigation;