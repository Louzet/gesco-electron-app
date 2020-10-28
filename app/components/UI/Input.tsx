import React, { FC, InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  value: string | number;
  name: string;
}

const Input: FC<InputProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  name,
  required,
  onChange,
}) => {
  return (
    <div className="field">
      <div className="control">
        <label htmlFor={name}>{label}</label>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          required={required}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  required: false,
};

export default Input;
