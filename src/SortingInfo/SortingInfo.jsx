import React from 'react';
import { useSelector } from 'react-redux';
import { algorithms } from '../redux/array/sort/algorithmFactory';
import { arrays } from '../redux/array/generator/arrayFacroty';
import './SortingInfo.css';

export default function SortingInfo() {
  const {
    algorithm: currentAlgorithmType,
    comparisons,
    inversions,
  } = useSelector((state) => state.array.sorting);

  const { type: currentArrayType } = useSelector((state) => state.array.array);

  const currentAlgorithmInfo = algorithms.find((el) => el.slug === currentAlgorithmType);
  const currentArrayInfo = arrays.find((el) => el.slug === currentArrayType);

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
