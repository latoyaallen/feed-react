import React from 'react';
import styles from './Button.module.css';

const Button = ({onClick, children}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles['button-wrapper']}
    >
    {children}
    </button>
  );
}

export default Button;
