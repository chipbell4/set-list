import React, { useState } from "react";

export default function Accordion({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  let collapsableContentClassName = "collapsable-content";
  let toggleClassName = "toggle";
  if (isOpen) {
    collapsableContentClassName += " open";
    toggleClassName += " open";
  } else {
    collapsableContentClassName += " closed";
    toggleClassName += " closed";
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-container">
      <div className={toggleClassName} onClick={toggle}>
        Toggle
      </div>
      <div className={collapsableContentClassName}>{children}</div>
    </div>
  );
}
