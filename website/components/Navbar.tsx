"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Prosper <span>Anele</span>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}