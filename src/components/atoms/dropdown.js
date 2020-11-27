export const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => 
(
  <select 
    id={id} 
    onChange={event => onSelectedValueChange(event.target.value)}>
    {options.map(({ value, label }) => (
      <option 
        key={label}
        value={value} 
        selected={value === selectedValue}>
        {label}
      </option>
    ))}
  </select>
);