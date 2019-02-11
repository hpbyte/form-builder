import React from 'react';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';

const Checkbox = ({ name, text, inputChanged, removeItem }) => (
  <div>
    <input type='checkbox' name={name} className='Checkbox' />
    <input type='text' value={text} className='Text' onChange={inputChanged} />
    <button className='Btn' onClick={removeItem}><EditorErrorIcon /></button>
  </div>
);

export default Checkbox;