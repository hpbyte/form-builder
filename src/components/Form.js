import React, { Component } from 'react';
import AddIcon from '@atlaskit/icon/glyph/add';
import LangBtns from './LangBtns/LangBtns';
import Input from './Input/Input';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [
        {
          question: 'Write Your Question',
          type: 'text',
          options: [],
          errorMsg: 'Error!!!'
        }
      ]
    }

    this.addElement = this.addElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  addElement() {
    const defaultElement = {
      question: 'Write Your Question',
      type: 'text',
      options: [],
      errorMsg: 'Error!!!'
    };

    this.setState({
      elements: [...this.state.elements, defaultElement]
    });
  }

  removeElement(index) {
    this.setState(prevState => ({
      ...prevState,
      elements: prevState.elements.filter((elem, i) => index !== i)
    }));
  }

  render() {
    const elements = this.state.elements;

    return (
      <div className='Container'>
        <LangBtns />
        <div className='Form'>
          {elements.length > 0 && elements.map((elem, i) => 
            <Input key={i} type={elem.type} question={elem.question}
              removeElement={() => this.removeElement(i)}
            />
          )}
        </div>
        <div className='Btns'>
          <button onClick={this.addElement} className='Btn Btn-circle'><AddIcon /></button>
        </div>
      </div>
    );
  }
}

export default Form;
