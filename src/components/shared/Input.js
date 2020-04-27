import PropTypes from 'prop-types';
import React from 'react';

function Input(props) {
  const { type, value, onChange, className, placeholder } = props;

  return (
    <input
      className={`form-input ${className ? className : ''}`}
      type={type ? type : 'text'}
      value={value && value}
      onChange={onChange}
      placeholder={placeholder ? placeholder : ''}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
