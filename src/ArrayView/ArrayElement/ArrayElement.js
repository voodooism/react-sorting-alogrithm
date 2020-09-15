import React from "react";
import './ArrayElement.css';

export default function ArrayElement({ elementValue, className = ''}) {
  return (
    <div
      className={"array-element " + className}
      style={{height: elementValue + "vh"}}
    >
      {elementValue}
    </div>
  );
}