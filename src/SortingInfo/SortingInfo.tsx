import React from 'react';
import { useSelector } from 'react-redux';
import { algorithms } from '../redux/array/sort/AlgorithmFactory';
import { arrays } from '../redux/array/generator/ArrayFactory';
import './SortingInfo.css';
import { RootState } from '../redux/store';

export default function SortingInfo() {
  const {
    algorithm: currentAlgorithmType,
    comparisons,
    inversions,
  } = useSelector((state: RootState) => state.array.sorting);

  const { type: currentArrayType } = useSelector((state: RootState) => state.array.array);

  const currentAlgorithmInfo = algorithms.find((el) => el.slug === currentAlgorithmType);
  const currentArrayInfo = arrays.find((el) => el.slug === currentArrayType);

  if (!currentArrayInfo || !currentAlgorithmInfo) {
    throw new Error('Something went wrong.');
  }

  return (
    <div className="sorting-info-card">
      <h3 className="header">Sorting info:</h3>
      <p>
        <span className="info">Array type:</span>
        {currentArrayInfo.name}
      </p>
      <p>
        <span className="info">Algorithm name:</span>
        {currentAlgorithmInfo.name}
      </p>
      <p>
        <span className="info">Sorting complexity:</span>
        {currentAlgorithmInfo.complexity}
      </p>
      <p>
        <span className="info">Count of inversions:</span>
        {inversions ?? '-'}
      </p>
      <p>
        <span className="info">Count of comparisons:</span>
        {comparisons ?? '-'}
      </p>
    </div>
  );
}
