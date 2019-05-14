import React from 'react';
import './Form.css';

const Form = ({value, onChange}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default Form;