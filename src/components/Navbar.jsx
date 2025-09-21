// export default React.memo(Navbar);

import React, { useState, useRef, useEffect } from "react";

import { Container, Form, FormControl } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import Login from "./Login";

import Signup from "./SignUp";
import { FaBell } from 'react-icons/fa';

import {
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  const [searchActive, setSearchActive] = useState(false); // Mobile search state

  const menuRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(null);

  const closeAuth = () => setCurrentPage(null);

  /*Close mobile menu on outside click */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  /* Prevent background scroll when menu is open */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => (document.body.style.overflow = "auto"); // Cleanup
  }, [menuOpen]);

  /*  Auto-close mobile menu on desktop resize */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top border-bottom"
        style={{
          zIndex: 1040,

          background: "var(--Lunar-Eclipse)",

          marginTop: 0,
        }}
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          {/* Brand / Logo */}

          <div className="navbar-logo">NAZARIO</div>

          {/*Desktop Navigation Links */}

          <div className="desktop-navlinks">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/shopPage"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              FAQ
            </NavLink>
          </div>

          {/* Desktop Icons + Search */}
          <div className="desktop-icons">
            {/* Search bar */}
            <Form className="desktop-search">
              <FormControl
                type="text"
                placeholder="Search..."
                className="search-input"
                aria-label="Search"
              />
              <FaSearch className="search-icon-fixed" />
            </Form>

            {/* 🔔 Notification Icon (Desktop) */}
            <button className="icon-btn notification-btn">
              <FaBell />
              <span className="badge">2</span> {/* number of notifications */}
            </button>

            {/* Action Icons wrapped in buttons for accessibility */}
            <button className="icon-btn" aria-label="Wishlist">
              <FaHeart className="icon" />
            </button>
            <button className="icon-btn" aria-label="Cart">
              <FaShoppingCart className="icon" />
            </button>
            <button
              className="icon-btn"
              aria-label="Account"
              onClick={() => setCurrentPage("login")}
            >
              <FaUser className="icon" />
            </button>
          </div>

          {/*Mobile Icons */}
          <div className="mobile-icons">
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => setSearchActive(!searchActive)}
            >
              <FaSearch className="icon" />
            </button>

            {/* 🔔 Notification Icon (Mobile) */}

            <button className="icon-btn notification-btn">
              <FaBell className="icon" />
              <span className="badge">2</span> {/* number of notifications */}
            </button>

            <button className="icon-btn" aria-label="Cart">
              <FaShoppingCart className="icon" />
            </button>

            <button
              className="icon-btn"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <FaBars className="icon" />
            </button>
          </div>
        </Container>

        {/*Mobile Side Menu */}
        <div ref={menuRef} className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {/* Menu Header */}
          <div className="menu-header">
            <button
              className="icon-btn close-menu"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes className="close-icon" />
            </button>
          </div>

          {/* Account Section (Guest placeholder) */}
          <div className="account-box">
            <div className="account-avatar">
              <FaUser />
            </div>
            <div className="account-text">
              <h6>Hi Guest!</h6>
              <p>
                Login or Signup to track your orders and get exclusive deals.
              </p>
              <button
                className="login-btn"
                onClick={() => {
                  setCurrentPage("signup");

                  setMenuOpen(false);
                }}
              >
                Signup
              </button>
              <button
                className="login-btn"
                onClick={() => {
                  setCurrentPage("login");

                  setMenuOpen(false);
                }}
              >
                Login
              </button>
            </div>
          </div>

          {/* Menu Links */}
          <div className="menu-links">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/shopPage"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>

      {(currentPage === "login" || currentPage === "signup") && (
        <div
          style={{
            position: "fixed",

            top: 0,

            left: 0,

            width: "100vw",

            height: "100vh",

            background: "rgba(0,0,0,0.3)",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            zIndex: 1100,
          }}
          onClick={closeAuth}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {currentPage === "login" && (
              <Login setCurrentPage={setCurrentPage} />
            )}

            {currentPage === "signup" && (
              <Signup setCurrentPage={setCurrentPage} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
