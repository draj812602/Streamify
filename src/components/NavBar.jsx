import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-light shadow-sm">
    <div className="container-fluid">
      <NavLink className="navbar-brand fw-bold text-primary" to="/">
        <i className="bi bi-music-note-beamed me-2"></i>Streamify
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link fw-semibold ${
                  isActive ? "text-primary active" : "text-dark"
                }`
              }
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link fw-semibold ${
                  isActive ? "text-primary active" : "text-dark"
                }`
              }
              to="/data-table"
            >
              Data Table
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
