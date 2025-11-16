import React from "react";
import Heading from "./Heading";
import "../styles/components/Ux.css";

function Ux() {
  const desgigns = [
    {
      image: "",
      title: "Medical App Design",
      description: "Prototype of medical website.",
      link: "https://www.figma.com/design/TKBRt4IkWat5bdbuDzXbcv/Medicine?node-id=0-1&t=U9dF3BpJ9QEtJxmp-1",
    },
    {
      image: "weddingDesign.png",
      title: "Wedding Website Design",
      description: "Concept for a wedding invitation website.",
    },
  ];

  return (
    <div>
      <Heading
        title="User Experience Design"
        subtitle="Crafting intuitive interfaces"
      />
      <div className="design-projects">
        {desgigns.map((design, index) => (
          <div key={index}>
            <img src={design.image} alt="" />
            <h3>{design.title}</h3>
            <p>{design.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ux;
