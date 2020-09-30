import React from "react";
import './ArrayElement.css';
import classNames from 'classnames';

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