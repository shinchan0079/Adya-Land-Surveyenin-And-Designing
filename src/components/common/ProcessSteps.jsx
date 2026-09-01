import { ChevronDown } from 'lucide-react';

const ProcessSteps = ({ steps, title = "Process", type = "horizontal", className = "" }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      
      {/* Horizontal Flow (Desktop) - Vertical on Mobile */}
      {type === 'horizontal' && (
        <div className="relative">
          {/* Desktop Horizontal line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-white/10 z-0"></div>
          {/* Mobile Vertical line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-12 w-1 bg-white/10 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center group w-full pl-8 lg:pl-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-full bg-[#10263F] border-4 border-[#F59E0B] text-[#F59E0B] flex items-center justify-center text-xl lg:text-2xl font-black mr-6 lg:mr-0 lg:mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:bg-[#F59E0B] group-hover:text-[#10263F] transition-colors relative z-10">
                  0{idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-sm lg:text-[15px] mb-1 text-white leading-snug">{step.title}</h3>
                  {step.description && (
                    <p className="text-gray-400 text-xs lg:text-xs leading-relaxed">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vertical Flow (Always Vertical) */}
      {type === 'vertical' && (
        <div className="max-w-md mx-auto flex flex-col items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-full">
              <div className="bg-[#10263F] text-white font-heading font-bold tracking-widest uppercase py-4 px-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-transparent hover:border-[#F59E0B] transition-colors text-center">
                {step.title}
              </div>
              {idx < steps.length - 1 && (
                <div className="py-3 text-[#F59E0B]">
                  <ChevronDown size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ProcessSteps;
