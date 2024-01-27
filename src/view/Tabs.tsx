import React from "react";
import { Link, NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <section className="navLink_set">
      <NavLink to="/gridOne">Page 1</NavLink>
      <NavLink to="/gridTwo">Page 2</NavLink>
    </section>
  );
};

export default Tabs;
