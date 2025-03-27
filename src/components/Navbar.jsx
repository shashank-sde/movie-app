import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h2 className="navbar-title">Movie-App</h2>

        <div className="nav-links">
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for Movies......."
            />
            <button className="search-button">Search</button>
          </div>
          <a href="/">Home</a>
          <a href="/about">Favourites</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
