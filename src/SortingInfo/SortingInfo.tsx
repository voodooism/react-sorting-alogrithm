import React from 'react';
import { useSelector } from 'react-redux';
import './SortingInfo.css';
import { RootState } from '../redux/store';
import { AlgorithmConfig, ArrayConfig } from '../App/configs';

interface SortingInfoProps {
  arrays: Array<ArrayConfig>,
  algorithms: Array<AlgorithmConfig>,
}

export const SortingInfo: React.FC<SortingInfoProps> = ({ arrays, algorithms }) => {
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
};
