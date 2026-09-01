import React from 'react';
import { Compass } from 'lucide-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#10263F] flex flex-col items-center justify-center">
      {/* Central Animation Container */}
      <div className="relative flex flex-col items-center">
        
        {/* Pulsing Outer Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#F59E0B]/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#F59E0B]/10 rounded-full animate-[spin_4s_linear_infinite]"></div>
        
        {/* Icon */}
        <div className="relative z-10 w-16 h-16 bg-[#10263F] border-2 border-[#F59E0B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
          <Compass className="text-[#F59E0B] animate-[spin_3s_linear_infinite]" size={32} />
        </div>
        
        {/* Text */}
        <div className="text-center">
          <h2 className="text-white font-heading font-black text-2xl tracking-widest uppercase mb-2">
            ADYA
          </h2>
          <div className="text-[#F59E0B] text-xs font-bold tracking-[0.3em] uppercase">
            Loading...
          </div>
        </div>

        {/* Progress Bar (Decorative) */}
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#F59E0B] rounded-full w-full animate-[progress_1.5s_ease-in-out_infinite]"></div>
        </div>

      </div>

      <style jsx>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
