import React from 'react';
import './Select.css';

interface OptionInterface {
  slug: string,
  name: string
}

interface SelectProps {
  label: string,
  id: string,
  options: Array<OptionInterface>,
  onChange: any,
  disabled: boolean,
  defaultValue?: string,
}

export const Select: React.FC<SelectProps> = ({
  label, id, options, onChange, disabled, defaultValue,
}: SelectProps) => {
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
};
