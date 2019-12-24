import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const active = {
  fontWeight: 900
};

const style = {
  textDecoration: "none",
  boxShadow: "0px 1px black"
};

const hover = {
  textDecoration: "none",
  color: "red"
};

const NavPill = props => {
  const [hovered, setHovered] = useState(false);

  return (
    <NavLink
      to={props.to}
      activeStyle={active}
      style={hovered ? hover : style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.label}
    </NavLink>
  );
};

export default NavPill;
