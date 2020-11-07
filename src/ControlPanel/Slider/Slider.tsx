import React from 'react';
import './Slider.css';

interface SliderProps {
  label: string,
  id: string,
  min: number,
  max: number,
  step: number,
  defaultValue: number,
  disabled: boolean,
  onChange: any,
}

export default function Slider({
  label, id, min, max, step, defaultValue, disabled, onChange,
}: SliderProps) {
  return (
    <div className="slider-container">
      <label htmlFor={id}>{label}</label>
      <input
        className="custom-range"
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}
