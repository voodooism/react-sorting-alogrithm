import React from 'react';

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
    <label style={{width: "100%"}}>
      {label}
      <select
        defaultValue={defaultValue}
        className="browser-default custom-select"
        data-width="100%"
        onChange={onChange}
        disabled={disabled}
      >
        {optionElements}
      </select>
    </label>
  );
}