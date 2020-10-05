import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeAlgorithm, generateArray, setSortingSpeed, sortArray, stopSorting} from "../redux/array/reducer";
import {arrays} from "../redux/array/generator/arrayFacroty";
import {algorithms} from "../redux/array/sort/algorithmFactory";
import Select from "./Select/Select";
import Slider from "./Slider/Slider";
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";

export default function ControlPanel() {
  const {
    isStarted: isSortingProcessStarted,
    algorithm: selectedAlgorithm,
    speed: sortingSpeed
  } = useSelector(state => state.array.sorting);

  const dispatch = useDispatch();

  const startSortingButton = <MDBBtn style={{width: "100%"}} color="light-green" onClick={() => dispatch(sortArray())}>Start sorting</MDBBtn>
  const stopSortingButton = <MDBBtn style={{width: "100%"}} color="amber" onClick={() => dispatch(stopSorting())}>Stop sorting</MDBBtn>

  return (
    <MDBContainer fluid={true} className="mx-1 my-2">
      <MDBRow>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <Select
            label="Array type"
            options={arrays}
            onChange={(e) => dispatch(generateArray(e.target.value))}
            disabled={isSortingProcessStarted}
          />
        </MDBCol>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <Select
            label="Algorithm"
            options={algorithms}
            onChange={(e) => dispatch(changeAlgorithm(e.target.value))}
            disabled={isSortingProcessStarted}
            defaultValue={selectedAlgorithm.slug}
          />
        </MDBCol>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <Slider
            label="Sorting speed"
            min={200}
            max={800}
            step={150}
            defaultValue={sortingSpeed}
            disabled={isSortingProcessStarted}
            onChange={(e) => dispatch(setSortingSpeed(e.target.value))}
          />
        </MDBCol>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <MDBBtn
            style={{width: "100%"}}
            color="light-blue"
            onClick={() => dispatch(generateArray())}
            disabled={isSortingProcessStarted}>
            Renew array
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="d-flex align-items-center">
          {isSortingProcessStarted ? stopSortingButton : startSortingButton}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}