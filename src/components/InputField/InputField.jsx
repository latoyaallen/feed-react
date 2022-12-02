import React from 'react';

const InputField = ({value, onChange, placeholderText}) => {
  console.log
  return (
    <div>
      <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder={placeholderText}
          className="input"
        />
    </div>
  );
}

export default InputField;

/*
  https://stackoverflow.com/questions/65409862/how-to-create-a-reusable-input-field-using-react
*/
