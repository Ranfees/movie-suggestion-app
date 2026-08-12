import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <span>🎬</span> MovieSuggest
        </div>

        {/* Desktop Menu */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/movies">Movies</a>
          <a href="/genres">Genres</a>
          <a href="/favorites">Favorites</a>
        </div>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search movies..." />
          <button>🔍</button>
        </div>

        {/* Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;