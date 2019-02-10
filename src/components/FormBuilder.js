import React, { Component } from 'react';
import AddIcon from '@atlaskit/icon/glyph/add';
import LangBtns from './LangBtns/LangBtns';
import Input from './Input/Input';
import './FormBuilder.css';

const defaultElement = {
  value: '',
  type: 'text',
  placeholder: 'Write your question',
  option: {
    type: null,
    items: []
  },
  error: {
    placeholder: 'Write your error message',
    errorMessage: ''
  }
};

const defaultItem = {
  name: '', value: 'New Item', text: 'New Item'
};

class FormBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'en',
      elements: [
        {
          value: '',
          type: 'text',
          placeholder: 'Write your question',
          option: {
            type: null,
            items: [
              {
                name: '', value: 'New Item', text: 'New Item'
              }
            ]
          },
          error: {
            placeholder: 'Write your error message',
            errorMessage: ''
          }
        }
      ]
    };

    this.addElement = this.addElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.optionAddedHandler = this.optionAddedHandler.bind(this);
    this.addOptionItem = this.addOptionItem.bind(this);
    this.itemInputChangedHandler = this.itemInputChangedHandler.bind(this);
  }

  addElement() {
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

  onChangeLanguage(language) {
    this.setState({ selectedLanguage: language });
  }

  inputChangedHandler(event, elemIndex) {
    const updatedElements = [...this.state.elements];
    const updatedElement = { ...updatedElements[elemIndex] };

    updatedElement.value = event.target.value;
    updatedElements[elemIndex] = updatedElement;

    this.setState({ elements: updatedElements });
  }

  errorInputChangedHandler(event, elemIndex) {
    const updatedElements = [...this.state.elements];
    const updatedElement = { ...updatedElements[elemIndex] };

    updatedElement.error.errorMessage = event.target.value;
    updatedElements[elemIndex] = updatedElement;

    this.setState({ elements: updatedElements });
  }

  optionAddedHandler(optionType, elemIndex) {
    const updatedElements = [...this.state.elements];
    const updatedElement = { ...updatedElements[elemIndex] };

    updatedElement.option.type = optionType;
    updatedElement.option.items = [defaultItem];
    updatedElements[elemIndex] = updatedElement;

    this.setState({ elements: updatedElements });
  }

  addOptionItem(elemIndex) {
    const updatedElements = [...this.state.elements];
    const updatedElement = { ...updatedElements[elemIndex] };
    const updatedElementOptionItems = [
      ...updatedElement.option.items, defaultItem
    ];
    
    updatedElement.option.items = updatedElementOptionItems;
    updatedElements[elemIndex] = updatedElement;

    this.setState({ elements: updatedElements });
  }

  itemInputChangedHandler(event, elemIndex, itemIndex) {
    console.log(elemIndex, itemIndex);

    // const updatedElements = [...this.state.elements];
    // const updatedElement = { ...updatedElements[elemIndex] };
    // const updatedElementOptionItems = [...updatedElement.option.items];
    
    // updatedElementOptionItems[itemIndex].name = event.target.name;
    // updatedElementOptionItems[itemIndex].value = event.target.value;
    // updatedElementOptionItems[itemIndex].text = event.target.text;

    // updatedElement.option.items = updatedElementOptionItems;
    // updatedElements[elemIndex] = updatedElement;

    // this.setState({ elements: updatedElements });
  }

  render() {
    const elements = this.state.elements;

    return (
      <div className='Container'>
        <div className='Left'>
          <LangBtns selectedLanguage={this.state.selectedLanguage} 
            changeLanguage={this.onChangeLanguage}
          />
          <div className='Form'>
            {elements.length > 0 && elements.map((elem, i) => 
              <Input key={i} 
                config={elem}
                removeElement={() => this.removeElement(i)}
                changed={(e) => this.inputChangedHandler(e, i)}
                errorChanged={(e) => this.errorInputChangedHandler(e, i)}
                addOption={(e) => this.optionAddedHandler(e, i)}
                addOptionItem={() => this.addOptionItem(i)}
              />
            )}
          </div>
          <div className='Btns'>
            <button onClick={this.addElement} className='Btn Btn-circle'><AddIcon size='large' /></button>
          </div>
        </div>
        <div className='Right'>
          <pre className='Card'>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default FormBuilder;
