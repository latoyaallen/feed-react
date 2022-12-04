import styles from './InputField.module.css';
import React from 'react';

const InputField = ({value, onChange, placeholder }) => {
  return (
    <div className={styles['input-field-container']}>
      <input
      value={value}
      onChange={onChange}
      type="text"
      className={styles['input-field']}
      placeholder={placeholder}
    />
      </div>
  );
}

export default InputField;

/*
  https://stackoverflow.com/questions/65409862/how-to-create-a-reusable-input-field-using-react
  */
