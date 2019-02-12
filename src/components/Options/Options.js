import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Button from '@atlaskit/button';

import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import Aux from '../Aux/Aux';
import Select from './Select/Select';
import Checkbox from './Checkbox/Checkbox';
import Radio from './Radio/Radio';
import './Options.css';

const Options = props => {
  const elementId = props.elemId;
  let option;

  switch(props.type) {
    case 'select':
      option = <Select {...props}
        inputChanged={props.onItemInputChanged}
        removeItem={props.onOptionItemRemoved} />;
      break;
    case 'checkbox':
      option = (<Aux>{props.items.map(item => <Checkbox key={item.id} {...item} 
        inputChanged={(e) => props.onItemInputChanged(e, elementId, item.id)}
        removeItem={() => props.onOptionItemRemoved(elementId, item.id)} />)}</Aux>);
      break;
    case 'radio':
      option = (<Aux>{props.items.map(item => <Radio key={item.id} {...item} 
        inputChanged={(e) => props.onItemInputChanged(e, elementId, item.id)}
        removeItem={() => props.onOptionItemRemoved(elementId, item.id)} />)}</Aux>);
      break;
    default:
      break; 
  }

  return (
    <div className='Options'>
      {option}
      <Button appearance='subtle' iconBefore={<AddCircleIcon />} className='Btn' onClick={() => props.onOptionItemAdded(elementId)} />
    </div> 
  );
}

const mapDispatchToProps = dispatch => {
	return {
		onOptionItemAdded: (elemId) => dispatch({ type: actionTypes.ADD_OPTION_ITEM, elemId }),
    onOptionItemRemoved: (elemId, itemId) => dispatch({ type: actionTypes.REMOVE_OPTION_ITEM, elemId, itemId }),
    onItemInputChanged: (event, elemId, itemIndex) => dispatch({ type: actionTypes.ITEM_INPUT_CHANGED, event, elemId, itemIndex }),
  };
};

export default connect(null, mapDispatchToProps)(Options);
