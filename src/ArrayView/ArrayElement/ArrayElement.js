import React from "react";
import './ArrayElement.css';

const classNames = require('classnames');

export default function ArrayElement({ elementValue, className = ''}) {
  const elementClass = classNames('array-element', className);

  return (
    <div
      className={elementClass}
      style={{height: elementValue + "vh"}}
    >
      {elementValue}
    </div>
  );
}