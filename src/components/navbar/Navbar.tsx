import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" aria-label="Go to home page" className="home-link">
        <h1>Cookbook</h1>
      </Link>
      <Link to="/create" className="btn cta">
        Create Recipie
      </Link>
    </nav>
  );
}
