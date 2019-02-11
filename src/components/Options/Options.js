import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import Aux from '../Aux/Aux';
import Select from './Select/Select';
import Checkbox from './Checkbox/Checkbox';
import Radio from './Radio/Radio';
import './Options.css';

const Options = props => {
  const elementIndex = props.elemIndex;
  let option;

  switch(props.type) {
    case 'select':
      option = <Select {...props} />;
      break;
    case 'checkbox':
      option = (<Aux>{props.items.map(item => <Checkbox key={item.id} {...item} 
        inputChanged={(e) => props.onItemInputChanged(e, elementIndex, item.id)}
        removeItem={() => props.onOptionItemRemoved(elementIndex, item.id)} />)}</Aux>);
      break;
    case 'radio':
      option = (<Aux>{props.items.map(item => <Radio key={item.id} {...item} 
        inputChanged={(e) => props.onItemInputChanged(e, elementIndex, item.id)}
        removeItem={() => props.onOptionItemRemoved(elementIndex, item.id)} />)}</Aux>);
      break;
    default:
      break; 
  }

  return (
    <div className='Options'>
      {option}
      <button className='Btn' onClick={() => props.onOptionItemAdded(elementIndex)}>
        <AddCircleIcon size='large' />
      </button>
    </div> 
  );
}

const mapDispatchToProps = dispatch => {
	return {
		onOptionItemAdded: (elemIndex) => dispatch({ type: actionTypes.ADD_OPTION_ITEM, elemIndex }),
    onOptionItemRemoved: (elemIndex, itemId) => dispatch({ type: actionTypes.REMOVE_OPTION_ITEM, elemIndex, itemId }),
    onItemInputChanged: (event, elemIndex, itemIndex) => dispatch({ type: actionTypes.ITEM_INPUT_CHANGED, event, elemIndex, itemIndex }),
  };
};

export default connect(null, mapDispatchToProps)(Options);
