import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="MainHeader">
      <NavLink to="/">
        <img
          src="https://raw.githubusercontent.com/skarb-by/images/main/logo2.png"
          alt="my logo img"
          className="logo"
        />
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
