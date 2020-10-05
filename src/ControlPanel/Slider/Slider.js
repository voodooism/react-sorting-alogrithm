import React from 'react';

export default function Slider({label, min, max, step, defaultValue, disabled, onChange}) {
  return (
    <label style={{width: "100%"}}>
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
  );
}