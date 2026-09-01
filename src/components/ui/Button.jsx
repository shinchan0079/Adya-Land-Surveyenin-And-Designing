import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', onClick, type = 'button', ...props }) => {
  const baseClasses = "group inline-flex items-center justify-center px-6 py-2.5 text-base font-bold rounded-xl transition-all duration-300 ";
  
  const variants = {
    primary: "bg-[#F59E0B] text-white hover:bg-orange-600 hover:-translate-y-1",
    secondary: "bg-[#10263F] text-white hover:bg-blue-900 hover:-translate-y-1",
    outline: "bg-transparent text-[#10263F] border-2 border-[#10263F] hover:bg-[#10263F] hover:text-white hover:-translate-y-1",
    light: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#10263F] hover:-translate-y-1",
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    // If it's an external link
    if (to.startsWith('http') || to.startsWith('mailto') || to.startsWith('tel')) {
      return (
        <a href={to} className={classes} {...props}>
          {children}
        </a>
      );
    }
    
    // Internal link
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
