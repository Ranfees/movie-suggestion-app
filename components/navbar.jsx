import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          🎬 MovieSuggest
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">about</a>
          <a href="/genres">Genres</a>
          <a href="/favorites">Favorites</a>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search movies..." />
          <button>🔍</button>
        </div>

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