import React, { useEffect } from "react";
import { Root } from "react-dom/client";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { log } from "console";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import {
  emptyUserState,
  setLoggedInUser,
} from "../../Storage/Redux/userAuthSlice";
let logo = require("../../Assets/logotransp.png");

function Header() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userAuthStore);

  const onLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoggedInUser(emptyUserState));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand p-0 m-0"
            to="/"
            style={{ height: "50px", width: "50px" }}
          >
            <img src={logo} alt="" />
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
                <NavLink className="nav-link" to="/askquestion">
                  Ask Question
                </NavLink>
              </li>

              <div className="d-md-flex ms-md-auto">
                {userData?.role == "admin" ? (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/adminpanel">
                        Admin Panel
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <></>
                )}

                {userData.Id ? (
                  <>
                    <div className="dropdown">
                      <li className="nav-item ">
                        <a
                          className="nav-link dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Welcome, {userData.Name}
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink
                              className={({ isActive }) =>
                                isActive
                                  ? "text-dark font-bold dropdown-item"
                                  : "text-muted font-thin dropdown-item"
                              }
                              to="/profile"
                            >
                              Profile
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </div>
                    <li className="nav-item">
                      <button className="nav-link" onClick={() => onLogout()}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
