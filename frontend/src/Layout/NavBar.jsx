import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = ({setToken, token}) => {
  
  const removeToken = () => {
    try {
      localStorage.removeItem("token");
      setToken(null);
      toast.success("Logout successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  const autoCollapse = () =>
    window.innerWidth < 992 &&
    new window.bootstrap.Collapse(document.getElementById("navbarContent"), {
      toggle: false,
    }).hide();

  return (
    <>
      <div style={{ height: "70px" }}></div>

      <nav className="navbar fixed-top bg-light px-5 p-2 mt-2 shadow-sm navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo */}
          <div className="logo fw-bold fs-2 flex-grow-1">
            <NavLink to="/">YOGA 🌿</NavLink>
          </div>

          {/* Toggle Button for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div
            className="collapse navbar-collapse justify-content-between align-items-center d-lg-flex"
            id="navbarContent"
          >
            <div className="options fs-5 d-lg-flex gap-5 mt-3 mt-lg-0 flex-grow-2">
              <NavLink
                to="/createsession"
                onClick={autoCollapse}
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                CreateSession
              </NavLink>
              <NavLink
                to="/draft"
                onClick={autoCollapse}
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                Draft
              </NavLink>
              <NavLink
                to="/oursession"
                onClick={autoCollapse}
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                OurSession
              </NavLink>
            </div>

            {/* Login Button */}
            <div className="mt-3 mt-lg-0">
              {token ? (
                <button
                  className="btn btn-outline-danger px-4"
                  onClick={removeToken} 
                >
                  logout
                </button>
              ) : (
                <button className="btn btn-outline-success px-4" onClick={autoCollapse}>
                  <NavLink to="/user">Login</NavLink>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
