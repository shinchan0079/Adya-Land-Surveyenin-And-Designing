const Badge = ({ children, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-block text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-4";
  
  const variants = {
    primary: "bg-blue-50 text-[#10263F] border border-blue-100",
    secondary: "bg-orange-50 text-[#F59E0B] border border-orange-100",
    dark: "bg-gray-100 text-[#10263F]",
    light: "bg-white/10 text-white border border-white/20",
    transparent: "text-[#F59E0B]" // No background, just colored text
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Badge;
