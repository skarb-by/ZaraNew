import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/PageNavigation.css";

const PageNavigation = ({ title }) => {
  return (
    <section className="PageNavigation">
      <NavLink to="/">Главная</NavLink>/{title}
    </section>
  );
};

export default PageNavigation;
