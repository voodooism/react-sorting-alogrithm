import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeAlgorithm, generateArray, setSortingSpeed, sortArray, stopSorting} from "../redux/array/reducer";
import {arrays} from "../redux/array/generator/arrayFacroty";
import {algorithms} from "../redux/array/sort/algorithmFactory";
import Select from "./Select/Select";
import Slider from "./Slider/Slider";
import {MDBBtn} from "mdbreact";

export default function Header() {
  const {
    isStarted: isSortingProcessStarted,
    algorithm: selectedAlgorithm,
    speed: sortingSpeed
  } = useSelector(state => state.array.sorting);

  const dispatch = useDispatch();

  const startSortingButton = <MDBBtn color="light-green" onClick={() => dispatch(sortArray())}>Start sorting</MDBBtn>
  const stopSortingButton = <MDBBtn color="amber" onClick={() => dispatch(stopSorting())}>Stop sorting</MDBBtn>

  return (
    <div>
      <Select
        label="Array type"
        options={arrays}
        onChange={(e) => dispatch(generateArray(e.target.value))}
        disabled={isSortingProcessStarted}
      />
      <Select
        label="Algorithm"
        options={algorithms}
        onChange={(e) => dispatch(changeAlgorithm(e.target.value))}
        disabled={isSortingProcessStarted}
        defaultValue={selectedAlgorithm.slug}
      />
      <Slider
        label="Sorting speed"
        min={200}
        max={800}
        step={150}
        defaultValue={sortingSpeed}
        disabled={isSortingProcessStarted}
        onChange={(e) => dispatch(setSortingSpeed(e.target.value))}
      />

      {isSortingProcessStarted ? stopSortingButton : startSortingButton}
      <MDBBtn
        color="light-blue"
        onClick={() => dispatch(generateArray())}
        disabled={isSortingProcessStarted}>
        Generate new array
      </MDBBtn>
    </div>
  );
}