import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({ isOn, handleToggle }) => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isopen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={
          isopen ? "navbar-collapse collapse show" : "collapse navbar-collapse"
        }
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className={isOn ? "nav-link-dark" : "nav-link"}>Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/About">
              <a className={isOn ? "nav-link-dark" : "nav-link"}>About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/user">
              <a className={isOn ? "nav-link-dark" : "nav-link"}>UserData</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className={isOn ? "nav-link-dark" : "nav-link"}>Sign in</a>
            </Link>
          </li>
          <li>
            <Link href="/Register">
              <a className={isOn ? "nav-link-dark" : "nav-link"}>Sign up</a>
            </Link>
          </li>
          <li>
            <Link href="/googleMap">
              <a className={isOn ? "nav-link-dark" : "nav-link"}>Map</a>
            </Link>
          </li>

          <li>
            <Link href="/Image">
              <a className={isOn ? "nav-link-dark" : "nav-link"}>Image Slide</a>
            </Link>
          </li>

          {/* <li className="mt-2">
            <label className="switch">
              <input type="checkbox" checked={isOn} onChange={handleToggle} />
              <div className="slider"></div>
            </label>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "LigthMode" : "darkMode"}
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
