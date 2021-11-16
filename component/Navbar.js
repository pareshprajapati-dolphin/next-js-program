import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav  my-2 my-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/About">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/user">
              <a className="nav-link">UserData</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link">Sign in</a>
            </Link>
          </li>
          <li>
            <Link href="/Register">
              <a className="nav-link">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
