import styles from './InputField.module.css';
import React from 'react';

const InputField = ({value, onChange, labelAboveField }) => {
  return (
    <div>
      {labelAboveField}
      <input
          value={value}
          onChange={onChange}
          type="text"
          className={styles['wrapper']}
        />
    </div>
  );
}

export default InputField;

/*
  https://stackoverflow.com/questions/65409862/how-to-create-a-reusable-input-field-using-react
*/
