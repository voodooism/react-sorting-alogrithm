import React from 'react';
import "./Select.css"

export default function Select({label, options, onChange, disabled, defaultValue}) {
  const optionElements = options.map(option =>
    <option
      value={option.slug}
      key={option.slug}
    >
      {option.name}
    </option>
  );

  return(
    <div className="select">
      <label>
        {label}
        <select
          defaultValue={defaultValue}
          className="browser-default custom-select"
          onChange={onChange}
          disabled={disabled}
        >
          {optionElements}
        </select>
      </label>
    </div>
  );
}