import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import AddIcon from '@atlaskit/icon/glyph/add';
import LangBtns from './LangBtns/LangBtns';
import Input from './Input/Input';
import './FormBuilder.css';

class FormBuilder extends Component {
  render() {
    const elements = this.props.elements;

    return (
      <div className='Container'>
        <div className='Left'>
          <LangBtns selectedLanguage={this.props.selectedLanguage} 
            changeLanguage={this.props.onLanguageChanged}
          />
          <div className='Form'>
            {elements.length > 0 && elements.map((elem, i) => 
              <Input key={i} config={elem} elemIndex={i} />
            )}
          </div>
          <div className='Btns'>
            <button onClick={this.props.onElementAdded} className='Btn Btn-circle'><AddIcon size='large' /></button>
          </div>
        </div>
        <div className='Right'>
          <pre className='Card'>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedLanguage: state.selectedLanguage,
  elements: state.elements,
});

const mapDispatchToProps = dispatch => {
	return {
		onElementAdded: () => dispatch({ type: actionTypes.ADD_ELEMENT }),
		onLanguageChanged: (language) => dispatch({ type: actionTypes.CHANGE_LANGUAGE, language })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilder);
