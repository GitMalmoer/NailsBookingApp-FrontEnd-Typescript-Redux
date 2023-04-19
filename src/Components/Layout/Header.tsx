import React from "react";
import { Root } from "react-dom/client";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import { log } from "console";
let logo = require("../../Assets/logotransp.png");

function Header() {
  let navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand p-0 m-0"
            href="#"
            style={{ height: "50px", width: "auto" }}
          >
            <img src={logo} alt="" />
          </a>
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
            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookappointment">
                  Book Apointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reviews">
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Our Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/askquestion">
                  Ask Question
                </NavLink>
              </li>

              <div className="d-md-flex ms-md-auto" >
                <li className="nav-item">
                  <NavLink className="nav-link" to="/adminpanel">
                    Admin Panel
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Register">
                    Register
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
