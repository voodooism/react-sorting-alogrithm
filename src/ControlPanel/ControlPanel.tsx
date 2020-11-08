import React from 'react';
import { useSelector } from 'react-redux';
import {
  MDBBtn, MDBCol, MDBContainer, MDBRow,
} from 'mdbreact';
import {
  changeAlgorithm, generateArray, setSortingSpeed, stopSorting,
} from '../redux/array/reducer';
import { ArrayTypes } from '../redux/array/ArrayFactory/ArrayFactory';
import { Select } from './Select';
import { Slider } from './Slider';
import { useAppDispatch, RootState } from '../redux/store';
import sortArray from '../redux/array/thunks';
import { AlgorithmConfig, ArrayConfig } from '../App/configs';
import { AlgorithmTypes } from '../redux/array/sorting/AlgorithmFactory';

interface ControlPanelProps {
  arrays: Array<ArrayConfig>,
  algorithms: Array<AlgorithmConfig>
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ arrays, algorithms }) => {
  const {
    isStarted: isSortingProcessStarted,
    algorithm: selectedAlgorithm,
    speed: sortingSpeed,
  } = useSelector((state: RootState) => state.array.sorting);

  const dispatch = useAppDispatch();

  const startSortingButton = (
    <MDBBtn
      style={{ width: '100%' }}
      color="light-green"
      onClick={() => dispatch(sortArray())}
    >
      Start sorting
    </MDBBtn>
  );

  const stopSortingButton = (
    <MDBBtn
      style={{ width: '100%' }}
      color="amber"
      onClick={() => dispatch(stopSorting())}
    >
      Stop sorting
    </MDBBtn>
  );

  return (
    <MDBContainer fluid className="mx-1 my-2">
      <MDBRow>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <Select
            label="Array type"
            id="array-type"
            options={arrays}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => dispatch(
                generateArray(e.target.value as ArrayTypes),
              )
            }
            disabled={isSortingProcessStarted}
          />
        </MDBCol>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <Select
            label="Algorithm"
            id="algorithm"
            options={algorithms}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => dispatch(
                changeAlgorithm(e.target.value as AlgorithmTypes),
              )
            }
            disabled={isSortingProcessStarted}
            defaultValue={selectedAlgorithm}
          />
        </MDBCol>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <Slider
            label="Sorting speed"
            id="sorting-speed"
            min={200}
            max={800}
            step={150}
            defaultValue={sortingSpeed}
            disabled={isSortingProcessStarted}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => dispatch(
                setSortingSpeed(Number.parseInt(e.target.value, 10)),
              )
            }
          />
        </MDBCol>
        <MDBCol className="d-flex align-items-center" xl="3" md="3" sm="12">
          <MDBBtn
            style={{ width: '100%' }}
            color="light-blue"
            onClick={() => dispatch(generateArray())}
            disabled={isSortingProcessStarted}
          >
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
};
