import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import Aux from '../Aux/Aux';
import './Options.css';

const Select = ({ items }) => (
  <select name='select' className='Select'>
    {items.map((item, k) => <option key={k} value={item.value}>{item.text}</option>)}
  </select>
);

const Checkbox = ({ name, text }) => (
  <div>
    <input type='checkbox' name={name} className='Checkbox' />
    <input type='text' value={text} className='Text' onChange={() => alert()} />
  </div>
);

const Radio = ({ name, text }) => (
  <div>
    <input type='radio' name={name} className='Radio' />
    <input type='text' value={text} className='Text' onChange={() => alert()} />
  </div>
);

const Options = props => {
  const elementIndex = props.elemIndex;
  let option;

  switch(props.type) {
    case 'select':
      option = <Select {...props} />;
      break;
    case 'checkbox':
      option = <Aux>{props.items.map((item, k) => <Checkbox key={k} {...item} />)}</Aux>;
      break;
    case 'radio':
      option = <Aux>{props.items.map((item, k) => <Radio key={k} {...item} />)}</Aux>;
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
	};
};

export default connect(null, mapDispatchToProps)(Options);
