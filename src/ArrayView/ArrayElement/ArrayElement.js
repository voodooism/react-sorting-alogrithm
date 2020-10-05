import React from "react";
import './ArrayElement.css';
import classNames from 'classnames';

export default function ArrayElement({ elementValue, className = ''}) {
  const elementClass = classNames('array-element', className);

  const heightValue = elementValue * 0.60;

  return (
    <div
      className={elementClass}
      style={{height: heightValue + "vh"}}
    >
      {elementValue}
    </div>
  );
}