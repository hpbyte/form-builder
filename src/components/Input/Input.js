import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';

import CrossCircleIcon from '@atlaskit/icon/glyph/cross-circle';
import EditorBulletListIcon from '@atlaskit/icon/glyph/editor/bullet-list';
import TaskIcon from '@atlaskit/icon/glyph/task';
import EmojiProductivityIcon from '@atlaskit/icon/glyph/emoji/productivity';
import Options from '../Options/Options';
import './Input.css';

const Input = props => {
  const elementId = props.config.id;
  const optionType = props.config.option.type;
  
  let inputElement = <Textfield
    placeholder={props.config.placeholder}
    onChange={(e) => props.onInputChanged(e, elementId)} />;;

  let onErrorShowMessage = <Textfield
    placeholder={props.config.error.placeholder}
    onChange={(e) => props.onErrorInputChanged(e, elementId)} />;

  return (
    <div className='Element'>
      <div onClick={() => props.onElementRemoved(elementId)} className='Del-element'><CrossCircleIcon /></div>
      <div className='Input'>
        <div>{inputElement}</div> 
        <div className='InputErr'>{onErrorShowMessage}</div>
      </div>
      <div className='Actions'>
        <p>Choose one of reply options</p>
        <Button appearance='subtle' iconBefore={<EditorBulletListIcon />} className='Btn' onClick={() => props.onOptionAdded('select', elementId)} />
        <Button appearance='subtle' iconBefore={<TaskIcon />} className='Btn' onClick={() => props.onOptionAdded('checkbox', elementId)} />
        <Button appearance='subtle' iconBefore={<EmojiProductivityIcon />} className='Btn' onClick={() => props.onOptionAdded('radio', elementId)} />
      </div>
      {optionType && <Options type={optionType} items={props.config.option.items} elemId={elementId} />}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
	return {
		onElementRemoved: (elemId) => dispatch({ type: actionTypes.REMOVE_ELEMENT, elemId }),
		onInputChanged: (event, elemId) => dispatch({ type: actionTypes.INPUT_CHANGED, event, elemId }),
		onErrorInputChanged: (event, elemId) => dispatch({ type: actionTypes.ERROR_INPUT_CHANGED, event, elemId }),
		onOptionAdded: (optionType, elemId) => dispatch({ type: actionTypes.ADD_OPTION, optionType, elemId }),
	};
};

export default connect(null, mapDispatchToProps)(Input);
