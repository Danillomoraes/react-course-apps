import React from 'react';

export const Option = (props) => {
  return (
    <div className='option'>
      <p className="option__text">{props.option}</p>
      <button
        className='button button--link'
        onClick={(e) => {
          props.deleteOpt(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};
