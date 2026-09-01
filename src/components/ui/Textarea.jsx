import React from 'react';

const Textarea = React.forwardRef(({ 
  label, 
  id,
  rows = 4, 
  error, 
  className = "", 
  required,
  theme = "light",
  ...props 
}, ref) => {
  const textareaId = id || `textarea-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={textareaId} className={`block text-sm font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        required={required}
        className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors resize-y`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
export default Textarea;
