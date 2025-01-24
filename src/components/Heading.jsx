import React from "react";
import "../styles/components/Heading.css";
import { sora } from "../app/fonts";

function Heading({ title, subtitle }) {
  return (
    <div className="heading">
      <h2 className={`heading__subtitle ${sora.className}`}>{subtitle}</h2>
      {title ? (
        <h2 className={`heading__title ${sora.className}`}>{title}</h2>
      ) : null}

      {title ? <div className="heading__decoration"></div> : null}
    </div>
  );
}

export default Heading;
