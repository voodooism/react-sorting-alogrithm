import React from 'react';
import './Select.css';

export default function Select({
  label, id, options, onChange, disabled, defaultValue,
}) {
  const optionElements = options.map((option) => (
    <option
      value={option.slug}
      key={option.slug}
    >
      {option.name}
    </option>
  ));

  return (
    <div className="select-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        defaultValue={defaultValue}
        className="browser-default custom-select"
        data-width="100%"
        onChange={onChange}
        disabled={disabled}
      >
        {optionElements}
      </select>
    </div>
  );
}
