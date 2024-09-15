import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <span className="logo-text">
          <span>&lt;</span>/Leo<span>&gt;</span>
        </span>
      </div>
      <div>
        <button className="linkedin-btn">LinkedIn</button>
      </div>
    </header>
  );
}

export default Header;
