import React from 'react';

const Select = ({ items }) => (
  <div className='Select'>
    <select name='select'>
      {items.map((item, k) => <option key={k} value={item.value}>{item.text}</option>)}
    </select>
  </div>
);

export default Select;
