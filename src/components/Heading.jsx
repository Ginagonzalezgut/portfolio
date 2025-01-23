import React from "react";
import "../styles/components/Heading.css";

function Heading({ title, subtitle }) {
  return (
    <div className="heading">
      <h2 className="heading__subtitle">{subtitle}</h2>
      {title ? <h2 className="heading__title">{title}</h2> : null}

      {title ? <div className="heading__decoration"></div> : null}
    </div>
  );
}

export default Heading;
