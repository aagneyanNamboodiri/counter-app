import React, { Component } from "react";

const NavBar = ({ totalCounts }) => {
  return (
    <nav className="navbar bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCounts}</span>
      </a>
    </nav>
  );
};

export default NavBar;
