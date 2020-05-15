import React from 'react'
import {Link} from 'react-scroll'
import classes from './NavigationItem.module.css'

const NavigationItem = (props) => (
    <Link className={classes.Link}
          activeClass='active'
          to={props.to}
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
    >{props.title}</Link>
);

export default NavigationItem;