import React from 'react';
import { array, string, func } from 'prop-types';

const Dropdown = ({
    options, 
    name, 
    value, 
    title,
    id,
    onChange,
    defaultTitle,
    customTitle,
    ...props,
  }) => {
  return(
    <select 
        name={name} 
        onChange={onChange}
        {...props}
      >
        {
          defaultTitle && <option >{defaultTitle}</option>
        }
        
      {
        options.map(option => <option value={option[value]} key={option[id]}>{`${customTitle || ''} ${option[title]}`}</option>)
      }
    </select>
  )
}

Dropdown.propTypes = {
  options: array.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  title: string.isRequired,
  onChange: func.isRequired,
  id: string.isRequired,
  defaultTitle: string,
  customTitle: string,
}

export default Dropdown;