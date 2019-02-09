import React from 'react';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import './Input.css';

const Input = props => {
  let inputElement;
  let onErrorShowMessage = <input type='text' placeholder='If error, show this' />;
  
  switch(props.type) {
    case 'text':
      inputElement = <input type='text' placeholder={props.question} />;
      break;
    case 'select':
      inputElement = <h1>Select Options</h1>
      break;
    case 'radio':
      inputElement = <h1>Radio Buttons</h1>
      break;
    default:
      break;
  }

  return (
    <div className='Element'>
      <div onClick={props.removeElement} className='Del-element'><CrossCircleIcon /></div>
      <div className='Input'>{inputElement} {onErrorShowMessage}</div>
      <div className='Actions'>
        <button className='Btn' onClick={() => alert('hello')}><AddCircleIcon /></button>
      </div>
    </div>
  );
}

export default Input;
