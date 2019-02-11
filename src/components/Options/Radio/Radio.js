import React from 'react';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import './Radio.css';

const Radio = ({ id, name, text, value, inputChanged, removeItem }) => (
  <div className='Radio'>
    <input type='radio' name={name} value={value} id={'rad'+id} />
    <label for={'rad'+id}>
      <input type='text' value={text} className='Text' onChange={inputChanged} />
    </label>
    <button className='Btn' onClick={removeItem}><EditorErrorIcon /></button>
  </div>
);

export default Radio;
