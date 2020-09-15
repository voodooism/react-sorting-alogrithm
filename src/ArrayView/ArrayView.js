import React from "react";
import './ArrayView.css';
import ArrayElement from "./ArrayElement/ArrayElement";
import {useDispatch, useSelector} from "react-redux";
import {generateArray, setArray} from "../redux/array/actions";

export default function ArrayView() {

  const elements = useSelector(state => state.array.elements);
  const sortFunction = useSelector(state => state.array.sortFunction);

  const dispatch = useDispatch();

  const arrayElements = elements
    .map(
      (el, id) => <ArrayElement elementValue={el.value} key={id} className={el.className}/>
    );

  const onSort = (elements, sortFunction) => {
    const events = sortFunction(elements);

    for (let i = 0; i < events.length ; i++) {
      setTimeout(() => dispatch(setArray(events[i])), 400 * i);
    }
  }

  return (
    <>
      <div className="array-container">
        {arrayElements}
      </div>
      <button onClick={() => onSort(elements, sortFunction)}>Sort array</button>
      <button onClick={() => dispatch(generateArray())}>Generate new array</button>
    </>
  );
}