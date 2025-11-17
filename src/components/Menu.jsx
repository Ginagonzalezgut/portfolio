import React from "react";
import "../styles/components/Menu.css";
import Link from "next/link";

function Menu() {
  return (
    <nav className="menu">
      <Link href="/">Home</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#about">About</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  );
}

export default Menu;
