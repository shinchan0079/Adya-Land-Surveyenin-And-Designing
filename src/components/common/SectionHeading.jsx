import Badge from '../ui/Badge';

const SectionHeading = ({ 
  label, 
  title, 
  description, 
  align = 'center', 
  theme = 'light',
  className = ''
}) => {
  
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  const themes = {
    light: {
      label: "transparent",
      title: "text-[#10263F]",
      description: "text-gray-600"
    },
    dark: {
      label: "transparent",
      title: "text-white",
      description: "text-gray-300"
    }
  };

  const currentTheme = themes[theme] || themes.light;

  return (
    <div className={`max-w-3xl mb-6 ${alignments[align]} ${className}`}>
      {label && (
        <Badge variant={currentTheme.label} className={align === 'center' ? 'mx-auto' : ''}>
          {label}
        </Badge>
      )}
      
      {title && (
        <h2 className={`text-3xl lg:text-4xl font-heading font-bold mb-6 ${currentTheme.title}`}>
          {title}
        </h2>
      )}
      
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed font-medium ${currentTheme.description}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
