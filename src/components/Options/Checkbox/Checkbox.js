import React from 'react';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import './Checkbox.css';

const Checkbox = ({ id, name, text, inputChanged, removeItem }) => (
  <div className='Checkbox'>
    <input type='checkbox' name={name} id={'chk'+id} />
    <label for={'chk'+id}>
      <input type='text' value={text} className='Text' onChange={inputChanged} />
    </label>
    <button className='Btn Del-item' onClick={removeItem}><EditorErrorIcon /></button>
  </div>
);

export default Checkbox;