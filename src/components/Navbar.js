import React from "react";
import propTypes from "prop-types";
import ColorButtons from "./ColorButtons";
import logo from "../textUtilsIcon.jpg";
import { Link } from "react-router-dom";

export default function Navbar(prop) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/"> */}
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
              alt=""
            />
            {prop.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            {/* <li className="nav-item">
                <Link className="nav-link" to="about">
                  {prop.aboutText}
                </Link>
              </li> */}

            <ul className="navbar-nav me-auto justify-content-center">
              <li className="nav-item">
                <ColorButtons toggle={prop.toggle} />
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                prop.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={prop.lightDarkMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
