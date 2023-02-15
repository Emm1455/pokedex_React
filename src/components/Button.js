import React from 'react';
import "../styles/Button.css";

function Button({action,icon}) {
  return (
    <>
        <button className='Button' onClick={action}>
            {icon}
        </button>
    </>
  )
}

export default Button