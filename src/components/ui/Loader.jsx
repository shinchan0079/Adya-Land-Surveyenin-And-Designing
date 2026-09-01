import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ text = "Loading...", fullScreen = false }) => {
  const containerClasses = fullScreen 
    ? "fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50"
    : "flex flex-col items-center justify-center p-8 w-full h-full min-h-[200px]";

  const circleVariants = {
    start: {
      y: 0,
    },
    end: {
      y: -20,
    }
  };

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      }
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <div className={containerClasses}>
      <motion.div 
        className="flex gap-2 mb-4"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-[#F59E0B]"
            variants={circleVariants}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      {text && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#10263F] font-bold text-sm uppercase tracking-wider"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Loader;
