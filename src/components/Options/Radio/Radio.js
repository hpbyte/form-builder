import React from 'react';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';

const Radio = ({ name, text, value, inputChanged, removeItem }) => (
  <div>
    <input type='radio' name={name} className='Radio' value={value} />
    <input type='text' value={text} className='Text' onChange={inputChanged} />
    <button className='Btn' onClick={removeItem}><EditorErrorIcon /></button>
  </div>
);

export default Radio;
