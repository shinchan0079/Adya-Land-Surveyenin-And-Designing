import React from 'react';

const Select = React.forwardRef(({ 
  label, 
  id,
  options = [], 
  error, 
  className = "", 
  required,
  placeholder = "Select an option",
  theme = "light",
  ...props 
}, ref) => {
  const selectId = id || `select-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={selectId} className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        required={required}
        className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors appearance-none`}
        {...props}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value || opt.label || opt}>{opt.label || opt}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
