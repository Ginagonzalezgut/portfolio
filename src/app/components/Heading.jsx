import React from "react";
import "../styles/components/Heading.css";

function Heading({ title, subtitle }) {
  return (
    <div className="heading">
      <h2 className="heading__title">
        <span className="heading__subtitle">{subtitle}</span>
        {title}
      </h2>
      <div className="heading__decoration"></div>
    </div>
  );
}

export default Heading;
