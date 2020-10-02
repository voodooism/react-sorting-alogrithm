import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeAlgorithm, generateArray, setSortingSpeed} from "../redux/array/reducer";
import {ArrayTypes} from "../redux/array/generator/arrayFacroty";
import {algorithms} from "../redux/array/sort/algorithmFactory";

export default function Header() {
  const {
    isStarted: isSortingProcessStarted,
    algorithm: selectedAlgorithm,
    speed: sortingSpeed
  } = useSelector(state => state.array.sorting);

  const dispatch = useDispatch();

  const algorithmsOptions = algorithms.map(
    (algorithm) =>
      <option
        value={algorithm.slug}
        key={algorithm.slug}
      >
        {algorithm.name}
      </option>
  );

  return (
    <div>
      <label>
        Array type
        <select
          onChange={(e) => dispatch(generateArray(e.target.value))}
          disabled={isSortingProcessStarted}
        >
          <option value={ArrayTypes.RANDOM_ARRAY}>Random</option>
          <option value={ArrayTypes.NEARLY_SORTED_ARRAY}>Nearly sorted</option>
          <option value={ArrayTypes.REVERSED_ARRAY}>Reversed</option>
          <option value={ArrayTypes.FEW_UNIQUE_ARRAY}>Few unique</option>
        </select>
      </label>
      <label>
        Algorithm
        <select
          defaultValue={selectedAlgorithm.slug}
          onChange={(e) => dispatch(changeAlgorithm(e.target.value))}
          disabled={isSortingProcessStarted}
        >
          { algorithmsOptions }
        </select>
      </label>
      <label>
        Sorting speed
        <input
          id="sorting-speed"
          type="range"
          min={200}
          max={800}
          step={150}
          defaultValue={sortingSpeed}
          disabled={isSortingProcessStarted}
          onChange={(e) => dispatch(setSortingSpeed(e.target.value))}
        />
      </label>
    </div>
  );
}