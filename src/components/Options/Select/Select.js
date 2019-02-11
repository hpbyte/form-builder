import React from 'react';

const Select = ({ items }) => (
  <select name='select' className='Select'>
    {items.map((item, k) => <option key={k} value={item.value}>{item.text}</option>)}
  </select>
);

export default Select;
