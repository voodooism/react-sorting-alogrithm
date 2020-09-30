import React from "react";
import './ArrayView.css';
import ArrayElement from "./ArrayElement/ArrayElement";
import {useDispatch, useSelector} from "react-redux";
import {generateArray, sortArray, stopSorting} from "../redux/array/reducer";
import {algorithms} from "../redux/array/sort/algorithmFactory";

export default function ArrayView() {
  const {
    isStarted: isSortingProcessStarted,
    algorithm: currentAlgorithmType,
    currentState: elements,
    comparisons,
    inversions
  } = useSelector(state => state.array.sorting);

  const dispatch = useDispatch();

  const arrayElements = elements
    .map(
      (el, id) => <ArrayElement elementValue={el.value} key={id} className={el.className}/>
    );

  const startSortingButton = <button onClick={() => dispatch(sortArray())}>Start sorting</button>
  const stopSortingButton = <button onClick={() => dispatch(stopSorting())}>Stop sorting</button>

  const currentAlgorithm = algorithms.find((el) => el.slug = currentAlgorithmType);

  return (
    <>
      <div className="array-view">
        <div className="array-container">
          {arrayElements}
        </div>
        <div className="sorting-info">
          <h3>Info here</h3>
          <p>Complexity: {currentAlgorithm.complexity}</p>
          <p>Count of inversions: {inversions}</p>
          <p>Count of comparisons: {comparisons}</p>
        </div>
      </div>
      {isSortingProcessStarted ? stopSortingButton : startSortingButton}
      <button onClick={() => dispatch(generateArray())} disabled={isSortingProcessStarted}>Generate new array</button>
    </>
  );
}