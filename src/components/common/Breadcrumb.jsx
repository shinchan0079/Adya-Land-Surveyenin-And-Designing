import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center text-sm font-medium ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="flex items-center">
            {isLast ? (
              <span className="text-[#F59E0B]" aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link 
                  to={item.href || '#'} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
                <ChevronRight size={14} className="mx-2 text-gray-600" />
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
