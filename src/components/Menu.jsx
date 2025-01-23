import React from "react";
import "../styles/components/Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
}

export default Menu;
