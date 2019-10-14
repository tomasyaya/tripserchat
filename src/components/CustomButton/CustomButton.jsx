import React from 'react';
import {func, string} from 'prop-types';

const CustomButton = ({type, onClick, title, ...props}) => {
  return(
    <button type={type} onClick={onClick} {...props}>
      {title}
    </button>
  )
}

CustomButton.propTypes = {
  type: string.isRequired,
  onClick: func.isRequired,
}

export default CustomButton