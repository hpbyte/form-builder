import React from 'react';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import EditorBulletListIcon from '@atlaskit/icon/glyph/editor/bullet-list';
import TaskIcon from '@atlaskit/icon/glyph/task';
import EmojiProductivityIcon from '@atlaskit/icon/glyph/emoji/productivity';
import Option from '../Option/Option';
import './Input.css';

const Input = props => {
  const optionType = props.config.option.type;
  let inputElement;
  let onErrorShowMessage = <input type='text'
    placeholder={props.config.error.placeholder}
    value={props.config.error.errorMsg}
    style={{ marginLeft: '2rem' }}
    onChange={props.errorChanged} />;
  
  switch(props.config.type) {
    case 'text':
      inputElement = <input type='text'
        placeholder={props.config.placeholder}
        value={props.config.value}
        onChange={props.changed} />;
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
        <p>Choose one of reply options</p>
        <button className='Btn' onClick={() => props.addOption('select')}><EditorBulletListIcon /></button>
        <button className='Btn' onClick={() => props.addOption('checkbox')}><TaskIcon /></button>
        <button className='Btn' onClick={() => props.addOption('radio')}><EmojiProductivityIcon /></button>
      </div>
      {optionType && <div className='Options'>
        <Option type={optionType} items={props.config.option.items} />
        <button className='Btn' onClick={() => props.addOptionItem(optionType)}>
          <AddCircleIcon size='large' />
        </button>
      </div>}
    </div>
  );
}

export default Input;
