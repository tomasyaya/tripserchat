import React from 'react';
import {string, func} from 'prop-types';

const CustomInput = ({type, onChange, value, ...props}) => {
  return(
    <input type={type} onChange={onChange} value={value} {...props} />
  )
}

CustomInput.propTypes = {
  type: string.isRequired,
  onChaange: func,
}

export default CustomInput;