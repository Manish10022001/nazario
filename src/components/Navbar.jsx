import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ brand = "Nazario" }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle function
  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top border-bottom"
        style={{ zIndex: 1040, background: "var(--Lunar-Eclipse)" }}
      >
        <div className="container">
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
            style={{ color: "var(--Creme-Brulee)" }}
          >
            <span className="fs-4 fw-bold m-0">{brand}</span>
          </NavLink>

          {/* Toggler button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav} // Toggle navbar on click
            aria-controls="navMain"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar links, with conditional class for mobile collapse */}
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navMain"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/new-arrivals"
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--Accent-Color)"
                      : "var(--Creme-Brulee)", // Active link color
                    textDecoration: isActive ? "underline" : "none", // Underline active link
                  })}
                >
                  New Arrivals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/men"
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--Accent-Color)"
                      : "var(--Creme-Brulee)",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/women"
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--Accent-Color)"
                      : "var(--Creme-Brulee)",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--Accent-Color)"
                      : "var(--Creme-Brulee)",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--Accent-Color)"
                      : "var(--Creme-Brulee)",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-semibold"
                  to="/faq"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--Accent-Color)" : "var(--Au-Lait)",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  FAQ
                </NavLink>
              </li>
            </ul>

            <form
              className="d-none d-md-flex align-items-center position-relative me-2"
              role="search"
              style={{ minWidth: 280 }}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search products"
                style={{ height: 40, borderRadius: 9999, paddingLeft: 40 }}
              />
              <i
                className="bi bi-search position-absolute"
                style={{
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--Lunar-Eclipse)",
                }}
                aria-hidden="true"
              />
            </form>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn p-0"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
                aria-label="Favorites"
              >
                <i
                  className="bi bi-heart fs-5"
                  style={{ color: "var(--Creme-Brulee)" }}
                />
              </button>
              <button
                className="btn p-0"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
                aria-label="Cart"
              >
                <i
                  className="bi bi-bag fs-5"
                  style={{ color: "var(--Creme-Brulee)" }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Navbar);
