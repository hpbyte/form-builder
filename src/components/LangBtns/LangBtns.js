import React from 'react';

const LangBtns = props => (
  <div className='Btns'>
    <button className='Btn Btn-round'
      onClick={() => props.changeLanguage('my')} >Unicode</button>
    <button className='Btn Btn-round'
      onClick={() => props.changeLanguage('my_zg')}>Zawgyi</button>
    <button className='Btn Btn-round'
      onClick={() => props.changeLanguage('en')}>English</button>
  </div>
);

export default LangBtns;
