import React from 'react';

const TextArea = props => {
  return(
    <textarea {...props}>
      {props.children}
    </textarea>
  )
}

export default TextArea;