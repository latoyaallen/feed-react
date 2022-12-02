import React from 'react';
import Button from '../Button';
import InputField from '../InputField';

const Form = () => {
  return (
    <div>
    <InputField
      value=""
      onChange=""
      placeholder="placeholder"
    />
    <InputField
      value=""
      onChange=""
      placeholder="placeholder"
    />
      <Button>
        Another Button
      </Button>
    </div>
  );
}

export default Form;
