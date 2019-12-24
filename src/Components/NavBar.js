import React from "react";
// import { NavLink } from 'react-router-dom'

import NavPill from "./NavPill";

const style = {
  display: "flex",
  justifyContent: "space-evenly"
  // borderBottom: '1px solid black'
};

const NavBar = props => (
  <div style={style}>
    <NavPill to="/home" label="Home" />
    <NavPill to="/about" label="About" />
    <NavPill to="/contact" label="Contact" />
    <NavPill to="/projects" label="Projects" />
  </div>
);

export default NavBar;
