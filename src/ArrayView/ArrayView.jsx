import React from 'react';
import './ArrayView.css';
import { useSelector } from 'react-redux';
import ArrayElement from './ArrayElement/ArrayElement';

export default function ArrayView() {
  const {
    currentState: elements,
  } = useSelector((state) => state.array.sorting);

  /* eslint react/no-array-index-key: 0 */
  const arrayElements = elements
    .map(
      (el, id) => <ArrayElement elementValue={el.value} key={id} state={el.state} />,
    );

  return (
    <div className="array-container">
      {arrayElements}
    </div>
  );
}
