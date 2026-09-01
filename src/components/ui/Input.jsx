import React from 'react';

const Input = React.forwardRef(({ 
  label, 
  id,
  type = "text", 
  error, 
  className = "", 
  required,
  theme = "light",
  ...props 
}, ref) => {
  const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        type={type}
        required={required}
        className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
