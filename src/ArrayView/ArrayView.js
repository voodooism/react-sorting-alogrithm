import React from "react";
import './ArrayView.css';
import ArrayElement from "./ArrayElement/ArrayElement";
import {useDispatch, useSelector} from "react-redux";
import {generateArray, sortArray, stopSorting} from "../redux/array/actions";

export default function ArrayView() {

  const elements = useSelector(state => state.array.elements);
  const isSortingProcessStarted = useSelector(state => state.array.isSortingProcessStarted);

  const dispatch = useDispatch();

  const arrayElements = elements
    .map(
      (el, id) => <ArrayElement elementValue={el.value} key={id} className={el.className}/>
    );

  const startSortingButton = <button onClick={() => dispatch(sortArray())}>Start sorting</button>
  const stopSortingButton = <button onClick={() => dispatch(stopSorting())}>Stop sorting</button>

  return (
    <>
      <div className="array-container">
        {arrayElements}
      </div>
      {isSortingProcessStarted ? stopSortingButton : startSortingButton}
      <button onClick={() => dispatch(generateArray())} disabled={isSortingProcessStarted}>Generate new array</button>
    </>
  );
}