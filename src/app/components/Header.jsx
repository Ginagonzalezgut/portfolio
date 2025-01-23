import React from "react";
import Menu from "./Menu";
import "../styles/components/Header.css";

function Header() {
  return (
    <div className="header-menu">
      <div className="container">
        {" "}
        <Menu />
      </div>
    </div>
  );
}

export default Header;
