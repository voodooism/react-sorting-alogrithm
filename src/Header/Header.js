import React from 'react';
import {useDispatch} from "react-redux";
import {changeAlgorithm, generateArray} from "../redux/array/actions";
import {
  RANDOM_ARRAY,
  REVERSED_ARRAY,
  FEW_UNIQUE_ARRAY,
  NEARLY_SORTED_ARRAY
} from "../redux/array/generator/arrayFacroty"
import {
  BUBBLE_SORT,
  INSERTION_SORT,
  SELECTION_SORT
} from "../redux/array/sort/algorithmFactory";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Array type
        <select onChange={(e) => dispatch(generateArray(e.target.value))}>
          <option value={RANDOM_ARRAY}>Random</option>
          <option value={NEARLY_SORTED_ARRAY}>Nearly sorted</option>
          <option value={REVERSED_ARRAY}>Reversed</option>
          <option value={FEW_UNIQUE_ARRAY}>Few unique</option>
        </select>
      </label>
      <label>
        Algorithm
        <select onChange={(e) => dispatch(changeAlgorithm(e.target.value))}>
          <option value={BUBBLE_SORT}>Bubble sort</option>
          <option value={SELECTION_SORT}>Selection sort</option>
          <option value={INSERTION_SORT}>Insertion sort</option>
        </select>
      </label>
    </div>
  );
}