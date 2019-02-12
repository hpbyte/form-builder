import React from 'react';
import Select from '@atlaskit/select';
import Button from '@atlaskit/button';
import InlineEdit, { SingleLineTextInput } from '@atlaskit/inline-edit';

import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';

const select = ({ items, elemId, inputChanged, removeItem }) => (
  <div className='Select'>
    <Select
      className="single-select"
      classNamePrefix="react-select"
      options={items.map(item => ({ label: item.text, value: item.value }))}
      placeholder="Select"
    />
    <div className='SelItems'>
      {items.map(item => (
        <div className='SelItem'>
          <div className='InlineEdit'>
            <InlineEdit
              editView={
                <SingleLineTextInput
                  isEditing
                  isInitiallySelected
                  value={item.value}
                  onChange={(e) => inputChanged(e, elemId, item.id)}
                />
              }
              readView={<SingleLineTextInput isEditing={false} value={item.value} />}
            />
          </div>
          <Button
            appearance='subtle-link' 
            className='DelItem' 
            iconBefore={<EditorErrorIcon />} 
            onClick={() => removeItem(elemId, item.id)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default select;
