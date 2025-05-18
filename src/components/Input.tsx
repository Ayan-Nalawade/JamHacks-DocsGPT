import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  className = '',
  required = false,
  disabled = false,
  error
}) => {
  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`input-field ${error ? 'error' : ''}`}
        required={required}
        disabled={disabled}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input; 