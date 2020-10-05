import React from "react";
import './ArrayView.css';
import ArrayElement from "./ArrayElement/ArrayElement";
import {useSelector} from "react-redux";

export default function ArrayView() {
  const {
    currentState: elements,
  } = useSelector(state => state.array.sorting);


  const arrayElements = elements
    .map(
      (el, id) => <ArrayElement elementValue={el.value} key={id} className={el.className}/>
    );

  return (
    <div className="array-container">
      {arrayElements}
    </div>
  );
}