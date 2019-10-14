import React from 'react';
import {string, func} from 'prop-types';

const CustomForm = ({onSubmit,type, children, ...props}) => {
  return(
    <form onSubmit={onSubmit} action={type} {...props}>
      {children}
    </form>
  )
}

CustomForm.propTypes = {
  type: string.isRequired,
  onSubmit: func.isRequired,
}

export default CustomForm;