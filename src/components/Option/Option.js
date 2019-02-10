import React from 'react';
import './Option.css';

const Select = ({ items }) => (
  <select name='select' className='Select'>
    {items.map((item, k) => <option key={k} value={item.value}>{item.text}</option>)}
  </select>
);

const Checkbox = ({ name, text }) => (
  <div>
    <input type='checkbox' name={name} className='Checkbox' />
    <input type='text' value={text} className='Text' />
  </div>
);

const Radio = ({ name, text }) => (
  <div>
    <input type='radio' name={name} className='Radio' />
    <input type='text' value={text} className='Text' />
  </div>
);

const Options = props => {
  switch(props.type) {
    case 'select':
      return <Select {...props} />;
    case 'checkbox':
      return props.items.map((item, k) => <Checkbox key={k} {...item} />);
    case 'radio':
      return props.items.map((item, k) => <Radio key={k} {...item} />);
    default:
      break; 
  }
}

export default Options;
