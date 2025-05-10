import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll create this for styling

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="nav-left">
        <h2>📰 KLS's News Letter</h2>
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/finance">Finance</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/world-Affair">world Affair</Link>
      </div>

      <div className="nav-right">
        <button onClick={toggleTheme}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
