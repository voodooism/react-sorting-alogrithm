import React from 'react';
import "./Slider.css"

export default function Slider({label, min, max, step, defaultValue, disabled, onChange}) {
  return (
    <div className="range-slider">
      <label>
        {label}
        <input
          className="custom-range"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </div>
  );
}