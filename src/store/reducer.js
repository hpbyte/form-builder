import * as actionTypes from './actions';

const initialState = {
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

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, defaultElement]
      };
    case actionTypes.REMOVE_ELEMENT:
      return {
        ...state,
        elements: state.elements.filter((elem, i) => action.elemIndex !== i)
      };
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.language
      };
    case actionTypes.INPUT_CHANGED: {
      const updatedElements = [...state.elements];
      const updatedElement = { ...updatedElements[action.elemIndex] };

      updatedElement.value = action.event.target.value;
      updatedElements[action.elemIndex] = updatedElement;
      return {
        ...state,
        elements: updatedElements
      };
    }      
    case actionTypes.ERROR_INPUT_CHANGED: {
      const updatedElements = [...state.elements];
      const updatedElement = { ...updatedElements[action.elemIndex] };

      updatedElement.error.errorMessage = action.event.target.value;
      updatedElements[action.elemIndex] = updatedElement;
      return {
        ...state,
        elements: updatedElements
      };
    }      
    case actionTypes.ADD_OPTION: {
      const updatedElements = [...state.elements];
      const updatedElement = { ...updatedElements[action.elemIndex] };

      updatedElement.option.type = action.optionType;
      updatedElement.option.items = [defaultItem];
      updatedElements[action.elemIndex] = updatedElement;
      return {
        ...state,
        elements: updatedElements
      };
    }      
    case actionTypes.ADD_OPTION_ITEM: {
      const updatedElements = [...state.elements];
      const updatedElement = { ...updatedElements[action.elemIndex] };
      const updatedElementOptionItems = [
        ...updatedElement.option.items, defaultItem
      ];
      
      updatedElement.option.items = updatedElementOptionItems;
      updatedElements[action.elemIndex] = updatedElement;
      return {
        ...state,
        elements: updatedElements
      };
    }
    case actionTypes.ITEM_INPUT_CHANGED: {
      const updatedElements = [...state.elements];
      const updatedElement = { ...updatedElements[action.elemIndex] };
      const updatedElementOptionItems = [...updatedElement.option.items];
      
      updatedElementOptionItems[action.itemIndex] = action.event.target.value;
      updatedElement.option.items = updatedElementOptionItems;
      updatedElements[action.elemIndex] = updatedElement;
      return {
        ...state,
        elements: updatedElements
      };
    }  
    default:
      return {
        ...state
      };
  }
}

export default reducer;
