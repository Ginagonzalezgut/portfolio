import React from "react";
import "../styles/components/Menu.css";
import Link from "next/link";

function Menu() {
  return (
    <nav className="menu">
      <Link href="/" />
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
      <Link href="/#contact">Contact</Link>
    </nav>
  );
}

export default Menu;
