import React from "react";
import './ArrayView.css';
import ArrayElement from "./ArrayElement/ArrayElement";
import {useSelector} from "react-redux";
import {algorithms} from "../redux/array/sort/algorithmFactory";
import {arrays} from "../redux/array/generator/arrayFacroty";

export default function ArrayView() {
  const {
    algorithm: currentAlgorithmType,
    currentState: elements,
    comparisons,
    inversions
  } = useSelector(state => state.array.sorting);

  const { type: currentArrayType} = useSelector(state => state.array.array);

  const arrayElements = elements
    .map(
      (el, id) => <ArrayElement elementValue={el.value} key={id} className={el.className}/>
    );

  const currentAlgorithmInfo = algorithms.find((el) => el.slug === currentAlgorithmType);
  const currentArrayInfo = arrays.find((el) => el.slug === currentArrayType);

  return (
    <>
      <div className="array-view">
        <div className="array-container">
          {arrayElements}
        </div>
        <div className="sorting-info">
          <h3>Sorting info:</h3>
          <p><b>Array type:</b> {currentArrayInfo.name}</p>
          <p><b>Algorithm name:</b> {currentAlgorithmInfo.name}</p>
          <p><b>Sorting complexity:</b> {currentAlgorithmInfo.complexity}</p>
          <p><b>Count of inversions:</b> {inversions ?? "-"}</p>
          <p><b>Count of comparisons:</b> {comparisons ?? "-"}</p>
        </div>
      </div>
    </>
  );
}