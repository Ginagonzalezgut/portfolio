import React from "react";
import "../styles/components/Title.css";
import { sora } from "../app/fonts";

function Title({ children }) {
  return <h1 className={`title ${sora.className}`}> {children}</h1>;
}

export default Title;
