import React from 'react';
import './ArrayElement.css';
import classNames from 'classnames';
import { ArrayElementState } from '../../redux/array/ArrayFactory/ArrayFactory';

interface ArrayElementProps {
  elementValue: number,
  state: ArrayElementState
}

export const ArrayElement: React.FC<ArrayElementProps> = ({ elementValue, state }) => {
  let className = '';

  switch (state) {
    case ArrayElementState.INITIAL:
      className = '';
      break;
    case ArrayElementState.COMPARING:
      className = 'comparing';
      break;
    case ArrayElementState.SWAPPED:
      className = 'swap';
      break;
    case ArrayElementState.SORTED:
      className = 'sorted';
      break;
    case ArrayElementState.FOCUSED:
      className = 'focused';
      break;
    default:
      throw new Error(`Unknown state of an array element: "${state}".`);
  }

  const elementClass = classNames('array-element', className);

  const heightValue = elementValue * 0.60;

  return (
    <div
      className={elementClass}
      style={{ height: `${heightValue}vh` }}
    >
      {elementValue}
    </div>
  );
};
