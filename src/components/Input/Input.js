import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import EditorBulletListIcon from '@atlaskit/icon/glyph/editor/bullet-list';
import TaskIcon from '@atlaskit/icon/glyph/task';
import EmojiProductivityIcon from '@atlaskit/icon/glyph/emoji/productivity';
import Options from '../Options/Options';
import './Input.css';

const Input = props => {
  const elementIndex = props.elemIndex;
  const optionType = props.config.option.type;
  
  let inputElement = <input type='text'
    placeholder={props.config.placeholder}
    value={props.config.value}
    onChange={(e) => props.onInputChanged(e, elementIndex)} />;;

  let onErrorShowMessage = <input type='text'
    placeholder={props.config.error.placeholder}
    value={props.config.error.errorMsg}
    style={{ marginLeft: '2rem' }}
    onChange={(e) => props.onErrorInputChanged(e, elementIndex)} />;

  return (
    <div className='Element'>
      <div onClick={() => props.onElementRemoved(elementIndex)} className='Del-element'><CrossCircleIcon /></div>
      <div className='Input'>{inputElement} {onErrorShowMessage}</div>
      <div className='Actions'>
        <p>Choose one of reply options</p>
        <button className='Btn' onClick={() => props.onOptionAdded('select', elementIndex)}><EditorBulletListIcon /></button>
        <button className='Btn' onClick={() => props.onOptionAdded('checkbox', elementIndex)}><TaskIcon /></button>
        <button className='Btn' onClick={() => props.onOptionAdded('radio', elementIndex)}><EmojiProductivityIcon /></button>
      </div>
      {optionType && <Options type={optionType} items={props.config.option.items} elemIndex={elementIndex} />}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
	return {
		onElementRemoved: (elemId) => dispatch({ type: actionTypes.REMOVE_ELEMENT, elemId }),
		onInputChanged: (event, elemIndex) => dispatch({ type: actionTypes.INPUT_CHANGED, event, elemIndex }),
		onErrorInputChanged: (event, elemIndex) => dispatch({ type: actionTypes.ERROR_INPUT_CHANGED, event, elemIndex }),
		onOptionAdded: (optionType, elemIndex) => dispatch({ type: actionTypes.ADD_OPTION, optionType, elemIndex }),
	};
};

export default connect(null, mapDispatchToProps)(Input);
